const techCategories = [
  {
    label: "Backend",
    items: ["Laravel", "Node.js"],
  },
  {
    label: "Frontend",
    items: ["React", "Vue.js", "Tailwind CSS"],
  },
  {
    label: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    label: "Infrastructure",
    items: ["Cloud Deployment", "CI/CD Pipelines", "Secure Hosting", "Scalable Architecture"],
  },
];

export default function TechStack() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Our Stack
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-4xl">
            Technology Stack
          </h2>
          <p className="mt-4 text-base text-neutral-500 sm:text-lg">
            Built with clean code principles and long-term maintainability in mind.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((category) => (
            <div key={category.label} className="text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                {category.label}
              </h3>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 sm:px-4 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
