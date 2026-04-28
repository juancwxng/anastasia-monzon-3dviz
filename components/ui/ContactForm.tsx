'use client';

import { useState } from 'react';
import {
  formProjectTypes,
  formBudgets,
  contactNote,
  contactSubmitBtn,
} from '@/data/portfolio';

const inputClass =
  'bg-[rgba(247,243,238,0.05)] border border-[rgba(247,243,238,0.1)] rounded-[4px] px-[0.875rem] py-3 text-[0.875rem] text-[rgba(247,243,238,0.55)] font-light outline-none transition-colors duration-200 focus:border-[rgba(247,243,238,0.25)] appearance-none w-full placeholder:text-[rgba(247,243,238,0.2)]';

const labelClass =
  'text-[0.5625rem] tracking-[0.18em] uppercase text-[rgba(247,243,238,0.3)] font-normal';

interface FormState {
  name: string;
  email: string;
  project_type: string;
  budget: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    project_type: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    setSubmitting(true);

    // Simulate async submission — replace with real API call
    await new Promise((r) => setTimeout(r, 800));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center mt-12 min-h-[320px]">
        <p className="font-serif italic font-light text-[rgba(247,243,238,0.7)] text-[1.375rem] leading-[1.5] max-w-[340px]">
          Thank you — your message is on its way. I&rsquo;ll be in touch within one business day.
        </p>
        <p className="font-serif italic text-[rgba(232,197,192,0.6)] text-[0.875rem] mt-4">
          — A. Monzon
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 mt-12" aria-label="Project enquiry">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jane Smith"
            className={inputClass}
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jane@studio.com"
            className={inputClass}
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-5 max-xs:grid-cols-1">
        <div className="flex flex-col gap-2">
          <label htmlFor="project-type" className={labelClass}>
            Project type
          </label>
          <select
            id="project-type"
            name="project_type"
            className={inputClass}
            value={form.project_type}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select one
            </option>
            {formProjectTypes.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className={labelClass}>
            Approximate budget
          </label>
          <select
            id="budget"
            name="budget"
            className={inputClass}
            value={form.budget}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select range
            </option>
            {formBudgets.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Tell me about the project
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Space type, size, style references, timeline…"
          className={`${inputClass} min-h-[120px] resize-none leading-[1.6]`}
          value={form.message}
          onChange={handleChange}
        />
      </div>

      {/* Submit row */}
      <div className="flex justify-between items-center gap-6 pt-1 max-xs:flex-col max-xs:items-start">
        <p className="text-[0.75rem] text-[rgba(247,243,238,0.25)] leading-[1.5] max-w-[220px] font-light max-xs:max-w-full">
          {contactNote}
        </p>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="inline-flex items-center gap-[0.625rem] bg-[#a8b89a] text-[#2b2a27] text-[0.6875rem] tracking-[0.16em] uppercase font-medium px-8 py-[0.8rem] rounded-full border-none cursor-pointer transition-[background,color,opacity] duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap hover:bg-[#4a5e3e] hover:text-[#f7f3ee] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : contactSubmitBtn}
        </button>
      </div>
    </div>
  );
}
