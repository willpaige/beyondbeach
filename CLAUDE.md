# BeyondBeach — Project Guidelines

## Project Overview

BeyondBeach is an active holiday company offering Beach Clubs, Sailing, Mountain adventures and Ski holidays across Greece, Portugal and France. This monorepo contains three Next.js frontend apps, one NestJS API backend, and shared packages.

## Architecture

```
apps/
  marketing/    → beyondbeach.com (Vercel, public, no auth)
  admin/        → admin.beyondbeach.com (Vercel, staff auth, shadcn UI, bespoke CMS)
  portal/       → portal.beyondbeach.com (Vercel, guest auth, shadcn UI)
  api/          → api.beyondbeach.com (Railway, NestJS, single backend)
packages/
  ui/           → Design system + Storybook (marketing components)
  tokens/       → Design tokens, colours, spacing, shadcn theme CSS
  types/        → Shared TypeScript types
  db/           → Prisma schema + Neon Postgres client
  auth/         → Shared auth config
  checkfront/   → Checkfront API v3 client
  gokyte/       → Kyte airline distribution API client
```

### API Architecture (IMPORTANT)

The NestJS API on Railway is the **single backend**. All three frontend apps talk to `api.beyondbeach.com` — they NEVER call Checkfront or Kyte directly.

```
marketing  ─┐
admin      ─┤→  apps/api (Railway)  →  Checkfront + Kyte + Neon DB
portal     ─┘
```

API modules:
- `auth/` — JWT auth for staff + guests
- `availability/` — Checkfront availability queries (public)
- `bookings/` — Booking CRUD (Checkfront + our DB)
- `flights/` — Kyte flight search, hold, confirm
- `webhooks/` — Inbound from Checkfront + Kyte
- `content/` — Bespoke CMS (holidays, destinations, deals, blog)
- `pipeline/` — Booking stage management (replaces Google Folders CRM)
- `health/` — Uptime monitoring

### Hosting

| App | Host | Domain |
|---|---|---|
| marketing | Vercel | beyondbeach.com |
| admin | Vercel | admin.beyondbeach.com |
| portal | Vercel | portal.beyondbeach.com |
| api | Railway | api.beyondbeach.com |
| database | Neon | — |

## Strict Rules

### 1. Use existing components — do not reinvent

- **Marketing site** (`apps/marketing`): Import components from `@beyondbeach/ui`. Every UI element has already been built and storybooked. Do NOT create ad-hoc styled divs when a component exists.
- **Admin + Portal** (`apps/admin`, `apps/portal`): Use shadcn/ui components exclusively. The BB theme is applied via `@beyondbeach/tokens/src/shadcn-theme.css`. Do NOT use custom colours — use the shadcn semantic tokens (`primary`, `destructive`, `muted`, etc.).
- Before building any new component, check Storybook (`npm run storybook` from root) to see if it already exists.

### 2. Holiday types are locked — use exactly these

| Type | Colour | Hex | CSS var | Includes |
|---|---|---|---|---|
| **Beach Clubs** | Yellow | `#EFC348` | `--color-accent` | Watersports, yoga, wellness, BlitzFitness |
| **Sailing** | Blue | `#AACEDE` | `--color-bb-spray` | Flotilla, learn to sail, yacht charter, singles, dinghy |
| **Mountains** | Green | `#55BAA6` | `--color-bb-energy` | Alpine family, guided walking, mountain biking, cycling |
| **Ski** | Grey | `#BCBFC1` | `--color-bb-powder` | Skiing, snowboarding (Val Thorens, Meribel, Vaujany) |

Never use "Health", "Wellness", "Alpine", "Water", "Snow", or "Land" as top-level category names. These are sub-activities within the four types above.

### 3. Theming — use CSS custom properties, not hardcoded values

**Section theming** — Wrap sections in `<Section bg="ink">` or `<Section bg="accent">`. Child components auto-adapt text/label/heading colours via `var(--section-text)`, `var(--section-text-muted)`, etc.

**Category theming** — Wrap components in `<Section theme="sailing">` or `<CategoryThemeProvider theme="mountains">`. All buttons, badges, links, and accents switch to the category colour via `var(--theme-accent)`.

**Never hardcode** brand colours in component code. Always use:
- `var(--color-accent)` for BB Yellow
- `var(--color-bb-spray)` for Sailing Blue
- `var(--color-bb-energy)` for Mountains Green
- `var(--color-bb-powder)` for Ski Grey
- `var(--color-bb-bright)` for alerts/offers Red
- `var(--theme-accent)` for the current category accent (context-dependent)
- `var(--section-text)` for text that adapts to background

### 4. Typography

- **Headings**: Poppins (`font-heading` / `var(--font-heading)`)
- **Body**: Inter (`font-body` / `var(--font-body)`)
- **Base font size**: 17px (set on `<html>`)
- Admin + Portal use Inter only (via shadcn's `--font-sans`)

### 5. Spacing — use fluid tokens

Do not use fixed pixel values for section spacing. Use these fluid values:
- `var(--space-section)` — `clamp(80px, 10vw, 140px)` — between major sections
- `var(--space-half)` — `clamp(40px, 5vw, 70px)` — lighter breaks
- `var(--space-inner)` — `clamp(32px, 4vw, 56px)` — within sections (heading to content)
- `var(--space-gutter)` — `clamp(24px, 4vw, 64px)` — page side padding

### 6. Shared types — import from `@beyondbeach/types`

All data types (Holiday, Booking, User, Review, Deal, etc.) live in `packages/types`. Import from `@beyondbeach/types`, never redefine locally.

### 7. Database — use the shared Prisma client

Import `{ db }` from `@beyondbeach/db`. The schema lives in `packages/db/prisma/schema.prisma`. Run migrations from the package: `npm run db:push` from root.

### 8. Images

- Marketing site images load from `beyondbeach.com` — configure `remotePatterns` in `next.config.ts`
- Use `next/image` for all images in Next.js apps
- The logo SVG is at `public/BeyondBeach_horizontal.svg`
- Trust logos (ATOL, BTA, IPP, RYA) are in the `images/` directory at the project root

### 9. Component naming conventions

- PascalCase for components: `HolidayCard`, `BookingCard`, `SectionHeading`
- Stories: `ComponentName.stories.tsx` in `packages/ui/src/stories/`
- Components organised by domain: `cards/`, `layout/`, `sections/`, `reviews/`, `holiday/`, `booking/`, `gallery/`, `navigation/`, `modals/`, `ui/`

### 10. No unvetted third-party UI libraries

Do not add Material UI, Chakra, Ant Design, or similar. The marketing site uses `@beyondbeach/ui`. Admin/portal use shadcn. That's it.

## Destinations (real data)

| Destination | Country | Holidays available |
|---|---|---|
| Kefalonia | Greece | Lixouri Bay Beach Club, Villa Club, Intro to Sailing, Kefalonia Flotilla, West Coast Flotilla, Singles Sailing, Yacht Charter, Yoga & Wellbeing |
| Evia | Greece | Stira Bay Beach Club |
| Cabedelo | Portugal | Feel Viana |
| Vaujany | France | Alpine Family Club, Ski Vaujany |
| Val Thorens | France | Ski Val Thorens |
| Meribel | France | Ski Meribel |

## Running the project

```bash
npm install              # Install all workspace dependencies
npm run dev              # Start all apps in parallel (turbo)
npm run storybook        # Start Storybook for design system
npm run build            # Build all apps
npm run db:push          # Push Prisma schema to Neon
```

Individual apps:
```bash
cd apps/marketing && npm run dev    # localhost:3000
cd apps/admin && npm run dev        # localhost:3001
cd apps/portal && npm run dev       # localhost:3002
```

## Deployment

Three Vercel projects, same repo:
- `apps/marketing` → `beyondbeach.com`
- `apps/admin` → `admin.beyondbeach.com`
- `apps/portal` → `portal.beyondbeach.com`

Environment variables needed: see `.env.example`

## Contact & business info

- Phone: 01548 288459
- Hours: Mon–Fri 9am–6pm, Sat 9am–1pm
- Location: South Devon, UK
- Operating since: 2001
- Accreditations: ATOL Protected, British Travel Awards Winner, IPP Insured, RYA Recognised
