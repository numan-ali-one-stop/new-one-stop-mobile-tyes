import type { Metadata } from 'next'
import { BUSINESS_NAME } from '@/lib/constants'

const SITE_URL = 'https://roadheroes247.co.uk'
const OG_IMAGE_ALT = '24/7 Mobile Tyre Service across Manchester & Greater Manchester — Road Heroes 24/7'

export interface BuildMetadataOptions {
  title: string
  description: string
  /** Path starting with "/", e.g. "/about" or "/" for the homepage. */
  path: string
}

/** Builds a Next.js Metadata object so title/description/canonical/OG/Twitter always match. */
export function buildMetadata({ title, description, path }: BuildMetadataOptions): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS_NAME,
      locale: 'en_GB',
      type: 'website',
      images: [
        {
          url: '/og-image.webp',
          width: 1200,
          height: 630,
          alt: OG_IMAGE_ALT,
          type: 'image/webp',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.webp'],
    },
  }
}
