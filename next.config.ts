import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/plohospal-production",
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
