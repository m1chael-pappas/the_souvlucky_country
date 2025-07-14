// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable experimental features for better performance
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/dates', 'lucide-react'],
    },
    
    // Compiler optimizations
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    
    // Performance and bundling optimizations
    poweredByHeader: false,
    compress: true,
    
    images: {
      // Enable optimized image formats
      formats: ['image/webp', 'image/avif'],
      // Configure image sizes for responsive loading
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      // Enable placeholder blur for better UX
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      // Set aggressive caching for better performance
      minimumCacheTTL: 31536000, // 1 year
      // Add domains if using external images
      domains: ['booking-widget.quandoo.com', 'assets-www.prod.quandoo.com'],
      // Enable experimental features for performance
      unoptimized: false,
      // Loader configuration for better performance
      loader: 'default',
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on',
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=31536000; includeSubDomains',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=(self)',
            },
          ],
        },
        // Aggressive caching for static assets
        {
          source: '/images/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/:path*\\.(png|jpg|jpeg|gif|webp|avif|ico|svg)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        // Cache for optimized images
        {
          source: '/_next/image/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        // Cache for static assets
        {
          source: '/_next/static/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        // Cache for fonts
        {
          source: '/fonts/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;