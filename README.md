# Salil Chandwadkar — Portfolio

Premium, minimal, dark portfolio for a Backend / AI / Full-Stack engineer.
Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind v4**,
**Framer Motion**, and Vercel's **Geist** font.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Pages (routes)

| Route          | Page        |
| -------------- | ----------- |
| `/`            | Home (all sections) |
| `/about`       | About + Skills |
| `/projects`    | Projects + Tech stack |
| `/experience`  | Experience timeline + Skills |
| `/contact`     | Contact form |

## Where to edit things

- **All content** (name, links, projects, experience, skills, stats) →
  `src/lib/data.ts`  ← start here
- **Icons** (tech, social, UI, project artwork) → `src/lib/icons.tsx`
- **Design tokens & styles** (colors, spacing, components) → `src/app/globals.css`
- **Sections** → `src/components/sections/*`
- **Nav / Footer / Reveal** → `src/components/*`

### Quick TODOs

1. In `src/lib/data.ts`, replace placeholder links:
   `github`, `linkedin`, `twitter`, and `resumeUrl`
   (drop your résumé PDF in `/public` and set e.g. `resumeUrl: "/salil-resume.pdf"`).
2. Update each project's `demo` and `repo` URLs.

## Design tokens

```
bg #09090B · surface #111113 · accent #7C5CFF · accent-2 #6EA8FE
text #FAFAFA · muted #A1A1AA · radius 20px · 8px spacing scale
```

## Deploy

Push to GitHub and import into Vercel — zero config. Or run `vercel` from this folder.
