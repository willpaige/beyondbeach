import type { Meta, StoryObj } from '@storybook/react';
import { Section } from '@/components/layout/Section';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { CategoryThemeProvider } from '@/lib/theme';
import { colors, categoryThemes } from '@/lib/tokens';
import type { CategoryTheme } from '@/lib/tokens';

const meta: Meta = {
  title: 'Design System/Theming',
  tags: ['autodocs'],
};
export default meta;

/** Colour palette */
export const ColourPalette: StoryObj = {
  render: () => (
    <div className="p-8 space-y-8">
      <h2 className="font-heading text-2xl font-semibold mb-4">Brand Colours</h2>
      <div className="grid grid-cols-5 gap-4">
        {Object.entries(colors).map(([name, value]) => (
          <div key={name} className="text-center">
            <div
              className="w-full aspect-square rounded-xl border border-black/5 mb-2"
              style={{ background: value }}
            />
            <div className="text-xs font-semibold">{name}</div>
            <div className="text-xs text-[var(--color-muted)]">{value}</div>
          </div>
        ))}
      </div>

      <h2 className="font-heading text-2xl font-semibold mb-4 mt-12">Category Themes</h2>
      <div className="grid grid-cols-5 gap-4">
        {(Object.keys(categoryThemes) as CategoryTheme[]).map((key) => {
          const t = categoryThemes[key];
          return (
            <div key={key} className="rounded-xl overflow-hidden border border-black/5">
              <div className="h-24" style={{ background: t.accent }} />
              <div className="p-3">
                <div className="text-sm font-semibold">{t.label}</div>
                <div className="text-xs text-[var(--color-muted)]">{t.accent}</div>
                <div className="text-xs text-[var(--color-muted)]">Hover: {t.accentHover}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
};

/** Section background themes */
export const SectionBackgrounds: StoryObj = {
  render: () => (
    <div className="space-y-0">
      {(['white', 'sand', 'warm', 'accent', 'ink', 'ocean'] as const).map((bg) => (
        <Section key={bg} bg={bg} className="px-8 py-12">
          <PageContainer>
            <SectionHeading
              label={`bg="${bg}"`}
              title="Section heading"
              accentText="with accent."
            />
            <p className="text-sm mt-2" style={{ color: 'var(--section-text-muted)' }}>
              Body text automatically adapts to the background theme.
            </p>
            <div className="flex gap-3 mt-4">
              <Button variant="primary" size="sm">Primary</Button>
              <ArrowLink href="#">Arrow link</ArrowLink>
            </div>
          </PageContainer>
        </Section>
      ))}
    </div>
  ),
};

/** Category theme applied to components */
export const CategoryThemes: StoryObj = {
  render: () => (
    <div className="p-8 space-y-6">
      <h2 className="font-heading text-2xl font-semibold">Category Theming</h2>
      <p className="text-sm text-[var(--color-muted)] mb-6">
        Wrapping components in a CategoryThemeProvider switches their accent colours automatically.
      </p>
      {(Object.keys(categoryThemes) as CategoryTheme[]).map((key) => (
        <CategoryThemeProvider key={key} theme={key} className="flex items-center gap-4 p-4 rounded-xl border border-black/5">
          <div
            className="w-1 h-10 rounded-full"
            style={{ background: 'var(--theme-accent)' }}
          />
          <div>
            <div className="text-sm font-semibold">{categoryThemes[key].label}</div>
            <div className="flex gap-2 mt-2">
              <Badge variant="themed">{key}</Badge>
              <Button variant="primary" size="sm">Book Now</Button>
            </div>
          </div>
        </CategoryThemeProvider>
      ))}
    </div>
  ),
};
