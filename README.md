# DreamScholar

**Discover fully funded scholarships around the world — by country, degree level, and field of study.**

DreamScholar is a frontend-only scholarship discovery platform built with Next.js 15. It helps students explore scholarship opportunities through country-based browsing, degree categories, and scholarship guides.

 **Live Website:** [dreamscholars.vercel.app](https://dreamscholars.vercel.app/)

##  Features

- Explore scholarship opportunities around the world.
- Browse scholarships by country and degree level.
- Discover scholarship guides and useful information.
- Navigate a responsive interface designed for students.
- Access content powered by static JSON data.

##  Tech Stack

- **Next.js 15** — App Router and static site export
- **React 19** — UI development
- **TypeScript** — Strict type checking
- **Tailwind CSS** — Styling and responsive design
- **Lucide React** — Icons
- **Static JSON** — Local content data

##  Architecture

DreamScholar is a frontend-only application with no custom backend, database, or authentication system.

The project uses Next.js static export to generate HTML, CSS, and JavaScript files for deployment on static hosting platforms.

##  Getting Started

### Prerequisites

- Node.js compatible with your project's dependencies
- npm

### 1. Clone the repository

```bash
git clone https://github.com/mariakassimm/DreamScholarS.git
cd DreamScholarS
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run the linter

```bash
npm run lint
```

### 5. Build the static site

```bash
npm run build
```

The static site is generated in the `out/` directory when the build completes successfully.

### 6. Preview the production build

If your project defines a `preview` script in `package.json`, run:

```bash
npm run preview
```

Otherwise, use a local static file server to preview the generated `out/` directory.

##  Deployment

Visit the live application:

**[https://dreamscholars.vercel.app/](https://dreamscholars.vercel.app/)**

The project is configured for static export, making it suitable for static hosting platforms.



*Built with Next.js, React, TypeScript, and Tailwind CSS.*
