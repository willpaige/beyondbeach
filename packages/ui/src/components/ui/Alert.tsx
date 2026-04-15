'use client';

import { cn } from '@/lib/cn';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';
import type { ReactNode } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

const variantStyles: Record<AlertVariant, { bg: string; border: string; icon: typeof Info }> = {
  info: {
    bg: 'bg-[rgba(170,206,222,0.12)]',
    border: 'border-[var(--color-bb-spray,#AACEDE)]',
    icon: Info,
  },
  success: {
    bg: 'bg-[rgba(85,186,166,0.12)]',
    border: 'border-[var(--color-bb-energy,#55BAA6)]',
    icon: CheckCircle,
  },
  warning: {
    bg: 'bg-[rgba(239,195,72,0.12)]',
    border: 'border-[var(--color-accent,#EFC348)]',
    icon: AlertTriangle,
  },
  error: {
    bg: 'bg-[rgba(236,89,95,0.12)]',
    border: 'border-[var(--color-bb-bright,#EC595F)]',
    icon: XCircle,
  },
};

const iconColors: Record<AlertVariant, string> = {
  info: 'text-[#AACEDE]',
  success: 'text-[#55BAA6]',
  warning: 'text-[#EFC348]',
  error: 'text-[#EC595F]',
};

type AlertProps = {
  variant: AlertVariant;
  title?: string;
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
};

export function Alert({
  variant,
  title,
  children,
  dismissible,
  onDismiss,
  className,
}: AlertProps) {
  const { bg, border, icon: Icon } = variantStyles[variant];

  return (
    <div
      role="alert"
      className={cn(
        'flex gap-3 px-4 py-3 rounded-[var(--radius-btn)] border-l-[3px]',
        bg,
        border,
        className,
      )}
    >
      <Icon size={18} className={cn('flex-shrink-0 mt-0.5', iconColors[variant])} />
      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-[14px] font-semibold text-[var(--color-ink)] m-0 mb-0.5">
            {title}
          </p>
        )}
        <div className="text-[14px] text-[var(--color-ink)] leading-relaxed">
          {children}
        </div>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className="flex-shrink-0 p-0.5 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors cursor-pointer"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
