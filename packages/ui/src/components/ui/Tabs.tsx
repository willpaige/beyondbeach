'use client';

import { cn } from '@/lib/cn';
import { useState, type ReactNode } from 'react';

type Tab = {
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultIndex?: number;
  className?: string;
};

export function Tabs({ tabs, defaultIndex = 0, className }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className={cn('flex flex-col', className)}>
      <div className="flex border-b border-[var(--color-border)]" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={activeIndex === i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              'px-5 py-3 text-[14px] font-medium transition-all duration-200 cursor-pointer border-b-2 -mb-px',
              activeIndex === i
                ? 'text-[var(--color-ink)] border-[var(--color-accent)]'
                : 'text-[var(--color-muted)] border-transparent hover:text-[var(--color-ink)]',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-5" role="tabpanel">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}
