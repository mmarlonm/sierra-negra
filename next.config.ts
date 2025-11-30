/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Siempre usar basePath para GitHub Pages
  basePath: "/sierra-negra",
  assetPrefix: "/sierra-negra/",
};

module.exports = nextConfig;
