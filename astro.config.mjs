import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  adapter: vercel(),

  integrations: [
    sanity({
      projectId: "mcfpzhuk",
      dataset: "production",
      useCdn: false, // for static builds
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
    }),
    react(),
    tailwind(),
    compress(),
  ],

 
});
import { EventEmitter } from "events";

import compress from "astro-compress";
import vercel from "@astrojs/vercel";

