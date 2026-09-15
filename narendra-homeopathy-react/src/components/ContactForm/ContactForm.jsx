import { useState } from 'react';
import { submitForm } from '../../services/api';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const handleSubmit = async (event) => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); setStatus('Sending...'); try { await submitForm('/mail.php', data); setStatus('Your message submit successfully!'); } catch { setStatus('Unable to send right now. Please call us directly.'); } };
  return <form className="contact-form" onSubmit={handleSubmit}><div className="form-floating mt-4"><input name="name" type="text" className="form-control" placeholder="Your Name*" required /><label>Your Name</label></div><div className="form-floating mt-4"><input name="email" type="email" className="form-control" placeholder="Your Email*" required /><label>Email address</label></div><div className="form-floating mt-4"><textarea name="comments" className="form-control" placeholder="Your message..." style={{ height: 150 }} /><label>Your message</label></div><button type="submit" className="btn btn-1 px-5 py-3 mt-5">Send message</button>{status && <h3 className="text-success pt-5">{status}</h3>}</form>;
}
