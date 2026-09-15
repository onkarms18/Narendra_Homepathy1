import { Link } from 'react-router-dom';

const external = { target: '_blank', rel: 'noreferrer' };

export default function Navbar({ onAppointment }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="bg-brand-500 px-4 py-2 text-white">
        <div className="brand-container flex items-center justify-end gap-3 text-sm">
          <a href="https://www.facebook.com/drsandip.gaikwad" {...external} className="rounded-full bg-white/15 p-2 transition hover:bg-white/25" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/dr-sandip-gaikwad-01059931b" {...external} className="rounded-full bg-white/15 p-2 transition hover:bg-white/25" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin text-blue-700" />
          </a>
          <a href="https://www.instagram.com/narendra_homoeopathic_clinic" {...external} className="rounded-full bg-white/15 p-2 transition hover:bg-white/25" aria-label="Instagram">
            <i className="fa-brands fa-instagram text-red-500" />
          </a>
          <a href="https://www.youtube.com/@narendrahomeopathy505/videos" {...external} className="rounded-full bg-white/15 p-2 transition hover:bg-white/25" aria-label="YouTube">
            <i className="fa-brands fa-youtube text-red-500" />
          </a>
        </div>
      </div>

      <div className="brand-container grid gap-4 py-5 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:items-center">
        <div className="flex items-center justify-center lg:justify-start">
          <img src="/images/logo 3.jpg" alt="Narendra Homeopathy" className="h-16 w-auto rounded-lg object-contain shadow-sm" />
        </div>

        <div className="hidden items-center justify-center text-center text-sm font-medium text-slate-700 lg:flex">
          <div className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm">
            <i className="fa-solid fa-phone-volume text-brand-500" /> <span className="ml-2">+91 9322837641</span>
            <span className="mx-2 text-slate-400">|</span>
            <i className="fa-brands fa-whatsapp text-brand-500" /> <span className="ml-2">+91 9762232060</span>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <button type="button" className="primary-button" onClick={onAppointment}>
            Book an Appointment
          </button>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white/80">
        <nav className="brand-container flex items-center justify-center py-3">
          <ul className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About Us" />
            <NavItem to="/doctor" label="About Dr. S. M. Gaikwad" />
            <NavItem to="/why-homeopathy" label="Why Homeopathy?" />
            <Dropdown label="Treatment" items={[['/acute', 'Acute Diseases'], ['/chronic', 'Chronic Diseases']]} />
            <Dropdown label="Activities" items={[['/other', 'Camps'], ['/other', 'Workshops'], ['/other', 'Webinar/Seminar']]} />
            <Dropdown label="Media" items={[['/blogs', 'Blog'], ['/news', 'News'], ['/articles', 'Articles'], ['/gallery', 'Gallery'], ['/contact', 'Contact']]} />
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <li>
      <Link className="nav-link-base" to={to}>
        {label}
      </Link>
    </li>
  );
}

function Dropdown({ label, items }) {
  return (
    <li className="group relative">
      <button className="nav-link-base flex items-center gap-2" type="button">
        {label}
        <i className="fa-solid fa-chevron-down text-[10px]" />
      </button>
      <ul className="invisible absolute left-0 top-full z-20 min-w-[180px] rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-soft transition-all duration-200 group-hover:visible group-hover:opacity-100">
        {items.map(([to, text]) => (
          <li key={text}>
            <Link className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-600" to={to}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
