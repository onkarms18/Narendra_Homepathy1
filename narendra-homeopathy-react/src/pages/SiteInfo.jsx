import Hero from '../components/Hero/Hero';

export default function SiteInfo({ title, text }) {
  return <><Hero title={title} /><div className="container py-5 my-0 my-sm-5"><div className="row"><div className="col-lg-12 text-center"><h6>{title}</h6><p>{text}</p></div></div></div></>;
}
