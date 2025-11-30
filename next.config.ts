/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? "/sierra-negra" : "",
  assetPrefix: process.env.NODE_ENV === 'production' ? "/sierra-negra/" : "",
};

module.exports = nextConfig;
