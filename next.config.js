/** @type {import('next').NextConfig} */
const nextConfig = {
  // ============================================
  // IMAGE OPTIMIZATION
  // ============================================
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
    // ✅ Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // ✅ Format optimization
    formats: ['image/webp', 'image/avif'],
  },

  // ============================================
  // PERFORMANCE
  // ============================================
  swcMinify: true,
  compress: true,
  reactStrictMode: true,

  // ============================================
  // CACHE HEADERS (via Vercel)
  // ============================================
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/api/ip',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=60, stale-while-revalidate',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // ============================================
  // BUILD OPTIMIZATIONS
  // ============================================
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;