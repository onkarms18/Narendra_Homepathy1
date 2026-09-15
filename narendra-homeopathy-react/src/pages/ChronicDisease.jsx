import Hero from '../components/Hero/Hero';
import DiseaseCard from '../components/DiseaseCard/DiseaseCard';

const data = [
  ['repo.jpg', 'Respiratory Disorders:', 'Asthma, Allergic Rhinitis, Chronic Bronchitis, Sinusitis, Tonsillitis'],
  ['digestive.jpg', 'Digestive Disorders:', 'Irritable Bowel Syndrome (IBS), Gastritis, Acid Reflux (GERD), Constipation, Diarrhea'],
  ['skin.jpg', 'Skin Conditions:', 'Eczema, Psoriasis, Acne, Dermatitis, Urticaria (Hives)'],
  ['musk.jpg', 'Musculoskeletal Disorders:', 'Arthritis, Rheumatism, Back Pain, Sciatica, Sports Injuries'],
  ['women.jpg', "Women's Health Issues:", 'Menstrual Disorders, Menopausal Symptoms, Polycystic Ovary Syndrome (PCOS), Fibroids, Endometriosis'],
  ['mental.jpg', 'Mental and Emotional Health:', 'Anxiety Disorders, Depression, Stress-related Conditions, OCD, ADHD'],
  ['nurol.jpg', 'Neurological Disorders:', 'Migraine and Headaches, Neuralgia, Vertigo, Bell’s Palsy, Multiple Sclerosis'],
  ['child.jpg', "Children's Health:", 'Teething Troubles, Bedwetting, Behavioral Issues, Recurrent Infections'],
  ['harm.jpg', 'Hormonal Imbalances:', 'Thyroid Disorders, Diabetes, Menstrual Irregularities, Hormonal Acne'],
  ['imu.jpg', 'Immune System Disorders:', 'Allergies, Autoimmune Diseases, Recurrent Infections, Fibromyalgia'],
];

export default function ChronicDisease() {
  return (
    <>
      <Hero title="Chronic Disease" />
      <main className="page-shell">
        <section className="mb-8 text-center">
          <span className="page-subheading">Long-term treatment</span>
          <h2 className="page-heading mt-4">Chronic Disease</h2>
          <div className="mx-auto mt-4 max-w-3xl space-y-3 page-copy">
            <p>At Narendra Classical Homeopathic Clinic, we believe in a holistic approach to healthcare, addressing symptoms and underlying causes. Homeopathy considers physical, mental, and emotional aspects of health.</p>
            <p>Our experienced team offers personalized treatment plans tailored to each patient.</p>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.map(([image, title, text]) => (
            <DiseaseCard image={image} title={title} key={title}>
              <p>{text}</p>
            </DiseaseCard>
          ))}
        </div>
      </main>
    </>
  );
}
