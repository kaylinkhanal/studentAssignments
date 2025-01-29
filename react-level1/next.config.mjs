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
};

export default nextConfig;
