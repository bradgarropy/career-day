# career-day

Brad Garropy's career day presentations for Highland Park Elementary School, hosted at [career.bradgarropy.com](https://career.bradgarropy.com).

Each year is a self-contained slide deck on its own route:

- `/` — landing page with links to each year
- `/2024` — first career day presentation
- `/2026` — most recent career day presentation
- `/2026/demo` — live AI demo target (Magic 8-Ball, rebuilt during the talk)
- `/2026/demo/backup` — manual fallback if the live demo goes sideways

## Stack

- [React Router 7](https://reactrouter.com) (SSR)
- React 19
- [Tailwind CSS 4](https://tailwindcss.com)
- [Vite 8](https://vite.dev)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) for hosting (via [@cloudflare/vite-plugin](https://www.npmjs.com/package/@cloudflare/vite-plugin))
- [@cloudflare/kumo](https://github.com/cloudflare/kumo) for code highlighting (Shiki) on the 2026 deck
- [motion](https://motion.dev) for animations
- [canvas-confetti](https://github.com/catdad/canvas-confetti) for the questions slide
- TypeScript, [oxlint](https://oxc.rs), [oxfmt](https://oxc.rs)

## Getting started

Use Node 24 (see `.nvmrc`):

```bash
nvm use
npm install
npm run dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` — start the dev server with HMR (running in the Workers runtime via the Cloudflare Vite plugin)
- `npm run build` — production build (outputs to `build/`)
- `npm run preview` — build then preview locally with `vite preview`
- `npm run deploy` — build then `wrangler deploy` to Cloudflare Workers
- `npm run typecheck` — generate Cloudflare types, generate route types, then `tsc`
- `npm run lint` / `npm run lint:fix` — oxlint
- `npm run format` / `npm run format:fix` — oxfmt

## Project structure

```
.
├── app/
│   ├── app.css                       # Tailwind 4 entry, theme tokens (incl. hpes colors), global styles
│   ├── root.tsx                      # Root layout, fonts, ShikiProvider
│   ├── entry.server.tsx              # Cloudflare Workers SSR entry
│   ├── routes.ts                     # Route table
│   ├── routes/
│   │   ├── _index.tsx                # Landing page
│   │   ├── 2024.tsx                  # 2024 deck (self-contained, all sections inline)
│   │   ├── 2026.tsx                  # 2026 deck (composes section components)
│   │   ├── 2026.demo.tsx             # AI demo stub (replaced by AI live)
│   │   └── 2026.demo.backup.tsx      # Manual Magic 8-Ball fallback
│   ├── components/
│   │   ├── KeyboardNav.tsx           # Arrow-key / space deck navigation (takes sectionIds prop)
│   │   ├── PresenterHelp.tsx         # "?" overlay listing keyboard shortcuts
│   │   ├── ConfettiOnEnter.tsx       # Fires confetti when a section scrolls into view
│   │   ├── PlaceholderImage.tsx      # Visual placeholder for missing assets
│   │   ├── Section.tsx               # Snap-scroll <section> wrapper for the 2026 deck
│   │   └── sections/                 # 2026-specific section components
│   └── lib/
│       ├── prompts.ts                # Magic 8-Ball prompt for the AI demo
│       └── sections.ts               # Ordered SECTION_IDS for the 2026 deck
├── workers/
│   └── app.ts                        # Cloudflare Worker entry (delegates to React Router)
├── public/
│   ├── favicon.png
│   └── images/                       # Flat asset folder
├── react-router.config.ts            # SSR + v8_viteEnvironmentApi
├── vite.config.ts                    # cloudflare + tailwindcss + reactRouter plugins
├── wrangler.jsonc                    # Workers config (name, compat date, assets binding)
└── .nvmrc                            # Node 24
```

### Asset naming

Assets live flat in `public/images/`. When an image is shared between years it just keeps its plain name (e.g. `bulldog.png`, `bg.png`, `youtube.png`). When an image meaningfully differs between years, it gets a suffix that describes the variant:

- **Year-suffixed** when the image is year-specific: `vscode-2024.png` / `vscode-2026.png`
- **Descriptively suffixed** when one variant is shared across years: `apple-black.png` (2026 logo color) and `apple-white.png` (2024 logo color)

## Keyboard shortcuts (both decks)

| Key                            | Action                          |
| ------------------------------ | ------------------------------- |
| `→` `↓` `Space` `PageDown`     | Next slide                      |
| `←` `↑` `Shift+Space` `PageUp` | Previous slide                  |
| `Home` / `End`                 | First / last slide              |
| `f`                            | Toggle fullscreen               |
| `?`                            | Toggle presenter help overlay   |
| `Esc`                          | Close overlay / exit fullscreen |

The current slide id is reflected in the URL hash (e.g. `/2026#salary`) so individual slides are linkable.

## Adding a new year

1. Drop a new `app/routes/<year>.tsx`. It can either be:
   - **Self-contained** like `2024.tsx` (all sections inline, single file), or
   - **Composed** like `2026.tsx` (sections split into `app/components/sections/*` and an ordered list in `app/lib/sections.ts`).
2. If it's keyboard-navigable, render `<KeyboardNav sectionIds={[...]} />` and `<PresenterHelp />` in the route.
3. Drop assets in `public/images/`. Reuse existing filenames if the image is identical across years; otherwise add a year suffix or a descriptive suffix.
4. Register the route in `app/routes.ts`.
5. Add a card to the landing page in `app/routes/_index.tsx`.

## Deployment

Hosted on Cloudflare Workers. From a clean machine:

```bash
nvm use                # Node 24
npm install
npx wrangler login     # one-time auth
npm run deploy         # build + wrangler deploy
```

The custom domain `career.bradgarropy.com` is wired up in the Cloudflare dashboard.
