import { cn } from '@/lib/cn';

type NewsletterProps = {
  className?: string;
};

export function Newsletter({ className }: NewsletterProps) {
  return (
    <section
      className={cn(
        'bg-[var(--color-accent)] px-[var(--space-gutter)] py-[var(--space-section)]',
        className,
      )}
    >
      <div className="mx-auto max-w-[520px] text-center">
        {/* Accent bar */}
        <div className="mx-auto mb-6 h-[3px] w-[40px] bg-[var(--color-ink)]" />

        {/* Heading */}
        <h2 className="font-heading text-[clamp(24px,4vw,36px)] font-semibold leading-tight text-[var(--color-ink)]">
          Stay in the loop
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[15px] text-[var(--color-ink)]/50">
          Offers, new destinations and insider tips — straight to your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex gap-0 overflow-hidden rounded-[var(--radius-btn)]"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white px-5 py-[15px] text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] outline-none"
          />
          <button
            type="submit"
            className="bg-[var(--color-ink)] px-8 py-[15px] text-[14px] font-semibold text-white hover:bg-[#222] transition-colors cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        {/* Privacy note */}
        <p className="mt-4 text-[11px] text-[var(--color-ink)]/35">
          No spam, ever. Unsubscribe anytime. See our privacy policy.
        </p>
      </div>
    </section>
  );
}
