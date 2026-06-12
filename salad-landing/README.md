# Verdant — Salad Landing Page (DES-2068)

Mock-up demo landing page for a packed-salad brand sold in Tops Supermarket / Gourmet Market.
Bilingual (TH / EN), health-conscious "clean eating" mood. Built under the Sellsuki **project** track.

Design direction: **Premium Garden** — Variant B's editorial/premium layout with Variant A's green tone.

## Stack

- **Next.js 16.2.7** (App Router, Turbopack) + React 19
- **Tailwind CSS v4** (CSS-first config via `@theme` in `app/globals.css`, no `tailwind.config.js`)
- **next/font/google** — Fraunces (display serif), Inter (latin sans), IBM Plex Sans Thai (Thai)
- **motion** (`motion/react`) — scroll reveal + hero entrance animations
- Lightweight client-side i18n (see deviation note below)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/
  layout.tsx     fonts + <LanguageProvider> + metadata
  page.tsx       composes the sections
  globals.css    Tailwind v4 import + @theme brand tokens
lib/
  content.ts     bilingual TH/EN copy dictionary
  i18n.tsx       LanguageProvider + useLang/useT hooks
components/
  Header, Hero, Philosophy, Products, Lifestyle, WhereToBuy, Footer
  Reveal.tsx     scroll-into-view fade-up wrapper
public/images/   product/hero/lifestyle photography (next/image, lazy + optimized)
```

## Brand tokens (`app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `--color-leaf` | `#3e7c4f` | primary green |
| `--color-leaf-dark` | `#2c5c39` | hover / gradient end |
| `--color-lime` | `#8fbf5b` | accent |
| `--color-cream` | `#fafaf5` | background |
| `--color-ink` | `#1f2a24` | text / dark section |
| `--color-stone` | `#5f6b60` | muted text |
| `--color-earth` | `#e8e2d0` | borders / dividers |

## Deviation log

- **i18n: next-intl → lightweight client context.** Stage 1 locked next-intl for TH/EN.
  For this demo we use a small client-side `LanguageProvider` (`lib/i18n.tsx`) with a TH/EN
  dictionary (`lib/content.ts`) and `localStorage` persistence instead. Rationale: a single-page
  mock-up does not need routed locales (`/th`, `/en`) or server message loading; an in-page toggle
  is simpler and more robust for a presentation demo. **Revisit before production** if SEO-indexed
  per-locale URLs are required — migrating to next-intl routing is the recommended path.
- **Images are stock photography (Unsplash) for the demo.** Real product/hero/lifestyle photos are
  downloaded into `public/images/` and served via `next/image`. Sourced from Unsplash (free for
  commercial use, no attribution required). **Replace with the client's own brand photography
  before production.**
