import { cn } from '@/lib/cn';
import { ArrowRight } from 'lucide-react';

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-[7px] text-[12px] font-semibold tracking-[0.08em] uppercase',
        'text-[var(--theme-accent-hover,var(--color-accent-dk))] no-underline',
        'transition-[gap] duration-200 hover:gap-3',
        className,
      )}
    >
      {children}
      <ArrowRight size={13} strokeWidth={2.5} />
    </a>
  );
}
