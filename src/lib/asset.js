// Prefixes a public/ asset path with Vite's configured base (the
// "/tinytalkers-ni/" subpath GitHub Pages serves this project site from).
// Files in src/pages and src/components should always go through this
// rather than hardcoding a leading "/" — a bare "/brand_assets/x.svg"
// resolves to the domain root, not the repo subpath, and 404s in prod.
export function asset(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
