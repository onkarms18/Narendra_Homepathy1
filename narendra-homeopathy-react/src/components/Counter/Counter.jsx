export default function Counter({ compact = false }) {
  const items = [
    ['19', 'Expert doctors'],
    ['14', compact ? 'Years of experience' : 'Years of experience'],
    ['957', compact ? 'Problems solved' : 'Issues resolved'],
    ['93', compact ? 'Award wins' : 'Awards received'],
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full border-[30px] border-brand-500/15" />
      <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="brand-container relative py-12 md:py-16">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-300">Trusted care, measured</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">Experience that puts people first.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">A decade of thoughtful consultations and patient-centred homeopathic care.</p>
        </div>

        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 border-y border-white/10 md:grid-cols-4 md:divide-y-0">
          {items.map(([number, label], index) => (
            <div className="group px-4 py-6 text-center first:pl-0 last:pr-0 sm:px-8 md:py-5" key={label}>
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-brand-300 md:text-5xl">{number}</span>
                {index > 0 && <span className="text-xl font-light text-brand-400">+</span>}
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
