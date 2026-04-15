import { cn } from '@/lib/cn';

type StatProps = {
  value: string;
  label: string;
  size?: 'sm' | 'lg';
  className?: string;
};

export function Stat({ value, label, size = 'sm', className }: StatProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <span
        className={cn(
          'font-heading font-semibold text-[var(--color-ink)]',
          size === 'lg' ? 'text-[40px] leading-tight' : 'text-[28px] leading-tight',
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          'text-[var(--color-muted)]',
          size === 'lg' ? 'text-[15px] mt-1' : 'text-[13px] mt-0.5',
        )}
      >
        {label}
      </span>
    </div>
  );
}
