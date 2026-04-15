import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

type HighlightItem = {
  icon: ReactNode;
  text: string;
  subtext: string;
};

export function HighlightsBar({
  items,
  className,
}: {
  items: HighlightItem[];
  className?: string;
}) {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 gap-6', className)}>
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="w-[40px] h-[40px] flex-shrink-0 flex items-center justify-center rounded-[10px] bg-[var(--color-sand)]">
            {item.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-semibold text-[var(--color-ink)]">{item.text}</span>
            <span className="text-[11px] text-[var(--color-muted)]">{item.subtext}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
