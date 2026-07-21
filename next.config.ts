import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dental-clinic', // ⚠️ Replace this with your exact repository name
  images: {
    unoptimized: true, // Required for static exporting
    remotePatterns: [
      {
        protocol: "https",
        hostname: "://googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
