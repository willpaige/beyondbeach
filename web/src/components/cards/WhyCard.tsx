import { cn } from '@/lib/cn';

export function WhyCard({
  imageSrc,
  imageAlt,
  title,
  body,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-[88px] h-[88px] rounded-full object-cover mb-4"
      />
      <h3
        className="font-[family-name:var(--font-poppins)] text-[16px] font-semibold text-[var(--section-text)] mb-2"
      >
        {title}
      </h3>
      <p className="text-[13px] font-light text-[var(--color-muted)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}
