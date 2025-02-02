/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amazinghandsnepal.com",
      },
      {
        protocol: "https",
        hostname: "www.galstyles.com",
      },
      {
        protocol: "https",
        hostname: "crafthousenepal.com",
      },
      {
        protocol: "https",
        hostname: "www.gap.com",
      },
      {
        protocol: "https",
        hostname: "www.example.com",
      },
    ],
  },
    images: {
        domains: [
          "example.com",
          "www.theleathershop.com",
          "m.media-amazon.com",
          "images.pexels.com",
          "encrypted-tbn0.gstatic.com",
          "plus.unsplash.com"
        ],
      },
};

export default nextConfig;
