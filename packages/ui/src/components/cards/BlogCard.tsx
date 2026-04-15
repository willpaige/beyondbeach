import { cn } from '@/lib/cn';

export function BlogCard({
  imageSrc,
  imageAlt,
  category,
  title,
  excerpt,
  href,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
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
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* body */}
      <div className="p-4 flex flex-col gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent-dk)]">
          {category}
        </span>
        <h3 className="font-[family-name:var(--font-poppins)] text-[17px] font-semibold text-[var(--section-text)] leading-tight">
          {title}
        </h3>
        <p className="text-[13px] text-[var(--color-muted)] leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <span className="text-[13px] font-semibold text-[var(--theme-accent-hover)] mt-1">
          Read more &rarr;
        </span>
      </div>
    </Wrapper>
  );
}
