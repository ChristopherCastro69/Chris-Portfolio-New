# CLAUDE.md - Project Context for AI Assistants

## Project Overview

This is Christopher Castro's personal portfolio website, structured as a monorepo with a React TypeScript frontend and a Python FastAPI backend (placeholder for future RAG implementation).

## Repository Structure

```
chris-portfolio/
├── packages/
│   ├── frontend/          # React 18 + TypeScript portfolio app
│   │   ├── src/
│   │   │   ├── assets/        # Images, PDFs, certificates
│   │   │   ├── components/    # React components by feature
│   │   │   ├── data/          # JSON data files
│   │   │   ├── hooks/         # Custom React hooks
│   │   │   ├── services/      # Data fetching service
│   │   │   └── types/         # TypeScript type definitions
│   │   ├── public/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── backend/           # Python FastAPI (placeholder)
│   │   ├── app/
│   │   │   ├── api/v1/
│   │   │   ├── core/
│   │   │   └── services/
│   │   ├── requirements.txt
│   │   └── pyproject.toml
│   └── shared/            # Shared types and schemas
│       ├── types/
│       └── schemas/
├── docker-compose.yml
├── package.json           # Root workspace config
└── pnpm-workspace.yaml
```

## Tech Stack

### Frontend
- **Framework:** React 18.2 with TypeScript
- **Build Tool:** Create React App (react-scripts)
- **Styling:** CSS with CSS Variables (no CSS-in-JS)
- **Icons:** Unicons (uil-*) and Boxicons (bx-*)
- **Email:** EmailJS for contact form
- **Carousel:** Swiper.js

### Backend (Planned)
- **Framework:** FastAPI
- **Database:** PostgreSQL (optional)
- **AI/RAG:** LangChain, OpenAI/Anthropic, Pinecone/Chroma

## Key Commands

```bash
# Install dependencies (from root)
npm install

# Run frontend development server
npm run dev:frontend
# Or from packages/frontend:
npm start

# Build frontend for production
npm run build:frontend

# Run tests
npm run test:frontend
```

## Development Patterns

### Data Layer
All portfolio data is stored in JSON files under `packages/frontend/src/data/`:
- `personal.json` - Name, bio, social links
- `skills.json` - Technical skills by category
- `projects.json` - Portfolio projects
- `qualifications.json` - Education and experience
- `services.json` - Service offerings
- `about.json` - About section content
- `contact.json` - Contact information

The `dataService.ts` abstracts data fetching and can switch between local JSON and API based on `REACT_APP_USE_API` environment variable.

### Custom Hooks
- `useScrollPosition(threshold)` - Scroll position detection
- `usePortfolioData(dataType)` - Data fetching with loading/error states
- `useInterval(callback, delay, pause)` - Safe interval management

### Component Structure
Components are organized by feature:
```
components/
├── common/          # Shared: ErrorBoundary, Loading
├── header/          # Navigation
├── home/            # Hero section
├── about/           # About with image carousel
├── skills/          # Skills grid
├── services/        # Service offerings
├── project/         # Projects with filtering
├── qualification/   # Education/Experience tabs
├── contact/         # Contact form
├── footer/          # Footer with social links
├── scrollup/        # Scroll-to-top button
└── testimonials/    # Testimonials (feature-flagged)
```

### TypeScript Conventions
- All components use `React.FC` type
- Props interfaces are defined above components
- Data types are in `src/types/portfolio.ts`

### CSS Conventions
- BEM-lite naming: `.component_element--modifier`
- CSS variables for colors, fonts, spacing (see `App.css`)
- Mobile-first with max-width breakpoints: 992px, 768px, 576px, 350px

## Environment Variables

Create `.env.local` in `packages/frontend/`:

```env
# API Configuration
REACT_APP_USE_API=false
REACT_APP_API_URL=http://localhost:8000/api

# EmailJS (required for contact form)
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

# Feature Flags
REACT_APP_ENABLE_TESTIMONIALS=false
```

## Common Tasks

### Adding a New Project
1. Add image to `src/assets/projects/`
2. Add entry to `src/data/projects.json`
3. Follow existing project structure with id, image, title, desc, lang, link, repo, category, services

### Adding a New Skill
1. Edit `src/data/skills.json`
2. Add to appropriate category (frontend, backend, data, tools)
3. Include name, level (Basic/Intermediate/Advanced), percentage

### Modifying Contact Info
1. Edit `src/data/contact.json`
2. Update contact cards and form configuration

### Enabling Testimonials
Set `REACT_APP_ENABLE_TESTIMONIALS=true` in `.env.local`

## Important Notes

- **Do not commit `.env.local`** - Contains sensitive EmailJS credentials
- **Images are imported** - Project/certificate images use static imports, not URLs
- **No backend yet** - Backend is a placeholder for future RAG implementation
- **UI must stay consistent** - Any changes should preserve the existing visual design
- **Mobile-first** - Always test responsive design at all breakpoints

## Future Plans

1. **RAG Backend**: Implement Python FastAPI with LangChain for portfolio Q&A
2. **Vector Database**: Store embeddings of portfolio content
3. **API Integration**: Switch frontend to fetch from backend API
4. **Docker Deployment**: Use docker-compose for full stack deployment
