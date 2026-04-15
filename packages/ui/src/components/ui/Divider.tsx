import { cn } from '@/lib/cn';

type DividerProps = {
  label?: string;
  className?: string;
};

export function Divider({ label, className }: DividerProps) {
  if (label) {
    return (
      <div className={cn('flex items-center gap-4', className)}>
        <span className="flex-1 h-px bg-[var(--section-border,var(--color-border))]" />
        <span className="text-[13px] text-[var(--color-muted)] font-medium whitespace-nowrap">
          {label}
        </span>
        <span className="flex-1 h-px bg-[var(--section-border,var(--color-border))]" />
      </div>
    );
  }

  return (
    <hr
      className={cn(
        'border-none h-px bg-[var(--section-border,var(--color-border))]',
        className,
      )}
    />
  );
}
