import type { NextConfig } from "next";

// GitHub Pages (`pnpm build:pages`) serves a static export from
// https://<user>.github.io/<repo>/, so that build needs a matching basePath
// and cannot use server-only features. The default build stays a regular
// Next.js app (`pnpm build` + `pnpm start`).
const repoName = "pearlies-dental";
const isPagesBuild = process.env.GITHUB_PAGES === "1";

const modeConfig: NextConfig = isPagesBuild
  ? {
      output: "export",
      basePath: `/${repoName}`,
    }
  : {
      cacheComponents: true,
      partialPrefetching: true,
    };

const nextConfig: NextConfig = {
  ...modeConfig,
  images: {
    // Static exports cannot run the default image optimizer.
    unoptimized: isPagesBuild,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
