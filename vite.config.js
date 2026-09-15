import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://garethfisher.github.io/tinytalkers-ni/ — a GitHub
// Pages project site lives under a /<repo-name>/ subpath, so every asset
// and route needs that base baked in.
export default defineConfig({
  base: "/tinytalkers-ni/",
  plugins: [react()],
});
