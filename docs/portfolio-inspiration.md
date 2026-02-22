# Portfolio Inspiration — Reference Context

> Feed this file to your AI coding agent for full context when building your portfolio.
> Source: `portfolio-v2` by Dan Chavez (dnachavez.dev)

---

## 1. Project Overview

A Next.js 14 portfolio site with an AI-powered chatbot. Two-column layout, dark/light theme, blog system, and staggered blur-fade animations throughout.

**Stack:** Next.js 14 + React 18 + TypeScript + TailwindCSS + shadcn/ui + Framer Motion

---

## 2. Directory Structure

```
portfolio-v2/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts                  # Chat endpoint (Edge, SSE)
│   │   │   ├── cleanup-sessions/route.ts      # Session cleanup
│   │   │   └── cron/cleanup-memories/route.ts  # Mem0 cleanup cron
│   │   ├── blog/
│   │   │   ├── page.tsx                       # Blog listing
│   │   │   └── [slug]/page.tsx                # Blog post (dynamic)
│   │   ├── projects/page.tsx                  # Projects archive table
│   │   ├── certifications/page.tsx            # Certifications archive table
│   │   ├── hackathons/page.tsx                # Hackathons archive table
│   │   ├── page.tsx                           # Home (main landing)
│   │   ├── layout.tsx                         # Root layout
│   │   └── globals.css                        # Theme vars + Tailwind base
│   ├── components/
│   │   ├── magicui/
│   │   │   ├── blur-fade.tsx                  # Scroll-triggered blur+fade animation
│   │   │   ├── blur-fade-text.tsx             # Per-character text animation
│   │   │   └── dock.tsx                       # Magnetic dock nav (mouse-tracking)
│   │   ├── ui/                                # shadcn components (avatar, badge, button, card, popover, separator, tooltip)
│   │   ├── navbar.tsx                         # Fixed bottom dock navbar
│   │   ├── chat-popover.tsx                   # Chat widget UI
│   │   ├── chat-welcome-card.tsx              # Suggested questions card
│   │   ├── resume-card.tsx                    # Work/education/skills card
│   │   ├── project-card.tsx                   # Grid project card (archive)
│   │   ├── project-item.tsx                   # Horizontal project card (home)
│   │   ├── certification-card.tsx             # Certification display card
│   │   ├── hackathon-card.tsx                 # Timeline hackathon card
│   │   ├── section-nav.tsx                    # Scrollspy sidebar nav
│   │   ├── mode-toggle.tsx                    # Dark/light toggle
│   │   ├── theme-provider.tsx                 # next-themes wrapper
│   │   ├── theme-avatar.tsx                   # Theme-aware avatar
│   │   ├── dynamic-favicon.tsx                # Favicon theme switcher
│   │   ├── session-indicator.tsx              # Chat session status
│   │   ├── icons.tsx                          # SVG icon exports
│   │   └── mdx.tsx                            # Blog MDX components
│   ├── data/
│   │   ├── resume.tsx                         # Central DATA constant (all content)
│   │   └── blog.ts                            # Blog post fetching + MDX pipeline
│   ├── hooks/
│   │   └── use-chat-session.ts                # Session monitoring hook
│   ├── lib/
│   │   ├── agents/                            # AI multi-agent system (see chatbot section)
│   │   │   ├── orchestrator.ts
│   │   │   ├── intent-sentiment.ts
│   │   │   ├── query-rewriter.ts
│   │   │   ├── knowledge-retriever.ts
│   │   │   ├── answer-drafter.ts
│   │   │   ├── answer-validator.ts
│   │   │   ├── general-responder.ts
│   │   │   └── types.ts
│   │   ├── memory-manager.ts                  # Mem0 integration
│   │   ├── session-manager.ts                 # Browser sessionStorage
│   │   ├── date-utils.ts                      # Date parsing helpers
│   │   └── utils.ts                           # cn() + formatDate()
│   └── content/
│       └── hello-world.mdx                    # Sample blog post
├── public/
│   ├── avatar/                                # Profile images
│   ├── skills/                                # Skill category icons
│   ├── work-experience/                       # Company logos
│   ├── education/                             # School logos
│   ├── projects/                              # Project screenshots
│   ├── certifications/                        # Certificate images
│   ├── hackathons/                            # Hackathon images
│   └── resume.pdf
├── package.json
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── components.json                            # shadcn/ui config
└── vercel.json                                # Cron job config
```

---

## 3. Data Schema

Everything on the site is driven by one `DATA` object in `src/data/resume.tsx`:

```typescript
export const DATA = {
  name: string,
  initials: string,
  url: string,
  location: string,
  locationLink: string,
  description: string,          // One-liner bio
  summary: string,              // Longer bio (supports markdown)
  avatarUrl: string,

  skills: [
    {
      category: string,         // e.g. "Languages", "Frameworks"
      logoUrl: string,          // Icon path in /public/skills/
      skills: string[],         // ["Python", "TypeScript", ...]
    },
  ],

  navbar: [{ href: string, icon: ComponentType, label: string }],

  contact: {
    email: string,
    tel: string,
    social: {
      GitHub:   { name, url, icon, navbar: boolean },
      LinkedIn: { name, url, icon, navbar: boolean },
      X:        { name, url, icon, navbar: boolean },
      // ...
    },
  },

  work: [
    {
      company: string,
      href: string,
      badges: string[],         // e.g. ["Remote"]
      location: string,
      title: string,
      logoUrl: string,
      start: string,            // "June 2025"
      end: string,              // "Present"
      description: string,      // Markdown, can be long
    },
  ],

  education: [
    { school, href, degree, logoUrl, start, end },
  ],

  certifications: [
    { title, href, dates, description, image },
  ],

  projects: [
    {
      title: string,
      href: string,
      dates: string,
      active: boolean,
      description: string,
      technologies: string[],
      links: [{ type, href, icon }],
      image: string,
      video: string,
    },
  ],

  hackathons: [
    { title, dates, location, description, image, win?, links },
  ],
};
```

---

## 4. Page Layout Patterns

### Home Page (`src/app/page.tsx`)

Two-column layout: sticky left + scrollable right.

```
┌──────────────────────────────────────────┐
│  Left (sticky)       │  Right (scroll)   │
│                      │                   │
│  Hero (name, bio)    │  Resume (PDF)     │
│  About (summary)     │  Work Experience  │
│  Section Nav         │  Education        │
│  (scrollspy)         │  Skills           │
│                      │  Projects (top 4) │
│                      │  Hackathons       │
│                      │  Certifications   │
│                      │  Contact          │
└──────────────────────────────────────────┘
         ┌──────────────────┐
         │  Navbar (bottom)  │  ← Fixed dock
         └──────────────────┘
```

### Root Layout (`src/app/layout.tsx`)

```tsx
<ThemeProvider attribute="class" defaultTheme="light">
  <TooltipProvider>
    <body className="min-h-screen bg-background font-sans antialiased py-12 sm:py-24 px-12 lg:px-24">
      {children}
      <Navbar />   {/* Fixed at bottom */}
    </body>
  </TooltipProvider>
</ThemeProvider>
```

### Archive Pages (`/projects`, `/certifications`, `/hackathons`)

Table layout with columns: Year | Title | Details | Links. Sorted newest first.

### Blog (`/blog`, `/blog/[slug]`)

- Listing: sorted by `publishedAt` (newest first)
- Post: MDX rendered via unified + remark-gfm + rehype-pretty-code (shiki)
- Frontmatter: `title`, `publishedAt`, `summary`, `image?`

---

## 5. Animation System

All sections use staggered `BlurFade` with a base delay:

```tsx
const BLUR_FADE_DELAY = 0.04;

// Each element gets an increasing delay
<BlurFade delay={BLUR_FADE_DELAY * 1}>Hero</BlurFade>
<BlurFade delay={BLUR_FADE_DELAY * 2}>About</BlurFade>
<BlurFade delay={BLUR_FADE_DELAY * 3}>Skills</BlurFade>
// ...
```

**BlurFade** (`magicui/blur-fade.tsx`):
- Animates: opacity 0→1, blur 6px→0, y +6px→-6px
- Triggers on scroll (useInView) or on mount
- Props: `delay`, `duration` (0.4s), `yOffset` (6), `blur` ("6px"), `inView`

**BlurFadeText** (`magicui/blur-fade-text.tsx`):
- Same animation but for text, optionally per-character
- Props: `text`, `animateByCharacter`, `characterDelay`

**Dock** (`magicui/dock.tsx`):
- Magnetic hover effect with mouse tracking
- Children scale up when cursor is near (magnification: 60px, distance: 140px)
- Uses Framer Motion `useMotionValue` + `useSpring`

---

## 6. Theme System

CSS variables in `globals.css` with HSL values:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96.1%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --destructive: 0 84.2% 60.2%;
  --border: 0 0% 89.8%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... inverted values */
}
```

Managed by `next-themes` with class strategy. Toggle via `ModeToggle` component.

---

## 7. Component Reference

| Component | Props | Used For |
|-----------|-------|----------|
| `ResumeCard` | logoUrl, title, subtitle, href, badges, period, description | Work, education, skills |
| `ProjectItem` | title, href, description, dates, tags, image, links | Projects on home page |
| `ProjectCard` | title, href, description, dates, tags, image/video, links | Projects archive |
| `CertificationCard` | title, href, dates, description, image | Certifications |
| `HackathonCard` | title, dates, location, description, image, win, links | Hackathons (timeline) |
| `SectionNav` | sections[] | Scrollspy sidebar |
| `Navbar` | — | Bottom dock (links + chat + theme) |
| `ChatPopover` | — | Floating chat widget |
| `ChatWelcomeCard` | — | Suggested conversation starters |
| `BlurFade` | delay, duration, yOffset, blur, inView | Scroll animation wrapper |
| `BlurFadeText` | text, delay, animateByCharacter, characterDelay | Text animation |
| `Dock` / `DockIcon` | magnification, distance, children | Magnetic nav dock |

---

## 8. Utility Functions

```typescript
// src/lib/utils.ts
cn(...inputs: ClassValue[]): string        // Tailwind class merge (clsx + tailwind-merge)
formatDate(date: string): string           // "Today", "3d ago", "2w ago", "3mo ago"

// src/lib/date-utils.ts
parseDateToTimestamp(dateStr: string): number       // "June 2025" → timestamp
getProjectSortDate(dateString: string): number      // "April 2025 - May 2024" → start timestamp
```

---

## 9. Dependencies

### Core

```
next: 14.2.4
react: 18.3.1
typescript: 5.8.3
tailwindcss: 3.4.17
```

### UI

```
@radix-ui/react-avatar, react-popover, react-tooltip, react-separator, react-slot
class-variance-authority, clsx, tailwind-merge
lucide-react, @radix-ui/react-icons
framer-motion, motion
next-themes
tailwindcss-animate, @tailwindcss/typography
```

### Blog / Content

```
react-markdown, remark-gfm, remark-parse, remark-rehype
rehype-pretty-code, rehype-raw, rehype-stringify
shiki, unified, gray-matter
```

### AI (original chatbot)

```
ai: ^5.0.92                    # Vercel AI SDK
@ai-sdk/groq: ^2.0.29          # Groq provider
mem0ai: ^2.1.38                 # Memory service
@mem0/vercel-ai-provider        # Mem0 + AI SDK bridge
zod: ^4.1.12                    # Schema validation
```

### Other

```
date-fns, @react-pdf/renderer
```

---

## 10. Chatbot Architecture (Original)

The original chatbot uses a **6-agent pipeline** — powerful but expensive.

### How It Works

```
User asks a question
    ↓
1. Intent Agent         → Classifies intent + sentiment + workflow type   (Groq call)
    ↓
2. Query Rewriter       → Optimizes query for memory search              (Groq call)
    ↓
3. Memory Retrieval     → Fetches past conversation from Mem0            (Mem0 call)
    ↓
4. Route by workflow:
   ├── knowledge_query  → Knowledge Retriever + Drafter + Validator      (3 Groq calls)
   ├── general          → General Responder                              (1 Groq call)
   ├── contact          → Static reply                                   (0 calls)
   └── out_of_scope     → Static redirect                                (0 calls)
    ↓
5. Store Q&A in Mem0                                                     (Mem0 call)
    ↓
Answer streamed back via SSE
```

### Cost Per Question

- **No retries:** 5 Groq + 2 Mem0 = 7 API calls
- **With retries (up to 3):** Up to 15 Groq + 2 Mem0 = 17 API calls
- **Model used:** `openai/gpt-oss-120b` via Groq
- **Services needed:** Groq API key + Mem0 API key + CRON_SECRET
- **Estimated monthly cost at 1K visitors:** $20-50+

### Files Involved

```
src/lib/agents/orchestrator.ts       # Coordinates the pipeline
src/lib/agents/intent-sentiment.ts   # Step 1 — classify intent
src/lib/agents/query-rewriter.ts     # Step 2 — rewrite for memory
src/lib/agents/knowledge-retriever.ts # Step 4a — find data in resume
src/lib/agents/answer-drafter.ts     # Step 4b — write response
src/lib/agents/answer-validator.ts   # Step 4c — quality check (retry loop)
src/lib/agents/general-responder.ts  # Step 4 alt — casual conversation
src/lib/agents/types.ts              # Shared Zod schemas
src/lib/memory-manager.ts            # Mem0 search + store
src/lib/session-manager.ts           # Browser session (7-day expiry)
src/app/api/chat/route.ts            # Edge API, SSE streaming
src/app/api/cron/cleanup-memories/route.ts  # Nightly cleanup
```

---

## 11. Simplified Chatbot (Recommended for Your Portfolio)

Replace the 6-agent system with **1 AI call**. Drop Mem0 entirely.

### API Route

```ts
// src/app/api/chat/route.ts
import { generateText } from "ai";
import { groq } from "@ai-sdk/groq";
import { DATA } from "@/data/resume";

export async function POST(req: Request) {
  const { message, history } = await req.json();

  if (!message || typeof message !== "string") {
    return Response.json({ error: "Message is required" }, { status: 400 });
  }

  try {
    const { text } = await generateText({
      model: groq("llama-3.1-8b-instant"), // Free on Groq
      system: `You are ${DATA.name}, a developer. Answer questions about yourself
using ONLY this data:

${JSON.stringify(DATA)}

Rules:
- Be friendly, concise, and conversational
- Respond in first person ("I worked on...", "My skills include...")
- If the answer is not in the data, say you can only discuss your portfolio
- Keep responses under 150 words`,
      messages: [
        ...history.slice(-10),
        { role: "user", content: message },
      ],
    });

    return Response.json({ response: text });
  } catch {
    return Response.json(
      { response: "Sorry, something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
```

### Frontend

```tsx
// src/components/chat-popover.tsx (core logic)
"use client";
import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatPopover() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    const updated = [...messages, userMessage];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: messages }),
      });
      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.response }]);
    } catch {
      setMessages([
        ...updated,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    // Wire up: messages, input, sendMessage, loading
    // Reuse the visual design from the original chat-popover.tsx
  );
}
```

### What You Need

```bash
npm install ai @ai-sdk/groq
```

```
# .env.local
GROQ_API_KEY=your_key_here    # Free at https://console.groq.com/
```

### What You Can Delete

```
src/lib/agents/              # All 7 agent files + orchestrator
src/lib/memory-manager.ts    # Mem0 integration
src/lib/session-manager.ts   # Session management
src/app/api/cleanup-sessions/
src/app/api/cron/
vercel.json                  # Cron config
```

Remove from package.json: `mem0ai`, `@mem0/vercel-ai-provider`

---

## 12. Alternative Chatbot Providers (All Free Tier)

| Provider | Model | Free Tier | Swap Code |
|----------|-------|-----------|-----------|
| **Groq** | `llama-3.1-8b-instant` | ~30 req/min | `groq("llama-3.1-8b-instant")` |
| **Groq** | `llama-3.3-70b-versatile` | ~30 req/min | `groq("llama-3.3-70b-versatile")` |
| **Google Gemini** | `gemini-2.0-flash` | 1,500 req/day | `google("gemini-2.0-flash")` |
| **Cloudflare Workers AI** | Llama models | 100K tokens/day | Cloudflare bindings |
| **No AI** | Keyword matching | Unlimited | See below |

### Switching Provider (1 line change)

```bash
npm install @ai-sdk/google
```

```ts
import { google } from "@ai-sdk/google";
// Replace: model: groq("llama-3.1-8b-instant")
// With:    model: google("gemini-2.0-flash")
```

### Zero-Cost Option (No AI)

```ts
const rules = [
  { keywords: ["skill", "tech", "stack"],     response: () => formatSkills(DATA) },
  { keywords: ["project", "built"],           response: () => formatProjects(DATA) },
  { keywords: ["experience", "job", "work"],  response: () => formatWork(DATA) },
  { keywords: ["contact", "email", "hire"],   response: () => DATA.contact.email },
  { keywords: ["hello", "hi", "hey"],         response: () => `Hey! I'm ${DATA.name}.` },
];

export async function POST(req: Request) {
  const { message } = await req.json();
  const lower = message.toLowerCase();
  const match = rules.find(r => r.keywords.some(k => lower.includes(k)));
  return Response.json({
    response: match ? match.response() : "Ask me about: skills, projects, experience, or contact info!",
  });
}
```

---

## 13. Comparison: Original vs Simplified

| | Original (6 agents) | Simplified (1 call) | No AI |
|-|---------------------|---------------------|-------|
| AI calls/question | 5-15 | **1** | **0** |
| External services | Groq + Mem0 | Groq only | None |
| API keys | 3 | 1 | 0 |
| Monthly cost | $10-50+ | **$0** | **$0** |
| Code complexity | ~500+ lines | **~30 lines** | ~40 lines |
| Response quality | Excellent | Good | Basic |
| Memory/context | Mem0 cloud | Chat history array | None |
| Setup time | 30 min | **5 min** | 5 min |

---

## 14. Deployment

**Host:** Vercel (free tier covers portfolio traffic easily)

**What Vercel gives you:**
- Next.js native support
- Edge runtime for API routes
- Automatic HTTPS
- Preview deployments on PRs
- Custom domain support

**Steps:**
1. Push to GitHub
2. Import repo on vercel.com
3. Add `GROQ_API_KEY` in Vercel environment variables
4. Deploy

No `vercel.json` needed for the simplified version (no cron jobs).

---

## 15. Key Patterns to Reuse

1. **Data-driven content** — Single `DATA` object powers the entire site. Update one file to change everything.
2. **Staggered animations** — `BlurFade` with incrementing delay creates a polished cascade effect.
3. **Dock navigation** — Magnetic bottom bar with mouse-tracking magnification.
4. **Scrollspy sidebar** — Active section highlighting as user scrolls.
5. **MDX blog** — Write posts in markdown, get syntax highlighting and rich formatting.
6. **Theme toggle** — CSS variables + next-themes for instant dark/light switch.
7. **Reusable card components** — Same `ResumeCard` for work, education, and skills.
8. **Archive tables** — Simple responsive tables for project/cert/hackathon listings.
