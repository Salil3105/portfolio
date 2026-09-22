<div align="center">

# Salil Chandwadkar — Portfolio

**Software Engineer · Java · Spring Boot · Kafka · AWS**

A dark, minimal portfolio built around event-driven backend work — with an ambient
backdrop that streams messages across topic lanes, because that's what I build.

[**Live site →**](https://salilchandwadkar.vercel.app)

[![CI](https://github.com/Salil3105/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Salil3105/portfolio/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-087ea4?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://typescriptlang.org)

![Hero illustration](public/hero.png)

</div>

---

## Features

- **Five routes** — Home, About, Projects, Experience, Contact — sharing one set of section components
- **Ambient backdrop** — drifting aurora, a faint infrastructure grid, a cursor spotlight, and Kafka-style event streams flowing past service nodes. All CSS `transform`/`opacity`, so it animates on the compositor
- **Working contact form** — posts to a route handler that validates and sends through Resend, with `reply-to` set to the sender
- **Motion that behaves** — scroll reveals and hover states via Framer Motion, all disabled under `prefers-reduced-motion`
- **Responsive** — 12-column desktop down to a single column with a hamburger menu at phone width
- **Content in one file** — everything editable lives in [`src/lib/data.ts`](src/lib/data.ts)

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Motion | Framer Motion |
| Type | Geist Sans / Geist Mono |
| Email | Resend |
| Hosting | Vercel |

## Getting started

```bash
git clone https://github.com/Salil3105/portfolio.git
cd portfolio
npm install
cp .env.example .env.local   # then add your Resend key
npm run dev
```

Open <http://localhost:3000>.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes, to send mail | API key from [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_FROM` | no | Sender address. Defaults to Resend's shared `onboarding@resend.dev`, which needs no domain setup |

Without `RESEND_API_KEY` the contact route fails loudly rather than pretending to send.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Project structure

```
src/
├─ app/
│  ├─ api/contact/route.ts   # contact form handler (Resend)
│  ├─ about|projects|experience|contact/
│  ├─ layout.tsx             # fonts, metadata, backdrop, nav, footer
│  └─ globals.css            # design tokens + all component styles
├─ components/
│  ├─ Backdrop.tsx           # aurora, grid, spotlight, event streams
│  ├─ sections/              # Hero, About, TechStack, Projects, …
│  └─ …
└─ lib/
   ├─ data.ts                # ← all content lives here
   └─ icons.tsx
scripts/
└─ cutout.py                 # backdrop removal for product renders
```

## Image pipeline

The hero render was shot on a near-black studio backdrop, which shows as a visible
rectangle once the page has any colour behind it. [`scripts/cutout.py`](scripts/cutout.py)
removes it in two steps, and the order matters:

1. Subtract the backdrop's pedestal so the frame is pure black.
2. Derive alpha from the remaining luminance and un-premultiply the colour.

Doing step 2 first is what produces grey halos — the backdrop's own colour divided by
a small alpha blooms into a fringe.

```bash
python3 scripts/cutout.py render.png public/hero.png
```

## Deployment

Deployed on Vercel and connected to this repository, so every push to `main` ships
automatically. CI (lint, type-check, build) runs on each push and pull request via
[GitHub Actions](.github/workflows/ci.yml).

Set `RESEND_API_KEY` in the Vercel project's environment variables — `.env.local`
is local only and never deployed.

## Contact

- **Email** — schandwadkar31@gmail.com
- **LinkedIn** — [salil-chandwadkar](https://linkedin.com/in/salil-chandwadkar-2491031b0)
- **GitHub** — [@Salil3105](https://github.com/Salil3105)

---

<div align="center">
<sub>Built with Next.js · Deployed on Vercel</sub>
</div>
