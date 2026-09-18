# Narendra Homeopathy React: Code Guide

This document explains how the React project is organized and how the main code paths work. For installation and basic commands, see [README.md](README.md).

## 1. Application Overview

The application is a React frontend converted from the original Narendra Classical Homeopathic Clinic PHP website.

The React application is responsible for:

- Rendering the website pages in the browser
- Providing client-side navigation with React Router
- Reusing the original layout, CSS classes, Bootstrap grid, colors, fonts, and images
- Displaying the clinic information, disease sections, articles, blogs, contact details, and map
- Collecting appointment and contact form data
- Sending form data to the Node/Express backend with Axios

The project includes a Node/Express backend in `server/`. It handles:

- MongoDB access through the official MongoDB driver
- Email sending
- Appointment database insertion
- Appointment and contact validation

The original PHP project remains separate and is still responsible for:

- PHP page/server processing
- CAPTCHA/session processing
- CMS data such as dynamic banners, blogs, news, and gallery content

The React project does not modify the PHP project.

## 2. Runtime Flow

The application starts through the following sequence:

```text
index.html
    |
    v
src/main.jsx
    |
    v
src/App.jsx
    |
    +--> Navbar
    |
    +--> AppRouter
    |       |
    |       +--> Current page component
    |
    +--> Footer
    |
    +--> Appointment modal when opened
```

### Entry point

`src/main.jsx` finds the `<div id="root">` element from `index.html` and mounts the React application:

```jsx
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`React.StrictMode` helps identify unsafe or unintended behavior during development.

## 3. Root Application

### `src/App.jsx`

`App.jsx` is the top-level composition component.

Responsibilities:

- Creates the `BrowserRouter` context
- Stores whether the appointment form is open
- Renders the shared `Navbar`
- Renders `AppRouter`
- Renders the shared `Footer`
- Displays the appointment form modal when requested

Important state:

```jsx
const [appointmentOpen, setAppointmentOpen] = useState(false);
```

The appointment callback is passed into the Navbar and Home page:

```jsx
onAppointment={() => setAppointmentOpen(true)}
```

This means the Navbar appointment button and Home page appointment card open the same reusable form.

## 4. Routing

### `src/router/AppRouter.jsx`

This file defines the URL-to-component mapping.

| URL | Component | Description |
| --- | --- | --- |
| `/` | `Home` | Main clinic homepage |
| `/about` | `About` | Clinic information |
| `/doctor` | `Doctor` | Doctor profile |
| `/acute` | `AcuteDisease` | Acute diseases |
| `/chronic` | `ChronicDisease` | Chronic diseases |
| `/blogs` | `Blogs` | Blog cards |
| `/articles` | `Articles` | Article cards |
| `/contact` | `Contact` | Contact details, map, and form |
| `/appointment` | `AppointmentForm` | Appointment form page |
| `/why-homeopathy` | `SiteInfo` | Why Homeopathy content |
| `/other` | `SiteInfo` | Activities content |
| `/news` | `SiteInfo` | News content |
| `/gallery` | `SiteInfo` | Gallery content |

The router uses browser history through `BrowserRouter`. Links should use React Router's `Link` component instead of normal internal `<a>` links whenever possible.

Example:

```jsx
<Link to="/about">About Us</Link>
```

External websites should continue to use normal anchors:

```jsx
<a href="https://www.google.com" target="_blank" rel="noreferrer">
  Google
</a>
```

The wildcard route sends unknown URLs to the Home page.

## 5. Shared Layout Components

### `src/components/Navbar/Navbar.jsx`

The Navbar preserves the PHP navigation structure.

It contains:

- Social media links
- Clinic logo
- Telephone numbers
- Appointment button
- Responsive Bootstrap menu toggle
- About links
- Treatment dropdown
- Activities dropdown
- Media dropdown

The appointment action is received as a prop:

```jsx
export default function Navbar({ onAppointment })
```

The button invokes the callback supplied by `App.jsx`.

The small helper components inside the file are:

- `NavItem`: renders a normal navigation item
- `Dropdown`: renders a menu with child links

### `src/components/Footer/Footer.jsx`

The Footer is rendered globally by `App.jsx`, so it appears on every route.

It contains:

- Clinic description
- Social links
- Quick links
- Service links
- Telephone information
- Email address
- Clinic address
- WhatsApp floating action
- Copyright information

The `Social` helper renders the social icon links used in the footer.

### `src/components/Hero/Hero.jsx`

The Hero component is used on inner pages such as About, Doctor, Acute Disease, Chronic Disease, Blogs, Articles, and Contact.

It receives a title:

```jsx
<Hero title="About Us" />
```

It renders:

- Page title
- Home link
- Current page title
- Existing `login-bg` and `dentist-banner` CSS hooks

## 6. Home Page Code

### `src/pages/Home.jsx`

The Home page contains the main clinic landing content.

Sections:

1. `Slider`
2. Three information cards
3. About clinic section
4. Chronic disease section
5. Reusable disease cards

The disease list is stored as data:

```jsx
const chronic = [
  ['repo.jpg', 'Respiratory Disorders:', '...'],
  ['digestive.jpg', 'Digestive Disorders:', '...']
];
```

The list is rendered with `.map()`:

```jsx
{chronic.map(([image, title, text]) => (
  <DiseaseCard image={image} title={title} key={title}>
    <p>{text}</p>
  </DiseaseCard>
))}
```

### `InfoCard`

`InfoCard` is a local reusable component in `Home.jsx`.

It supports two modes:

- External link mode for WhatsApp and Google Maps
- Button mode for opening the appointment form

The appointment card receives `onAppointment` from `App.jsx`.

## 7. Home Slider

### `src/components/Hero/Slider.jsx`

The Slider component replaces the original PHP slideshow script.

It uses React state:

```jsx
const [index, setIndex] = useState(0);
```

The slide changes automatically using `useEffect`:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    setIndex((value) => (value + 1) % slides.length);
  }, 8000);

  return () => clearInterval(timer);
}, []);
```

The cleanup function prevents the timer from continuing after the component is removed.

The slider supports:

- Automatic rotation every eight seconds
- Previous button
- Next button
- Dot indicators
- Original banner images from `public/images/`

The banner data is currently local because the original PHP banner query depended on MySQL.

## 8. Page Components

### `src/pages/About.jsx`

Renders:

- About page hero
- Clinic image
- Clinic history and mission
- Counter section

### `src/pages/Doctor.jsx`

Renders:

- Doctor page hero
- Dr. S.M. Gaikwad image
- Professional background
- Education and experience
- Counter section

### `src/pages/AcuteDisease.jsx`

Renders:

- Acute disease hero
- Introductory homeopathy text
- Five acute disease cards

The disease data is stored locally in an array and rendered with `DiseaseCard`.

### `src/pages/ChronicDisease.jsx`

Renders:

- Chronic disease hero
- Introductory text
- Ten chronic disease categories
- Disease images and descriptions

### `src/pages/Blogs.jsx`

Renders:

- Blogs hero
- Blog heading
- External challenging cases article
- Local homeopathy blog card

The original PHP version loaded additional blog content from MySQL. The React version currently uses local content until a backend API is connected.

### `src/pages/Articles.jsx`

Renders two article cards:

- Baby fever article
- Vaccine article

The original image names are preserved.

### `src/pages/Contact.jsx`

Renders:

- Contact hero
- Clinic address
- Telephone numbers
- Email address
- Google Map iframe
- Contact form

The Google Map is embedded using the same map URL as the original PHP page.

### `src/pages/SiteInfo.jsx`

This is a small shared page used by the remaining navigation destinations:

- Why Homeopathy
- Activities
- News
- Gallery

It receives `title` and `text` props:

```jsx
<SiteInfo
  title="Why Homeopathy?"
  text="Homeopathy is a natural and gentle form of treatment..."
/>
```

## 9. Reusable Content Components

### `src/components/DiseaseCard/DiseaseCard.jsx`

Props:

- `image`: image filename from `public/images/`
- `title`: card heading
- `children`: card description content

Example:

```jsx
<DiseaseCard image="cold.jpg" title="Cold and Flu:">
  <p>Homeopathic treatment information.</p>
</DiseaseCard>
```

The component keeps the original CSS classes:

- `service-img`
- `service-inf`
- Bootstrap grid classes

### `src/components/BlogCard/BlogCard.jsx`

Props:

- `image`
- `title`
- `excerpt`
- `href`

It preserves the original blog layout and uses the existing classes:

- `blog-card`
- `blog-img`
- `blog-details`
- `blog-btn`

### `src/components/Counter/Counter.jsx`

The Counter component renders four statistics:

- Expert Doctors
- Years of Experience
- Issues Resolved
- Awards Received

The `compact` prop changes the labels to match the Doctor page wording:

```jsx
<Counter compact />
```

## 10. Appointment Form

### `src/components/AppointmentForm/AppointmentForm.jsx`

The appointment form uses local React state:

```jsx
const [form, setForm] = useState({
  name: '',
  email: '',
  phone: '',
  adate: '',
  comments: ''
});
```

The `update` function updates a field based on its `name` attribute:

```jsx
const update = (event) => {
  setForm({ ...form, [event.target.name]: event.target.value });
};
```

The form performs browser validation for:

- Required patient name
- Required phone number
- Ten-digit phone pattern
- Required appointment date

On submit, it calls:

```jsx
submitForm('/appoinment.php', form)
```

The endpoint is resolved through the Axios client in `src/services/api.js`.

The form displays a status message while sending and after success or failure.

### Appointment modal usage

The Navbar and Home page open the form through state in `App.jsx`.

### Appointment route usage

The same component can also be accessed directly at:

```text
/appointment
```

## 11. Contact Form

### `src/components/ContactForm/ContactForm.jsx`

The contact form uses `FormData` to collect input values:

```jsx
const data = Object.fromEntries(new FormData(event.currentTarget));
```

It sends the payload to:

```jsx
submitForm('/mail.php', data)
```

The form includes:

- Name
- Email
- Message
- Required browser validation
- Submission status

## 12. Axios API Service

### `src/services/api.js`

The shared Axios client is configured with:

```jsx
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || ''
});
```

The helper function is:

```jsx
export const submitForm = (endpoint, payload) => {
  return api.post(endpoint, payload);
};
```

This keeps endpoint configuration in one place. Components should call `submitForm()` rather than creating separate Axios clients.

### API URL configuration

Create `.env.local` in the project root:

```env
VITE_API_URL=http://localhost/Narendra_homepathy/public_html
```

The exact value depends on the local Apache or PHP server configuration.

After changing `.env.local`, restart Vite.

## 13. Static Asset Rules

Static assets are served from the `public` directory.

Use this path for JSX images:

```jsx
<img src="/images/logo 3.jpg" alt="Clinic logo" />
```

Important directories:

- `public/images/`: preferred image directory for JSX
- `public/img/`: compatibility copy for original CSS relative URLs
- `public/style.css`: copied original stylesheet
- `public/bootstrap.min.css`: Bootstrap stylesheet

The image names contain spaces and mixed capitalization. Preserve the exact filename when referencing them.

Examples:

```jsx
<img src="/images/Dr Sandip 3.jpg" alt="" />
<img src="/images/logo 3.jpg" alt="" />
```

## 14. Styling Rules

The application intentionally uses the existing CSS instead of introducing a new design system.

Existing classes used by the React pages include:

- `container`
- `row`
- `col-lg-*`
- `service-img`
- `service-inf`
- `about-img`
- `blog-card`
- `blog-details`
- `footer-bg`
- `counter-bg`
- `login-bg`
- `btn-1`

When adding content, prefer the existing classes and Bootstrap grid utilities. Do not rename CSS classes without updating all affected components.

Inline styles are used only where the original PHP markup already used inline styles or where a small dynamic value is required.

## 15. PHP-to-React Conversion Mapping

| Original PHP | React replacement |
| --- | --- |
| `head.php` | `index.html`, imported global CSS, and root application |
| `nav.php` | `src/components/Navbar/Navbar.jsx` |
| `footer.php` | `src/components/Footer/Footer.jsx` |
| `index.php` | `src/pages/Home.jsx` |
| `about.php` | `src/pages/About.jsx` |
| `about_gaikawad.php` | `src/pages/Doctor.jsx` |
| `acute.php` | `src/pages/AcuteDisease.jsx` |
| `chronic.php` | `src/pages/ChronicDisease.jsx` |
| `blogs.php` | `src/pages/Blogs.jsx` |
| `articles.php` | `src/pages/Articles.jsx` |
| `contact.php` | `src/pages/Contact.jsx` |
| `appoinment.php` form UI | `src/components/AppointmentForm/AppointmentForm.jsx` |
| PHP include behavior | React component imports and composition |
| PHP page links | React Router `Link` components |
| PHP form POST | Axios POST through `src/services/api.js` |
| PHP/MySQL dynamic content | Local React data until API endpoints are connected |

## 16. Current Functional Limitations

The frontend structure is complete, but some original PHP functionality requires backend APIs to be fully equivalent.

### Dynamic CMS content

The PHP project loads some content from MySQL tables, including:

- Banner records
- Blog records
- News records
- Gallery records
- CMS page records

The React pages currently use local arrays or static content for these sections. To make them dynamic, create API endpoints in PHP and load them with Axios in React.

### CAPTCHA

The original PHP appointment process uses a PHP session CAPTCHA. The current React form does not generate or validate that CAPTCHA in the browser. CAPTCHA validation should remain server-side or be implemented through a dedicated API endpoint.

### Form response format

The legacy PHP endpoints may return HTML or JavaScript redirect responses. A production API integration should ideally return JSON, for example:

```json
{
  "success": true,
  "message": "Thank you. We will contact you shortly."
}
```

The React forms can then display the returned JSON message directly.

### CORS

If Vite and PHP run on different origins, PHP must allow the frontend origin using appropriate CORS headers. Do not use permissive CORS settings in production without understanding the security impact.

## 17. Adding an API-backed Page

A recommended pattern is:

```jsx
import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function ExamplePage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/api/items.php')
      .then((response) => setItems(response.data))
      .catch(() => setError('Unable to load items.'));
  }, []);

  if (error) return <p>{error}</p>;

  return items.map((item) => (
    <div key={item.id}>{item.title}</div>
  ));
}
```

For larger pages, add loading and empty states while preserving the existing page layout.

## 18. Development Checklist

Before considering a change complete:

1. Confirm the change is inside `narendra-homeopathy-react/`.
2. Do not edit files in `Narendra_homepathy/public_html/` unless explicitly requested.
3. Preserve existing image names and CSS classes.
4. Use `Link` for internal navigation.
5. Use `target="_blank"` with `rel="noreferrer"` for external links.
6. Keep repeated layouts in reusable components.
7. Check mobile behavior using a narrow browser viewport.
8. Test the affected route manually.
9. Run `npm run build`.
10. Check the browser console for errors.

## 19. Useful Commands

Install packages:

```powershell
npm install
```

Start development server:

```powershell
npm run dev
```

Start on another port:

```powershell
npm run dev -- --port 5174
```

Build production files:

```powershell
npm run build
```

Preview the production build:

```powershell
npm run preview
```

## 20. Deployment Notes

Run the build command:

```powershell
npm run build
```

Deploy the contents of `dist/` to a static web server.

The server must support SPA fallback so browser navigation to routes such as `/about`, `/doctor`, and `/contact` serves `index.html` rather than a server 404.

Also verify:

- `/images/` assets are deployed
- `style.css` and Bootstrap are deployed
- PHP API URLs are configured correctly
- CORS is configured if frontend and backend origins differ
- HTTPS is used for production form submissions
- PHP email and database configuration is working

## 21. Verification

The project can be verified with:

```powershell
npm run build
```

A successful build confirms that:

- React files compile
- Imports resolve
- Router components are valid
- JSX syntax is valid
- Vite can generate the production bundle

Manual browser checks should cover:

- Home page loading
- Navbar links
- Mobile navigation toggle
- Slider controls
- Appointment form opening and validation
- About, Doctor, Acute, and Chronic routes
- Blogs and Articles routes
- Contact map and form
- Footer links
- Image loading
