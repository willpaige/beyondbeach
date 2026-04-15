import { cn } from '@/lib/cn';

type BadgeVariant = 'type' | 'dest' | 'new' | 'offer' | 'themed';

const variantStyles: Record<BadgeVariant, string> = {
  type: 'bg-[var(--theme-accent-bg)] text-[var(--theme-accent-hover)]',
  dest: 'bg-[var(--color-sand)] text-[var(--color-muted)]',
  new: 'bg-[rgba(85,186,166,0.15)] text-[#2D8A6F]',
  offer: 'bg-[#C0392B] text-white',
  themed: 'bg-[var(--theme-accent-bg)] text-[var(--theme-accent-hover)]',
};

export function Badge({
  variant = 'type',
  children,
  className,
}: {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-block text-[11px] font-semibold px-2.5 py-1 rounded',
        'tracking-[0.03em]',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
