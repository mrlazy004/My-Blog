# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Portfolio (artifacts/portfolio)
- **Kind**: react-vite (web app)
- **Preview Path**: /
- **Description**: Personal portfolio website for Beerappa K B — a Computer Science engineer (JSS STU '25) specializing in Full-Stack Development (.NET Core, React/TypeScript), AI/ML (LangChain, Azure OpenAI, RAG), and QA Automation (Selenium, PyTest, JMeter).
- **Features**: Dark-themed single-page portfolio with animated hero, skills, 9 projects, experience/education, certifications, and contact sections. Uses framer-motion for scroll-triggered animations.
- **No backend**: Frontend-only, no API calls or database needed.

### API Server (artifacts/api-server)
- **Kind**: api
- **Preview Path**: /api
- **Description**: Express 5 backend server (shared). Currently only has /api/healthz health check endpoint.
