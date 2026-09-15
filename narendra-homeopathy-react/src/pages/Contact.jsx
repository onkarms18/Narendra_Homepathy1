import Hero from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Contact() {
  return (
    <>
      <Hero title="Contact Us" />
      <main className="page-shell">
        <section className="mb-8 text-center">
          <span className="page-subheading">Contact information</span>
          <h2 className="page-heading mt-4">Reach us out for personal assistance.</h2>
          <p className="mx-auto mt-4 max-w-3xl page-copy">
            Have questions or specific concerns? Our dedicated team is here to provide personalized assistance tailored to your needs. Whether you’re seeking information, scheduling an appointment, or requiring support, feel free to reach out.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="page-card">
            <h3 className="text-2xl font-semibold text-slate-900">Narendra Homeopathic Clinic</h3>
            <div className="mt-5 space-y-4 page-copy">
              <p>Shop No-2/3/4, Sukhwani Akashdeep, Wing-B,<br />Shastri Nagar,<br />Kasarwadi, Pimpri-Chinchwad,<br />Maharashtra<br />411034</p>
              <div>
                <p className="font-semibold text-slate-900">Reach us via phone or email</p>
                <p className="mt-2 space-y-1">
                  <span className="block"><i className="fa-solid fa-phone-volume mr-3 text-brand-500" />+91 9762232060</span>
                  <span className="block"><i className="fa-solid fa-phone-volume mr-3 text-brand-500" />+91 9322837641</span>
                  <span className="block"><i className="fa-solid fa-phone-volume mr-3 text-brand-500" />+91 8483819825</span>
                </p>
              </div>
              <a href="mailto:narendrahomeopathicclinic@gmail.com" className="inline-flex items-center text-brand-600 hover:text-brand-700">
                <i className="fa-solid fa-envelope mr-2" />narendrahomeopathicclinic@gmail.com
              </a>
            </div>
          </div>

          <div className="page-card overflow-hidden p-3">
            <iframe
              title="Narendra Homeopathic Clinic map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15125.702143608949!2d73.8225854!3d18.5999203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b89440d33c9b%3A0xd9d048ba080b2bd2!2sNarendra%20Homeopathic%20Clinic!5e0!3m2!1sen!2sin!4v1713681644368!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[1.5rem]"
            />
          </div>
        </div>

        <div className="mt-8 mx-auto max-w-4xl">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
