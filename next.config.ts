import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'go-service-dev.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  }

};

export default nextConfig;
