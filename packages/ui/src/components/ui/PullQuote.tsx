import { cn } from '@/lib/cn';

type PullQuoteProps = {
  quote: string;
  author?: string;
  role?: string;
  className?: string;
};

export function PullQuote({ quote, author, role, className }: PullQuoteProps) {
  return (
    <blockquote
      className={cn(
        'border-l-[3px] border-[var(--color-accent)] pl-6 py-2',
        className,
      )}
    >
      <p className="font-heading text-[20px] leading-relaxed italic text-[var(--color-ink)] m-0">
        &ldquo;{quote}&rdquo;
      </p>
      {(author || role) && (
        <footer className="mt-3 text-[14px] text-[var(--color-muted)]">
          {author && <span className="font-medium">{author}</span>}
          {author && role && <span>, </span>}
          {role && <span>{role}</span>}
        </footer>
      )}
    </blockquote>
  );
}
