'use client'

const BRANDS = [
  {
    name: 'Bridgestone',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bridgestone%20logo-airanko-ZAPGeCy0F1ki20ZgsnRdwcCYiDfmIZ.webp',
  },
  {
    name: 'Pirelli',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firelli-airanko-rp6pdDJZA0JhGKEMLSaTzCiTirqBCM.webp',
  },
  {
    name: 'Yokohama',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yokohama-airanko-YdFeYDlQIZpzpVkwu3hFSXSY8YN05d.webp',
  },
  {
    name: 'Firestone',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firestone-airanko-2V2QFfwQ7gEEnNOYYMgWjbOQpyWSaI.webp',
  },
  {
    name: 'Uniroyal',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Uniroyal%20log-airanko-psOkn6TYFzXOnPcpZ3BCQj0ky7zh4X.webp',
  },
  {
    name: 'Continental',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Continental%20logo-airanko-0iHu6q8qJELSFPXREAxIfC73Li9csu.webp',
  },
  {
    name: 'Michelin',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile-Tyre-Fitting-airanko-nw1ITD7syMHC2YJw3Sq5AOwW5pWgYs.webp',
  },
  {
    name: 'Dunlop',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dunlop%20logo-airanko-1xIkF4SLLjZ7DFCgoPqBxG1tQ7FfYq.webp',
  },
  {
    name: 'Kumho Tire',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kumho%20Tire-airanko-NxO7sG4zHiuZydAoHxAWmi53RJmDZi.webp',
  },
  {
    name: 'Hankook',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hankook-airanko-bs1BJNBxI6k1UH89K5D9W8uof5B8l9.webp',
  },
  {
    name: 'Goodyear',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Good%20Year%20logo-airanko-pB6pNHbsBd1CQjrtzQiZqbvzgDEtQB.webp',
  },
]

/* Duplicate list for seamless infinite scroll */
const TRACK = [...BRANDS, ...BRANDS]

export default function BrandCarousel() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-100 overflow-hidden">
      <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-8 sm:mb-10 px-4">
        Authorised Dealer of All Premium Tyre Brands
      </p>

      {/* Marquee track */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex gap-10 sm:gap-16 items-center whitespace-nowrap"
          style={{
            width: 'max-content',
            animation: 'marquee 28s linear infinite',
          }}
        >
          {TRACK.map((brand, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${brand.name}-${i}`}
              src={brand.src}
              alt={`${brand.name} tyre brand logo`}
              aria-hidden={i >= BRANDS.length ? true : undefined}
              className="h-10 sm:h-12 w-auto object-contain flex-shrink-0 transition-all duration-300 opacity-90 hover:opacity-100"
              width={160}
              height={48}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
