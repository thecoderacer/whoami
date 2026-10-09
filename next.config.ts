import type { NextConfig } from "next";

/**
 * GitHub Pages serves static files only, so the site is exported as static HTML.
 *
 * User page  → https://thecoderacer.github.io/        → leave BASE_PATH empty
 * Project page → https://thecoderacer.github.io/repo/ → NEXT_PUBLIC_BASE_PATH=/repo
 *
 * Note: a *user* page requires the GitHub repo to be named exactly
 * `thecoderacer.github.io`. See README.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  // Next's image optimizer needs a server; static export has none.
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  // Emits `about/index.html` rather than `about.html` — friendlier to static hosts.
  trailingSlash: true,
  turbopack: {
    // A package-lock.json sits in the parent directory, outside this repo.
    // Pinning the root stops Turbopack resolving upward and warning about it.
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
