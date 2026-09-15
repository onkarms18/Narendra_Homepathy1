import { Link } from 'react-router-dom';

export default function Hero({ title }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),transparent_35%)]" />
      <div className="brand-container relative py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm">
            Narendra Classical Homeopathic Center
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 flex items-center justify-center gap-3 text-sm md:text-base">
            <Link to="/" className="font-medium text-white/90 transition hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white/75">{title}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
