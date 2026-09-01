import type { Metadata } from 'next'
import { Work_Sans, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { localBusinessSchema } from '@/lib/schema'
import CookieConsentBanner from '@/components/CookieConsentBanner'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-work-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'One Stop Mobile Tyres 24/7 | Emergency Mobile Tyre Fitting Manchester',
  description:
    'Stranded with a puncture? Our professional technicians reach you fast at home, work, or roadside across Greater Manchester. 24/7 emergency mobile tyre fitting available now.',
  keywords: 'mobile tyre fitting, emergency tyre Manchester, puncture repair, 24/7 tyres',
  icons: {
    icon: [{ url: '/icon.webp', type: 'image/webp' }],
    apple: '/icon.webp',
    shortcut: '/icon.webp',
  },
  openGraph: {
    title: 'One Stop Mobile Tyres 24/7 | Emergency Mobile Tyre Fitting Manchester',
    description:
      'Stranded with a puncture? Our professional technicians reach you fast at home, work, or roadside across Greater Manchester. 24/7 emergency mobile tyre fitting available now.',
    url: 'https://onestoptyres247.co.uk',
    siteName: 'One Stop Mobile Tyres 24/7',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: '24/7 Mobile Tyre Fitting across Manchester & Greater Manchester — One Stop Mobile Tyres',
        type: 'image/webp',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Stop Mobile Tyres 24/7 | Emergency Mobile Tyre Fitting Manchester',
    description:
      'Stranded with a puncture? Our professional technicians reach you fast at home, work, or roadside across Greater Manchester. 24/7 emergency mobile tyre fitting available now.',
    images: ['/og-image.webp'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${workSans.variable} ${inter.variable} bg-[#fcf9f8]`}>
      <head>
        {/* Site icon */}
        <link rel="icon" href="/icon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/icon.webp" />
        {/* Hero images are preloaded per-page via fetchPriority="high" on each page's own
            <img> tag — a single blanket preload here would compete with (and often be wrong
            for) whichever hero image the current page actually needs. */}
        {/* Preconnect to third-party origins to eliminate DNS + TLS latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        {/* Google Consent Mode v2 — must run before GTM loads so all signals default to denied.
            Returning visitors' stored choice is re-applied synchronously here (not in a React
            effect) so it lands before GTM's wait_for_update window expires. */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  wait_for_update:500
});
(function(){
  try {
    var stored = window.localStorage.getItem('cookie-consent');
    if (stored === 'granted' || stored === 'denied') {
      gtag('consent','update',{
        ad_storage:stored,
        ad_user_data:stored,
        ad_personalization:stored,
        analytics_storage:stored
      });
    }
  } catch (e) {}
})();`,
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXMX7FVM');`,
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden pb-[60px] sm:pb-0">
        <JsonLd data={localBusinessSchema()} />
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXMX7FVM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <CookieConsentBanner />

        {/* Floating action buttons — desktop only (sm and above) */}
        <div className="hidden sm:flex fixed bottom-6 right-5 z-[60] flex-col gap-4">
          <a
            href="https://wa.me/447759708646"
            aria-label="Chat on WhatsApp"
            className="w-16 h-16 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href="tel:07759708646"
            aria-label="Call us now"
            className="w-16 h-16 bg-[#FF4444] hover:bg-red-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <span
              className="material-symbols-outlined text-white text-[32px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              phone_in_talk
            </span>
          </a>
        </div>

        {/* Mobile bottom CTA bar — full width, mobile only */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-[60] flex">
          <a
            href="tel:07759708646"
            aria-label="Call us now"
            className="flex-1 bg-[#FF4444] flex items-center justify-center gap-2.5 py-4 text-white font-black text-base active:brightness-90 transition-all"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              phone_in_talk
            </span>
            Call Now
          </a>
          <a
            href="https://wa.me/447759708646"
            aria-label="Chat on WhatsApp"
            className="flex-1 bg-[#25D366] flex items-center justify-center gap-2.5 py-4 text-white font-black text-base active:brightness-90 transition-all"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Material Symbols — loaded after page is interactive so it never blocks rendering */}
        <Script
          id="material-symbols"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block';
                link.onload = function() {
                  document.fonts.load('1em "Material Symbols Outlined"').then(function() {
                    document.body.classList.add('icons-ready');
                  });
                };
                document.head.appendChild(link);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
