import { cn } from '@/lib/cn';

export function ActivityCard({
  imageSrc,
  imageAlt,
  name,
  tag,
  href,
  className,
}: {
  imageSrc: string;
  imageAlt: string;
  name: string;
  tag: string;
  href?: string;
  className?: string;
}) {
  const Wrapper = href ? 'a' : 'div';

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cn(
        'group block w-[200px] bg-white rounded-[10px] overflow-hidden flex-shrink-0',
        'transition-all duration-200 hover:-translate-y-[4px] hover:shadow-lg',
        className,
      )}
    >
      {/* image */}
      <div className="h-[200px] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* body */}
      <div className="p-3">
        <h3 className="font-[family-name:var(--font-poppins)] text-[15px] font-semibold text-[var(--section-text)]">
          {name}
        </h3>
        <p className="text-[13px] text-[var(--color-muted)] mt-0.5">{tag}</p>
      </div>
    </Wrapper>
  );
}
