import type { Metadata } from "next";
import ServiceCard from "../components/ServiceCard";
import TechStack from "../components/TechStack";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Services | Nexora Solutions",
  description:
    "Custom business systems, SaaS development, e-commerce platforms, real-time applications, and automation solutions.",
};

const allServices = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Custom Business Systems",
    description:
      "Digitize and automate your operations with powerful internal systems.",
    features: [
      "Admin Dashboards",
      "CRM Systems",
      "HR & Payroll Systems",
      "Inventory & POS Systems",
      "Document Management Systems",
      "Role-Based Access Control",
      "Multi-Level Approval Workflows",
    ],
    tagline: "Perfect for startups, SMEs, and growing enterprises.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "SaaS Application Development",
    description: "Turn your idea into a scalable SaaS platform.",
    features: [
      "Subscription-based Systems",
      "Multi-tenant Architecture",
      "Secure Authentication",
      "API Integrations",
      "Real-time Features",
      "Usage Analytics",
    ],
    tagline:
      "We help founders launch faster with clean, scalable foundations.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "E-Commerce & Online Platforms",
    description:
      "Launch high-performance online stores and marketplaces.",
    features: [
      "Custom E-Commerce Platforms",
      "Multi-Vendor Marketplaces",
      "Payment Gateway Integration",
      "Order Tracking & Management",
      "Inventory Automation",
      "POS Integration",
    ],
    tagline: "Built for performance, security, and growth.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Real-Time Web Applications",
    description: "Modern applications require real-time interaction.",
    features: [
      "Live Notifications",
      "Chat Systems",
      "Booking Platforms",
      "Collaboration Tools",
      "Real-Time Dashboards",
    ],
    tagline:
      "Deliver dynamic user experiences with scalable backend architecture.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
    title: "Automation & Workflow Systems",
    description: "Increase efficiency and reduce manual work.",
    features: [
      "Process Automation",
      "Workflow Optimization",
      "Report Generators",
      "Data Processing Tools",
      "Admin & Backoffice Systems",
    ],
    tagline: "Designed to save time and reduce operational costs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-wider text-amber-300">
            What We Do
          </p>
          <h1 className="animate-fade-in-up-delay-1 mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="animate-fade-in-up-delay-2 mt-4 max-w-2xl text-base text-primary-100 sm:text-lg">
            End-to-end web application solutions — from custom business systems to
            SaaS platforms, e-commerce, and automation.
          </p>
        </div>
      </section>

      {/* All Services */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      <CTASection
        variant="primary"
        headline="Ready to Build Your Solution?"
        description="Let's discuss your project requirements and find the right technology stack for your business."
        buttonText="Schedule a Consultation"
      />
    </>
  );
}
