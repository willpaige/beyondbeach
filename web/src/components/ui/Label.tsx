import { cn } from '@/lib/cn';

export function Label({
  children,
  className,
  centered,
}: {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 text-[10px] font-bold tracking-[0.16em] uppercase',
        'text-[var(--section-label-color)]',
        'before:content-[""] before:w-6 before:h-[2px] before:bg-[var(--section-label-line)]',
        centered && 'justify-center',
        className,
      )}
    >
      {children}
    </div>
  );
}
