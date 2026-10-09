# Portfolio — Anggara Pratama

Personal portfolio landing page. Static export, deployed to GitHub Pages.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # produces ./out — the static site
npx serve out      # serve the export exactly as GitHub Pages will
```

`npx serve out` is worth running before deploying. It exercises the built files,
so asset-path and basePath mistakes surface locally instead of as 404s in production.

---

## Editing content

**All content lives in `src/data/`. You should never need to touch a component to
change a fact.**

| File | What's in it |
|---|---|
| `src/data/site.ts` | Name, title, contact details, hero pitch, stats |
| `src/data/projects.ts` | All 10 projects, including the filter `category` |
| `src/data/experience.ts` | Work history, companies and roles |
| `src/data/skills.ts` | Skill groups and their badges |
| `src/data/certifications.ts` | Certifications and credential IDs |
| `src/data/about.ts` | About paragraphs + the featured metric |
| `src/data/terminal.ts` | Terminal commands (built from the files above) |

The terminal reads from these same files, so its output can never disagree with
the page. Adding a project to `projects.ts` adds it to the grid *and* to
`ls projects`.

### Adding a project

```ts
{
  slug: "my-new-service",
  title: "My New Service",
  client: "MileApp",
  period: "2026",
  category: "mileapp",   // "mileapp" | "enterprise"
  summary: "One sentence on what it is.",
  highlights: ["Concrete, verifiable detail", "A number wherever possible"],
  stack: ["Go", "PostgreSQL"],
  featured: true,        // larger treatment + accent border
}
```

### Adding a terminal command

Add an entry to the `commands` array in `src/data/terminal.ts`. `name` may contain
spaces (`ls projects`); `aliases` gives alternative invocations. Return an array of
`{ tone, content }` lines — `tone` is one of `text`, `muted`, `accent`, `highlight`, `error`.

---

## Deploying to GitHub Pages

**Live URL:** `https://thecoderacer.github.io/whoami/`
**Repo:** `git@github.com:thecoderacer/whoami.git`

The repo is named `whoami`, so this is a **project page** — it is served from the
`/whoami` subpath, not the domain root. Every asset URL therefore needs a
`/whoami` prefix, which is what `basePath` does.

### Building for Pages

```bash
npm run build:pages     # NEXT_PUBLIC_BASE_PATH=/whoami next build
npx serve out           # verify before pushing
```

> **Use `npm run build:pages`, never plain `npm run build`, for anything you deploy.**
> `npm run build` emits unprefixed asset URLs. Served from `/whoami/` those all 404
> and you get a blank page with a console full of failed requests.

### If you rename the repo

- **Renaming to `thecoderacer.github.io`** (a user page served from the domain root):
  remove the `NEXT_PUBLIC_BASE_PATH` env var from the `build:pages` script and switch
  the workflow back to `npm run build`. Also update `metadataBase` in
  `src/app/layout.tsx`.
- **Renaming to anything else**: change `/whoami` in the `build:pages` script to
  `/<new-repo-name>`, and update `metadataBase` to match.

### First deploy

1. Create the repo on GitHub named `whoami`.
2. Push:
   ```bash
   git remote add origin git@github.com:thecoderacer/whoami.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

### A note on the profile photo

`src/assets/profile.jpg` is a **static import**, not a file in `public/`. That is
deliberate: Next emits static imports under `/_next/static/media/` where
`basePath` is applied automatically, whereas a raw `/profile.jpg` reference does
**not** get the prefix and 404s on a project page. If you add more images, import
them the same way.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx      metadata, fonts, <html> shell
│   ├── page.tsx        composes the sections in order
│   └── globals.css     ← colour palette + base styles
├── components/
│   ├── layout/         Nav, Footer
│   ├── sections/       one file per page section
│   ├── interactive/    Terminal, StatCounter, Reveal, GridBackdrop
│   └── ui/             Section, Card, Badge, LinkButton
├── data/               ← all content
└── hooks/              useInView, usePrefersReducedMotion
```

---

## The colour palette

Defined once in `src/app/globals.css` under `@theme` (Tailwind v4 configures in
CSS, so there is no `tailwind.config.js`). Five families, each with 100–900 shades:

`prussian-blue` (base) · `space-indigo` (surfaces) · `dusk-blue` (borders, muted text)
· `tropical-teal` (accent) · `neon-ice` (highlight)

To change a colour, edit it in `globals.css` — every utility updates.

---

## Notes on the interactive layer

The terminal, stat counters, scroll reveals and project filter are deliberately
lightweight: no animation library, animations restricted to `transform` and
`opacity`, and `IntersectionObserver` instead of scroll listeners.

Everything animated stops under `prefers-reduced-motion`, and the page is fully
readable with JavaScript disabled — the hero, experience, projects, skills and
contact details are all server-rendered.

If you add motion, keep to those rules or the performance budget slips.
