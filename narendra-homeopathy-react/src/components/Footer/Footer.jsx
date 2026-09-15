import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-12 bg-slate-950 text-slate-200">
      <a href="https://api.whatsapp.com/send?phone=9762232060" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-xl transition hover:scale-105" title="Send us a WhatsApp message" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-whatsapp" />
      </a>

      <div className="brand-container py-12">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white">About Narendra Classical Homeopathic Center</h4>
            <p className="leading-7 text-slate-300">
              Founded in 2009 by the visionary Dr. S. M. Gaikwad. Here, we don't just practice medicine; we orchestrate symphonies of wellness through the profound art of classical homeopathy.
              <Link to="/about" className="ml-1 font-medium text-brand-300 hover:text-brand-200">Read More</Link>
            </p>
            <Social />
          </div>

          <div>
            <h4 className="pb-4 text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3 text-slate-300">
              {[['/', 'HOME'], ['/about', 'ABOUT US'], ['/why-homeopathy', 'WHY HOMEOPATHY?'], ['/contact', 'CONTACT'], ['/blogs', 'BLOG']].map(([to, label]) => (
                <li key={label}>
                  <Link to={to} className="inline-flex items-center gap-2 transition hover:text-brand-300">
                    <i className="fa-solid fa-caret-right text-brand-400" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="pb-4 text-xl font-semibold text-white">Our Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link to="/chronic" className="inline-flex items-center gap-2 transition hover:text-brand-300">
                  <i className="fa-solid fa-caret-right text-brand-400" />
                  Chronic Disease
                </Link>
              </li>
              <li>
                <Link to="/acute" className="inline-flex items-center gap-2 transition hover:text-brand-300">
                  <i className="fa-solid fa-caret-right text-brand-400" />
                  Acute Disease
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="pb-4 text-xl font-semibold text-white">Contact Information</h4>
            <div className="space-y-5 text-slate-300">
              <div className="flex gap-3">
                <i className="fa-solid fa-phone-volume pt-1 text-brand-400" />
                <div>
                  <p className="mb-1 text-sm text-slate-400">Call Today</p>
                  <a href="tel:+919762232060" className="hover:text-brand-300">+91 9762232060</a><br />
                  <a href="tel:+919322837641" className="hover:text-brand-300">+91 9322837641</a>
                </div>
              </div>

              <div className="flex gap-3">
                <i className="fa-solid fa-envelope pt-1 text-brand-400" />
                <a href="mailto:enquiry@narendrahomeopathy.com" className="hover:text-brand-300">enquiry@narendrahomeopathy.com</a>
              </div>

              <div className="flex gap-3">
                <i className="fa-solid fa-location-dot pt-1 text-brand-400" />
                <div>
                  <p className="mb-1 text-sm text-slate-400">Our Location</p>
                  <a href="/contact" className="hover:text-brand-300">Shop No-2/3/4, Sukhwani Akashdeep, Wing-B, Shastri Nagar, Kasarwadi, Pimpri-Chinchwad, Maharashtra 411034</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          Copyright &copy; 2024 <a href="https://www.siliconmount.com/" className="text-brand-300 hover:text-brand-200">Designed And Developed By SiliconMount Tech Services Pvt. Ltd.</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Social() {
  return (
    <div className="flex gap-3 pt-2 text-lg text-white">
      <a href="https://www.facebook.com/drsandip.gaikwad" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-brand-500"><i className="fa-brands fa-facebook-f" /></a>
      <a href="https://www.linkedin.com/in/dr-sandip-gaikwad-01059931b" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-brand-500"><i className="fa-brands fa-linkedin" /></a>
      <a href="https://www.instagram.com/narendra_homoeopathic_clinic" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-brand-500"><i className="fa-brands fa-instagram" /></a>
      <a href="https://www.youtube.com/@narendrahomeopathy505/videos" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-brand-500"><i className="fa-brands fa-youtube" /></a>
    </div>
  );
}
