/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example.com",
      "encrypted-tbn0.gstatic.com",
      "images.unsplash.com",
      "media.istockphoto.com",
      "img.freepik.com",
      "images.pexels.com",
      "picsum.photos",
    ],
    minimumCacheTTL: 80,
  },
};

export default nextConfig;
