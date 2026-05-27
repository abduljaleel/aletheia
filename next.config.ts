import type { NextConfig } from "next";

// Static export configured for GitHub Pages at abduljaleel.xyz/aletheia
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/aletheia" : "",
  assetPrefix: isProd ? "/aletheia/" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
