import { cn } from '@/lib/cn';
import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'ghost' | 'dark' | 'outline';

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--theme-accent,var(--color-accent))] text-[var(--color-ink)] hover:bg-[var(--theme-accent-hover,var(--color-accent-dk))]',
  ghost:
    'bg-white text-[var(--color-ink)] hover:bg-white/90',
  dark:
    'bg-[var(--color-ink)] text-white hover:bg-[#222]',
  outline:
    'bg-transparent text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-ink)]',
};

type BaseProps = {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
};

type AsLink = BaseProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;
type AsButton = BaseProps & { href?: never } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

type ButtonProps = AsLink | AsButton;

const sizes = {
  sm: 'text-[12px] px-4 py-2',
  md: 'text-[14px] px-8 py-[15px]',
  lg: 'text-[15px] px-10 py-[18px]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--radius-btn)] transition-all duration-200 cursor-pointer',
    'hover:-translate-y-[1px]',
    variants[variant],
    sizes[size],
    className,
  );

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
