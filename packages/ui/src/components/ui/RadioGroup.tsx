'use client';

import { cn } from '@/lib/cn';

type RadioGroupProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  className,
}: RadioGroupProps) {
  return (
    <fieldset className={cn('flex flex-col gap-2.5', className)}>
      <legend className="text-[14px] font-medium text-[var(--color-ink)] mb-1">
        {label}
      </legend>
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <label
            key={opt.value}
            className="inline-flex items-center gap-2.5 cursor-pointer select-none"
          >
            <button
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(opt.value)}
              className={cn(
                'w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0',
                isSelected
                  ? 'border-[var(--color-accent)]'
                  : 'border-[var(--color-border)] hover:border-[var(--color-accent)]',
              )}
            >
              {isSelected && (
                <span className="w-[10px] h-[10px] rounded-full bg-[var(--color-accent)]" />
              )}
            </button>
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={isSelected}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            <span className="text-[14px] text-[var(--color-ink)]">{opt.label}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
