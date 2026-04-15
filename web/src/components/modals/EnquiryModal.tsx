'use client';

import { cn } from '@/lib/cn';
import { X } from 'lucide-react';
import { useEffect, useCallback } from 'react';

type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export function EnquiryModal({ isOpen, onClose, className }: EnquiryModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Card */}
      <div
        className={cn(
          'relative w-full max-w-[480px] mx-4 bg-white rounded-[12px] p-12 shadow-2xl',
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="font-heading text-[22px] font-semibold text-[var(--color-ink)]">
          Make an Enquiry
        </h2>
        <p className="mt-1 text-[14px] text-[var(--color-muted)]">
          Tell us what you&rsquo;re looking for and we&rsquo;ll get back to you.
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 space-y-4"
        >
          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-ink)] mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-[var(--color-border)] rounded-[var(--radius-btn)] px-4 py-3 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-ink)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-ink)] mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-[var(--color-border)] rounded-[var(--radius-btn)] px-4 py-3 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-ink)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-ink)] mb-1">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full border border-[var(--color-border)] rounded-[var(--radius-btn)] px-4 py-3 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-ink)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-ink)] mb-1">
              Interested In
            </label>
            <select
              className="w-full border border-[var(--color-border)] rounded-[var(--radius-btn)] px-4 py-3 text-[14px] text-[var(--color-ink)] bg-white outline-none focus:border-[var(--color-ink)] transition-colors cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>Select a holiday type</option>
              <option>Beach Clubs</option>
              <option>Sailing Flotillas</option>
              <option>Ski &amp; Snowboard</option>
              <option>Active Adventures</option>
              <option>Something Else</option>
            </select>
          </div>

          <div>
            <label className="block text-[12px] font-semibold text-[var(--color-ink)] mb-1">
              Message
            </label>
            <textarea
              placeholder="Tell us about your ideal holiday..."
              rows={4}
              className="w-full border border-[var(--color-border)] rounded-[var(--radius-btn)] px-4 py-3 text-[14px] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-ink)] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold text-[14px] py-[15px] rounded-[var(--radius-btn)] hover:bg-[var(--color-accent-dk)] transition-colors cursor-pointer"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
