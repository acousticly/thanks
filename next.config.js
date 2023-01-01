/** @type {import('next').NextConfig} */
module.exports = {
  generateBuildId: () => 'build',
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true
  }
}
