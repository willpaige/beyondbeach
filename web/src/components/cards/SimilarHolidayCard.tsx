import { cn } from '@/lib/cn';

export function SimilarHolidayCard({
  imageSrc,
  imageAlt,
  destination,
  name,
  price,
  href,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  destination: string;
  name: string;
  price: string;
  href?: string;
  className?: string;
}) {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cn(
        'group block bg-white border border-[var(--color-border)] rounded-[10px] overflow-hidden',
        'transition-all duration-200 hover:-translate-y-[4px] hover:shadow-lg',
        className,
      )}
    >
      {/* image */}
      <div className="h-[180px] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* body */}
      <div className="p-4 flex flex-col gap-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
          {destination}
        </span>
        <h3 className="font-[family-name:var(--font-poppins)] text-[16px] font-semibold text-[var(--section-text)] leading-tight">
          {name}
        </h3>
        <p className="text-[14px] text-[var(--section-text)] mt-1">
          {price}
        </p>
      </div>
    </Wrapper>
  );
}
