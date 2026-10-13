// Prefixes a public/ asset path with Vite's configured base ("/" on the
// custom domain; kept so the site still works if it moves to a subpath).
// Files in src/pages and src/components should always go through this
// rather than hardcoding a leading "/" — a bare "/brand_assets/x.svg"
// ignores the base, so it would 404 if the site ever moves to a subpath.
export function asset(path) {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
