import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Nexora Solutions",
  description:
    "Get in touch with Nexora Solutions. Schedule a free strategy consultation for your web application project.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-wider text-amber-300">
            Contact Us
          </p>
          <h1 className="animate-fade-in-up-delay-1 mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s Build Something Impactful
          </h1>
          <p className="animate-fade-in-up-delay-2 mt-4 max-w-2xl text-base text-primary-100 sm:text-lg">
            Whether you&apos;re launching a startup, scaling operations, or building a
            SaaS platform — we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-sm text-neutral-600 sm:text-base">
                Ready to start? Contact us today or schedule a free strategy
                consultation. We&apos;ll get back to you within 24 hours.
              </p>

              <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 sm:h-10 sm:w-10">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Email</p>
                    <p className="mt-1 text-sm text-neutral-500">
                      hello@nexorasolutions.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 sm:h-10 sm:w-10">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Location</p>
                    <p className="mt-1 text-sm text-neutral-500">
                      Remote-first, Global
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 sm:h-10 sm:w-10">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Response Time</p>
                    <p className="mt-1 text-sm text-neutral-500">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 sm:mt-10 sm:p-6">
                <h3 className="text-sm font-semibold text-neutral-900">
                  What happens next?
                </h3>
                <ol className="mt-4 flex flex-col gap-3">
                  {[
                    "We review your project details",
                    "Schedule a free strategy call",
                    "Deliver a proposal & roadmap",
                  ].map((step, i) => (
                    <li
                      key={step}
                      className="flex items-center gap-3 text-sm text-neutral-600"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-semibold text-amber-800">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 lg:col-span-3">
              <h2 className="text-lg font-semibold text-neutral-900 sm:text-xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Fill out the form below and we&apos;ll be in touch shortly.
              </p>
              <div className="mt-5 sm:mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
