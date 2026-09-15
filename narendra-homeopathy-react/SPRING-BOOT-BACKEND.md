# Spring Boot Backend

The React frontend can use the Spring Boot backend in `spring-backend/`.

## Technology

- Java 17+
- Spring Boot 3.4
- Spring Web
- Spring Data JPA
- PostgreSQL JDBC driver
- Spring Validation
- Spring Mail
- Maven

## Backend Location

```text
narendra-homeopathy-react/spring-backend/
```

## PostgreSQL Configuration

Spring Boot does not read `.env` files automatically. You can either set environment variables in PowerShell or edit `src/main/resources/application.properties`.

For a PowerShell session using local PostgreSQL:

```powershell
$env:DATABASE_URL = "jdbc:postgresql://127.0.0.1:5432/narendra_homeopathy"
$env:DATABASE_USER = "postgres"
$env:DATABASE_PASSWORD = "your_postgres_password"
```

For a hosted PostgreSQL provider, set its JDBC URL and credentials:

```powershell
$env:DATABASE_URL = "jdbc:postgresql://host:5432/narendra_homeopathy?sslmode=require"
$env:DATABASE_USER = "username"
$env:DATABASE_PASSWORD = "password"
```

Do not commit passwords or private connection strings.

## Data Storage

Spring Data JPA stores form data in PostgreSQL:

```text
Database: narendra_homeopathy
Table: appointments
Table: contacts
```

Appointment fields:

```text
name
email
phone
appointmentDate
comments
createdAt
```

Contact fields:

```text
name
email
comments
createdAt
```

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | Checks API and PostgreSQL status |
| `POST` | `/api/appointments` | Saves an appointment |
| `POST` | `/api/contact` | Saves a contact message |
| `POST` | `/appoinment.php` | Frontend compatibility route |
| `POST` | `/mail.php` | Frontend compatibility route |

The React frontend already sends requests to `http://localhost:4000` by default.

## Run the Backend

Install Java 17 or newer and Maven. Confirm them:

```powershell
java --version
mvn --version
```

Start Spring Boot:

```powershell
cd "C:\Users\Onkar Swami\Desktop\react2\narendra-homeopathy-react\spring-backend"
mvn spring-boot:run
```

The API runs at:

```text
http://localhost:4000
```

## Check PostgreSQL Connection

With Spring Boot running:

```powershell
Invoke-RestMethod http://localhost:4000/api/health
```

Successful PostgreSQL connection:

```json
{
  "ok": true,
  "databaseConfigured": true,
  "databaseConnected": true
}
```

If `databaseConnected` is `false`, check that PostgreSQL is installed, running, that the database exists, and that `DATABASE_URL`, `DATABASE_USER`, and `DATABASE_PASSWORD` are correct.

## Run the Frontend

In a second terminal:

```powershell
cd "C:\Users\Onkar Swami\Desktop\react2\narendra-homeopathy-react"
npm run dev
```

Open the URL shown by Vite, usually:

```text
http://127.0.0.1:5173/
```

If port 5173 is occupied, Vite may use port 5174. Spring CORS already allows both ports.

## Email Configuration

Email is optional. To enable SMTP notifications, set these values in the environment used by Spring Boot:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-user@example.com
SMTP_PASSWORD=your-password
SMTP_AUTH=true
SMTP_STARTTLS=true
MAIL_FROM=your-user@example.com
MAIL_TO=enquiry@narendrahomeopathy.com
```

The forms still save to PostgreSQL even when SMTP is not configured. The API response reports whether email delivery was attempted with the `mailed` property.

## Code Structure

```text
spring-backend/
├── pom.xml
├── .env.example
└── src/main/
    ├── java/com/narendra/homeopathy/
    │   ├── NarendraHomeopathyApplication.java
    │   ├── config/CorsConfig.java
    │   ├── controller/ApiController.java
    │   ├── controller/ApiExceptionHandler.java
    │   ├── model/Appointment.java
    │   ├── model/ContactMessage.java
    │   ├── repository/AppointmentRepository.java
    │   ├── repository/ContactMessageRepository.java
    │   └── service/MailService.java
    └── resources/application.properties
```

## Important Note

The existing Node backend remains in `server/`, but Spring Boot is the replacement backend described here. Do not run both backends on port 4000 at the same time. Stop the Node server before starting Spring Boot:

```text
Ctrl + C
```
