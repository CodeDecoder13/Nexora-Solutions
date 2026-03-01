"use client";

import { useState } from "react";

const serviceOptions = [
  "Custom Business Systems",
  "SaaS Application Development",
  "E-Commerce & Online Platforms",
  "Real-Time Web Applications",
  "Automation & Workflow Systems",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 sm:h-16 sm:w-16">
          <svg
            className="h-7 w-7 text-amber-600 sm:h-8 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-neutral-900 sm:text-xl">
          Thank you!
        </h3>
        <p className="mt-2 text-sm text-neutral-600 sm:text-base">
          We&apos;ll get back to you within 24 hours to discuss your project.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-neutral-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 sm:px-4 sm:py-3 sm:text-base"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-neutral-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 sm:px-4 sm:py-3 sm:text-base"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company"
          className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 sm:px-4 sm:py-3 sm:text-base"
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          Service Interested In
        </label>
        <select
          id="service"
          className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 sm:px-4 sm:py-3 sm:text-base"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          Project Details
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 sm:px-4 sm:py-3 sm:text-base"
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-amber-600 hover:shadow-md sm:px-8 sm:py-3.5 sm:text-base"
      >
        Send Message
      </button>
    </form>
  );
}
