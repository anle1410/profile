# Lê Phú An | Full-stack Developer Portfolio

<p align="center">
  <img src="public/favicon.svg" alt="Lê Phú An brand mark" width="120" />
</p>

<p align="center">
  <strong>Premium personal portfolio for a developer with interests in web, mobile, AI, QA, data, and game interfaces.</strong>
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#content-profile">Profile</a> •
  <a href="#customization">Customization</a> •
  <a href="#run-project">Run Locally</a> •
  <a href="#deployment">Deployment</a>
</p>

---

## Overview

This project is a premium, responsive portfolio website for <strong>Lê Phú An</strong>, built to present a modern developer identity in a clean and professional manner.

The portfolio is designed with a dark, futuristic style and premium visual language, with accent colors based on cyan and violet tones. It is intentionally structured as a data-driven portfolio so content is easy to maintain and update without rewriting UI logic.

It highlights:

- Personal branding and developer positioning
- Technical skill presentation
- Project showcase with expandable details
- Educational journey and learning roadmap
- Career goal section
- Evidence-based certificate presentation
- Contact channel for opportunities
- Theme switching between dark and light mode

---

## Features

### Main sections

- Hero section with name, role, tagline, and call-to-action buttons
- About section with authentic personal introduction
- Skill groups with category-based breakdowns and technical strength indicators
- Project cards with summary, tags, role, and project details
- Education and learning journey timeline
- Career goals section
- Certificates section with verification-aware status labels
- Contact section with email, GitHub, LinkedIn, phone, and email compose action
- Mobile navigation and responsive layout
- Dark/light theme toggle with persistent state
- Smooth entrance motion using Framer Motion

### UX & quality goals

- Professional, premium aesthetic
- Clean layout optimized for portfolios and recruiters
- Accessibility-friendly structure and readable contrast
- Reduced-motion support for better user experience
- Minimal fake/invented data; missing items are labeled honestly as pending or available later

---

## Tech Stack

| Category | Tools |
|---|---|
| Frontend | React + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| Icons | Lucide React |
| UI structure | Modular data-driven design |

---

## Content Profile

This project presents the following information about the author:

- Name: Lê Phú An
- Role: Full-stack Developer
- Focus: Web • Mobile • AI • Quality Engineering • Data • Game
- Education: Đại học Văn Hiến
- Major: Công nghệ phần mềm
- Status: Sinh viên năm 4, đang định hướng tìm kiếm cơ hội thực tập và fresher
- Email: anle64437@gmail.com
- Phone: 0868264437
- GitHub: https://github.com/anle1410
- LinkedIn: https://www.linkedin.com/in/l%C3%AAph%C3%BAan

The portfolio intentionally avoids fabricated job history, fake certificates, or unverifiable claims. Where official data is missing, the UI marks it as pending or coming soon.

---

## Project Structure

```text
web cv/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── project-ecommerce.svg
│       ├── project-agrivision.svg
│       ├── project-game.svg
│       └── project-gesture.svg
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   └── SectionHeader.tsx
│   └── data/
│       ├── profile.ts
│       ├── skills.ts
│       ├── projects.ts
│       ├── education.ts
│       └── certificates.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── README.md
└── .gitignore
```

---

## Customization

The portfolio content is separated by data files for easy editing.

### Main content files

- `src/data/profile.ts` — name, intro, contacts, navigation, goals
- `src/data/skills.ts` — skill categories and percentages
- `src/data/projects.ts` — projects, roles, summaries, tags, and details
- `src/data/education.ts` — learning timeline
- `src/data/certificates.ts` — certificates and verification status

### How to update content

Edit the data objects in those files and the UI will reflect the changes automatically.

Example:

```ts
export const profile = {
  name: 'Lê Phú An',
  role: 'FULL-STACK DEVELOPER',
  email: 'anle64437@gmail.com',
};
```

---

## Run Project Locally

### 1) Install dependencies

```bash
npm install
```

### 2) Start the project in development mode

```bash
npm run dev -- --host 0.0.0.0
```

Then open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173/
```

### 3) Production build

```bash
npm run build
```

This generates a production build in the `dist` folder.

---

## Deployment

### Option 1: Vercel

1. Push the project to GitHub
2. Import the repository into Vercel
3. Use the default Vite configuration
4. Deploy

### Option 2: Other static servers

The build output in `dist/` can be deployed to static hosting platforms such as Netlify, Vercel, Cloudflare Pages, or any web hosting provider that supports static frontend apps.

---

## CV & Official Documents

The portfolio includes a CV download section, but the actual PDF file is not included here because no official resume file was provided.

When the real PDF is ready, place it in:

```text
public/cv.pdf
```

Then enable the download flow in `src/App.tsx` by setting the `cvAvailable` flag accordingly.

---

## Notes on authenticity

This portfolio follows a strict content-standard approach:

- No fake company names
- No fake work experience
- No fake certificates
- No fake GitHub repositories
- No false claims or unverifiable achievements
- Missing information is clearly shown as pending or coming soon

This keeps the portfolio trustworthy, professional, and realistically extendable.

---

## Author

<strong>Lê Phú An</strong>

Developer portfolio and personal brand website created to present technical skills, learning goals, and ongoing professional growth in a modern and polished format.

---

<p align="center">
  <sub>Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.</sub>
</p>
