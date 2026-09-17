import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.yet-another-react-lightbox.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "swiperjs.com",
      },
      {
        protocol: "https",
        hostname: "deifkwefumgah.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
