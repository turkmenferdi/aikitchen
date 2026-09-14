'use client';

import React, { useState } from 'react';
import { CheckCircle2, CircleAlert, Send } from 'lucide-react';
import { buttonClass } from './Button';
import { CONTACT_TOPICS, type ContactTopic } from '@/lib/contact';

interface ContactFormProps {
  defaultTopic?: string;
  dictionary: {
    contact: {
      form: {
        fullName: string;
        company: string;
        email: string;
        phone: string;
        message: string;
        solution: string;
        selectSolution: string;
        submit: string;
        submitting: string;
        success: string;
        error: string;
        optional: string;
        placeholderName: string;
        placeholderCompany: string;
        placeholderEmail: string;
        placeholderPhone: string;
        placeholderMessage: string;
        optionAutomation: string;
        optionFinancial: string;
        optionAp: string;
        optionLegal: string;
        optionTourism: string;
        optionTurbohub: string;
        optionOther: string;
        consent: string;
      };
    };
  };
}

const inputClass =
  'w-full rounded-xl border border-outline-variant bg-surface-container px-4 py-3 text-on-surface placeholder:text-outline transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10';

export function ContactForm({ dictionary, defaultTopic = '' }: ContactFormProps) {
  const t = dictionary.contact.form;
  const emptyForm = { fullName: '', company: '', email: '', phone: '', solution: defaultTopic, message: '' };
  const [formData, setFormData] = useState(emptyForm);
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const topicLabels: Record<ContactTopic, string> = {
    automation: t.optionAutomation,
    financial: t.optionFinancial,
    ap: t.optionAp,
    legal: t.optionLegal,
    tourism: t.optionTourism,
    turbohub: t.optionTurbohub,
    other: t.optionOther,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitState('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit form');
      setSubmitState('success');
      setFormData(emptyForm);
    } catch {
      setSubmitState('error');
    }
  };

  const label = (htmlFor: string, text: string, required = false) => (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-on-surface">
      {text}
      {required ? (
        <span className="text-error" aria-hidden>
          {' '}*
        </span>
      ) : (
        <span className="font-normal text-on-surface-variant"> ({t.optional})</span>
      )}
    </label>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      {submitState === 'success' && (
        <p role="status" className="flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4 text-sm font-medium text-on-surface">
          <CheckCircle2 size={20} className="flex-shrink-0 text-success" />
          {t.success}
        </p>
      )}
      {submitState === 'error' && (
        <p role="alert" className="flex items-start gap-3 rounded-xl border border-error/30 bg-error-container p-4 text-sm font-medium text-on-error-container">
          <CircleAlert size={20} className="flex-shrink-0" />
          {t.error}
        </p>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          {label('fullName', t.fullName, true)}
          <input id="fullName" name="fullName" type="text" autoComplete="name" required value={formData.fullName} onChange={handleChange} placeholder={t.placeholderName} className={inputClass} />
        </div>
        <div>
          {label('company', t.company, true)}
          <input id="company" name="company" type="text" autoComplete="organization" required value={formData.company} onChange={handleChange} placeholder={t.placeholderCompany} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          {label('email', t.email, true)}
          <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} placeholder={t.placeholderEmail} className={inputClass} />
        </div>
        <div>
          {label('phone', t.phone)}
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} placeholder={t.placeholderPhone} className={inputClass} />
        </div>
      </div>

      <div>
        {label('solution', t.solution)}
        <select id="solution" name="solution" value={formData.solution} onChange={handleChange} className={inputClass}>
          <option value="">{t.selectSolution}</option>
          {CONTACT_TOPICS.map((topic) => (
            <option key={topic} value={topic}>
              {topicLabels[topic]}
            </option>
          ))}
        </select>
      </div>

      <div>
        {label('message', t.message, true)}
        <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder={t.placeholderMessage} className={`${inputClass} resize-y`} />
      </div>

      <button type="submit" disabled={submitState === 'submitting'} className={buttonClass('primary', 'lg', 'w-full')}>
        <Send size={18} />
        {submitState === 'submitting' ? t.submitting : t.submit}
      </button>
      <p className="text-center text-xs leading-relaxed text-on-surface-variant">{t.consent}</p>
    </form>
  );
}
