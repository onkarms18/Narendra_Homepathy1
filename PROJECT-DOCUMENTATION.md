# Narendra Classical Homeopathic Center

## Project Documentation

This project is the frontend for the Narendra Classical Homeopathic Center website. It is a single-page React application built with Vite, React Router, Tailwind CSS, and Axios.

The frontend provides clinic information, doctor information, disease education, articles, blogs, contact details, appointment requests, and links to external services such as WhatsApp, social media, and Google Maps.

## 1. Technology Stack

- **React**: Component-based UI development.
- **Vite**: Development server and production bundler.
- **React Router**: Client-side navigation without full-page reloads.
- **Tailwind CSS**: Utility-first styling and responsive layouts.
- **Axios**: HTTP requests for contact and appointment submissions.
- **Font Awesome**: Social, navigation, phone, location, and service icons.
- **Browser APIs**: Smooth scrolling, modal keyboard handling, and external links.

## 2. Running the Project

### Requirements

Install the following tools:

- Node.js 18 or newer
- npm 9 or newer
- A modern browser such as Chrome, Edge, or Firefox

Check the installed versions:

```bash
node --version
npm --version
```

### Install dependencies

From the project directory:

```bash
cd narendra-homeopathy-react
npm install
```

### Start development mode

```bash
npm run dev
```

Vite normally starts at:

```text
http://127.0.0.1:5173/
```

If that port is busy, Vite automatically selects another available port.

To expose the development server to other devices on the local network:

```bash
npm run dev -- --host 0.0.0.0
```

### Create a production build

```bash
npm run build
```

The optimized files are generated in `dist/`.

To preview the production build locally:

```bash
npm run preview
```

## 3. Application Structure

```text
narendra-homeopathy-react/
├── public/
│   ├── images/                  # Main clinic, doctor, banner, disease, and blog assets
│   └── img/                     # Additional legacy assets
├── src/
│   ├── components/
│   │   ├── AppointmentForm/     # Appointment modal and form submission
│   │   ├── BlogCard/            # Reusable blog card
│   │   ├── ContactForm/         # Contact form and submission status
│   │   ├── Counter/             # Statistics strip
│   │   ├── DiseaseCard/         # Reusable disease information card
│   │   ├── Footer/              # Footer, quick links, contact details, WhatsApp button
│   │   ├── Hero/                # Inner-page hero and home-page slider
│   │   ├── Navbar/              # Header, navigation, dropdowns, and appointment action
│   │   └── ScrollToTop/         # Scrolls to the top after route changes
│   ├── pages/                   # Route-level page components
│   ├── router/                  # React Router route definitions
│   ├── services/                # Axios API client
│   ├── App.jsx                  # Application shell and global appointment modal state
│   ├── index.css                # Tailwind directives and shared component styles
│   └── main.jsx                 # React application entry point
├── index.html                   # Vite HTML entry point
├── package.json                 # Scripts and dependencies
├── package-lock.json            # Locked dependency versions
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind content paths and theme values
├── vite.config.js               # Vite configuration
└── PROJECT-DOCUMENTATION.md     # This guide
```

## 4. Application Startup Flow

1. `index.html` provides the root `<div id="root">` element.
2. `src/main.jsx` creates the React root and renders `App` inside `React.StrictMode`.
3. `src/App.jsx` creates the `BrowserRouter` and renders the shared application shell.
4. `ScrollToTop` listens for route changes and smoothly scrolls to the top.
5. `Navbar` renders the global header and navigation.
6. `AppRouter` selects the page component for the current URL.
7. `Footer` renders after the active page.
8. `AppointmentForm` is rendered as a global modal when appointment state is open.

## 5. Routes and Pages

| URL | Component | Purpose |
| --- | --- | --- |
| `/` | `Home.jsx` | Slider, action cards, clinic introduction, and chronic disease overview |
| `/about` | `About.jsx` | Clinic history, philosophy, image, and consultation CTA |
| `/doctor` | `Doctor.jsx` | Dr. S. M. Gaikwad profile and experience |
| `/acute` | `AcuteDisease.jsx` | Acute disease information and treatment cards |
| `/chronic` | `ChronicDisease.jsx` | Chronic disease information and treatment cards |
| `/blogs` | `Blogs.jsx` | Blog content cards |
| `/articles` | `Articles.jsx` | Homeopathy article cards |
| `/contact` | `Contact.jsx` | Address, telephone numbers, email, map, and contact form |
| `/appointment` | `AppointmentForm.jsx` | Appointment form route |
| `/why-homeopathy` | `SiteInfo.jsx` | General information about homeopathy |
| `/other` | `SiteInfo.jsx` | Clinic activities such as camps and workshops |
| `/news` | `SiteInfo.jsx` | Clinic news information |
| `/gallery` | `SiteInfo.jsx` | Gallery information |

Unknown URLs currently fall back to the home page.

## 6. Main Features

### Responsive navigation

`Navbar.jsx` provides:

- Clinic logo and contact numbers.
- Social media links.
- Appointment button.
- React Router links for all internal pages.
- Mobile navigation open/close control.
- Treatment, Activities, and Media dropdown menus.
- Active route highlighting.
- Automatic menu closing after navigation.

### Home-page slider

`Hero/Slider.jsx` provides:

- Four clinic banner images.
- Automatic slide rotation every eight seconds.
- Previous and next controls.
- Slide indicator buttons.
- Responsive hero sizing.

### Clinic action cards

The home page includes three action cards:

1. **Chat With Our Expert Doctors**: Opens WhatsApp in a new tab.
2. **Book an Appointment**: Opens the appointment modal.
3. **Locate Our Clinic**: Opens the clinic location in Google Maps.

Cards use a green default state, red hover state, white icons, and responsive layout.

### Appointment workflow

`AppointmentForm.jsx` is a modal form with fields for:

- Patient name
- Email
- Phone number
- Appointment date
- Symptoms or comments

The modal can be closed by:

- Clicking the close button.
- Clicking Cancel.
- Clicking outside the dialog.
- Pressing the Escape key.

The form displays a sending state, success response, or fallback error message.

### Contact workflow

`Contact.jsx` displays the clinic contact information and an embedded Google Map. `ContactForm.jsx` collects:

- Name
- Email address
- Message

The form displays submission status and uses the shared Axios service.

### Scroll restoration

`ScrollToTop.jsx` uses `useLocation` and `useEffect`. Whenever the URL pathname changes, it runs:

```js
window.scrollTo({ top: 0, behavior: 'smooth' });
```

This prevents a new page from opening at the previous page's scroll position.

### Shared content components

- `DiseaseCard.jsx` keeps disease image and text layouts consistent.
- `BlogCard.jsx` provides reusable blog presentation.
- `Hero.jsx` provides inner-page title and breadcrumb presentation.
- `Counter.jsx` displays clinic statistics.
- `Footer.jsx` provides global links, contact information, social links, and WhatsApp access.

## 7. Styling System

Shared styling is defined in `src/index.css` using Tailwind layers and custom classes:

- `.brand-container`: Centered responsive content width.
- `.page-shell`: Standard page spacing and content width.
- `.page-card`: White bordered content panel.
- `.page-heading`: Shared page heading typography.
- `.page-subheading`: Uppercase brand label.
- `.page-copy`: Shared body-copy styling.
- `.nav-link-base`: Navigation link styling.
- `.primary-button`: Main action button styling.

The custom brand palette is configured in `tailwind.config.js`:

- `brand-50`: Light brand background.
- `brand-100`: Soft brand border/accent.
- `brand-500`: Primary brand color.
- `brand-600`: Darker hover/text color.
- `brand-700`: Deep brand color.

## 8. Assets

Static assets are stored in `public/` and referenced from JSX with root-relative URLs:

```jsx
<img src="/images/Dr Sandip 3.jpg" alt="Dr. Sandip Gaikwad" />
```

Important asset groups include:

- `public/images/banner-*`: Home-page slider banners.
- `public/images/Dr*`, `dr*`, and `gaikawad.jpeg`: Doctor and clinic images.
- `public/images/*disease-name*`: Disease illustrations and photos.
- `public/images/blog-*`, `artical.jpg`, and `IMG_*`: Blog and article content.
- `public/images/logo*`: Clinic branding.
- `public/img/`: Additional legacy assets retained for compatibility.

When adding a new image, place it in `public/images/` and reference it with `/images/<filename>`.

## 9. Form API Configuration

The shared API client is defined in `src/services/api.js`:

```js
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000'
});
```

To configure a different API server, create `.env.local` in the project root:

```env
VITE_API_URL=http://localhost:4000
```

Current form requests are:

- Contact form: `POST /mail.php`
- Appointment form: `POST /appoinment.php`

The frontend can start and build without the API server, but form submission requires a compatible backend endpoint at the configured URL.

After changing `.env.local`, restart the Vite development server.

## 10. Adding a New Page

1. Create a page component in `src/pages/`.
2. Import it into `src/router/AppRouter.jsx`.
3. Add a `<Route>` with the desired path.
4. Add a `NavItem` or dropdown item in `Navbar.jsx` if users should access it from the navigation.
5. Add a footer link if the page belongs in the quick links or services list.
6. Use React Router `<Link>` for internal navigation instead of plain `<a href="/path">` links.
7. Run `npm run build` to verify the route and imports.

## 11. Development Guidelines

- Keep reusable UI in `src/components/` and route-level screens in `src/pages/`.
- Preserve existing route paths unless a migration is intentional.
- Use descriptive `alt` text for meaningful images.
- Keep form fields controlled when state is needed for validation or status handling.
- Use external anchors for WhatsApp, social media, email, telephone, and Google Maps links.
- Use React Router `Link` for internal links.
- Avoid adding backend-specific code to page components.
- Test both mobile and desktop layouts after changing navigation or grid classes.
- Run `npm run build` before considering a change complete.

## 12. Known Notes

- Vite may warn about `/bootstrap.min.css`, `/style.css`, or `/images/hero-bg.jpg` if those legacy assets are not present in `public/`. These warnings do not prevent the current React bundle from building.
- The backend folders are not part of this frontend-only project copy. Contact and appointment forms still expect a separately running compatible API service.
- The `dist/` directory is generated output and should be regenerated with `npm run build` rather than edited manually.
