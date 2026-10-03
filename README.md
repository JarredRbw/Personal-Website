# Jarred Ren — Personal Website

My portfolio site: projects in web development and IT, plus a photography gallery.

**Live:** https://psweb-theta.vercel.app

## Features

- Projects page grouped into Software & Web and Hardware, Systems & IT
- Photography gallery with category tabs, a masonry layout and a full-screen viewer (keyboard and swipe navigation)
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
public/photos/      # gallery photos and thumbnails
```

## Editing content

- **Projects:** `src/data/projects.js`. Every text field has `en` and `zh` versions.
- **Contact info and skills:** `src/data/profile.js`. Set `resumeUrl` (for example `/resume.pdf`, placed in `public/`) to show a resume button.
- **Photos:** each photo has a full-size version in `public/photos/<category>/` and a thumbnail in `public/photos/<category>/thumbs/`, listed in `src/data/photos.js`. Resize to about 2400px (thumbnails 1000px) and strip metadata such as GPS before committing. Set `hidden: true` to hide a photo without deleting it.

## Contact

- Email: jarredr1@uci.edu
- GitHub: [@JarredRbw](https://github.com/JarredRbw)
