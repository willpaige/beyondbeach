import { cn } from '@/lib/cn';
import type { ReactNode, AnchorHTMLAttributes, HTMLAttributes } from 'react';

type CardPadding = 'none' | 'sm' | 'md' | 'lg';

const paddingMap: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

type BaseProps = {
  children: ReactNode;
  className?: string;
  padding?: CardPadding;
  hover?: boolean;
};

type AsLink = BaseProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;
type AsDiv = BaseProps & { href?: never } & Omit<HTMLAttributes<HTMLDivElement>, keyof BaseProps>;

type CardProps = AsLink | AsDiv;

export function Card({
  children,
  className,
  padding = 'md',
  hover,
  ...props
}: CardProps) {
  const classes = cn(
    'rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white overflow-hidden transition-all duration-200',
    paddingMap[padding],
    hover && 'hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] cursor-pointer',
    className,
  );

  if ('href' in props && props.href) {
    return (
      <a className={cn(classes, 'block no-underline text-inherit')} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <div className={classes} {...(props as HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  );
}
