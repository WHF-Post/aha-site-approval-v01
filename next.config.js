/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  output: 'export',
  images: {
    unoptimized: true, // ✅ disables Next.js image optimization for static export
  },
};

module.exports = nextConfig;