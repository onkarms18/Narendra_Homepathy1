import Hero from '../components/Hero/Hero';
import Counter from '../components/Counter/Counter';

export default function About() {
  return (
    <>
      <Hero title="About Us" />
      <main className="page-shell">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="page-card overflow-hidden p-3">
            <img src="/images/Dr Sandip 3.jpg" alt="Dr. Sandip Gaikwad" className="h-[420px] w-full rounded-[1.5rem] object-cover md:h-[500px]" />
          </div>

          <div className="page-card">
            <span className="page-subheading">About us</span>
            <h2 className="page-heading mt-4">About Narendra Classical Homeopathic Center</h2>
            <div className="page-copy mt-5 space-y-5">
              <p>Founded in 2009 by the visionary Dr. S. M. Gaikwad. Here, we don’t just practice medicine; we orchestrate symphonies of wellness through the profound art of classical homeopathy. Our mission transcends the conventional, echoing the sentiments of our founder’s deep commitment to serve humanity and foster global happiness.</p>
              <p>Dr. Sandip Gaikwad, a seasoned Homeopathic Doctor, has dedicated over a decade to refining his skills and embracing the true essence of Hahnemannian homeopathy. The clinic is a haven where the journey to well-being unfolds with grace and precision.</p>
              <p>Step into Narendra Classical Homeopathic Center, where healing is both a science and an art. Every patient is a unique individual on a path to wellness, and our commitment is to empower individuals with the knowledge of pure homeopathy.</p>
            </div>
          </div>
        </div>
      </main>
      <Counter />
    </>
  );
}
