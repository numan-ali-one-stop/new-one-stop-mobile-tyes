import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, itemListSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Mobile Tyre & Roadside Services | One Stop Mobile Tyres 24/7',
  description:
    '24/7 mobile tyre fitting, puncture repair, jump starts & TPMS reset at your location.',
  path: '/services',
})

const services = [
  {
    href: '/mobile-tyre-fitting',
    img: '/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp',
    title: 'Mobile Tyre Fitting',
    desc: 'Expert tyre fitting at your location, whether you\'re at work or stuck on the roadside. We handle all vehicle types and tyre brands.',
    badge: 'Fast Response',
    btnLabel: 'Book Now',
  },
  {
    href: '/home-tyre-fitting',
    img: '/images/home-tyre-fitting.webp',
    title: 'Home Tyre Fitting',
    desc: "Don't waste time at a garage. We come to your home to fit new tyres while you relax or work, ensuring maximum convenience.",
    badge: 'All Sizes',
    btnLabel: 'Learn More',
  },
  {
    href: '/emergency-puncture-repair',
    img: '/images/tyres-fitting-anywhere.webp',
    title: 'Emergency Puncture Repair',
    desc: 'Stuck with a flat? Our rapid response team will arrive quickly to repair your puncture and get you back on the road safely.',
    badge: '24/7 Support',
    btnLabel: 'Book Now',
  },
  {
    href: '/jump-start',
    img: '/images/professional-mobile-tyre-fitting.webp',
    title: 'Jump Start',
    desc: 'Flat battery? Our technicians carry professional jumpstart equipment to revive your vehicle quickly and diagnose any issues.',
    badge: 'Fast Response',
    btnLabel: 'Learn More',
  },
  {
    href: '/tpms-reset',
    img: '/images/mobile-tyre-fitting-service.webp',
    title: 'TPMS Reset',
    desc: "Tyre pressure sensors acting up? We provide full TPMS diagnostics and resets to ensure your vehicle's safety systems are correct.",
    badge: 'Expert Reset',
    btnLabel: 'Book Now',
  },
  {
    href: '/locking-nut-removal',
    img: '/images/mobile-tyre-fitting-manchester.webp',
    title: 'Locking Nut Removal',
    desc: "Lost your key? We use specialized equipment to safely remove locking wheel nuts without damaging your precious alloy wheels.",
    badge: 'Damage Free',
    btnLabel: 'Learn More',
  },
  {
    href: '/24-hour-emergency-tyre-fitting',
    img: '/images/tyre-fitting-in-emergency.webp',
    title: '24 Hour Emergency Tyre Fitting',
    desc: 'Round-the-clock emergency tyre fitting wherever you are stranded — roadside, car park or driveway. We respond day and night.',
    badge: '24/7',
    btnLabel: 'Get Help Now',
  },
  {
    href: '/cheap-mobile-tyre-fitting',
    img: '/images/mobile-tyre-fitting-one-stop-tyres-24-7.webp',
    title: 'Cheap Mobile Tyre Fitting',
    desc: 'Quality tyres at affordable prices. Budget, mid-range and premium options fitted at your home, workplace or roadside.',
    badge: 'Best Value',
    btnLabel: 'Get a Quote',
  },
  {
    href: '/tyre-fitting-near-me',
    img: '/images/tyre-fitting-at-home.webp',
    title: 'Tyre Fitting Near Me',
    desc: 'We come to your home, workplace or roadside. Fast local tyre fitting without the garage wait.',
    badge: 'Local Service',
    btnLabel: 'Book Now',
  },
]


const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Our Services', item: `${SITE_URL}/services` },
])

const _itemListSchema = itemListSchema(
  services.map((s) => ({ name: s.title, url: `${SITE_URL}${s.href}` }))
)

export default function ServicesPage() {
  return (
    <div className="bg-surface font-body-md text-on-background antialiased">
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_itemListSchema} />
      {/* Hero Section */}
      <section className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[614px] flex items-center justify-center overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/mobile-tyre-fitting-manchester.webp"
          alt="One Stop Mobile Tyres 24/7 mobile services van"
          width={1920}
          height={614}
          loading="eager"
        />
        <div className="relative z-20 text-center px-4 sm:px-5 max-w-4xl mx-auto">
          <h1 className="font-h1 text-2xl sm:text-3xl lg:text-h1 text-white mb-4 sm:mb-6 leading-tight">Our Expert Mobile Services</h1>
          <p className="font-body-lg text-base lg:text-body-lg text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Professional 24/7 roadside assistance, wherever you are. We bring the garage to you, anywhere, anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              className="bg-primary text-on-primary font-call-to-action text-base lg:text-call-to-action px-4 sm:px-lg py-3 sm:py-sm rounded-lg hover:bg-primary/90 transition-all shadow-lg uppercase text-center"
              href="tel:07759708646"
            >
              EMERGENCY ASSISTANCE
            </a>
            <a
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white font-call-to-action text-base lg:text-call-to-action px-4 sm:px-lg py-3 sm:py-sm rounded-lg hover:bg-white hover:text-secondary transition-all uppercase text-center"
              href="#services"
            >
              VIEW ALL SERVICES
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 sm:py-16 lg:py-xl px-4 sm:px-5 max-w-7xl mx-auto" id="services">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-h2 text-2xl sm:text-3xl lg:text-h2 text-secondary mb-4">Complete Roadside Solutions</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="group bg-white rounded-xl shadow-[0_4px_20px_rgba(0,45,98,0.05)] overflow-hidden border border-gray-100 hover:border-secondary transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-md">
                <h3 className="font-h3 text-lg sm:text-xl lg:text-h3 text-secondary mb-2 sm:mb-3">{card.title}</h3>
                <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant mb-4 sm:mb-6">{card.desc}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <span className="font-label-bold text-xs sm:text-label-bold text-primary bg-primary/5 px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                  <span className="bg-primary text-on-primary font-label-bold text-xs sm:text-label-bold px-3 sm:px-md py-2 sm:py-2.5 rounded-lg hover:bg-primary/90 transition-all uppercase">
                    {card.btnLabel}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Why Choose Us / Trust Section */}
      <section className="bg-surface-container py-12 sm:py-16 lg:py-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-5">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-lg">
            <div className="w-full lg:w-1/2">
              <h2 className="font-h2 text-2xl sm:text-3xl lg:text-h2 text-secondary mb-4 sm:mb-6">Why Drivers Trust One Stop Mobile Tyres 24/7</h2>
              <p className="font-body-lg text-base lg:text-body-lg text-on-surface-variant mb-6 sm:mb-8">
                We understand that a vehicle breakdown is more than just a mechanical issue—it&apos;s a stressful disruption to your day.
                That&apos;s why we&apos;ve built our service on three pillars of excellence.
              </p>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">speed</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-sm sm:text-label-bold text-secondary sm:text-lg mb-1">Ultra-Fast Response</h4>
                    <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">We aim for 20-30 minute arrival times across our service area.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-sm sm:text-label-bold text-secondary sm:text-lg mb-1">True 24/7 Availability</h4>
                    <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">Midnight or midday, Sunday or Bank Holiday—our technicians are always on standby.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">construction</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-sm sm:text-label-bold text-secondary sm:text-lg mb-1">Certified Technicians</h4>
                    <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">Our team is fully insured and highly experienced with all makes and models.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="relative rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                src="/images/professional-mobile-tyre-fitting.webp"
                alt="Professional tyre technician from One Stop Mobile Tyres 24/7"
                width={800}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="px-4 sm:px-5 mb-12 sm:mb-16 lg:mb-xl">
        <div className="max-w-7xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[100px] sm:text-[150px] lg:text-[200px]">tire_repair</span>
          </div>
          <div className="p-6 sm:p-lg lg:p-xl flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-md relative z-10">
            <div className="text-white text-center sm:text-left">
              <h2 className="font-h1 text-2xl sm:text-3xl lg:text-h1 mb-2">Need Help Immediately?</h2>
              <p className="font-body-lg text-base lg:text-body-lg text-white/90">Speak directly to a technician for an instant quote and arrival time.</p>
              <div className="mt-4 sm:mt-6 flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                <span className="material-symbols-outlined text-2xl sm:text-3xl lg:text-4xl">call</span>
                <span className="text-xl sm:text-2xl lg:text-4xl font-black font-h1">07759 708 646</span>
              </div>
            </div>
            <a
              className="bg-white text-primary font-h2 text-base sm:text-xl lg:text-h2 px-6 sm:px-10 lg:px-xl py-3 sm:py-4 lg:py-md rounded-xl hover:bg-gray-100 transition-all uppercase shadow-lg text-center w-full sm:w-auto sm:min-w-[200px] lg:min-w-[240px]"
              href="tel:07759708646"
            >
              07759 708 646
            </a>
          </div>
        </div>
      </section>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 sm:px-4 py-2 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,45,98,0.05)] rounded-t-2xl">
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="/">
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-red-50 text-red-600 rounded-xl px-2 sm:px-3 py-1.5" href="/services">
          <span className="material-symbols-outlined text-xl">tire_repair</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Services</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="tel:07759708646">
          <span className="material-symbols-outlined text-xl">emergency</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Emergency</span>
        </a>
        <a className="flex flex-col items-center justify-center text-gray-500 py-1 px-2" href="/contact">
          <span className="material-symbols-outlined text-xl">person</span>
          <span className="text-[9px] sm:text-[10px] font-semibold font-h3">Account</span>
        </a>
      </nav>


    </div>
  )
}
