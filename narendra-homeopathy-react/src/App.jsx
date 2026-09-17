import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Navbar onAppointment={() => setAppointmentOpen(true)} />
        <AppRouter onAppointment={() => setAppointmentOpen(true)} />
        <Footer />
        {appointmentOpen && <AppointmentForm onClose={() => setAppointmentOpen(false)} />}
      </div>
    </BrowserRouter>
  );
}
