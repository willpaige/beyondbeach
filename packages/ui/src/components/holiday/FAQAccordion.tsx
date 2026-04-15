'use client';

import { cn } from '@/lib/cn';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({
  items,
  className,
}: {
  items: FAQItem[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn('flex flex-col', className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-b border-[var(--color-border)]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex items-center justify-between w-full py-4 text-left cursor-pointer"
            >
              <span className="text-[14px] font-medium text-[var(--color-ink)]">
                {item.question}
              </span>
              <ChevronDown
                size={16}
                className={cn(
                  'text-[var(--color-muted)] transition-transform duration-200 flex-shrink-0 ml-4',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-200',
                isOpen ? 'max-h-[500px] pb-4' : 'max-h-0',
              )}
            >
              <p className="text-[14px] font-light text-[var(--color-muted)] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
