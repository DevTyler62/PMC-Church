'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validatePrayer } from '@/lib/prayer';
import { ArrowUpRightIcon, CheckIcon } from '@phosphor-icons/react';
export default function PrayerForm({
  publicKey,
  serviceId,
  templateId,
}: {
  publicKey: string;
  serviceId: string;
  templateId: string;
}) {
  const enabled = Boolean(publicKey && serviceId && templateId);
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setMessage('');
    try {
      const values = Object.fromEntries(new FormData(form));
      const validated = validatePrayer(values);
      if (!validated)
        throw new Error(
          'Please provide a valid email, a prayer request of 10–5,000 characters, and consent.',
        );
      if (!enabled) throw new Error('Prayer requests are not configured yet.');
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setStatus('success');
      setMessage(
        'Your prayer request has been sent. Thank you for reaching out.',
      );
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'We could not send your request. Please try again later.',
      );
    }
  }
  return (
    <form id="prayer-form" onSubmit={submit} className="prayer-form">
      <div className="form-row">
        <label>
          Your name <span>(optional)</span>
          <input
            name="name"
            maxLength={100}
            autoComplete="name"
            placeholder="First name"
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label>
        How can we pray for you?
        <textarea
          name="prayer"
          required
          minLength={10}
          maxLength={5000}
          rows={4}
          placeholder="Share what’s on your heart…"
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" required />{' '}
        <span>
          I agree to share this request and my email with the church for prayer
          and a possible response.
        </span>
      </label>
      <button
        className="button button-dark"
        type="submit"
        disabled={!enabled || status === 'sending'}
      >
        {status === 'sending'
          ? 'Sending…'
          : status === 'success'
            ? 'Send another request'
            : 'Send prayer request'}
        {status === 'success' ? (
          <CheckIcon aria-hidden="true" size={17} />
        ) : (
          <ArrowUpRightIcon aria-hidden="true" size={17} />
        )}
      </button>
      {!enabled && (
        <p className="form-note">
          Prayer requests will open here soon. This form is not accepting
          submissions yet.
        </p>
      )}
      <p
        role="status"
        className={status === 'error' ? 'error-message' : 'form-note'}
      >
        {message}
      </p>
    </form>
  );
}
