import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "img.clerk.com" }],
  },
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;
