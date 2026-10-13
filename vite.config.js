import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the root of the custom domain https://tinytalkersni.com/
// (set in the repo's Pages settings), so no subpath is needed.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
