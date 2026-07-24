import type { NextConfig } from "next";

const repoName = "kanumetta-rajesh-kumar-profile";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  allowedDevOrigins: ["192.168.0.163", "localhost"],
  turbopack: {
    root: process.cwd(),
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
};

export default nextConfig;
