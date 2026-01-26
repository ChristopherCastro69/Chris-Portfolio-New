# Chris Portfolio

A personal portfolio monorepo with React frontend and Python FastAPI backend (with future RAG capabilities).

## Project Structure

```
chris-portfolio/
  packages/
    frontend/          # React TypeScript application
    backend/           # Python FastAPI backend (placeholder)
    shared/            # Shared types and schemas
  docker-compose.yml   # Container orchestration
  package.json         # Root workspace configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or pnpm
- Python 3.10+ (for backend, when ready)

### Installation

```bash
# Install dependencies for all packages
npm install

# Or with pnpm
pnpm install
```

### Development

```bash
# Run frontend only
npm run dev:frontend

# Run backend only (requires Python setup)
npm run dev:backend

# Run both (requires concurrently)
npm run dev
```

### Building

```bash
# Build frontend for production
npm run build:frontend
```

## Packages

### Frontend (`packages/frontend`)

React 18 portfolio website with TypeScript. Features:
- Responsive design (mobile-first)
- Component-based architecture
- Data service layer for API integration
- Custom hooks for reusable logic

### Backend (`packages/backend`)

Python FastAPI backend (placeholder). Planned features:
- RESTful API endpoints
- RAG-based portfolio Q&A
- Vector database integration
- Contact form handling

### Shared (`packages/shared`)

Shared types and JSON schemas for data validation across packages.

## Environment Variables

See `packages/frontend/.env.example` for frontend configuration.

## License

MIT
