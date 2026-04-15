import { cn } from '@/lib/cn';
import { Badge } from '@/components/ui/Badge';
import { MapPin } from 'lucide-react';
import type { ReactNode } from 'react';

type BadgeItem = {
  variant: 'type' | 'dest' | 'new' | 'offer' | 'themed';
  text: string;
};

type Stat = {
  icon: ReactNode;
  text: string;
};

export function TitleBlock({
  badges,
  title,
  location,
  stats,
  className,
}: {
  badges: BadgeItem[];
  title: string;
  location: string;
  stats: Stat[];
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {badges.map((b, i) => (
          <Badge key={i} variant={b.variant}>{b.text}</Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="font-[var(--font-heading)] text-[clamp(26px,3vw,36px)] font-bold leading-tight">
        {title}
      </h1>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-[14px] text-[var(--color-muted)]">
        <MapPin size={14} />
        <span>{location}</span>
      </div>

      {/* Stats */}
      {stats.length > 0 && (
        <div className="flex flex-wrap gap-6 mt-1">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2 text-[14px] text-[var(--color-ink)]">
              <span className="text-[var(--color-muted)]">{stat.icon}</span>
              <span>{stat.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
