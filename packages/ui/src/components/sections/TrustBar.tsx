import { cn } from '@/lib/cn';

type TrustItem = {
  logoSrc?: string;
  value?: string;
  label: string;
};

type TrustBarProps = {
  className?: string;
  items?: TrustItem[];
};

const defaultItems: TrustItem[] = [
  { value: 'ATOL', label: 'Protected' },
  { value: 'IPP', label: 'Insured' },
  { value: '25+', label: 'Years of holidays' },
  { value: '4.9', label: 'Guest rating' },
  { value: '01548', label: 'Call us today' },
];

export function TrustBar({ className, items = defaultItems }: TrustBarProps) {
  return (
    <div
      className={cn(
        'bg-white px-[var(--space-gutter)] py-5',
        className,
      )}
    >
      <div className="mx-auto max-w-[var(--width-page)] flex items-center justify-center divide-x divide-[var(--color-border)]">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-6 md:px-8"
          >
            {item.logoSrc ? (
              <img
                src={item.logoSrc}
                alt={item.label}
                className="h-[40px] w-auto object-contain"
              />
            ) : item.value ? (
              <div className="flex flex-col">
                <span className="font-heading text-[24px] font-bold leading-tight text-[var(--color-ink)]">
                  {item.value}
                </span>
                <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ) : (
              <span className="text-[11px] text-[var(--color-muted)] uppercase tracking-wider">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
