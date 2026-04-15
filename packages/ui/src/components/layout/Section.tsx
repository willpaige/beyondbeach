import { cn } from '@/lib/cn';
import { SectionTheme, CategoryThemeProvider } from '@/lib/theme';
import type { SectionBg, CategoryTheme } from '@/lib/tokens';

type SectionProps = {
  bg?: SectionBg;
  theme?: CategoryTheme;
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div';
  noPadding?: boolean;
};

export function Section({
  bg = 'white',
  theme,
  children,
  className,
  id,
  as = 'section',
  noPadding,
}: SectionProps) {
  const content = (
    <SectionTheme
      bg={bg}
      id={id}
      as={as}
      className={cn(
        !noPadding && 'px-[var(--space-gutter)] py-[var(--space-section)]',
        className,
      )}
    >
      {children}
    </SectionTheme>
  );

  if (theme) {
    return <CategoryThemeProvider theme={theme}>{content}</CategoryThemeProvider>;
  }
  return content;
}
