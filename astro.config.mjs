import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",

  integrations: [
    sanity({
      projectId: "mcfpzhuk",
      dataset: "production",
      useCdn: false, // for static builds
      apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
      studioBasePath: "/studio", // If you want to access the Studio on a route
    }),
    react(),
    tailwind(),
    compress(),
  ],

  adapter: vercel(),
});
import { EventEmitter } from "events";

import compress from "astro-compress";
import vercel from "@astrojs/vercel";
EventEmitter.defaultMaxListeners = 20; // Setzt das Limit für alle EventEmitter auf 20
