'use client';

import { createContext, useContext, type ReactNode, type CSSProperties } from 'react';
import { categoryThemes, sectionBgMap, type CategoryTheme, type SectionBg } from './tokens';

// ─── Category Theme Context ──────────────────────────────────────
// Wraps a component tree so all children pick up the category accent colour.
// Usage: <CategoryThemeProvider theme="sailing"><DealCard /><Badge /></CategoryThemeProvider>

const CategoryCtx = createContext<CategoryTheme>('clubs');
export const useCategoryTheme = () => useContext(CategoryCtx);

export function CategoryThemeProvider({
  theme,
  children,
  className,
  style,
}: {
  theme: CategoryTheme;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const t = categoryThemes[theme];
  return (
    <CategoryCtx.Provider value={theme}>
      <div
        data-theme={theme}
        className={className}
        style={{
          '--theme-accent': t.accent,
          '--theme-accent-hover': t.accentHover,
          '--theme-accent-bg': t.accentBg,
          ...style,
        } as CSSProperties}
      >
        {children}
      </div>
    </CategoryCtx.Provider>
  );
}

// ─── Section Theme Wrapper ───────────────────────────────────────
// Sets CSS custom properties for text, background, label colours etc.
// Child components use var(--section-text) instead of hardcoded colours.
// Usage: <Section bg="ink">...</Section>

const SectionBgCtx = createContext<SectionBg>('white');
export const useSectionBg = () => useContext(SectionBgCtx);

export function SectionTheme({
  bg = 'white',
  children,
  className,
  id,
  style,
  as: Tag = 'section',
}: {
  bg?: SectionBg;
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  as?: 'section' | 'div';
}) {
  const s = sectionBgMap[bg];
  return (
    <SectionBgCtx.Provider value={bg}>
      <Tag
        id={id}
        className={className}
        style={{
          '--section-bg': s.bg,
          '--section-text': s.text,
          '--section-text-muted': s.textMuted,
          '--section-label-color': s.labelColor,
          '--section-label-line': s.labelLine,
          '--section-heading-em': s.headingEm,
          '--section-border': s.border,
          background: s.bg,
          color: s.text,
          ...style,
        } as CSSProperties}
      >
        {children}
      </Tag>
    </SectionBgCtx.Provider>
  );
}
