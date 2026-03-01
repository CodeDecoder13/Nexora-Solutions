interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: React.ReactNode;
}

export default function ProjectCard({
  title,
  category,
  description,
  tech,
  gradient,
  icon,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-primary-200 hover:shadow-lg">
      {/* Project Visual */}
      <div
        className={`relative flex h-48 items-center justify-center overflow-hidden sm:h-56 ${gradient}`}
      >
        {/* Decorative circles */}
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
        <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-white/10" />

        {/* Icon */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">
          {category}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-neutral-900 sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-base">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs font-medium text-neutral-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
