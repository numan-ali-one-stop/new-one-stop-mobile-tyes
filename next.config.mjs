/** @type {import('next').NextConfig} */

const SECURITY_HEADERS = [
  // Blocks the page from being embedded in iframes on other origins (clickjacking protection)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stops browsers from MIME-sniffing a response away from the declared Content-Type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Sends full URL as referrer to same-origin; only the origin to cross-origin HTTPS sites; nothing to HTTP
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Force HTTPS for 1 year, across all subdomains; submit-eligible for browser preload lists
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  images: {
    // Optimization pipeline is live: next/image resizes and recompresses images
    // from the remote hosts below on the fly, matching each usage's actual
    // display size instead of shipping the original full-resolution file.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'ss5vlswhqmiddtca.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
  // Consistent URL shape: /page/ 301s to /page instead of both being servable.
  trailingSlash: false,
  async redirects() {
    return [
      // www → non-www (permanent 301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.onestoptyres247.co.uk' }],
        destination: 'https://onestoptyres247.co.uk/:path*',
        permanent: true,
      },
      // Urmston & Stretford split into two dedicated town pages
      {
        source: '/mobile-tyre-fitting-urmston-stretford',
        destination: '/mobile-tyre-fitting-urmston',
        permanent: true,
      },
      // Legacy WordPress URLs — the site migrated from WordPress and these
      // old paths are still indexed/linked externally.
      // TODO(owner): check Google Search Console's "Pages" report for any
      // further legacy URLs still receiving hits/impressions and add them
      // below as they're found.
      { source: '/book-now', destination: '/contact', permanent: true },
      { source: '/book-now/', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },
    ]
  },
  async headers() {
    return [
      // Next.js build output — content-hashed filenames, safe to cache forever
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Public images — fingerprinted by filename; 1-year cache
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Site icons and OG image — rarely change; 30-day cache
      {
        source: '/:file((?:icon|og-image|apple-icon).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      // Sitemap + robots — refresh daily
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
      // HTML pages — revalidate in background; stale page served instantly
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400' },
        ],
      },
      // Security headers — applied to every response
      {
        source: '/(.*)',
        headers: SECURITY_HEADERS,
      },
      // CORS — API routes are private blob endpoints; restrict to own origin only
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Origin',  value: 'https://onestoptyres247.co.uk' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ]
  },
}

export default nextConfig
