import { cn } from '@/lib/cn';
import { Label } from './Label';

export function SectionHeading({
  label,
  title,
  accentText,
  body,
  centered,
  className,
}: {
  label?: string;
  title: string;
  accentText?: string;
  body?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {label && (
        <Label centered={centered} className="mb-3">
          {label}
        </Label>
      )}
      <h2
        className={cn(
          'font-heading text-[clamp(28px,3.5vw,44px)] font-semibold tracking-[-0.02em] leading-[1.15] mb-[18px]',
          'text-[var(--section-text)]',
        )}
      >
        {title}
        {accentText && (
          <>
            {' '}
            <em className="not-italic text-[var(--section-heading-em)]">{accentText}</em>
          </>
        )}
      </h2>
      {body && (
        <p
          className={cn(
            'text-[15px] font-light leading-[1.8] max-w-[520px]',
            'text-[var(--section-text-muted)]',
            centered && 'mx-auto',
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
