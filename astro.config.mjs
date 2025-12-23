// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// IMPORTANT: Before deploying, update these values:
// - If using a project repo (e.g., username/nvidia_website), set base: '/nvidia_website'
// - If using the username.github.io repo, set base: '/' or remove the base property
// - Update site URL to match your GitHub Pages URL
export default defineConfig({
    site: "https://rolin-rolin.github.io",
    base: "/nvidia_portfolio", // Change this if your repo has a different name
    vite: {
        plugins: [tailwindcss()],
    },
});
