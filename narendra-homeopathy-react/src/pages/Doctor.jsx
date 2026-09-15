import Hero from '../components/Hero/Hero';
import Counter from '../components/Counter/Counter';

export default function Doctor() {
  return (
    <>
      <Hero title="About Dr. S.M. Gaikwad" />
      <main className="page-shell">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="page-card overflow-hidden p-3">
            <img src="/images/drsandip.jpg" alt="Dr. S.M. Gaikwad" className="h-[420px] w-full rounded-[1.5rem] object-cover md:h-[500px]" />
          </div>

          <div className="page-card">
            <span className="page-subheading">Our doctor</span>
            <h2 className="page-heading mt-4">About Dr. S.M. Gaikwad</h2>
            <div className="page-copy mt-5 space-y-5">
              <p>Dr. S. M. Gaikwad has served as Assistant Coordinator of the prestigious E-learning course by Prof. George Vithoulkas in Pune for the last 6 years.</p>
              <p>Narendra Homeopathic Clinic is led by the proficient Dr. S. M. Gaikwad, a seasoned homeopathic consultant devoted to classical homeopathy since 2009 in Pimpri Chinchwad, Pune. He earned his degree from Dr. J.J Magdum Homeopathic Medical College and pursued advanced clinical homeopathy in Greece.</p>
              <p>Having successfully treated over 10,000 patients, Dr. Gaikwad shares the virtues of classical homeopathy through workshops and books, with a vision for holistic well-being.</p>
              <p>Join us at Narendra Homeopathic Clinic, where experience and commitment to genuine classical homeopathy pave the way for a transformative journey to enduring health and happiness.</p>
            </div>
          </div>
        </div>
      </main>
      <Counter compact />
    </>
  );
}
