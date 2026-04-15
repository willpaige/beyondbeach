import { cn } from '@/lib/cn';

type TimelineItem = {
  time: string;
  title: string;
  description: string;
};

export function DayTimeline({
  items,
  className,
}: {
  items: TimelineItem[];
  className?: string;
}) {
  return (
    <div className={cn('relative flex flex-col', className)}>
      {/* Vertical line */}
      <div className="absolute left-[5px] top-[6px] bottom-[6px] w-px bg-[var(--color-border)]" />

      {items.map((item, i) => (
        <div key={i} className="relative pl-8 pb-6 last:pb-0">
          {/* Dot */}
          <div className="absolute left-0 top-[5px] w-[11px] h-[11px] rounded-full bg-[var(--color-accent)] border-2 border-white" />

          {/* Content */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[var(--color-accent-dk)]">
              {item.time}
            </span>
            <span className="text-[14px] font-medium text-[var(--color-ink)]">
              {item.title}
            </span>
            <span className="text-[13px] text-[var(--color-muted)] leading-relaxed">
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
