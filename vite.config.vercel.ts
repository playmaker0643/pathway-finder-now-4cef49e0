// Vercel-only Vite config. Used by `vercel-build` script during Vercel deployment.
// The default vite.config.ts targets Cloudflare Workers (Lovable preview).
// This file replaces that target with Nitro → Vercel Functions.
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart(),
    nitro({ config: { preset: "vercel" } }),
    viteReact(),
  ],
});
