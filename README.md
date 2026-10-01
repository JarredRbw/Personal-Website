# Bowei (Jarred) Ren — Personal Website

My portfolio site: projects in web development and IT, plus a photography gallery.

**Live:** https://psweb-theta.vercel.app

## Features

- Projects page grouped into Software & Web and Hardware, Systems & IT
- Photography gallery with category filters and a full-screen series viewer
- English / Chinese toggle, remembered across visits
- Responsive layout for desktop and mobile

## Tech stack

- React 19 + Vite
- React Router (client-side routing, SPA rewrites on Vercel)
- Framer Motion for page and scroll animations
- Lucide icons
- Plain CSS with shared design tokens

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
npm run lint
```

## Project structure

```
src/
├── components/     # Navbar, Footer, ProjectCard
├── data/           # projects.js, profile.js (content lives here)
├── i18n/           # language context and provider
├── pages/          # Home, Projects, Photography, About
├── App.jsx         # routes
└── main.jsx
public/images/      # photos
```

## Editing content

- **Projects:** `src/data/projects.js`. Every text field has `en` and `zh` versions.
- **Contact info and skills:** `src/data/profile.js`. Set `resumeUrl` (for example `/resume.pdf`, placed in `public/`) to show a resume button.
- **Photos:** add files under `public/images/Assets/` and list them in `src/pages/Photography.jsx`. Resize large photos to about 2400px on the long edge before committing.

## Contact

- Email: jarredr1@uci.edu
- GitHub: [@JarredRbw](https://github.com/JarredRbw)
