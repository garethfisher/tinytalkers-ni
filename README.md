# Tiny Talkers NI

React (Vite) rebuild of a children's speech & language therapy site, deployed
to GitHub Pages at **https://tinytalkersni.com/**.

## Stack

- [Vite](https://vitejs.dev/) + React 19, client-rendered SPA
- [React Router](https://reactrouter.com/) for the five pages
- Plain CSS (`src/styles/main.css`) — design tokens at the top, no framework
- Deployed via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`

## Structure

```
index.html          Vite entry (SPA shell — theme flash-guard + GH Pages routing fix)
public/
  404.html           GitHub Pages SPA fallback (rafgraph/spa-github-pages technique)
  brand_assets/       → symlinked to ../brand_assets (the real folder — see below)
src/
  main.jsx            Mounts <App/>, imports the global stylesheet
  App.jsx              Routes
  components/          Header (nav/theme toggle/mobile menu), Footer, Layout
  pages/                Home, About, Services, Faq, Contact
  hooks/usePageMeta.js  Sets document.title / meta description per page
  lib/asset.js          Prefixes public/ asset paths with Vite's base
  styles/main.css       Everything else
brand_assets/         Drop new logos/photos here — it's the canonical folder,
                       public/brand_assets is a symlink to it
```

## Local development

```
npm install
npm run dev       # dev server with HMR
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
Vite and publishes `dist/` via GitHub Pages (Actions-based deployment, not a
`gh-pages` branch). No manual step needed.

The app is a client-rendered SPA using `BrowserRouter`, so GitHub Pages —
which has no server-side routing — needs the classic
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect
trick to make direct links / refreshes on non-root routes (e.g.
`/about`) work. That's what `public/404.html` and the inline
script at the top of `index.html` are doing; don't remove them.

The custom domain `tinytalkersni.com` is set in the repo's Pages settings
(a `CNAME` file is ignored by Actions-based deployments), with DNS at
HostGator: four `A` records for `@` pointing at GitHub Pages and a `www`
CNAME to `garethfisher.github.io`. `vite.config.js` sets `base: "/"` to
match. If the site ever goes back to `garethfisher.github.io/tinytalkers-ni/`,
set `base` to `"/tinytalkers-ni/"` and `pathSegmentsToKeep` in
`public/404.html` to `1`, or assets/routes will 404.
