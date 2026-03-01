import Link from "next/link";

interface CTASectionProps {
  variant?: "primary" | "light";
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  variant = "primary",
  headline = "Let's Build Your Next Web Application",
  description = "Whether you're launching a startup, scaling operations, or building a SaaS platform — we help transform ideas into powerful, scalable web applications.",
  buttonText = "Get a Free Consultation",
  buttonHref = "/contact",
}: CTASectionProps) {
  const isPrimary = variant === "primary";

  return (
    <section
      className={`px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 ${
        isPrimary
          ? "bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white"
          : "bg-neutral-50 text-neutral-900"
      }`}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className={`text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl ${
            isPrimary ? "text-white" : "text-neutral-900"
          }`}
        >
          {headline}
        </h2>
        <p
          className={`mt-4 text-base leading-relaxed sm:mt-6 sm:text-lg ${
            isPrimary ? "text-primary-100" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
        <Link
          href={buttonHref}
          className={`mt-8 inline-block rounded-lg px-6 py-3 text-sm font-semibold transition-all sm:mt-10 sm:px-8 sm:py-4 sm:text-base ${
            isPrimary
              ? "bg-amber-500 text-white shadow-lg hover:bg-amber-400 hover:shadow-xl"
              : "bg-amber-500 text-white shadow-lg hover:bg-amber-600 hover:shadow-xl"
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
