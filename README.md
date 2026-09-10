# Providence Mennonite Church

A responsive Next.js App Router landing page with TypeScript, Tailwind CSS, Gloock, Inter, and DM Sans typography, and GSAP motion. Includes story, values, latest sermon, visiting information, and a server-validated prayer form.

## Run locally

Use Node.js 22.20+ (`nvm use` with the supplied `.nvmrc`).

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. If the machine only has Node.js 18, run commands with `npx --yes --package=node@22 --package=npm@10 npm run dev` (or replace `dev` with another script).

## Verification

```sh
npm run lint
npm test
npm run build
# With the development server running:
npx playwright install chromium
npm run test:e2e
```

`npm run start` serves the production build. Browser tests cover mobile navigation, overflow, keyboard access, values, YouTube configuration, and prayer endpoint validation/unavailability. Unit tests cover prayer validation and sermon feed parsing.

## Design

`DESIGN.md` is the supplied Eco-Tech visual reference. Its colors, fonts, and surface styling are applied in `src/app/globals.css`; the original page structure, spacing, and motion are preserved. Fonts are bundled locally via Fontsource.

## Church content and integrations

- `src/app/page.tsx`: page content and section order. History is explicitly pending; welcome copy is a draft for review.
- `src/components/Values.tsx`: approved Family, Community, Faith headings with the requested shared placeholder copy.
- `src/lib/church.ts`: public details and verified channel ID for https://www.youtube.com/@ProvidenceMennoniteChurchPA.
- `src/lib/sermons.ts`: reads the public YouTube feed and refreshes every 15 minutes. The uploads playlist is the fallback when the feed is unavailable. No YouTube API key is needed. A channel subscription link remains available independently of the player.
- `.env.example`: service times, address, phone, email, optional channel override, and Web3Forms public form access key. Restart/rebuild after changing public environment variables.
- `assets/illustrations/`: model-generated editorial illustrations for the story and values accent; see [asset documentation](assets/README.md) for prompts and provenance.
- `public/images/`: approved church logo and unused original Picsum hero photograph. The active generated welcome-table hero is in `assets/illustrations/` and does not depict the actual church grounds.

Prayer submissions are enabled when `WEB3FORMS_ACCESS_KEY` is configured. This is a public form access key passed to the browser, not a private API credential. The form validates input and consent locally and submits directly to Web3Forms, matching its supported client-side integration. Web3Forms handles delivery and provider-side validation/spam filtering. A successful HTTP response and `success: true` are both required. Errors preserve the entered text, and request contents are never logged. The recipient is associated with the key. Set this environment variable on the production host; automated tests intercept Web3Forms and never send email.

The draft is marked `noindex` in `src/app/layout.tsx`. Remove this after content approval and integration verification, then add the production canonical URL and social sharing image.

Reduced-motion preferences disable animation; all page sections remain accessible without it.

## Daily devotional

The section above “See you Sunday” uses 48 public-domain World English Bible verses, stored with source URLs in `assets/content/devotional-verses.json`. The same verse appears for everyone on a given America/New_York calendar day, with a 48-day rotation. The client corrects any stale prerendered day on mount and checks every minute and when returning to the tab. There is no runtime scripture API dependency. The reference links to Bible Gateway for context.
