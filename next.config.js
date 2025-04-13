/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 120,
  experimental: {
    turbotrace: {
      logLevel: 'error',
    },
  },
}

module.exports = nextConfig