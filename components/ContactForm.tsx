'use client';

import React, { useState } from 'react';
import { Button } from './Button';

interface ContactFormProps {
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
        required: string;
        invalidEmail: string;
        placeholderName: string;
        placeholderCompany: string;
        placeholderEmail: string;
        placeholderPhone: string;
        placeholderMessage: string;
        optionFinancial: string;
        optionAp: string;
        optionLegal: string;
        optionTourism: string;
        optionOther: string;
      };
    };
  };
}

export function ContactForm({ dictionary }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    solution: 'other',
    message: '',
  });

  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitState('success');
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        solution: 'other',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitState('idle');
      }, 5000);
    } catch (error) {
      setSubmitState('error');
      setErrorMessage(dictionary.contact.form.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitState === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-sm">
          {dictionary.contact.form.success}
        </div>
      )}

      {submitState === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-on-surface mb-2">
            {dictionary.contact.form.fullName}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-outline/20 bg-surface-container text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
            placeholder={dictionary.contact.form.placeholderName}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-on-surface mb-2">
            {dictionary.contact.form.company}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-outline/20 bg-surface-container text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
            placeholder={dictionary.contact.form.placeholderCompany}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-2">
            {dictionary.contact.form.email}
            <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-outline/20 bg-surface-container text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
            placeholder={dictionary.contact.form.placeholderEmail}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-on-surface mb-2">
            {dictionary.contact.form.phone}
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-outline/20 bg-surface-container text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors"
            placeholder={dictionary.contact.form.placeholderPhone}
          />
        </div>
      </div>

      <div>
        <label htmlFor="solution" className="block text-sm font-medium text-on-surface mb-2">
          {dictionary.contact.form.solution}
        </label>
        <select
          id="solution"
          name="solution"
          value={formData.solution}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-outline/20 bg-surface-container text-on-surface focus:outline-none focus:border-primary transition-colors"
        >
          <option value="other">{dictionary.contact.form.selectSolution}</option>
          <option value="financial">{dictionary.contact.form.optionFinancial}</option>
          <option value="ap">{dictionary.contact.form.optionAp}</option>
          <option value="legal">{dictionary.contact.form.optionLegal}</option>
          <option value="tourism">{dictionary.contact.form.optionTourism}</option>
          <option value="other">{dictionary.contact.form.optionOther}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-on-surface mb-2">
          {dictionary.contact.form.message}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-outline/20 bg-surface-container text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder={dictionary.contact.form.placeholderMessage}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={submitState === 'submitting'}
        className="w-full"
      >
        {submitState === 'submitting' ? dictionary.contact.form.submitting : dictionary.contact.form.submit}
      </Button>
    </form>
  );
}
