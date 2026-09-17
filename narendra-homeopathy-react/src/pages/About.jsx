import Hero from '../components/Hero/Hero';
import Counter from '../components/Counter/Counter';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <Hero title="About Us" />
      <main className="bg-white">
        <section className="brand-container py-10 md:py-16 lg:py-20">
          <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:gap-8">
            <div className="overflow-hidden border-4 border-emerald-500 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <img src="/images/Dr Sandip 3.jpg" alt="Dr. Sandip Gaikwad with Professor George Vithoulkas" className="h-[430px] w-full object-cover object-top md:h-[650px]" />
            </div>

            <article className="lg:pt-0">
              <h2 className="text-2xl font-semibold leading-tight text-emerald-600 md:text-3xl">About Narendra Classical Homeopathic Center</h2>
              <div className="mt-3 space-y-6 text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
                <p>Founded in 2009 by the visionary Dr. S. M. Gaikwad. Here, we don&apos;t just practice medicine; we orchestrate symphonies of wellness through the profound art of classical homeopathy. Our mission transcends the conventional, echoing the sentiments of our founder&apos;s deep commitment to serve humanity and foster global happiness.</p>
                <p>Dr. Sandip Gaikwad, a seasoned Homeopathic Doctor, has dedicated over a decade to refining his skills and embracing the true essence of Hahnemannian homeopathy. The clinic is a haven where the journey to well-being unfolds with grace and precision.</p>
                <p>Step into Narendra Classical Homeopathic Center, where healing isn&apos;t just a science—it&apos;s an art, and you are the masterpiece of your own well-being. Embrace a holistic approach that harmonizes tradition with innovation, and embark on a journey where every step brings you closer to your optimal state of health and happiness.</p>
                <p>Every patient is a unique individual on a path to wellness. Our commitment is not only to address ailments but also to empower individuals with the knowledge and confidence to care for their well-being.</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-emerald-100 pt-6">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">Since 2009</span>
                <span className="h-1 w-1 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-slate-500">Founder: Dr. S. M. Gaikwad</span>
              </div>
              <Link to="/contact" className="primary-button mt-8">Begin your consultation <span aria-hidden="true" className="ml-2 text-lg">→</span></Link>
            </article>
          </div>
        </section>
      </main>
      <Counter />
    </>
  );
}
