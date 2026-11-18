import AdsLandingPage, { type LandingCard, type LandingFaq, type LandingFeature, type LandingReview } from '@/components/AdsLandingPage'
import { ADS_LANDING_PATH } from '@/lib/constants'
import { buildMetadata } from '@/lib/seo'

/** Google Ads / SEO landing page for "24 hour emergency tyres". Layout lives in components/AdsLandingPage.tsx. */

export const metadata = buildMetadata({
  title: '24 Hour Emergency Tyres Near You | Mobile Tyre Fitters',
  description:
    'Flat tyre or blowout? 24 hour emergency tyres fitted at your location, day or night. Mobile fitters dispatched in 20–30 minutes with upfront quotes. Call now.',
  path: ADS_LANDING_PATH,
})

const services: LandingCard[] = [
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
    title: '1. 24 Hour Emergency Tyre Replacement',
    desc: 'Flat tyre, blowout or sidewall damage at 2am? A new tyre is supplied and fitted at your location, 24 hours a day.',
    badge: 'Immediate response across cities, towns, rural roads and motorway networks.',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Puncture%20Repair%20One%20Stop-airanko-sfmhLvDbSYmhoMprTVOHCcIWEgJvHf.webp',
    title: '2. 24 Hour Emergency Puncture Repair',
    desc: 'If the puncture is in a repairable area, we repair it on the spot to British Standard BS AU 159 instead of selling you a new tyre.',
    badge: 'Honest, repair-first assessment to get you moving at minimum cost.',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
    title: '3. Emergency Tyres at Home or Work',
    desc: 'Woken up to a flat on the driveway or found one in the work car park? We fit your emergency tyre where the car is parked.',
    badge: 'No towing, no waiting around at a garage.',
  },
]

const features: LandingFeature[] = [
  {
    icon: 'schedule',
    title: 'Genuinely 24 Hours a Day',
    desc: 'Our emergency tyre line is answered 24 hours a day, 365 days a year — late nights, weekends and bank holidays included.',
  },
  {
    icon: 'receipt_long',
    title: 'Fixed Upfront Quotes',
    desc: 'Clear emergency tyre pricing confirmed over the phone before our mobile van is dispatched. No call-out surprises.',
  },
  {
    icon: 'tire_repair',
    title: 'Emergency Tyres in Stock',
    desc: 'Premium brands (Michelin, Continental, Pirelli) and budget-friendly options carried for cars, SUVs and vans.',
  },
  {
    icon: 'engineering',
    title: 'Fully Equipped Mobile Fitters',
    desc: 'Experienced technicians with mobile fitting and balancing equipment for safe, damage-free installation at the roadside.',
  },
]

const reviews: LandingReview[] = [
  {
    initials: 'DM',
    name: 'Dave M.',
    text: 'Blew a tyre late at night on a quiet road. The mobile tyre fitter arrived in 25 minutes and swapped it fast. Incredible emergency service!',
  },
  {
    initials: 'SK',
    name: 'Sarah K.',
    text: 'Stuck on my driveway in town before work with a flat tyre. They came out fast, replaced the tyre on-site, and got me to work on time. 5-star service!',
  },
  {
    initials: 'JT',
    name: 'James T.',
    text: 'Transparent upfront pricing over the phone with no hidden costs. The technician arrived quickly and was very professional. Highly recommend!',
  },
]

const faqs: LandingFaq[] = [
  {
    q: 'Can I get emergency tyres fitted 24 hours a day?',
    a: 'Yes. Our 24 hour emergency tyre service runs day and night, 365 days a year, including weekends and bank holidays. Call any time and we will dispatch the nearest available mobile fitter.',
  },
  {
    q: 'How quickly can you reach me with an emergency tyre?',
    a: 'Our average arrival time is 20 to 30 minutes. The exact time depends on your location, traffic and the tyre size you need, and we will give you an estimate when you call.',
  },
  {
    q: 'How much does a 24 hour emergency tyre cost?',
    a: 'It depends on your tyre size and the brand you choose. We give you a fixed upfront price over the phone before the van is dispatched, so you know the cost before we arrive.',
  },
  {
    q: 'Do you have emergency tyres in my size?',
    a: 'Our vans carry the most common car, SUV and van sizes in premium, mid-range and budget brands. Give us your registration or the size on the tyre sidewall (e.g. 205/55 R16) and we will confirm stock straight away.',
  },
  {
    q: 'Can you repair the puncture instead of replacing the tyre?',
    a: 'Often, yes. If the damage is in the central tread area and the tyre is otherwise sound, we repair it to BS AU 159. Damage to the sidewall or shoulder, or a tyre driven on while flat, needs a replacement tyre.',
  },
  {
    q: 'What should I do if I get a flat tyre on the motorway?',
    a: 'Do not change a tyre on the hard shoulder or a live lane. If you can, leave at the next exit or pull into services. If you cannot, follow the advice from National Highways or your breakdown provider. Once you are somewhere safe, call us and we will come to you.',
  },
  {
    q: 'What details do I need when I call?',
    a: 'Your location (postcode, road name or a WhatsApp location pin), your vehicle registration or tyre size, and whether you have your locking wheel nut key.',
  },
]

export default function EmergencyTyresPage() {
  return (
    <AdsLandingPage
      slug={ADS_LANDING_PATH.slice(1)}
      h1="24 Hour Emergency Tyres Near You"
      intro={
        <>
          Flat tyre, puncture or blowout in the middle of the night? Our 24 hour emergency tyre fitters come to your
          exact location in <strong>20–30 minutes</strong> — at the roadside, at home or at work.
        </>
      }
      ctaLabel="CALL NOW FOR 24 HOUR EMERGENCY TYRES"
      quoteArea="24 Hour Emergency Tyres landing page"
      servicesHeading="24 Hour Emergency Tyre Services"
      servicesIntro="A fully equipped mobile tyre workshop sent to your vehicle any time of day or night — in every city, town, roadside or driveway we cover."
      services={services}
      featuresHeading="Why Drivers Call Us for Emergency Tyres"
      features={features}
      reviews={reviews}
      stepsHeading="4 Simple Steps to Get Your Emergency Tyre Fitted"
      faqs={faqs}
      schema={{
        name: '24 Hour Emergency Tyres',
        serviceType: 'Emergency Tyre Replacement',
        description:
          '24 hour emergency tyre replacement and puncture repair at the roadside, at home or at work, with fixed upfront quotes confirmed before dispatch.',
      }}
      footerTagline="24 Hour Emergency Tyres & Mobile Tyre Fitting."
    />
  )
}
