import { cn } from '@/lib/cn';
import type { TextareaHTMLAttributes } from 'react';

type TextareaProps = {
  label: string;
  helperText?: string;
  error?: string;
  rows?: number;
  className?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows'>;

export function Textarea({
  label,
  helperText,
  error,
  rows = 4,
  className,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={textareaId}
        className="text-[14px] font-medium text-[var(--color-ink)]"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
        rows={rows}
        className={cn(
          'text-[15px] px-3.5 py-2.5 rounded-[var(--radius-btn)] border transition-all duration-200 outline-none resize-y',
          'bg-white text-[var(--color-ink)] placeholder:text-[var(--color-muted)]',
          error
            ? 'border-[#C0392B] focus:ring-2 focus:ring-[#C0392B]/20'
            : 'border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)]',
          props.disabled && 'opacity-50 cursor-not-allowed bg-[var(--color-sand)]',
        )}
        {...props}
      />
      {error && (
        <span className="text-[13px] text-[#C0392B]">{error}</span>
      )}
      {!error && helperText && (
        <span className="text-[13px] text-[var(--color-muted)]">{helperText}</span>
      )}
    </div>
  );
}
