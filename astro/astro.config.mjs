import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  integrations: [mdx(), sitemap()],
  outDir: "../cra/build/blog",
  base: "/blog",
});
