/**
 * BeyondBeach Design Tokens
 * Single source of truth for all design values.
 */

// ─── Brand Colours ───────────────────────────────────────────────
export const colors = {
  ink: '#000000',
  accent: '#EFC348',      // BB Sand / primary yellow
  'accent-dk': '#D4A832',
  sand: '#FAF8F5',
  warm: '#F3F0EB',
  white: '#FFFFFF',
  muted: '#7A8084',
  border: 'rgba(0,0,0,0.06)',

  // Category accent colours
  'bb-spray': '#AACEDE',   // Sailing
  'bb-energy': '#55BAA6',  // Health / Wellness
  'bb-powder': '#BCBFC1',  // Ski / Alpine
  'bb-bright': '#EC595F',  // Offers / Alerts
} as const;

// ─── Category Themes ─────────────────────────────────────────────
export type CategoryTheme = 'clubs' | 'sailing' | 'mountains' | 'ski' | 'bright';

export const categoryThemes: Record<CategoryTheme, {
  accent: string;
  accentHover: string;
  accentBg: string;
  label: string;
}> = {
  clubs: {
    accent: '#EFC348',
    accentHover: '#B8891A',
    accentBg: 'rgba(239,195,72,0.12)',
    label: 'Beach Clubs',
  },
  sailing: {
    accent: '#AACEDE',
    accentHover: '#3A7A9B',
    accentBg: 'rgba(170,206,222,0.12)',
    label: 'Sailing',
  },
  mountains: {
    accent: '#55BAA6',
    accentHover: '#2D8A6F',
    accentBg: 'rgba(85,186,166,0.12)',
    label: 'Mountains',
  },
  ski: {
    accent: '#BCBFC1',
    accentHover: '#6B6E70',
    accentBg: 'rgba(188,191,193,0.12)',
    label: 'Ski',
  },
  bright: {
    accent: '#EC595F',
    accentHover: '#C0392B',
    accentBg: 'rgba(236,89,95,0.12)',
    label: 'Offers',
  },
};

// ─── Section Background Themes ───────────────────────────────────
export type SectionBg = 'white' | 'sand' | 'warm' | 'ink' | 'accent' | 'ocean';

export const sectionBgMap: Record<SectionBg, {
  bg: string;
  text: string;
  textMuted: string;
  labelColor: string;
  labelLine: string;
  headingEm: string;
  border: string;
}> = {
  white: {
    bg: 'var(--color-white)',
    text: 'var(--color-ink)',
    textMuted: 'var(--color-muted)',
    labelColor: 'var(--color-accent-dk)',
    labelLine: 'var(--color-accent)',
    headingEm: 'var(--color-accent)',
    border: 'var(--color-border)',
  },
  sand: {
    bg: 'var(--color-sand)',
    text: 'var(--color-ink)',
    textMuted: 'var(--color-muted)',
    labelColor: 'var(--color-accent-dk)',
    labelLine: 'var(--color-accent)',
    headingEm: 'var(--color-accent)',
    border: 'var(--color-border)',
  },
  warm: {
    bg: 'var(--color-warm)',
    text: 'var(--color-ink)',
    textMuted: 'var(--color-muted)',
    labelColor: 'var(--color-ink)',
    labelLine: 'rgba(0,0,0,0.2)',
    headingEm: 'var(--color-accent)',
    border: 'var(--color-border)',
  },
  ink: {
    bg: 'var(--color-ink)',
    text: '#FFFFFF',
    textMuted: 'rgba(255,255,255,0.5)',
    labelColor: 'rgba(255,255,255,0.45)',
    labelLine: 'rgba(255,255,255,0.2)',
    headingEm: 'rgba(255,255,255,0.6)',
    border: 'rgba(255,255,255,0.06)',
  },
  accent: {
    bg: 'var(--color-accent)',
    text: 'var(--color-ink)',
    textMuted: 'rgba(0,0,0,0.5)',
    labelColor: 'var(--color-ink)',
    labelLine: 'rgba(0,0,0,0.2)',
    headingEm: '#3A3D3F',
    border: 'rgba(0,0,0,0.1)',
  },
  ocean: {
    bg: '#1B5465',
    text: '#FFFFFF',
    textMuted: 'rgba(255,255,255,0.5)',
    labelColor: 'rgba(255,255,255,0.45)',
    labelLine: 'rgba(255,255,255,0.2)',
    headingEm: 'rgba(255,255,255,0.6)',
    border: 'rgba(255,255,255,0.08)',
  },
};

// ─── Spacing ─────────────────────────────────────────────────────
export const spacing = {
  section: 'clamp(80px, 10vw, 140px)',
  half: 'clamp(40px, 5vw, 70px)',
  inner: 'clamp(32px, 4vw, 56px)',
  gutter: 'clamp(24px, 4vw, 64px)',
} as const;

// ─── Border Radius ───────────────────────────────────────────────
export const radii = {
  btn: '6px',
  card: '10px',
  'card-lg': '12px',
  search: '16px',
  pill: '100px',
} as const;

// ─── Page ────────────────────────────────────────────────────────
export const page = {
  maxWidth: '1280px',
  baseFontSize: '17px',
} as const;
