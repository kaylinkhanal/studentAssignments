/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example.com", "encrypted-tbn0.gstatic.com"],
    minimumCacheTTL: 80,
  },
};

export default nextConfig;
