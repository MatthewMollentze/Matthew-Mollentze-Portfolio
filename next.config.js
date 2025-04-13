/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 180,
  experimental: {
    turbotrace: {
      logLevel: 'error',
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    }
    return config
  },
  transpilePackages: [
    'lucide-react',
    '@react-pdf/renderer',
    'mermaid',
    'mermaid-react'
  ],
}

module.exports = nextConfig