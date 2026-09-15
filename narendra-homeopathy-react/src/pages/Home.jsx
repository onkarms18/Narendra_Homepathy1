import Slider from '../components/Hero/Slider';
import DiseaseCard from '../components/DiseaseCard/DiseaseCard';

const chronic = [
  ['repo.jpg', 'Respiratory Disorders:', 'Asthma, Allergic Rhinitis, Chronic Bronchitis, Sinusitis, Tonsillitis'],
  ['digestive.jpg', 'Digestive Disorders:', 'Irritable Bowel Syndrome (IBS), Gastritis, Acid Reflux (GERD), Constipation, Diarrhea'],
  ['skin.jpg', 'Skin Conditions:', 'Eczema, Psoriasis, Acne, Dermatitis, Urticaria (Hives)'],
  ['musk.jpg', 'Musculoskeletal Disorders:', 'Arthritis, Rheumatism, Back Pain, Sciatica, Sports Injuries'],
  ['women.jpg', "Women's Health Issues:", 'Menstrual Disorders, Menopausal Symptoms, Polycystic Ovary Syndrome (PCOS), Fibroids, Endometriosis'],
  ['mental.jpg', 'Mental and Emotional Health:', 'Anxiety Disorders, Depression, Stress-related Conditions, OCD, ADHD'],
];

export default function Home({ onAppointment }) {
  return (
    <>
      <Slider />

      <section className="brand-container relative z-10 -mt-6 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon="fa-user-doctor"
            title="Chat With Our Expert Doctors"
            text="Have any health issue? Don't worry, Chat with our expert doctors now."
            href="https://api.whatsapp.com/send?phone=9762232060"
          />
          <InfoCard
            icon="fa-table"
            title="Book an Appointment"
            text="Dont wait more now. Book your appointment online and get cured quickly."
            onClick={onAppointment}
          />
          <InfoCard
            icon="fa-location-dot"
            title="Locate Our Clinic"
            text="Shop No-3/4, Sukhwani Akashdeep, Wing-B, Shastri Nagar, Kasarwadi, Pimpri-Chinchwad, 411034"
            href="https://www.google.com/maps/place/Narendra+Homeopathic+Clinic"
          />
        </div>
      </section>

      <section className="brand-container py-10 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft">
            <img src="/images/Dr_Sandip.jpg" alt="Dr. Sandip Gaikwad" className="h-[480px] w-full rounded-[1.5rem] object-cover" />
          </div>

          <div className="space-y-5">
            <div className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              About us
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Welcome to <span className="text-brand-500">Narendra</span> Classical Homeopathic Center
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-600">
              <p>
                Founded in 2009 by the visionary Dr. S. M. Gaikwad. Here, we don't just practice medicine; we orchestrate symphonies of wellness through the profound art of classical homeopathy.
              </p>
              <p>
                <span className="font-semibold text-slate-900">Our mission</span><br />
                Transcends the conventional, echoing the sentiments of our founder's deep commitment to serve humanity and foster global happiness.
              </p>
              <p>
                Dr. Sandip Gaikwad, a seasoned Homeopathic Doctor, has dedicated over a decade to refining his skills and embracing the true essence of Hahnemannian homeopathy. The clinic is a haven where the journey to well-being unfolds with grace and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="brand-container">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">Care for chronic conditions</p>
            <h3 className="text-3xl font-bold text-slate-900">Chronic Disease</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {chronic.map(([image, title, desc]) => (
              <DiseaseCard key={title} image={image} title={title}>
                <p className="text-sm leading-6 text-slate-600">{desc}</p>
              </DiseaseCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon, title, text, href, onClick }) {
  const content = (
    <>
      <i className={`fa-solid ${icon} text-2xl text-brand-500`} />
      <div className="space-y-2">
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        <p className="text-sm leading-6 text-white/80">{text}</p>
      </div>
    </>
  );

  return (
    <div className="group rounded-[1.75rem] border border-white/20 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 p-[1px] shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-full items-start gap-4 rounded-[1.7rem] bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-left text-white">
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="flex w-full items-start gap-4 rounded-[1.5rem] no-underline">
            {content}
          </a>
        ) : (
          <button type="button" className="flex w-full items-start gap-4 rounded-[1.5rem] bg-transparent text-left text-white" onClick={onClick}>
            {content}
          </button>
        )}
      </div>
    </div>
  );
}
