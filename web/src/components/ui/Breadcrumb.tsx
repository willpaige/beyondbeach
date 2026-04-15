import { cn } from '@/lib/cn';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({
  items,
  className,
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2', className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && (
              <span className="text-[12px] text-[var(--color-muted)] opacity-40 select-none">/</span>
            )}
            {isLast || !item.href ? (
              <span className="text-[12px] text-[var(--color-muted)]">{item.label}</span>
            ) : (
              <a
                href={item.href}
                className="text-[12px] text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
              >
                {item.label}
              </a>
            )}
          </span>
        );
      })}
    </nav>
  );
}
