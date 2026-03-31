# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

HamiltonVolt — a landing site for a sub-metering service targeting landlords of multi-unit rental properties in Hamilton & Burlington, Ontario. The site is conversion-focused with WhatsApp as the primary CTA channel.

## Tech Stack

- **Eleventy 3.x** (static site generator), ESM (`"type": "module"`)
- **Nunjucks** templates (`.njk`)
- **Tailwind CSS v4** via CDN (no local build step for CSS)
- **Google Fonts**: DM Serif Display (headings), Inter (body)
- **Deployment**: Vercel

## Commands

```bash
npm run dev     # Local dev server with hot reload (eleventy --serve)
npm run build   # Production build → _site/
```

No tests, no linter, no CI pipeline.

## Architecture

### Data Flow

`site.config.js` (project root) is the **single source of truth** for all site content — business info, contact details, pricing, FAQ, neighbourhoods, image paths, feature flags. It is re-exported by `src/_data/site.js`, making it available as `site` in every Nunjucks template.

To change any content, edit `site.config.js`. Templates are presentation-only.

### Directory Layout

- `src/` — Eleventy input directory
  - `_includes/` — Nunjucks partials: `base.njk` (HTML shell + SEO/schema), `nav.njk`, `hero.njk`, `footer.njk`
  - `_data/site.js` — bridges `site.config.js` into Eleventy's data cascade
  - `index.njk` — homepage (assembles all sections via includes + inline sections)
  - `llms.njk` — generates `/llms.txt` (plain-text site summary for LLM crawlers)
  - `robots.njk`, `sitemap.njk` — SEO files
- `img/` — static images (passthrough-copied to `_site/img/`)
- `_site/` — build output (gitignored)
- `eleventy.config.js` — Eleventy config: passthrough copy, custom filters (`waUrl`, `isoDate`)

### Feature Flags in site.config.js

- `showTrustBar: false` — stats section hidden until real numbers exist
- `showTestimonials: false` — testimonials hidden until real customer quotes exist

### Custom Filters (eleventy.config.js)

- `waUrl` — takes the `site` object, returns a WhatsApp `wa.me` URL with pre-filled message
- `isoDate` — formats a date to `YYYY-MM-DD` for the sitemap

### SEO & Structured Data

`base.njk` outputs comprehensive meta tags (Open Graph, Twitter Card, geo-tags) and two JSON-LD schemas: `LocalBusiness` (with neighbourhood-level `areaServed`) and `FAQPage`. FAQ items in `site.config.js` carry both `answer` (HTML for rendering) and `schemaAnswer` (plain text for structured data).

### Client-Side JS (in base.njk)

Vanilla JS, no framework: IntersectionObserver scroll-reveal with `.reveal` class, nav shadow on scroll, FAQ accordion, `prefers-reduced-motion` support.

### Tailwind Theme Colors

Defined inline in `base.njk` via `@theme`: navy (`#0F172A`), emerald (`#10B981`), surface (`#F8FAFC`). Reference these rather than inventing new colors.
