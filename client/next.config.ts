import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
