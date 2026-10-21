import type { MetadataRoute } from 'next'

// Served at /manifest.webmanifest. Android Chrome reads its icons for the tab switcher
// and home-screen shortcut. `display: 'browser'` keeps the site behaving as a normal web page.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'One Stop Mobile Tyres 24/7',
    short_name: 'One Stop Tyres',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
