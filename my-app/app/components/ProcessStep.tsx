interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  const isEven = number % 2 === 0;

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white sm:h-11 sm:w-11 ${
            isEven ? "bg-amber-500" : "bg-primary-600"
          }`}
        >
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-primary-200 to-amber-200" />
        )}
      </div>

      {/* Content */}
      <div className={`${isLast ? "pb-0" : "pb-10 sm:pb-14"}`}>
        <h3 className="text-base font-semibold text-neutral-900 sm:text-lg">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-neutral-500 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
