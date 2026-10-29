<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Tripnest client

Next.js 16 App Router frontend for the Tripnest destination-booking platform. Homepage sections are still placeholders; there is no API layer, env file, test suite, CI, or formatter.

## Commands

- `npm run dev` — Turbopack on :3000. It rewrites `tsconfig.json` (adds `.next/dev/types`) and the managed Next.js block above; keep those changes.
- `npm run lint` — ESLint flat config, no args. Baseline has 2 known `react-hooks/set-state-in-effect` errors in `src/components/ui/carousel.tsx` and `src/hooks/use-mobile.ts` (vendored shadcn code). Don't chase them unless asked; don't add new ones.
- `npx tsc --noEmit` — typecheck (no `typecheck` script).
- `npm run build` — production build; run it before finishing since there is no test suite.

## Next.js 16 gotchas

- `cacheComponents: true` + `partialPrefetching: true` in `next.config.ts`: uncached async/runtime reads (`cookies()`, `headers()`, `searchParams`, fetch) must be wrapped in `<Suspense>` or use `'use cache'`, or the dev overlay/build flags a blocking route.
- `params`/`searchParams` are Promises. Type route props with the generated globals `PageProps<'/path'>` / `LayoutProps<'/'>` — they are ambient, not imported.
- Network-boundary logic belongs in `proxy.ts` (exporting `proxy`), not the deprecated `middleware.ts`. `proxy` only runs on the Node.js runtime.
- Bundled docs are version-matched: read `node_modules/next/dist/docs/` before using an unfamiliar API.

## Toolchain

- Tailwind v4 runs through the `@tailwindcss/turbopack` loader declared in `next.config.ts` `turbopack.rules`. There is intentionally no `postcss.config.*` or `tailwind.config.*`; design tokens live in `src/app/globals.css` (`@theme inline`, `:root`, `.dark`).
- `cn` is the `cn` package (clsx/tailwind-merge replacement), re-exported from `src/lib/utils.ts`. Generated UI files import from `"cn"` directly — don't introduce clsx/tailwind-merge.
- `src/components/ui/*` is shadcn CLI output (`base-nova` style on Base UI, not Radix; config in `components.json`). Add components with `npx shadcn@latest add <name>`; re-running overwrites local edits.
- Shiki highlighting is client-only and lazy: register a new language in both `languages` and `aliases` in `src/lib/highlighter.tsx`, otherwise `highlightCode` returns `null`.

## Structure

- `src/app/layout.tsx` is the root shell (fonts, metadata); `src/app/(root)/layout.tsx` adds Navbar/Footer. New public pages go under `src/app/(root)/` to inherit that chrome.
- Homepage = `src/app/(root)/page.tsx` composing `src/components/homepage/*`; shared chrome is `src/components/shared/*`.
- `@/*` → `src/*`. Server components by default; add `"use client"` only for state, hooks, or browser APIs.
- Single `master` branch with one commit and a large uncommitted scaffolding tree; don't revert unrelated work.
