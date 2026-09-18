import { useState } from 'react';
import { submitForm } from '../../services/api';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const handleSubmit = async (event) => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); setStatus('Sending...'); try { await submitForm('/mail.php', data); setStatus('Your message submit successfully!'); } catch { setStatus('Unable to send right now. Please call us directly.'); } };
  return (
    <form className="rounded-[2rem] border border-brand-100 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.07)] md:p-9" onSubmit={handleSubmit}>
      <div className="mb-8 border-b border-slate-100 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Write to us</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Let&apos;s start a conversation.</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">Share your question and our team will get back to you with personal guidance.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Your name <span className="text-brand-500">*</span></span>
          <input name="name" type="text" placeholder="Enter your name" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Email address <span className="text-brand-500">*</span></span>
          <input name="email" type="email" placeholder="you@example.com" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10" />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-slate-700">Your message</span>
        <textarea name="comments" placeholder="How can we help you?" rows="6" className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10" />
      </label>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-slate-500">We respect your privacy and will only use your details to respond.</p>
        <button type="submit" className="primary-button shrink-0">Send message <span aria-hidden="true" className="ml-2 text-lg">→</span></button>
      </div>
      {status && <p role="status" className="mt-5 rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-700">{status}</p>}
    </form>
  );
}
