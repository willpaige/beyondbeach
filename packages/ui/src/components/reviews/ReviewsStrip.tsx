import { cn } from '@/lib/cn';
import { Star } from 'lucide-react';

type Quote = {
  text: string;
  author: string;
};

type ReviewsStripProps = {
  score: number;
  reviewCount: number;
  quotes: Quote[];
  className?: string;
};

export function ReviewsStrip({ score, reviewCount, quotes, className }: ReviewsStripProps) {
  return (
    <div
      className={cn(
        'bg-[var(--color-ink)] px-[var(--space-gutter)] py-6 flex items-center gap-0 overflow-hidden',
        className,
      )}
    >
      {/* Score block */}
      <div className="shrink-0 flex flex-col items-center px-8">
        <span className="font-heading text-[48px] font-bold leading-none text-white">
          {score}
        </span>
        <div className="flex gap-0.5 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={cn(
                i < Math.round(score)
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-white/20 fill-white/20',
              )}
            />
          ))}
        </div>
        <span className="mt-1.5 text-[13px] text-white/40">
          {reviewCount}+ reviews
        </span>
      </div>

      {/* Divider */}
      <div className="shrink-0 w-px self-stretch bg-white/8" />

      {/* Scrolling quotes */}
      <div className="flex-1 overflow-x-auto flex items-center gap-8 px-8 scrollbar-hide">
        {quotes.map((q, i) => (
          <blockquote key={i} className="shrink-0 max-w-[340px]">
            <p className="text-[14px] italic text-white/75 leading-relaxed">
              &ldquo;{q.text}&rdquo;
            </p>
            <cite className="mt-1.5 block text-[11px] text-white/35 not-italic">
              {q.author}
            </cite>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
