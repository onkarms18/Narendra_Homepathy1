import { useEffect, useState } from 'react';
import { submitForm } from '../../services/api';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  adate: '',
  comments: ''
};

export default function AppointmentForm({ onClose }) {
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && onClose) onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending your request...');
    setSubmitting(true);

    try {
      const response = await submitForm('/appoinment.php', form);
      setStatus(response?.data?.message || `Thank you, ${form.name}. We will contact you shortly.`);
      setForm(emptyForm);
    } catch (error) {
      console.error('Appointment submission failed:', error);
      setStatus('We could not send your request right now. Please call the clinic to confirm your appointment.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.25)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Consultation</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Book Appointment</h2>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
            aria-label="Close appointment form"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="px-6 py-6 sm:px-8">
          <p className="mb-6 text-sm text-slate-600">
            Share your details and our clinic team will contact you to confirm the appointment time.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Patient Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={update}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={update}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  pattern="[0-9]{10}"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={update}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Appointment Date <span className="text-red-500">*</span>
                </label>
                <input
                  name="adate"
                  type="date"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200"
                  value={form.adate}
                  onChange={update}
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Symptoms</label>
              <textarea
                name="comments"
                rows="4"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200"
                placeholder="Tell us about your symptoms or concerns"
                value={form.comments}
                onChange={update}
              />
            </div>

            <div className="flex flex-col gap-4 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-600">{status && <span>{status}</span>}</div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-brand-300"
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
