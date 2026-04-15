import { cn } from '@/lib/cn';
import { Badge } from '@/components/ui/Badge';

export function DealCard({
  imageSrc,
  imageAlt,
  badgeText,
  offerText,
  destination,
  title,
  meta,
  wasPrice,
  nowPrice,
  perPerson,
  saveText,
  href,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  offerText: string;
  destination: string;
  title: string;
  meta: string;
  wasPrice: string;
  nowPrice: string;
  perPerson?: string;
  saveText: string;
  href?: string;
  className?: string;
}) {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cn(
        'group block bg-white border border-[var(--color-border)] rounded-[10px] overflow-hidden',
        'transition-all duration-200 hover:-translate-y-[4px] hover:shadow-lg',
        className,
      )}
    >
      {/* image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <Badge variant="type">{badgeText}</Badge>
          <Badge variant="offer">{offerText}</Badge>
        </div>
      </div>

      {/* body */}
      <div className="p-4 flex flex-col gap-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
          {destination}
        </span>
        <h3 className="font-[family-name:var(--font-poppins)] text-[18px] font-semibold text-[var(--section-text)] leading-tight">
          {title}
        </h3>
        <p className="text-[13px] text-[var(--color-muted)]">{meta}</p>

        {/* pricing footer */}
        <div className="flex items-center gap-3 mt-2 pt-3 border-t border-[var(--color-border)]">
          <span className="text-[13px] text-[var(--color-muted)] line-through">{wasPrice}</span>
          <span className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold text-[var(--section-text)]">
            {nowPrice}
          </span>
          {perPerson && (
            <span className="text-[11px] text-[var(--color-muted)]">{perPerson}</span>
          )}
          <span className="ml-auto text-[11px] font-semibold text-white bg-[#C0392B] px-2 py-0.5 rounded">
            {saveText}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
