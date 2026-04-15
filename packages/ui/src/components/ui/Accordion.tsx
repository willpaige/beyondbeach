'use client';

import { cn } from '@/lib/cn';
import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

type AccordionItem = {
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
};

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={cn('flex flex-col', className)}>
      {items.map((item, i) => {
        const isOpen = openIndices.has(i);
        return (
          <div key={i} className="border-b border-[var(--color-border)]">
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full py-4 text-left cursor-pointer"
            >
              <span className="text-[15px] font-medium text-[var(--color-ink)]">
                {item.title}
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
                isOpen ? 'max-h-[1000px] pb-4' : 'max-h-0',
              )}
            >
              <div className="text-[14px] text-[var(--color-muted)] leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
