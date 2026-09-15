export default function DiseaseCard({ image, title, children }) {
  return (
    <div className="group h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={`/images/${image}`}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-5">
        <h4 className="text-xl font-semibold text-slate-900">{title}</h4>
        <div className="text-slate-600">{children}</div>
      </div>
    </div>
  );
}
