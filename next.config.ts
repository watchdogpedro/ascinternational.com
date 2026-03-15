import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "solderpasteinspection.net" }],
        destination: "https://solderpasteinspection.com/:path*",
        permanent: true, // 301 — passes SEO authority to .com
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.solderpasteinspection.net" }],
        destination: "https://solderpasteinspection.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
