import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
