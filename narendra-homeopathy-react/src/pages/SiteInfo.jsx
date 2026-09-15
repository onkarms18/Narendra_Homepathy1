import Hero from '../components/Hero/Hero';

export default function SiteInfo({ title, text }) {
  return (
    <>
      <Hero title={title} />
      <main className="page-shell">
        <div className="page-card mx-auto max-w-4xl text-center">
          <span className="page-subheading">Information</span>
          <h2 className="page-heading mt-4">{title}</h2>
          <p className="page-copy mt-5">{text}</p>
        </div>
      </main>
    </>
  );
}
