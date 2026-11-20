import AdsLandingPage, { type LandingCard, type LandingFaq, type LandingFeature, type LandingReview } from '@/components/AdsLandingPage'
import { MOBILE_TYRE_REPLACEMENT_PATH } from '@/lib/constants'
import { buildMetadata } from '@/lib/seo'

/** Google Ads / SEO landing page for "mobile tyre replacement". Layout lives in components/AdsLandingPage.tsx. */

export const metadata = buildMetadata({
  title: 'Mobile Tyre Replacement Near You | Tyres Fitted 24/7',
  description:
    'Mobile tyre replacement at your home, work or roadside. New tyres supplied and fitted 24/7, from budget to premium brands, with upfront prices. Call now.',
  path: MOBILE_TYRE_REPLACEMENT_PATH,
})

const services: LandingCard[] = [
  {
    img: '/images/mobile-tyre-fitting-service.webp',
    title: '1. Single or Full Set Replacement',
    desc: 'Replace one damaged tyre, a pair on the same axle or a full set of four — supplied, fitted and balanced at your vehicle.',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Tyre%20Fitting%20One%20Stop-airanko-kPAsyn08SjxXwLwCVhxre5zM9jWBTs.webp',
    title: '2. Tyre Replacement at Home or Work',
    desc: 'Worn or illegal tread? Book a mobile tyre replacement on your driveway or in the work car park at a time that suits you.',
  },
  {
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Emergency%20Tyre%20Fitting%20one%20Stop-airanko-gsjvsGamoet8drKwCMHYr6LH5Ni6ZI.webp',
    title: '3. Same-Day & Urgent Replacement',
    desc: 'Blowout, sidewall bulge or a puncture that cannot be repaired? We replace the tyre wherever you are, 24/7.',
  },
]

const features: LandingFeature[] = [
  {
    icon: 'tire_repair',
    title: 'Budget, Mid-Range & Premium Tyres',
    desc: 'Choose from budget-friendly options through to premium brands such as Michelin, Continental and Pirelli for cars, SUVs and vans.',
  },
  {
    icon: 'receipt_long',
    title: 'Fitted Price Quoted Upfront',
    desc: 'One clear price for the tyre and mobile fitting, confirmed before we set off. No hidden extras on the day.',
  },
  {
    icon: 'build',
    title: 'Fitted, Balanced & Checked',
    desc: 'Every new tyre is fitted and balanced with mobile equipment, wheel nuts are tightened correctly and pressures set before we leave.',
  },
  {
    icon: 'schedule',
    title: 'Available 24/7',
    desc: 'Book a planned replacement at a time that suits you, or call any time of day or night when a tyre needs replacing urgently.',
  },
]

const reviews: LandingReview[] = [
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
  {
    initials: 'DM',
    name: 'Dave M.',
    text: 'Blew a tyre late at night on a quiet road. The mobile tyre fitter arrived in 25 minutes and swapped it fast. Incredible emergency service!',
  },
]

const faqs: LandingFaq[] = [
  {
    q: 'What is mobile tyre replacement?',
    a: 'A fitter brings the new tyre and all the equipment to your vehicle, removes the old tyre, fits and balances the new one and checks the pressures — at your home, workplace or a safe roadside location.',
  },
  {
    q: 'How much does mobile tyre replacement cost?',
    a: 'The price depends on your tyre size and the brand you choose. We quote one fitted price over the phone or by WhatsApp before we set off, so there are no surprises.',
  },
  {
    q: 'Can you replace just one tyre?',
    a: 'Yes. We can replace a single tyre, a pair or a full set. If the tread on the other tyre on the same axle is very different, we will tell you, as matching tyres across an axle helps handling.',
  },
  {
    q: 'How long does a mobile tyre replacement take?',
    a: 'Replacing one tyre usually takes around 20 to 30 minutes once we arrive. A full set takes longer, and we will give you an estimate when you book.',
  },
  {
    q: 'When should I replace my tyres?',
    a: 'The UK legal minimum tread depth for cars is 1.6mm across the central three-quarters of the tyre. You should also replace a tyre with sidewall damage, bulges, cracking, or a puncture that cannot be safely repaired.',
  },
  {
    q: 'Can I book a mobile tyre replacement for today?',
    a: 'Yes. Same-day mobile tyre replacement is available for most common sizes, and we run 24/7 for urgent call-outs. Send us your registration or tyre size to check stock.',
  },
]

export default function MobileTyreReplacementPage() {
  return (
    <AdsLandingPage
      slug={MOBILE_TYRE_REPLACEMENT_PATH.slice(1)}
      h1="Mobile Tyre Replacement Near You"
      heroBadge="Mobile Fitters Available Near You Now"
      intro={
        <>
          New tyres supplied and fitted wherever your car is — on your driveway, at work or at the roadside. Same-day
          mobile tyre replacement, with fitters usually with you in <strong>20–30 minutes</strong> for urgent call-outs.
        </>
      }
      ctaLabel="CALL NOW FOR MOBILE TYRE REPLACEMENT"
      quoteArea="Mobile Tyre Replacement landing page"
      servicesHeading="Mobile Tyre Replacement, Your Way"
      servicesIntro="Whether it is a worn tyre, a damaged tyre or a full set, our mobile tyre fitters replace it at your location — no garage visit needed."
      services={services}
      featuresHeading="Why Choose Our Mobile Tyre Replacement"
      features={features}
      reviews={reviews}
      stepsHeading="How Mobile Tyre Replacement Works"
      faqs={faqs}
      schema={{
        name: 'Mobile Tyre Replacement',
        serviceType: 'Mobile Tyre Replacement',
        description:
          'Mobile tyre replacement at home, at work or at the roadside. New budget, mid-range and premium tyres supplied, fitted and balanced at your location, 24/7.',
      }}
    />
  )
}
