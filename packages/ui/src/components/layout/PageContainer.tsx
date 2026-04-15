import { cn } from '@/lib/cn';

export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('max-w-[var(--width-page)] mx-auto', className)}>
      {children}
    </div>
  );
}
