/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // IMPORTANTE
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;