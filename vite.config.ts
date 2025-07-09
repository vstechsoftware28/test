import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // ✅ Set base to your repo name for GitHub Pages
  base: "/test/",

  // ✅ Vite dev server config (optional for local)
  server: {
    host: "::",
    port: 8080,
  },

  // ✅ Plugins
  plugins: [react()],

  // ✅ Path aliases (optional)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
