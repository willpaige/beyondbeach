'use client';

import { cn } from '@/lib/cn';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

type TagVariant = 'default' | 'clubs' | 'sailing' | 'mountains' | 'ski';

const variantStyles: Record<TagVariant, string> = {
  default: 'bg-[var(--color-sand)] text-[var(--color-ink)]',
  clubs: 'bg-[rgba(239,195,72,0.12)] text-[#B8891A]',
  sailing: 'bg-[rgba(170,206,222,0.12)] text-[#3A7A9B]',
  mountains: 'bg-[rgba(85,186,166,0.12)] text-[#2D8A6F]',
  ski: 'bg-[rgba(188,191,193,0.12)] text-[#6B6E70]',
};

type TagProps = {
  children: ReactNode;
  variant?: TagVariant;
  onRemove?: () => void;
  className?: string;
};

export function Tag({ children, variant = 'default', onRemove, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1 rounded-[var(--radius-btn)]',
        variantStyles[variant],
        className,
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
          aria-label="Remove"
        >
          <X size={10} />
        </button>
      )}
    </span>
  );
}
