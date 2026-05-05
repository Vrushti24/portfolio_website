# Vrushti Shah — Portfolio v2

Personal portfolio website built with React 18 + Vite + Tailwind CSS.

## Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3 + custom CSS variables
- **Fonts**: Unbounded (900) + Plus Jakarta Sans (400/500/600) via Google Fonts
- **No UI libraries** — pure Tailwind + vanilla CSS

## Features

- Sticky navbar with blur backdrop + scroll-spy active link highlighting
- Mobile hamburger drawer with staggered animation
- Hero section with animated typewriter roles + drifting orb background
- Scroll-triggered fade-up reveals via IntersectionObserver (staggered per card)
- Animated count-up stat counters
- Vertical experience timeline with gradient line
- Featured + grid project cards with "show more / show less" toggle
- Writing section for Medium articles
- Skill pills grouped by category with hover glow
- Email copy-to-clipboard with toast notification
- Noise texture overlay, gradient mesh orbs, smooth scrollbar

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Customization

| File | Purpose |
|------|---------|
| `src/data/projects.js` | Featured + grid projects |
| `src/data/experience.js` | Work experience entries |
| `src/data/skills.js` | Skill groups + certifications |
| `src/data/articles.js` | Medium articles |
| `public/resume.pdf` | Replace with your resume |

## Deploy

Drop the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages):

```bash
npm run build
# deploy dist/
```

Netlify one-liner:
```bash
npx netlify-cli deploy --dir=dist --prod
```
