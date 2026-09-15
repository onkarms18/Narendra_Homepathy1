import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

const app = express();
const port = Number(process.env.PORT || 4000);
const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://127.0.0.1:5173';

app.use(cors({ origin: frontendOrigin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoClient = process.env.MONGODB_URI ? new MongoClient(process.env.MONGODB_URI) : null;
let mongoDatabase = null;

const mailer = process.env.SMTP_HOST
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    })
  : null;

function requireFields(fields, body) {
  return fields.filter((field) => !String(body[field] || '').trim());
}

async function sendMail({ subject, text, replyTo }) {
  if (!mailer || !process.env.MAIL_TO) return false;
  await mailer.sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: process.env.MAIL_TO,
    replyTo,
    subject,
    text,
  });
  return true;
}

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, databaseConfigured: Boolean(mongoClient), databaseConnected: Boolean(mongoDatabase), mailConfigured: Boolean(mailer) });
});

app.post(['/api/appointments', '/appoinment.php'], async (request, response) => {
  const { name, email = '', phone, adate, comments = '' } = request.body;
  const missing = requireFields(['name', 'phone', 'adate'], request.body);
  if (missing.length) return response.status(400).json({ success: false, message: `Missing fields: ${missing.join(', ')}` });
  if (!/^\d{10}$/.test(phone)) return response.status(400).json({ success: false, message: 'Phone number must contain 10 digits.' });

  try {
    const appointment = { name: name.trim(), email: email.trim(), phone: phone.trim(), appointmentDate: adate, comments: comments.trim(), createdAt: new Date() };
    if (mongoDatabase) await mongoDatabase.collection('appointments').insertOne(appointment);
    const mailed = await sendMail({
      subject: `Appointment Request by ${name.trim()}`,
      replyTo: email.trim() || undefined,
      text: `${name.trim()} requested an appointment.\nPhone: ${phone.trim()}\nDate: ${adate}\nSymptoms: ${comments.trim()}`,
    });
    response.status(201).json({ success: true, message: 'Thank you. We will contact you shortly.', stored: Boolean(mongoDatabase), mailed });
  } catch (error) {
    console.error('Appointment request failed:', error);
    response.status(500).json({ success: false, message: 'Unable to process the appointment request.' });
  }
});

app.post(['/api/contact', '/mail.php'], async (request, response) => {
  const { name, email, comments = '' } = request.body;
  const missing = requireFields(['name', 'email'], request.body);
  if (missing.length) return response.status(400).json({ success: false, message: `Missing fields: ${missing.join(', ')}` });

  try {
    if (mongoDatabase) await mongoDatabase.collection('contacts').insertOne({ name: name.trim(), email: email.trim(), comments: comments.trim(), createdAt: new Date() });
    const mailed = await sendMail({
      subject: `Contact request from ${name.trim()}`,
      replyTo: email.trim(),
      text: comments.trim(),
    });
    response.status(201).json({ success: true, message: 'Your message was submitted successfully.', mailed });
  } catch (error) {
    console.error('Contact request failed:', error);
    response.status(500).json({ success: false, message: 'Unable to send the contact request.' });
  }
});

async function start() {
  if (mongoClient) {
    try {
      await mongoClient.connect();
      mongoDatabase = mongoClient.db(process.env.MONGODB_DB || 'narendra_homeopathy');
      console.log(`Connected to MongoDB database: ${mongoDatabase.databaseName}`);
    } catch (error) {
      console.error('MongoDB connection failed:', error.message);
    }
  }
  app.listen(port, () => console.log(`Narendra Homeopathy API running at http://localhost:${port}`));
}

start();
