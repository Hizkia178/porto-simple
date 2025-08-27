import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // <- ini yang bikin build jalan meskipun ada error ESLint
  },
};

export default nextConfig;
