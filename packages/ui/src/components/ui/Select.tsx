import { cn } from '@/lib/cn';
import type { SelectHTMLAttributes } from 'react';

type SelectProps = {
  label: string;
  options: { value: string; label: string }[];
  helperText?: string;
  error?: string;
  placeholder?: string;
  className?: string;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'>;

export function Select({
  label,
  options,
  helperText,
  error,
  placeholder,
  className,
  id,
  ...props
}: SelectProps) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={selectId}
        className="text-[14px] font-medium text-[var(--color-ink)]"
      >
        {label}
      </label>
      <select
        id={selectId}
        className={cn(
          'text-[15px] px-3.5 py-2.5 rounded-[var(--radius-btn)] border transition-all duration-200 outline-none appearance-none',
          'bg-white text-[var(--color-ink)] cursor-pointer',
          'bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%237A8084%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22/%3E%3C/svg%3E")] bg-no-repeat bg-[right_12px_center]',
          'pr-10',
          error
            ? 'border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20'
            : 'border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)]',
          props.disabled && 'opacity-50 cursor-not-allowed bg-[var(--color-sand)]',
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-[13px] text-[#C0392B]">{error}</span>
      )}
      {!error && helperText && (
        <span className="text-[13px] text-[var(--color-muted)]">{helperText}</span>
      )}
    </div>
  );
}
