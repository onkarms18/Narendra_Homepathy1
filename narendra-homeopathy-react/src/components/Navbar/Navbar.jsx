import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const external = { target: '_blank', rel: 'noreferrer' };

export default function Navbar({ onAppointment }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="bg-brand-500 px-4 py-2 text-white">
        <div className="brand-container flex items-center justify-end gap-3 text-sm">
          <a href="https://www.facebook.com/drsandip.gaikwad" {...external} className="rounded-full bg-white p-2 transition hover:bg-white/25" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/dr-sandip-gaikwad-01059931b" {...external} className="rounded-full  bg-white p-2 transition hover:bg-white/25" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin text-blue-700" />
          </a>
          <a href="https://www.instagram.com/narendra_homoeopathic_clinic" {...external} className="rounded-full  bg-white p-2 transition hover:bg-white/25" aria-label="Instagram">
            <i className="fa-brands fa-instagram text-red-500" />
          </a>
          <a href="https://www.youtube.com/@narendrahomeopathy505/videos" {...external} className="rounded-full  bg-white p-2 transition hover:bg-white/25" aria-label="YouTube">
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

      <div className="border-t border-slate-200 bg-white/95">
        <nav className="brand-container py-3">
          <div className="flex items-center justify-between md:hidden">
            <span className="text-sm font-semibold text-slate-700">Explore the clinic</span>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-brand-300 hover:text-brand-600"
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} />
            </button>
          </div>

          <ul id="main-navigation" className={`${menuOpen ? 'flex' : 'hidden'} mt-3 flex-col gap-1 text-sm font-medium md:mt-0 md:flex md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-2`}>
            <NavItem to="/" label="Home" onNavigate={() => setMenuOpen(false)} />
            <NavItem to="/about" label="About Us" onNavigate={() => setMenuOpen(false)} />
            <NavItem to="/doctor" label="About Dr. S. M. Gaikwad" onNavigate={() => setMenuOpen(false)} />
            <NavItem to="/why-homeopathy" label="Why Homeopathy?" onNavigate={() => setMenuOpen(false)} />
            <Dropdown label="Treatment" items={[['/acute', 'Acute Diseases'], ['/chronic', 'Chronic Diseases']]} onNavigate={() => setMenuOpen(false)} />
            <Dropdown label="Activities" items={[['/other', 'Camps'], ['/other', 'Workshops'], ['/other', 'Webinar/Seminar']]} onNavigate={() => setMenuOpen(false)} />
            <Dropdown label="Media" items={[['/blogs', 'Blog'], ['/news', 'News'], ['/articles', 'Articles'], ['/gallery', 'Gallery'], ['/contact', 'Contact']]} onNavigate={() => setMenuOpen(false)} />
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ to, label, onNavigate }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <li>
      <Link className={`nav-link-base block ${active ? 'bg-brand-50 text-brand-600' : ''}`} to={to} onClick={onNavigate}>
        {label}
      </Link>
    </li>
  );
}

function Dropdown({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const active = items.some(([to]) => location.pathname === to);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <li className="group relative">
      <button className={`nav-link-base flex w-full items-center justify-between gap-2 md:w-auto ${active ? 'bg-brand-50 text-brand-600' : ''}`} type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {label}
        <i className={`fa-solid ${open ? 'fa-chevron-up' : 'fa-chevron-down'} text-[10px]`} />
      </button>
      <ul className={`${open ? 'block' : 'hidden'} static mt-1 min-w-[180px] rounded-xl border border-slate-200 bg-white p-2 shadow-soft md:absolute md:left-0 md:top-full md:mt-0 md:group-hover:block`}>
        {items.map(([to, text]) => (
          <li key={text}>
            <Link className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-600" to={to} onClick={onNavigate}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
