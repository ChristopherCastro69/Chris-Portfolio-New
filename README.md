# Chris Portfolio

Personal portfolio website for Christopher Castro, built with Next.js 14 (App Router) and TypeScript.

## Tech Stack

- **Framework:** Next.js 14 with App Router + TypeScript
- **Styling:** CSS with CSS Variables (mobile-first, no Tailwind)
- **Icons:** Unicons & Boxicons via CDN
- **Email:** EmailJS (server-side via `/api/contact`)
- **Chatbot:** Groq API via `/api/chat`
- **Carousel:** Swiper.js

## Getting Started

### Prerequisites

- Node.js >= 18.0.0

### Install & Run

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

## Project Structure

```
chris-portfolio/
├── src/
│   ├── app/           # Pages, layouts, API routes, global CSS
│   ├── components/    # React components organized by feature
│   ├── data/          # resume.tsx (single source of truth) + types
│   └── hooks/         # Custom React hooks
├── public/            # Static assets (images, resume PDF)
├── package.json
├── next.config.mjs
└── tsconfig.json
```

All portfolio content is driven by a single data file: `src/data/resume.tsx`.

## Environment Variables

Create `.env.local` at the project root:

```env
# EmailJS (for /api/contact)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key

# Groq (for /api/chat)
GROQ_API_KEY=your_groq_api_key
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `master` to trigger a production deploy.

## License

MIT
