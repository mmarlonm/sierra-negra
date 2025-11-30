/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/sierra-negra",
  assetPrefix: "/sierra-negra",
};

module.exports = nextConfig;