export default function Counter({ compact = false }) {
  const items = [['19', 'Expert Doctors'], ['14', compact ? 'Year Experiences' : 'Years Of Experiences'], ['957', compact ? 'Problem Solve' : 'Issues Resolved'], ['93', compact ? 'Award Winning' : 'Awards Received']];
  return <div className="counter-bg pt-5"><div className="container text-center counter-up mb-5 pb-5"><div className="row py-5">{items.map(([number, label]) => <div className="col-sm-3 pb-4 pb-sm-0" key={label}><div className={compact ? '' : 'expert'}><div className="number">{number}</div><div className="counter-details">{label}</div></div></div>)}</div></div></div>;
}
