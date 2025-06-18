import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://Demurest33.github.io",
  base: "/correconhistoria",

  vite: {
    plugins: [tailwindcss()],
  },
});
