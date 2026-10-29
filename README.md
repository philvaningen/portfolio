# Phil Van Ingen · Portfolio

Personal portfolio site: case studies from my work at Maxio, an About page, and my resume.

Built with [Claude](https://claude.ai) and Next.js 14 (App Router), deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit

- `lib/content.js` holds all the copy: stats, case studies, more work, and the timeline.
- `app/resume/page.js` is the web version of the resume. The PDF is `public/Phil-Van-Ingen-Resume.pdf`.
- `app/globals.css` holds the design tokens (colors and fonts, light and dark).

Every push to `main` redeploys on Vercel.
