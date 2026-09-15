import { useEffect, useState } from 'react';

const slides = [
  ['banner-img1.jpg', 'Classical Homeopathy'],
  ['banner-img2.jpg', 'Healing with care'],
  ['banner-img3.jpg', 'A healthier life'],
  ['banner-img4.jpg', 'Narendra Homeopathy'],
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[420px] md:h-[540px]">
        <img src={`/images/${slides[index][0]}`} alt={slides[index][1]} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/45 to-slate-900/20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-100">Holistic care</p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">{slides[index][1]}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200 md:text-lg">
              Personalized homeopathic treatment designed to restore balance, health, and confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-5 top-1/2 -translate-y-1/2">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl text-white backdrop-blur-sm transition hover:bg-white/35" onClick={() => setIndex((index - 1 + slides.length) % slides.length)} aria-label="Previous slide">
          &lt;
        </button>
      </div>
      <div className="absolute right-5 top-1/2 -translate-y-1/2">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl text-white backdrop-blur-sm transition hover:bg-white/35" onClick={() => setIndex((index + 1) % slides.length)} aria-label="Next slide">
          &gt;
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((slide, dot) => (
          <button
            key={slide[0]}
            className={`h-3 w-3 rounded-full ${dot === index ? 'bg-white' : 'bg-white/40'}`}
            onClick={() => setIndex(dot)}
            aria-label={`Slide ${dot + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
