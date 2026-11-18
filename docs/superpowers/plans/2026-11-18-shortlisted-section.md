# Shortlisted Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Built on my own" home section and a `/work/shortlisted` page with an architecture diagram, real fake-data screenshots and a Claude example.

**Architecture:** Shortlisted content lives in `lib/content.js` as its own export (`sideProject`), not in `caseStudies`. A static route `app/work/shortlisted/page.js` (wins over `[slug]`) reuses `CaseStudy` and adds three new components. Screenshots come from the real Shortlisted app run locally against a separate demo database.

**Tech Stack:** Next.js 14 App Router (JS), plain CSS tokens in `app/globals.css`; Shortlisted: Next.js 15 + TiDB Cloud serverless driver.

**Spec:** `docs/superpowers/specs/2026-11-18-shortlisted-section-design.md`

## Global Constraints

- No new runtime dependencies in the portfolio (`next`, `react`, `react-dom` only).
- Colours only via existing tokens (`--bg --surface --ink --muted --rule --accent --accent-soft --mark`); must read in light and dark.
- No real names, emails or companies in any screenshot. Only fictional demo data.
- Do not modify or commit to `~/shortlisted`. Do not touch the production database; every Shortlisted command runs with `DATABASE_URL` pointed at `shortlisted_demo`.
- No link to the Shortlisted repo or a demo site; say "Code available on request".
- Never push to `main`; draft PR from `shortlisted-portfolio-section`.

## Review Focus

- Wrong database: a Shortlisted script that loads `.env.local` first could hit production. Every script run prints `SELECT DATABASE()` and must show `shortlisted_demo`.
- Real data leaking into a screenshot (e.g. the header showing a signed-in user). Inspect each PNG before committing.
- Phone width (375px): the screenshot gallery, diagram and Claude example must not cause horizontal page scroll.
- Dark mode: the SVG diagram must use `currentColor`/CSS variables, not fixed fills.
- `/work/[slug]` still builds for the three Maxio case studies, and their "Next" cycle doesn't include Shortlisted.

---

### Task 1: Demo database and screenshots

**Files:**
- Create (scratchpad only): `demo-extra.json`, `seed-mcp.mjs`
- Create: `public/shortlisted/dashboard.png`, `applications.png`, `contacts.png`, `activity.png`

- [ ] **Step 1:** Using the cluster in `~/shortlisted/.env.local`, run `CREATE DATABASE IF NOT EXISTS shortlisted_demo` and build `DEMO_DB_URL` = same URL with path `/shortlisted_demo`. Never print the URL.
- [ ] **Step 2:** `DATABASE_URL=$DEMO_DB_URL npm run db:migrate`, then `db:import` (demo.json) and `db:import -- <scratch>/demo-extra.json` (≈6 more fictional applications across statuses, 3 contacts, 1 agency). Verify `SELECT DATABASE()` = `shortlisted_demo` and row counts.
- [ ] **Step 3:** Run `next dev -p 3100` with `DATABASE_URL=$DEMO_DB_URL DEMO_MODE=false API_KEY=<random 32 hex> OWNER_EMAIL=demo@example.invalid`. Through `/api/c/<key>/mcp`, call `log_outreach`, `update_application_status`, `mark_replied` (3–4 calls). Expected: activity rows with source `mcp`.
- [ ] **Step 4:** Restart with `DEMO_MODE=true` (no API_KEY). Capture `/`, `/applications`, `/contacts`, `/activity` at 1280px wide, light theme, into `public/shortlisted/`. Expected: no sign-in, demo names only.
- [ ] **Step 5:** Stop the server. Inspect every PNG for real data. Commit `public/shortlisted/*.png`: `chore: add Shortlisted demo screenshots`.

### Task 2: Content and components

**Files:**
- Modify: `lib/content.js` (add `export const sideProject`)
- Create: `components/ArchitectureDiagram.js`, `components/Screenshots.js`, `components/ClaudeExample.js`
- Modify: `app/globals.css` (styles for `.arch`, `.shots`, `.claude-ex`)

**Interfaces:**
- Produces: `sideProject` with the `CaseStudy` shape (`slug: "shortlisted"`, `tag`, `title`, `summary`, `meta`, `problem`, `approach`, `lines`, `result`) plus `screenshots: [{ src, alt, caption }]` and `example: { prompt, calls: [{ tool, args }], reply }`.
- Produces: `<ArchitectureDiagram />`, `<Screenshots items={sideProject.screenshots} />`, `<ClaudeExample example={sideProject.example} />`.

- [ ] **Step 1:** Write `sideProject` copy from the Shortlisted README (rules, activity log, per-user isolation, hashed keys, MCP + REST + dashboard). Meta: Period "Nov 2026", Role "Designer, builder, operator", Stack "Next.js · TiDB · MCP", Code "Available on request".
- [ ] **Step 2:** Build the three components. Diagram: SVG `viewBox`, `width:100%`, strokes/fills from CSS vars, with a text equivalent in `<figcaption>`. Screenshots: `<figure>` per item, `<img loading="lazy" width height>`, 2-column grid falling to 1 column under 700px. Example: mono-styled transcript, not imitating Claude's UI.
- [ ] **Step 3:** `npm run build`. Expected: success.
- [ ] **Step 4:** Commit: `feat: add Shortlisted content and page components`.

### Task 3: Page, home section, verification, PR

**Files:**
- Create: `app/work/shortlisted/page.js`
- Modify: `app/page.js` (new `<section id="built">` above `#more`), `components/Nav.js` only if a nav entry fits.

- [ ] **Step 1:** Page: page-head, problem, approach, `<ArchitectureDiagram/>`, `<Screenshots/>`, `<ClaudeExample/>`, "What I delivered" + `<CaseStudy c={sideProject} showHeader={false}/>`, back link to `/#built`. `metadata` from `sideProject`.
- [ ] **Step 2:** Home: "Built on my own" sec-head plus one card (same `.card` markup) linking to `/work/shortlisted`, using `dashboard.png` as a thumbnail.
- [ ] **Step 3:** `npm run build`, then `npm run dev`. Check `/` and `/work/shortlisted` in the browser at 1280px and 375px, light and dark; check `/work/segment-level-custom-pricing` still renders. Expected: no horizontal scroll, no console errors.
- [ ] **Step 4:** Commit `feat: add Shortlisted page and home section` plus the spec/plan (`docs: add Shortlisted section design and plan`). Push the branch and open a draft PR with summary, why, and verification steps.
