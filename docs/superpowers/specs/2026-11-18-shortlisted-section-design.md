# Shortlisted section: design

**Status:** approved 2026-11-18

## Why
Show that Phil can design and ship a product end to end, and that he builds AI-native tools.
Shortlisted (a job-search tracker that Claude updates directly over MCP) is the proof.

## Goals
- A "Built on my own" section on the home page, above "More work", with one card linking to `/work/shortlisted`.
- A `/work/shortlisted` page in the case-study style (problem, approach, line items, result), plus:
  1. An architecture diagram: Claude (MCP), scripts (REST) and the dashboard → one service layer → TiDB Cloud.
     Inline SVG using the site's colour tokens, correct in light and dark.
  2. Real screenshots of the running app with fictional data: dashboard, applications, contacts, activity log
     (the activity log shows changes tagged `mcp` next to `dashboard`/`import`).
  3. A "Claude in action" example: a request, the tool calls it triggers, and the follow-up the server schedules.

## Non-goals / anti-goals
- No changes to the Shortlisted repo, no public demo deployment, no link to the (private) code; the page says
  the code is available on request.
- No real names or data in screenshots. A screenshot that leaks real tracker data is a failure even if the page works.
- Shortlisted is not added to the "Case studies" list, which is described as three Maxio projects.

## Approaches considered
- **A. Real screenshots from a demo database (chosen).** A separate `shortlisted_demo` database on the existing TiDB
  cluster, loaded with fictional data; `mcp` activity created by real calls to the app's MCP endpoint.
- B. Rebuilt HTML mockups: no infrastructure, but not the real app, which undercuts "I shipped this".
- C. A plus a public demo deployment: strongest proof, but another deployment to maintain. Possible follow-up.

## Decisions
- Fake data: `data/demo.json` (5 applications, no activity) plus extra fictional rows kept in the scratchpad, not
  committed to either repo. Real database untouched.
- Screenshots in `public/shortlisted/`, optimised PNGs.
- Branch `shortlisted-portfolio-section`, draft PR against `main` (pushing to `main` redeploys the live site).

## Left to the builder
Exact copy, screenshot crop and viewport, diagram layout, and the order of the four screenshots.
