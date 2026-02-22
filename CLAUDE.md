# CLAUDE.md - Project Context for AI Assistants

## Project Overview

Christopher Castro's personal portfolio website built with Next.js 14 App Router and TypeScript. All portfolio content lives in a single canonical data file (`src/data/resume.tsx`).

## Repository Structure

```
chris-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home (all sections)
│   │   ├── layout.tsx               # Root layout + CDN links
│   │   ├── globals.css              # All CSS combined
│   │   ├── projects/page.tsx        # Projects archive table
│   │   ├── certifications/page.tsx  # Certs archive table
│   │   └── api/
│   │       ├── contact/route.ts     # Server-side EmailJS
│   │       └── chat/route.ts        # Groq chatbot
│   ├── components/                  # React components by feature
│   │   ├── common/          # ErrorBoundary, Loading
│   │   ├── header/          # Navigation
│   │   ├── home/            # Hero section
│   │   ├── about/           # About with image carousel
│   │   ├── skills/          # Skills grid
│   │   ├── services/        # Service offerings
│   │   ├── project/         # Projects with filtering
│   │   ├── qualification/   # Education/Experience tabs
│   │   ├── contact/         # Contact form (server-side)
│   │   ├── footer/          # Footer with social links
│   │   ├── scrollup/        # Scroll-to-top button
│   │   ├── chatbot/         # AI chatbot widget
│   │   └── testimonials/    # Testimonials (Swiper carousel)
│   ├── data/
│   │   ├── resume.tsx       # Canonical DATA export (single source of truth)
│   │   └── types.ts         # TypeScript type definitions
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useInterval.ts
│   └── assets/              # Images, certificates
├── public/                  # Static files (resume PDF, profile image)
├── package.json
├── next.config.mjs
└── tsconfig.json
```

## Tech Stack

- **Framework:** Next.js 14 with App Router + TypeScript
- **Styling:** CSS with CSS Variables (no Tailwind, no CSS-in-JS)
- **Icons:** Unicons (uil-*) and Boxicons (bx-*) via CDN
- **Email:** EmailJS (server-side via `/api/contact`)
- **Chatbot:** Groq API (llama-3.1-8b-instant) via `/api/chat`
- **Carousel:** Swiper.js

## Key Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Data Layer

**All portfolio content lives in `src/data/resume.tsx`** — a single `DATA` export containing:
- Personal info, social links, navbar items
- About section (images, achievements, rotating sections)
- Skills (4 categories)
- Services (3 items)
- Projects (7 items with image imports)
- Qualifications (education + experience with certificate images)
- Contact (cards + form config)
- Testimonials
- Footer, SEO metadata

**To update your resume, edit ONE file: `src/data/resume.tsx`**

Types are defined in `src/data/types.ts`. Image fields use `ImageSrc` (accepts `StaticImageData` or `string`). Use `imgSrc()` helper to resolve to string for `<img src>`.

## Custom Hooks

- `useScrollPosition(threshold)` - Scroll position detection
- `useInterval(callback, delay, pause)` - Safe interval management

## CSS Conventions

- All CSS is in `src/app/globals.css` (concatenated from component CSS files)
- BEM-lite naming: `.component_element--modifier`
- CSS variables for colors, fonts, spacing
- Mobile-first with max-width breakpoints: 992px, 768px, 576px, 350px

## Environment Variables

Create `.env.local` at the project root:

```env
# EmailJS (server-side, for /api/contact)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key

# Groq (for /api/chat)
GROQ_API_KEY=your_groq_api_key
```

## Common Tasks

### Adding a New Project
1. Add image to `src/assets/projects/`
2. Import the image in `src/data/resume.tsx`
3. Add entry to `DATA.projects.items`

### Adding a New Skill
1. Edit `DATA.skills.categories` in `src/data/resume.tsx`
2. Add to appropriate category (frontend, backend, data, tools)

### Modifying Contact Info
1. Edit `DATA.contact.cards` in `src/data/resume.tsx`

## API Routes

- **POST `/api/contact`** — Sends email via EmailJS REST API (server-side)
- **POST `/api/chat`** — Portfolio chatbot via Groq API

## Important Notes

- **Do not commit `.env.local`** — Contains sensitive API keys
- **Images are statically imported** — Use `imgSrc()` helper from `types.ts` for `<img src>`
- **UI must stay consistent** — Any changes should preserve the existing visual design
- **Mobile-first** — Always test responsive design at all breakpoints
- **`packages/` directory** — Legacy CRA monorepo structure (can be removed)
