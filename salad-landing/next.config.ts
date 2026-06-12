import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — generates an `out/` folder with index.html and all
  // assets, so the site works on any static host (and on Vercel without
  // depending on the Next.js serverless preset).
  output: "export",
  // next/image optimization requires a server; disable it for the static export
  // so local images are emitted as-is.
  images: { unoptimized: true },
};

export default nextConfig;
