# AGENTS.md

## Cursor Cloud specific instructions

`wmsinsight` is a single, self-contained static React 19 + Vite 8 marketing SPA (no backend, no database, no external services, no environment variables). Package manager is npm (`package-lock.json`).

Dependencies are refreshed automatically by the startup update script (`npm install`), so you do not need to install them manually.

Standard commands live in `package.json` scripts; use them directly:
- Dev server: `npm run dev` (Vite, serves on `http://localhost:5173`). This is the only service needed to run the product end-to-end.
- Lint: `npm run lint` (Oxlint, config in `.oxlintrc.json`).
- Build: `npm run build` (production build to `dist/`).
- Preview a build: `npm run preview`.

Notes:
- Node 20+ is required (Vite 8 / React 19). The VM ships Node 22, which works.
- Routing is client-side via `react-router-dom` (`BrowserRouter`). Routes: `/`, `/guides`, `/guides/sap-ewm-vs-manhattan-vs-blue-yonder`, `/consulting`. All content is hardcoded in `src/pages/*.jsx`.
