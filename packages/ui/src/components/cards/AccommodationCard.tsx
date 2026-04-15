import { cn } from '@/lib/cn';

export function AccommodationCard({
  imageSrc,
  imageAlt,
  name,
  description,
  sleeps,
  bedType,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
  sleeps: number;
  bedType: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-white border border-[var(--color-border)] rounded-[10px] overflow-hidden',
        className,
      )}
    >
      {/* image */}
      <div className="h-[160px] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* body */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[var(--section-text)]">
          {name}
        </h3>
        <p className="text-[12px] text-[var(--color-muted)] leading-relaxed">
          {description}
        </p>

        {/* details row */}
        <div className="flex items-center gap-4 mt-1 pt-3 border-t border-[var(--color-border)]">
          <div className="flex items-center gap-1.5 text-[12px] text-[var(--color-muted)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Sleeps {sleeps}
          </div>
          <div className="flex items-center gap-1.5 text-[12px] text-[var(--color-muted)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4v16" />
              <path d="M2 8h18a2 2 0 0 1 2 2v10" />
              <path d="M2 17h20" />
              <path d="M6 8v9" />
            </svg>
            {bedType}
          </div>
        </div>
      </div>
    </div>
  );
}
