import { cn } from '@/lib/cn';
import { Shield, Star } from 'lucide-react';
import type { ReactNode } from 'react';

type TrustBadgeProps = {
  icon?: ReactNode;
  title: string;
  subtitle: string;
  href?: string;
  variant?: 'hero' | 'default';
  className?: string;
};

export function TrustBadge({
  icon,
  title,
  subtitle,
  href = '#',
  variant = 'hero',
  className,
}: TrustBadgeProps) {
  const classes = cn(
    'inline-flex items-center gap-2 no-underline transition-colors',
    variant === 'hero' &&
      'bg-white/[0.12] backdrop-blur-[10px] border border-white/15 rounded-lg px-4 py-2.5 text-white hover:bg-white/20',
    variant === 'default' &&
      'bg-[var(--color-sand)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-[var(--color-ink)] hover:bg-[var(--color-warm)]',
    className,
  );

  return (
    <a href={href} className={classes}>
      <div
        className={cn(
          'w-7 h-7 flex items-center justify-center rounded shrink-0',
          variant === 'hero' && 'bg-white/90',
          variant === 'default' && 'bg-white',
        )}
      >
        {icon}
      </div>
      <div className="text-[11px] leading-tight">
        <strong
          className={cn(
            'block font-semibold text-[12px]',
            variant === 'hero' && 'text-white',
          )}
        >
          {title}
        </strong>
        <span
          className={cn(
            variant === 'hero' && 'text-white/60',
            variant === 'default' && 'text-[var(--color-muted)]',
          )}
        >
          {subtitle}
        </span>
      </div>
    </a>
  );
}

/** Pre-configured ATOL badge */
export function ATOLBadge({ variant = 'hero', ...props }: Omit<TrustBadgeProps, 'icon' | 'title' | 'subtitle'>) {
  return (
    <TrustBadge
      icon={<Shield size={18} className="text-[var(--color-ink)]" />}
      title="ATOL Protected"
      subtitle="Your money is safe"
      variant={variant}
      {...props}
    />
  );
}

/** Pre-configured BTA badge */
export function BTABadge({ variant = 'hero', ...props }: Omit<TrustBadgeProps, 'icon' | 'title' | 'subtitle'>) {
  return (
    <TrustBadge
      icon={<Star size={18} className="text-[var(--color-ink)]" />}
      title="British Travel Awards"
      subtitle="Award-winning holidays"
      variant={variant}
      {...props}
    />
  );
}
