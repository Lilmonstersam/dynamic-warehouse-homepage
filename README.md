# Dynamic Warehouse Solutions Homepage Redesign Mockup

Vite/React mockup location: `index.html`

The page can still be opened directly for a quick static review, but the deployable project now uses Vite with a small React enhancement layer for the mobile menu behaviour.

## Inputs Reviewed

- Strategy: `Client Reports/2026-Strategy.md`
- Current homepage: https://dynamicws.com.au/ reviewed on 2026-05-11
- Approved mockups:
  - `landing-pages/contact-page`
  - `landing-pages/mezzanine-offices-melbourne`
- Local image library: `Content SEO/Images`
- Project pages for featured proof:
  - https://dynamicws.com.au/projects/hastings-mezzanine-fitout/
  - https://dynamicws.com.au/projects/oliva-social/
  - https://dynamicws.com.au/projects/anytime-fitness/

## Current Homepage Notes

Core message to preserve:

- Licensed mezzanine floor builders and supplier.
- Turnkey warehouse fit-out solution: design, supply and install.
- Registered mezzanine installer servicing Melbourne, Adelaide, Brisbane and Sydney.
- Hi-Span modular mezzanine system is a major product differentiator.
- Primary conversion paths are the mezzanine calculator, free quote page and phone call.

Brand cues to preserve:

- Charcoal/dark industrial base: `#23282f`, `#171b20`.
- Lime accent: `#b1d236`, with brighter CTA treatment.
- Open Sans style typography, bold uppercase CTA labels, restrained industrial layout.
- Real warehouse/mezzanine photography rather than generic imagery.

## Redesign Direction

The mockup condenses the homepage into a clearer conversion sequence:

1. Hero with the core builder message, calculator CTA, quote CTA and trust badges.
2. Early client-logo proof band.
3. Four simplified solution pathways instead of a long service-heavy scroll.
4. Hi-Span modular system section placed high on the page.
5. Design / supply / install process summary.
6. Featured project proof for Hastings, Oliva Social and Anytime Fitness, with a View All Projects CTA.
7. Resource links for FAQs, planning resources and articles.
8. Final CTA section with calculator and free quote paths.

## Navigation Recommendation

The current nav is long, so the mockup groups links into fewer decisions:

- `Solutions`
  - https://dynamicws.com.au/mezzanine-floors-australia/
  - https://dynamicws.com.au/modular-mezzanine-floors/
  - https://dynamicws.com.au/custom-mezzanine/
  - https://dynamicws.com.au/raised-storage-areas-and-mezzanine-offices/
  - https://dynamicws.com.au/mezzanine-floor-kits/
  - https://dynamicws.com.au/warehouse-fit-out/
- `Build Process`: https://dynamicws.com.au/build-process/
- `Projects`: https://dynamicws.com.au/projects/
- `Locations`
  - https://dynamicws.com.au/mezzanine-floor-melbourne/
  - https://dynamicws.com.au/mezzanine-floor-adelaide/
  - https://dynamicws.com.au/mezzanine-floor-brisbane/
  - https://dynamicws.com.au/mezzanine-floors-sydney/
- `Resources`
  - https://dynamicws.com.au/resources/
  - https://dynamicws.com.au/frequently-asked-questions/
  - https://dynamicws.com.au/news/
  - https://dynamicws.com.au/about/
- `Calculator`: https://dynamicws.com.au/build-your-own-mezzanine/
- Primary CTA: https://dynamicws.com.au/contact/

## Assets Used

Assets were copied from `Content SEO/Images` into `assets/images` so the mockup can run as a self-contained local page.

- DWS transparent WebP logo
- Hero mezzanine deck image
- Hi-Span section background WebP
- Hi-Span system render for the solution tile
- Ramset mezzanine project image
- Paramount mezzanine project image
- Industry Cladding project image
- Hastings fit-out project image
- Oliva Social project image
- Anytime Fitness project image
- Client logos: Polaris, Petstock, NHP, Autobarn, Alstom and Country Fire Authority

## Implementation Notes

- The end section is CTA-only, sending users to the calculator or free quote page.
- The mobile experience includes a simplified menu and sticky calculator/call actions.
- Trust proof has been moved above the final CTA to support the strategy's CRO recommendation.
- FAQ-heavy content is routed into Resources/FAQs rather than expanding the homepage length again.

## Project Setup

This folder has been configured as a Vite/React project for deployment to:

https://github.com/Lilmonstersam/dynamic-warehouse-homepage.git

Files added:

- `package.json`
- `package-lock.json`
- `vite.config.ts`
- `src/main.jsx`
- `.gitignore`
- `.github/workflows/deploy.yml`

The GitHub Pages base path is set in `vite.config.ts`:

```ts
base: '/dynamic-warehouse-homepage/'
```

This matches the repository name and prevents static assets from breaking when deployed under the GitHub Pages subpath.

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The GitHub Action at `.github/workflows/deploy.yml` deploys to GitHub Pages when changes are pushed to the `main` branch. It can also be run manually from the Actions tab via `workflow_dispatch`.

The workflow uses Node 20, `npm ci`, `npm run build`, and uploads `dist/` to GitHub Pages.

Repository settings required:

- GitHub Pages source: GitHub Actions.
- Default branch: `main`.

## Verification Notes

Verified on 2026-05-11 using a temporary Node.js 20 runtime from `/tmp` because this machine does not have a system `node`/`npm` in `PATH`.

```bash
npm install
npm run build
npm run dev -- --host 127.0.0.1
npm audit --audit-level=moderate
```

Results:

- Dependencies installed and `package-lock.json` was generated.
- Production build completed successfully into `dist/`.
- Vite dev server started successfully.
- `http://127.0.0.1:5173/dynamic-warehouse-homepage/` returned `HTTP/1.1 200 OK`.
- Initial install reported a Vite/esbuild dev-server advisory, so Vite and `@vitejs/plugin-react` were updated.
- Final `npm audit --audit-level=moderate` result: `found 0 vulnerabilities`.
