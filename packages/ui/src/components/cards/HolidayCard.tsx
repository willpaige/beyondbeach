import { cn } from '@/lib/cn';

export function HolidayCard({
  imageSrc,
  imageAlt,
  type,
  title,
  subtitle,
  href,
  featured = false,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  type: string;
  title: string;
  subtitle?: string;
  href?: string;
  featured?: boolean;
  className?: string;
}) {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cn(
        'group relative block overflow-hidden rounded-[10px]',
        featured ? 'h-full min-h-[400px]' : 'h-[280px]',
        className,
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* content */}
      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-1.5">
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--theme-accent)]"
        >
          {type}
        </span>
        <h3
          className={cn(
            'font-[family-name:var(--font-poppins)] font-semibold text-white leading-tight',
            featured ? 'text-[26px]' : 'text-[18px]',
          )}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-[13px] text-white/60">{subtitle}</p>
        )}
      </div>
    </Wrapper>
  );
}
