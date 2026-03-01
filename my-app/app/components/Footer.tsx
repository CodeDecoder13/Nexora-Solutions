import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-white sm:text-xl">
              Nexora<span className="text-amber-400">Solutions</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
              Web Application & Automation Solutions provider focused on building
              scalable, secure, and business-driven systems.
            </p>
            <p className="mt-3 text-sm font-medium text-amber-400 sm:text-base">
              Startup-friendly. Enterprise-ready. Built for scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/process", label: "Our Process" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-amber-400 sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-neutral-400 sm:text-base">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@nexorasolutions.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Remote-first, Global
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-8 text-center text-xs text-neutral-500 sm:mt-12 sm:text-sm">
          &copy; {new Date().getFullYear()} Nexora Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
