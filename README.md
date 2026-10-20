# DreamScholar

Discover fully funded scholarships around the world — by country, degree level, and field of study.

DreamScholar is a **frontend-only** Next.js 15 (App Router) application built with TypeScript, Tailwind CSS, and static JSON data. There is no backend, database, or authentication. The project builds to a **fully static export** (plain HTML/CSS/JS, no Node server required), which means it can be deployed to Vercel, Hostinger shared hosting, Netlify, GitHub Pages, or any static file host.

---

## 1. Tech Stack

- **Next.js 15** (App Router), configured with `output: "export"` for static hosting
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **lucide-react** for icons
- Static JSON data (no API, no database)

---

## 2. Project Structure

```
dreamscholar/
├─ src/
│  ├─ app/                  # App Router pages, layouts, metadata, sitemap, robots
│  │  ├─ scholarships/      # Listing + [slug] detail page
│  │  ├─ countries/         # Listing + [slug] detail page
│  │  ├─ degrees/           # Listing + [slug] detail page
│  │  ├─ guides/            # Listing + [slug] detail page
│  │  ├─ about/ contact/ faq/ privacy/ terms/
│  │  ├─ sitemap.ts  robots.ts  not-found.tsx
│  │  └─ layout.tsx  page.tsx  globals.css
│  ├─ components/
│  │  ├─ ui/                # Button, Badge, Container, Input, Accordion, AdUnit, AdSenseScript, CookieConsent, etc.
│  │  ├─ layout/             # Navbar, Footer
│  │  ├─ home/                # Hero, SearchBar, FeaturedScholarships, etc.
│  │  ├─ scholarship/ country/ guide/
│  ├─ data/                  # scholarships.json, countries.json, guides.json, degrees.json, faqs.json
│  ├─ types/                 # Shared TypeScript interfaces
│  ├─ lib/                   # data.ts (data access layer), utils.ts
│  └─ constants/             # Nav links, site metadata constants
├─ public/                   # Static assets, favicon, ads.txt
├─ tailwind.config.ts
├─ tsconfig.json
├─ next.config.mjs
├─ .env.example
└─ package.json
```

---

## 3. Getting Started Locally

### Step 1 — Install dependencies

```bash
npm install
```

### Step 2 — Run the development server

```bash
npm run dev
```

Visit **http://localhost:3000** in your browser.

### Step 3 — Lint the project

```bash
npm run lint
```

### Step 4 — Build the static site

```bash
npm run build
```

This generates a complete static site in the **`out/`** folder — this folder is what you deploy.

### Step 5 — Preview the production build locally

```bash
npm run preview
```

(This runs a simple static file server over the `out/` folder. `next start` does **not** work with this project anymore, since static export has no Node server to start.)

---

## 4. Deploying to Hostinger

Since the site builds to plain static files, this works on Hostinger's regular **shared/Premium/Business hosting** — you do not need Hostinger's VPS or Node.js hosting plan.

1. **Set any environment variables before building** (see Step 6 below on AdSense) — with static export, env vars are baked into the files at build time, not read later on a server. If you skip this, build first and add them before your *next* build.
2. Run `npm run build` on your own computer. This creates the `out/` folder.
3. Log in to **Hostinger hPanel** → **File Manager** (or use FTP/SFTP with FileZilla using the credentials in hPanel → Files → FTP Accounts).
4. Navigate to `public_html` (this is your site's web root). If it already has default files (like a placeholder `index.html`), delete them.
5. Upload the **contents** of your local `out/` folder into `public_html` — not the `out` folder itself, its *contents* (so `public_html/index.html`, `public_html/about.html`, `public_html/_next/...`, etc. should exist directly).
   - For a large number of files, it's much faster to zip the contents of `out/` locally, upload the single zip via File Manager, then use File Manager's "Extract" option inside `public_html`.
6. Point your domain to Hostinger (if not already) via hPanel → Domains, and Hostinger will auto-provision an SSL certificate (Hostinger uses free Let's Encrypt SSL — enable it under **SSL** in hPanel if it isn't already active).
7. Visit your domain — the site should now be live.

**Updating the site later:** every time you change content (e.g. edit `scholarships.json`) or code, run `npm run build` again locally and re-upload the new `out/` contents, overwriting the old files.

**One routing detail:** static export generates one HTML file per page (e.g. `about.html`), and Next.js's own links handle navigation between them client-side once loaded. Hostinger's Apache/LiteSpeed server serves these directly with no special configuration needed — no rewrites or `.htaccess` changes are required for this project.

---

## 5. Deploying to Vercel (alternative)

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js and handles the static export automatically — no configuration needed.
4. Click **Deploy**. Your site will be live at `your-project.vercel.app`.
5. (Optional) Add a custom domain under **Project Settings → Domains**.

Alternatively, using the Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 6. Before going live (either host)

- Update `SITE_URL` in `src/constants/index.ts` to your real production domain (this powers metadata, Open Graph tags, `sitemap.ts`, and `robots.ts`) — then rebuild.
- Update `CONTACT_EMAIL` in `src/constants/index.ts` to a real inbox you check — it's referenced on the Privacy and Terms pages.
- Review `src/app/terms/page.tsx`, Section 10 ("Governing Law") — it has a placeholder asking you to specify your actual jurisdiction.
- Replace `public/og-image.png` with a real 1200×630 Open Graph image if you want link previews to look polished on social media.
- **AdSense setup (`NEXT_PUBLIC_ADSENSE_CLIENT_ID`)**: since this is a static export, this environment variable must be set **before you run `npm run build`**, not just at deploy time — the value gets compiled directly into the static files. See `.env.example`.
  - Locally: copy `.env.example` to `.env.local`, fill in your real AdSense publisher ID, then run `npm run build`.
  - On Vercel: set it under Project Settings → Environment Variables, which Vercel automatically uses during its build step.
  - After AdSense approval, also paste the exact line AdSense gives you into `public/ads.txt`, then rebuild and re-upload/redeploy.

---

## 7. Adding or Editing Content

Because this is a static data project, all content lives in `src/data/*.json`:

| File | Purpose |
|---|---|
| `scholarships.json` | All scholarship listings (20 included) |
| `countries.json` | Country pages used in "Study in X" |
| `degrees.json` | Bachelor / Master / PhD metadata |
| `guides.json` | Guide articles |
| `faqs.json` | FAQ page content |

To add a new scholarship, copy an existing object in `scholarships.json`, give it a unique `id` and `slug`, and fill in the fields. Static pages are generated automatically at build time — no other code changes required. **Remember: any content change requires running `npm run build` again and re-uploading/redeploying**, since there's no live database.

---

## 8. Recommended VS Code Extensions

- **ESLint** (`dbaeumer.vscode-eslint`)
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
- **Prettier - Code Formatter** (`esbenp.prettier-vscode`)
- **Error Lens** (`usernamehw.errorlens`)
- **Path Intellisense** (`christian-kohler.path-intellisense`)

---

## 9. Recommended npm Packages (for future versions)

These are **not installed** currently (frontend-only, no backend), but are worth considering as the project grows:

- `next-sitemap` — advanced sitemap generation, if you outgrow `sitemap.ts`
- `zod` — schema validation if you later add a real backend for the contact/newsletter forms
- A form backend service (e.g. Formspree, Resend) — since static export has no server, the current Contact and Newsletter forms are UI-only; connecting them to a real inbox requires either a third-party form service or moving those specific features to a platform with server support (Vercel serverless functions, for example — this would mean stepping away from full static export for just those two features)
- `@vercel/analytics` or a privacy-friendly analytics script — for visitor tracking if not relying on Google Analytics

---

## 10. Accessibility & SEO Notes

- Semantic HTML and heading hierarchy are used throughout (single `<h1>` per page).
- All interactive elements are keyboard-navigable with visible focus states.
- `sitemap.ts` and `robots.ts` are generated at build time from the JSON data, producing static `sitemap.xml` and `robots.txt` files.
- Every page exports `metadata` (or `generateMetadata`) with title, description, canonical URL, and Open Graph tags.
- JSON-LD structured data is included on the homepage (`WebSite`), scholarship detail pages (`EducationalOccupationalProgram`), guide pages (`Article`), and the FAQ page (`FAQPage`).
- After deploying, submit `https://yourdomain.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) to help Google index the site faster.

---

Built to become the best scholarship discovery platform on the internet — one honest, well-organized listing at a time.
