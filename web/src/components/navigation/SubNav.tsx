'use client';

import { cn } from '@/lib/cn';
import { useEffect, useRef, useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

export function SubNav({
  items,
  ctaHref,
  ctaLabel,
  className,
}: {
  items: NavItem[];
  ctaHref: string;
  ctaLabel: string;
  className?: string;
}) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? '');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      ref={navRef}
      className={cn(
        'sticky top-0 z-40 bg-white border-b border-[var(--color-border)] flex items-center',
        className,
      )}
    >
      <div className="flex-1 overflow-x-auto hide-scrollbar">
        <div className="flex items-center gap-0 px-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'flex-shrink-0 px-4 py-3 text-[13px] font-medium text-[var(--color-muted)] border-b-2 border-transparent transition-colors hover:text-[var(--color-ink)]',
                activeHref === item.href &&
                  'text-[var(--color-ink)] border-b-[var(--color-accent)]',
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 px-4 py-2">
        <a
          href={ctaHref}
          className="inline-flex items-center px-5 py-2 text-[13px] font-semibold rounded-[var(--radius-pill)] bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[var(--color-accent-dk)] transition-colors"
        >
          {ctaLabel}
        </a>
      </div>
    </nav>
  );
}
