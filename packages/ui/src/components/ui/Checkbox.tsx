'use client';

import { cn } from '@/lib/cn';
import { Check } from 'lucide-react';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  className,
}: CheckboxProps) {
  return (
    <label
      className={cn(
        'inline-flex items-center gap-2.5 cursor-pointer select-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={cn(
          'w-[18px] h-[18px] rounded-[3px] border flex items-center justify-center transition-all duration-200 flex-shrink-0',
          checked
            ? 'bg-[var(--color-accent)] border-[var(--color-accent)]'
            : 'bg-white border-[var(--color-border)]',
          !disabled && 'hover:border-[var(--color-accent)]',
        )}
      >
        {checked && <Check size={13} strokeWidth={3} className="text-[var(--color-ink)]" />}
      </button>
      <span className="text-[14px] text-[var(--color-ink)]">{label}</span>
    </label>
  );
}
