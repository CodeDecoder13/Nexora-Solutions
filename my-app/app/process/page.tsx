import type { Metadata } from "next";
import ProcessStep from "../components/ProcessStep";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Our Process | Nexora Solutions",
  description:
    "Our 6-step development process: Discovery, Architecture, Agile Development, QA, Deployment, and Ongoing Support.",
};

const steps = [
  {
    title: "Discovery & Strategy",
    description:
      "We understand your goals, workflows, and technical requirements. This phase sets the foundation for everything that follows — ensuring we build the right solution for your business.",
  },
  {
    title: "System Architecture Planning",
    description:
      "We design scalable, secure, and efficient system structures. Every technical decision is made with long-term growth and maintainability in mind.",
  },
  {
    title: "Agile Development",
    description:
      "Iterative development with regular updates and feedback. You stay in the loop at every stage, with working software delivered in short cycles.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Ensuring performance, security, and reliability. We run comprehensive tests to catch issues before they reach production.",
  },
  {
    title: "Deployment & Launch",
    description:
      "Smooth, secure production deployment. We handle server setup, CI/CD pipelines, and monitoring to ensure a seamless go-live.",
  },
  {
    title: "Ongoing Support & Scaling",
    description:
      "Continuous improvements and feature expansion. We stay with you post-launch to optimize, scale, and evolve your application.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-wider text-amber-300">
            How We Work
          </p>
          <h1 className="animate-fade-in-up-delay-1 mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Our Process
          </h1>
          <p className="animate-fade-in-up-delay-2 mt-4 max-w-2xl text-base text-primary-100 sm:text-lg">
            A proven 6-step development process that delivers results — from
            initial discovery to long-term support and scaling.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                number={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Highlights */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Fast Iteration",
                description: "Regular updates and feedback cycles keep your project on track and aligned with your vision.",
                accent: false,
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Quality First",
                description: "Comprehensive testing at every stage ensures your application is secure, performant, and reliable.",
                accent: true,
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                ),
                title: "Built to Scale",
                description: "Architecture decisions are made with long-term growth in mind, so your system evolves with your business.",
                accent: false,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 text-center sm:p-8">
                <div
                  className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${
                    item.accent
                      ? "bg-amber-50 text-amber-600"
                      : "bg-primary-50 text-primary-600"
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-neutral-900 sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="primary"
        headline="Ready to Start Your Project?"
        description="Let's walk through your requirements and build a roadmap for success."
        buttonText="Start Your Project"
      />
    </>
  );
}
