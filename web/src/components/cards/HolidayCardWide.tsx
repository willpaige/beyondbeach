import { cn } from '@/lib/cn';

export function HolidayCardWide({
  imageSrc,
  imageAlt,
  type,
  title,
  subtitle,
  href,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  type: string;
  title: string;
  subtitle?: string;
  href?: string;
  className?: string;
}) {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cn(
        'group relative block overflow-hidden rounded-[10px] h-[280px] w-full',
        className,
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* gradient from left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* content */}
      <div className="absolute inset-y-0 left-0 p-6 flex flex-col justify-end gap-1.5 max-w-[50%]">
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--theme-accent)]"
        >
          {type}
        </span>
        <h3 className="font-[family-name:var(--font-poppins)] text-[18px] font-semibold text-white leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[13px] text-white/60">{subtitle}</p>
        )}
      </div>
    </Wrapper>
  );
}
