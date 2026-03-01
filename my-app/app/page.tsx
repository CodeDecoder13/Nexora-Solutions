import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import CTASection from "./components/CTASection";
import Link from "next/link";

const servicesOverview = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Custom Business Systems",
    description: "Digitize and automate your operations with powerful internal systems.",
    features: ["Admin Dashboards", "CRM Systems", "Role-Based Access Control", "Multi-Level Approval Workflows"],
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
    features: ["Multi-tenant Architecture", "Secure Authentication", "API Integrations", "Usage Analytics"],
    tagline: "We help founders launch faster with clean, scalable foundations.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "E-Commerce & Online Platforms",
    description: "Launch high-performance online stores and marketplaces.",
    features: ["Custom E-Commerce Platforms", "Payment Gateway Integration", "Order Tracking", "Inventory Automation"],
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
    features: ["Live Notifications", "Chat Systems", "Booking Platforms", "Real-Time Dashboards"],
    tagline: "Deliver dynamic user experiences with scalable backend architecture.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
    title: "Automation & Workflow Systems",
    description: "Increase efficiency and reduce manual work.",
    features: ["Process Automation", "Workflow Optimization", "Report Generators", "Data Processing Tools"],
    tagline: "Designed to save time and reduce operational costs.",
  },
];

const projects = [
  {
    title: "CloudStock Inventory System",
    category: "Custom Business System",
    description:
      "A full-featured inventory and POS management platform for a retail chain with 25+ branches. Real-time stock tracking, automated reorder alerts, and role-based dashboards.",
    tech: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    gradient: "bg-gradient-to-br from-primary-500 to-primary-800",
    icon: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "MetricFlow Analytics SaaS",
    category: "SaaS Platform",
    description:
      "A multi-tenant analytics dashboard platform for marketing agencies. Subscription billing, white-label support, real-time data pipelines, and usage-based pricing.",
    tech: ["Node.js", "React", "PostgreSQL", "Stripe"],
    gradient: "bg-gradient-to-br from-amber-500 to-amber-700",
    icon: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "BazaarHub Marketplace",
    category: "E-Commerce Platform",
    description:
      "A multi-vendor e-commerce marketplace with integrated payment gateways, vendor dashboards, automated commission splits, and real-time order tracking for buyers.",
    tech: ["Laravel", "React", "MySQL", "PayMongo"],
    gradient: "bg-gradient-to-br from-primary-600 to-amber-500",
    icon: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    title: "SyncBoard Collaboration",
    category: "Real-Time Application",
    description:
      "A real-time project collaboration tool with live document editing, instant messaging, task boards, and video call scheduling for remote teams of 500+ users.",
    tech: ["Node.js", "React", "WebSocket", "PostgreSQL"],
    gradient: "bg-gradient-to-br from-primary-700 to-primary-500",
    icon: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "FlowEngine Automation",
    category: "Workflow Automation",
    description:
      "An enterprise workflow automation platform that eliminated 60% of manual data entry for an operations team. Custom report generators, approval chains, and audit trails.",
    tech: ["Laravel", "Vue.js", "MySQL", "Redis"],
    gradient: "bg-gradient-to-br from-amber-600 to-amber-800",
    icon: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "PeopleOps HR Platform",
    category: "Custom Business System",
    description:
      "A comprehensive HR management system with employee onboarding, payroll processing, leave management, performance reviews, and multi-level approval workflows.",
    tech: ["Node.js", "React", "PostgreSQL", "Tailwind CSS"],
    gradient: "bg-gradient-to-br from-primary-500 via-primary-700 to-amber-600",
    icon: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

const whyUsPoints = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Scalable Architecture",
    accent: false,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Clean & Maintainable Code",
    accent: true,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Secure Authentication & Role Systems",
    accent: false,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Performance Optimization",
    accent: true,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
    title: "Automation-Ready Systems",
    accent: false,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652 9.027 9.027 0 01-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m0 0a3.765 3.765 0 010-2.528m2.268 4.796l-4.138 3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976l-4.138 3.448m0 0a9.027 9.027 0 01-1.306-1.652 9.027 9.027 0 01-1.652-1.306m0 0l4.138-3.448M4.33 7.288A9.016 9.016 0 017.288 4.33m0 0l3.448 4.138m-3.448-4.138a9.014 9.014 0 019.424 0M7.288 4.33L4.33 7.288" />
      </svg>
    ),
    title: "Long-Term Support",
    accent: true,
  },
];

const whoWeWorkWith = [
  "Startups building MVPs",
  "Growing businesses digitizing operations",
  "Founders launching SaaS platforms",
  "Companies upgrading legacy systems",
  "Teams needing internal automation tools",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Overview */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Our Solutions
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
              What We Build
            </h2>
            <p className="mt-4 text-base text-neutral-500 sm:text-lg">
              End-to-end web application solutions tailored to your business needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesOverview.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-amber-600 sm:text-base"
            >
              View all services in detail
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Our Work
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
              Projects We&apos;ve Built
            </h2>
            <p className="mt-4 text-base text-neutral-500 sm:text-lg">
              A showcase of real-world systems we&apos;ve designed, developed, and deployed for our clients.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Why Work With Us
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
              Startup Speed. Enterprise Standards.
            </h2>
            <p className="mt-4 text-base text-neutral-500 sm:text-lg">
              We combine startup agility with enterprise-level system design.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {whyUsPoints.map((point) => (
              <div
                key={point.title}
                className={`flex items-start gap-3 rounded-xl border p-5 transition-all hover:shadow-md sm:gap-4 sm:p-6 ${
                  point.accent
                    ? "border-amber-200 bg-amber-50 hover:border-amber-300"
                    : "border-primary-200 bg-primary-50 hover:border-primary-300"
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 ${
                    point.accent
                      ? "bg-amber-100 text-amber-600"
                      : "bg-primary-100 text-primary-600"
                  }`}
                >
                  {point.icon}
                </div>
                <p className="text-sm font-medium text-neutral-800 sm:text-base">{point.title}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm italic text-neutral-500 sm:mt-12 sm:text-base">
            We don&apos;t just build apps — we build systems designed to grow with your business.
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Our Clients
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
            Who We Work With
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4">
            {whoWeWorkWith.map((item, i) => (
              <span
                key={item}
                className={`rounded-full border px-4 py-2.5 text-sm font-medium shadow-sm sm:px-6 sm:py-3 sm:text-base ${
                  i % 2 === 0
                    ? "border-primary-200 bg-white text-primary-700"
                    : "border-amber-200 bg-white text-amber-700"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
