# Repository Guidelines

Whatever action you can do yourself, please do yourself. This includes starting apps and performing verification.

## Project Purpose & Structure

Build a welcoming Next.js App Router and Tailwind CSS landing page for Providence Mennonite Church. Preserve the flow: hero, history, values, latest sermon, service times, prayer/contact form, and footer navigation.

- `src/app/`: page composition, metadata, global styles, and page-level integration configuration.
- `src/components/`: navigation, values, prayer form, and scoped GSAP motion.
- `src/lib/`: church configuration, sermon feed retrieval, prayer validation, and unit tests.
- [Project assets](assets/): generated landing-page illustrations and future supporting media; record purposes and generation prompts in `assets/README.md`. Use static imports for illustrations. Interface icons remain Phosphor.
- `public/images/`: approved church logo and unused original hero photograph.
- `tests/e2e/`: Playwright desktop and mobile browser checks.
- `.agents/skills/`: project-local design skills.

## Build, Test, and Development Commands

Use Node.js 22.20+ and npm; commit `package-lock.json`. See `README.md` for the temporary Node runtime command on this machine.

- `npm ci`: install locked dependencies.
- `npm run dev`: start the local server at port 3000.
- `npm run build`: compile and type-check the production application.
- `npm run start`: serve the production build.
- `npm run lint`: run ESLint.
- `npm test`: run validation and sermon parser unit tests.
- `npm run test:e2e`: run Playwright against a running local server; install Chromium first if needed.

## Coding Style & Naming

Use TypeScript, two-space indentation, PascalCase components, and camelCase functions. Prefer Server Components and isolate interactive behavior in client components. Use semantic HTML, stable section IDs, and explicit button states. Preserve reduced-motion support and GSAP cleanup. ESLint uses Next.js core web vitals and TypeScript rules. Prettier uses single quotes and two-space indentation.

## Color Palette

Use deep maroon `#6E2639`, charcoal `#242321`, antique gold `#B08A45`, warm ivory `#F5F1E8`, soft cream `#EAE3D6`, and dark maroon `#291D20`. Text uses `#252321` and `#716C64`; borders use `#D5CCBE`. Keep logo colors consistent with the maroon/gold identity. See `DESIGN.md`.

## Icons

Use [Phosphor Icons](https://phosphoricons.com/) through `@phosphor-icons/react` for all interface icons. Import from `@phosphor-icons/react/ssr` in Server Components. Prefer regular or light weights, set explicit sizes, and mark decorative icons `aria-hidden="true"`. Keep accessible labels on icon-only controls. Do not introduce another icon library or replace the approved church logo with an icon.

## Testing Guidelines

Use `*.test.ts` for unit tests and `*.spec.ts` for browser tests. No numerical coverage target is established. Test meaningful validation, integration failures, keyboard navigation, mobile overflow, and submission states. Run lint, tests, and production build before submitting changes.

## Commit & Pull Request Guidelines

No historical commit convention exists. Use concise imperative messages such as `Add service times section`. PRs should summarize behavior, link relevant issues, record validation, and include screenshots for visual changes.

## Content & Configuration

Family, Community, and Faith use user-supplied placeholder copy. Do not invent history, service times, addresses, or contact details. The verified YouTube channel is configured in `src/lib/church.ts`. Web3Forms uses a public form access key supplied through `.env.local` to the browser; never log prayer contents or expose private service credentials. Keep the form unavailable until delivery is configured. Keep draft pages excluded from indexing until launch approval.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
