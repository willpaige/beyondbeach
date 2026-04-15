import { cn } from '@/lib/cn';
import { Star, ArrowRight } from 'lucide-react';

type ReviewHighlightProps = {
  score: number;
  count: number;
  reviewsHref: string;
  aboutHref: string;
  className?: string;
};

export function ReviewHighlight({
  score,
  count,
  reviewsHref,
  aboutHref,
  className,
}: ReviewHighlightProps) {
  return (
    <div
      className={cn(
        'flex items-stretch rounded-[12px] overflow-hidden bg-[var(--color-accent)]',
        className,
      )}
    >
      {/* Left: review info */}
      <a
        href={reviewsHref}
        className="flex-1 flex items-center gap-4 px-8 py-6 transition-colors hover:bg-black/[0.04] no-underline"
      >
        <div className="flex gap-0.5 shrink-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={cn(
                i < Math.round(score)
                  ? 'text-[var(--color-ink)] fill-[var(--color-ink)]'
                  : 'text-[var(--color-ink)]/20 fill-[var(--color-ink)]/20',
              )}
            />
          ))}
        </div>
        <span className="text-[14px] font-medium text-[var(--color-ink)]">
          <strong className="font-bold">{score} out of 5</strong> — rated by {count}+ guests
        </span>
        <span className="text-[12px] font-semibold text-[var(--color-ink)]/50 ml-auto whitespace-nowrap flex items-center gap-1">
          Read reviews <ArrowRight size={12} />
        </span>
      </a>

      {/* Right: about button — flush inside the bar */}
      <a
        href={aboutHref}
        className="shrink-0 flex items-center bg-[var(--color-ink)] text-white text-[14px] font-semibold px-9 hover:bg-[#222] transition-colors whitespace-nowrap"
      >
        More About Us
      </a>
    </div>
  );
}
