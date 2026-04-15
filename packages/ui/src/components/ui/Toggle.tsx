'use client';

import { cn } from '@/lib/cn';

type ToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export function Toggle({
  label,
  checked,
  onChange,
  disabled,
  className,
}: ToggleProps) {
  return (
    <label
      className={cn(
        'inline-flex items-center gap-3 cursor-pointer select-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={cn(
          'relative w-[44px] h-[24px] rounded-full transition-all duration-200 flex-shrink-0',
          checked ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]',
          !disabled && 'hover:opacity-90',
        )}
      >
        <span
          className={cn(
            'absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white shadow-sm transition-transform duration-200',
            checked ? 'translate-x-[22px]' : 'translate-x-[2px]',
          )}
        />
      </button>
      <span className="text-[14px] text-[var(--color-ink)]">{label}</span>
    </label>
  );
}
