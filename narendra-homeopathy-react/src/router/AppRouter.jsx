import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Doctor from '../pages/Doctor';
import AcuteDisease from '../pages/AcuteDisease';
import ChronicDisease from '../pages/ChronicDisease';
import Blogs from '../pages/Blogs';
import Articles from '../pages/Articles';
import Contact from '../pages/Contact';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm';
import SiteInfo from '../pages/SiteInfo';

export default function AppRouter({ onAppointment }) { return <Routes><Route path="/" element={<Home onAppointment={onAppointment} />} /><Route path="/about" element={<About />} /><Route path="/doctor" element={<Doctor />} /><Route path="/acute" element={<AcuteDisease />} /><Route path="/chronic" element={<ChronicDisease />} /><Route path="/blogs" element={<Blogs />} /><Route path="/articles" element={<Articles />} /><Route path="/contact" element={<Contact />} /><Route path="/appointment" element={<AppointmentForm onClose={() => window.history.back()} />} /><Route path="/why-homeopathy" element={<SiteInfo title="Why Homeopathy?" text="Homeopathy is a natural and gentle form of treatment that considers the individual as a whole, taking physical, mental, and emotional aspects of health into account." />} /><Route path="/other" element={<SiteInfo title="Activities" text="Narendra Classical Homeopathic Clinic conducts camps, workshops, and seminars to share the principles of classical homeopathy." />} /><Route path="/news" element={<SiteInfo title="News" text="Follow the latest news and updates from Narendra Classical Homeopathic Clinic." />} /><Route path="/gallery" element={<SiteInfo title="Gallery" text="Explore moments from Narendra Classical Homeopathic Clinic." />} /><Route path="*" element={<Home onAppointment={onAppointment} />} /></Routes>; }
