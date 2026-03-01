interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  tagline?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  tagline,
}: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-lg sm:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100 sm:h-12 sm:w-12">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-neutral-900 sm:mt-5 sm:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-base">
        {description}
      </p>
      <ul className="mt-4 flex flex-col gap-2 sm:mt-5 sm:gap-2.5">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-neutral-600 sm:gap-2.5 sm:text-base"
          >
            <svg
              className="h-4 w-4 shrink-0 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      {tagline && (
        <p className="mt-4 text-xs font-medium italic text-amber-600 sm:mt-5 sm:text-sm">
          {tagline}
        </p>
      )}
    </div>
  );
}
