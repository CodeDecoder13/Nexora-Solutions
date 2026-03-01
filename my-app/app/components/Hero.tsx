import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8 lg:py-36 xl:py-44">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-72 w-72 rounded-full bg-amber-400/10 sm:h-96 sm:w-96" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 sm:h-72 sm:w-72" />
        <div className="absolute right-1/4 top-1/3 h-36 w-36 rounded-full bg-amber-500/5 sm:h-48 sm:w-48" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up flex flex-wrap gap-2 sm:gap-3">
            {["Startup-Friendly", "Enterprise Architecture", "Built for Growth"].map(
              (badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200 backdrop-blur-sm sm:px-4 sm:py-1.5"
                >
                  {badge}
                </span>
              )
            )}
          </div>

          <h1 className="animate-fade-in-up-delay-1 mt-6 text-3xl font-bold leading-tight tracking-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Web Application Solutions for{" "}
            <span className="text-amber-300">Growing Businesses</span>
          </h1>

          <p className="animate-fade-in-up-delay-2 mt-4 text-base leading-relaxed text-primary-100 sm:mt-6 sm:text-lg md:text-xl lg:max-w-3xl">
            We Build Scalable, Enterprise-Ready Web Applications — Without
            Enterprise Complexity. From startups launching their first product to
            businesses optimizing internal operations.
          </p>

          <div className="animate-fade-in-up-delay-3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all hover:bg-amber-400 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
