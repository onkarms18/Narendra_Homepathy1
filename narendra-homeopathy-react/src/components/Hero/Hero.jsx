import { Link } from 'react-router-dom';

export default function Hero({ title }) {
  return <div className="login-bg"><div className="container"><div className="row"><div className="col-lg-12 text-center"><h1>{title}</h1><p className="dentist-banner"><Link to="/">Home </Link><span>| {title}</span></p></div></div></div></div>;
}
