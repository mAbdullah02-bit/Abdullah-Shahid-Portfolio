# Abdullah Shahid — Personal Portfolio

A modern, responsive single-page portfolio built with React + TypeScript and Tailwind CSS to showcase projects, skills, and contact information.

Live demo
- (If deployed) Add your hosting URL here (Vercel / Netlify / GitHub Pages).

What this repo contains
- A polished developer portfolio with:
  - Hero section, About, Skills, Projects, Contact, and interactive modals.
  - Reusable UI components and motion/animation.
  - Static assets under src/assets and a simple Vite + React + TypeScript setup.

Tech stack
- TypeScript, React
- Vite
- Tailwind CSS
- motion/react (Framer Motion-like animations)
- lucide-react (icons)

Quick start (local)
1. Prerequisites
   - Node.js (v16+ recommended)
2. Install dependencies
   - npm install
3. Run development server
   - npm run dev
4. Build for production
   - npm run build
5. Preview production build
   - npm run preview

Project structure (selected)
- public/            — static files (cv, intro.mp4, etc.)
- src/
  - components/      — React components (Navbar, Hero, Projects, Modals, ...)
  - assets/          — images and static assets
  - App.tsx          — root app
  - main.tsx         — app entry
  - index.css        — global styles
  - types.ts         — shared TypeScript types

Notes & maintenance
- CV file name: Hero.tsx currently offers `Muhammad_Abdullah_Shahid_CV.pdf` for download. There is an inconsistent filename used elsewhere (`OualiCode_CV_Resume.pdf` in src/App.tsx). If you want a single canonical CV filename, update the two occurrences in src/App.tsx to match the Hero's download filename (or vice versa).
- Video: The VideoTourModal expects `public/intro.mp4` if you want an intro video to play.
- To update metadata.json or package.json (scripts / dependencies), edit the files at the repo root and push changes normally.

How to replace the README
- Option A — GitHub web:
  1. Open README.md in the repository on GitHub.
  2. Click the pencil (edit) icon, replace contents with the text above, commit the change.
- Option B — Git (local):
  1. Save the above content into README.md locally.
  2. git add README.md
  3. git commit -m "chore: replace README with updated portfolio README"
  4. git push

Suggested follow-up (optional)
- I can update the README directly in the repo and also open a small PR to:
  - Replace README.md with the content above.
  - Replace the inconsistent "OualiCode_CV_Resume.pdf" occurrences in src/App.tsx with the canonical filename you prefer (suggestion: Muhammad_Abdullah_Shahid_CV.pdf).
  Tell me if you'd like me to perform those edits and which CV filename you want used.

Summary
- New README content is provided above and ready to commit.
- The exact strings "Oualicode" and "Qualicode" do not appear; "OualiCode" appears twice in src/App.tsx (lines 128–129). Align filenames to avoid inconsistency.
