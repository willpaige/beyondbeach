import { cn } from '@/lib/cn';
import { Check, X } from 'lucide-react';

type IncludesItem = {
  text: string;
  included: boolean;
};

export function IncludesGrid({
  items,
  className,
}: {
  items: IncludesItem[];
  className?: string;
}) {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-3', className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            'flex items-center gap-2.5 text-[14px]',
            !item.included && 'opacity-50',
          )}
        >
          {item.included ? (
            <Check size={16} className="text-[var(--color-bb-energy)] flex-shrink-0" />
          ) : (
            <X size={16} className="text-[var(--color-bb-powder)] flex-shrink-0" />
          )}
          <span className={cn(!item.included && 'line-through')}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
