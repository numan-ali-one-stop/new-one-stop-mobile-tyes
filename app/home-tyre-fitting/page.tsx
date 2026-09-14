import JsonLd from '@/components/JsonLd'
import WhyChooseGrid from '@/components/WhyChooseGrid'
import { breadcrumbSchema, serviceSchema, faqSchema, SITE_URL } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { MAPS_URL } from '@/lib/constants'

export const metadata = buildMetadata({
  title: 'Home Tyre Fitting & Tyre Replacement | Greater Manchester',
  description:
    'Book Home Tyre Fitting across Greater Manchester. Get tyre replacement at home, professional fitting and a no-garage-visit service at a time that suits.',
  path: '/home-tyre-fitting',
})

const _breadcrumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE_URL },
  { name: 'Home Tyre Fitting', item: `${SITE_URL}/home-tyre-fitting` },
])

const _serviceSchema = serviceSchema({
  slug: 'home-tyre-fitting',
  name: 'Home Tyre Fitting',
  serviceType: 'Home Tyre Fitting',
  description:
    'Professional home tyre fitting across Greater Manchester, bringing suitable tyres and specialist fitting and balancing equipment directly to your driveway or another safe space outside your home.',
})

const faqs = [
  {
    q: 'What is Home Tyre Fitting?',
    a: 'Home Tyre Fitting is a service where a qualified technician comes to your property and fits replacement tyres at a suitable location, such as your driveway.',
  },
  {
    q: 'Can I have my car tyres fitted at home?',
    a: 'Yes. Our car tyre fitting at home service allows you to have replacement tyres fitted at your property without visiting a tyre centre.',
  },
  {
    q: 'Do you provide tyre replacement at home?',
    a: 'Yes. We provide tyre replacement at home across Greater Manchester, subject to tyre availability and suitable access at your property.',
  },
  {
    q: 'How does home tyre fitting work?',
    a: 'You provide your vehicle or tyre details, choose suitable replacement tyres and arrange an appointment. Our technician then comes to your property and completes the fitting.',
  },
  {
    q: 'What information do I need to book home tyre fitting?',
    a: "You'll generally need to provide your vehicle registration or tyre size, your location and the number of tyres you need. This helps us identify suitable replacement tyres and arrange the service.",
  },
  {
    q: 'Can you fit tyres on my driveway?',
    a: 'Yes, provided the driveway or another location at the property is safe, accessible and suitable for the required work. This makes driveway tyre fitting a convenient option for many customers.',
  },
  {
    q: 'How long does Home Tyre Fitting take?',
    a: 'The time depends on the number of tyres being fitted and the work required. Once we know your vehicle and tyre requirements, we can provide a more accurate estimate.',
  },
  {
    q: 'Can I book tyre fitting at home while working?',
    a: 'Yes. Tyre fitting while working from home can be arranged around your schedule, allowing you to continue your normal routine while the tyres are fitted.',
  },
  {
    q: 'Do you provide tyre fitting for elderly or disabled customers?',
    a: 'Yes. Tyre fitting for elderly / disabled customers can provide a convenient alternative to travelling to a tyre centre, provided the location is suitable for the work.',
  },
  {
    q: 'Can you replace just one tyre at home?',
    a: 'Yes, where appropriate. Our technician can assess your vehicle and advise whether replacing a single tyre is suitable.',
  },
  {
    q: 'Can you replace all four tyres at home?',
    a: 'Yes. We can arrange home tyre replacement for a complete set of tyres, subject to tyre availability and your vehicle requirements.',
  },
  {
    q: 'Can I choose when my tyres are fitted?',
    a: 'We can arrange an appointment based on your preferred time and availability. Contact us to discuss a suitable time for your tyre fitting service at home.',
  },
  {
    q: 'Do I need to visit a garage after booking?',
    a: 'No. One of the main benefits of our no garage visit tyre fitting service is that the technician comes to your property, provided the location is suitable.',
  },
  {
    q: 'Where do you provide Home Tyre Fitting?',
    a: 'We provide Home Tyre Fitting in Greater Manchester, including Manchester, Bolton, Bury, Oldham, Rochdale, Stockport, Tameside, Trafford and Wigan.',
  },
  {
    q: 'Why choose tyre fitting at home instead of visiting a garage?',
    a: 'Tyre fitting at home saves you the time and inconvenience of travelling to a tyre centre. You can arrange the service at your property and continue with your day while your tyres are replaced.',
  },
  {
    q: 'Do I need to be home for the tyre fitting appointment?',
    a: "Not necessarily. You can arrange home tyre fitting while you're away, provided we have clear access to the vehicle and a safe, suitable area to carry out the work. Please let us know when booking if you won't be at home.",
  },
  {
    q: 'How long does home tyre fitting take?',
    a: "The time depends on the number of tyres being fitted, the vehicle and the work required. A standard tyre replacement appointment is usually straightforward, and we'll give you a more accurate time estimate when you book.",
  },
  {
    q: 'What information do I need to book home tyre fitting?',
    a: "We'll typically need your vehicle registration or tyre size, your location, the number of tyres required and your preferred appointment time. This allows us to identify suitable tyres and arrange your tyre fitting service at home.",
  },
  {
    q: 'Can you fit tyres on my driveway or do I need off-street parking?',
    a: "We can usually provide driveway tyre fitting where there is a safe, level and accessible area to work. Off-street parking is preferred, but if you don't have a driveway, contact us with your location and we'll confirm whether another suitable location is possible.",
  },
  {
    q: 'Is home tyre fitting more expensive than a garage?',
    a: 'Not necessarily. The price depends on the tyres required, the number being fitted and the service needed. Tyre fitting at home can also save you time and travel costs, while we provide clear pricing before the work begins.',
  },
]

const whyChooseUs = [
  {
    icon: '🏠',
    title: 'Convenient Service',
    desc: 'Arrange tyre fitting at home at a time that works around your schedule.',
  },
  {
    icon: '⚡',
    title: 'No Garage Visit',
    desc: 'Get your tyres fitted at home without making an unnecessary trip to a tyre centre.',
  },
  {
    icon: '🔧',
    title: 'Professional Equipment',
    desc: 'Our technicians bring the appropriate equipment to complete the tyre fitting correctly.',
  },
  {
    icon: '🚐',
    title: 'Greater Manchester Coverage',
    desc: 'We provide home tyre services across Greater Manchester and surrounding areas.',
  },
]

const whyChooseHomeFitting = [
  {
    icon: 'home',
    title: 'Convenient Tyre Fitting at Home',
    desc: 'Our technicians come to your property, making car tyre fitting at home a simple alternative to visiting a tyre centre.',
  },
  {
    icon: 'schedule',
    title: 'Save Time',
    desc: 'Book tyre fitting at home around your schedule instead of spending time travelling and waiting at a garage.',
  },
  {
    icon: 'engineering',
    title: 'Professional Service',
    desc: 'Our experienced technicians use suitable equipment to complete your home tyre replacement professionally.',
  },
  {
    icon: 'family_restroom',
    title: 'Ideal for Busy Customers',
    desc: 'Arrange tyre replacement at home while working from home, looking after your family or managing your daily routine.',
  },
  {
    icon: 'accessible',
    title: 'Helpful for Elderly or Disabled Customers',
    desc: 'Our tyre fitting for elderly / disabled customers provides a convenient option for people who may find travelling to a garage difficult.',
  },
  {
    icon: 'location_on',
    title: 'Greater Manchester Service',
    desc: 'We provide our Home Tyre Fitting service across Greater Manchester, subject to location and accessibility.',
  },
]

const routineCards = [
  {
    title: 'Working From Home',
    desc: 'Book your home tyre change service while you continue working.',
  },
  {
    title: 'Busy Schedule',
    desc: 'Arrange your appointment around your daily commitments.',
  },
  {
    title: 'Elderly Customers',
    desc: 'A convenient alternative to travelling to a tyre centre.',
  },
  {
    title: 'Disabled Customers',
    desc: 'Reduce the need for unnecessary travel when replacing your tyres.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Tell Us Your Vehicle Details',
    desc: 'Provide your vehicle registration or tyre size and let us know which tyres you need.',
  },
  {
    n: '2',
    title: 'Choose Your Tyres',
    desc: "We'll help you identify suitable replacement tyres based on your vehicle and requirements.",
  },
  {
    n: '3',
    title: 'Book a Convenient Time',
    desc: 'Choose a suitable appointment for your tyre fitting service at home.',
  },
  {
    n: '4',
    title: 'We Fit Your Tyres',
    desc: 'Our technician arrives at your property with the required equipment and completes the tyre fitting.',
  },
]

const _faqSchema = faqSchema(faqs)

export default function HomeTyreFittingPage() {
  return (
    <div className="text-[#1c1b1b]" style={{ fontFamily: 'var(--font-inter)' }}>
      <JsonLd data={_breadcrumbSchema} />
      <JsonLd data={_serviceSchema} />
      <JsonLd data={_faqSchema} />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home-tyre-fitting.webp"
          alt="Home tyre fitting service at your doorstep"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1600}
          height={900}
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0f172a]/80" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 font-bold px-3.5 py-1.5 rounded-full mb-6 text-[11px] uppercase tracking-widest border border-red-600/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              Tyre Fitting at Your Door
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-black mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.02em' }}
            >
              Home Tyre Fitting in Greater Manchester
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Need new tyres without leaving home? Our <strong>Home Tyre Fitting</strong> service brings professional tyre fitting directly to your driveway. Whether your tyres are worn, damaged or simply due for replacement, our experienced technicians can fit your new tyres at a convenient time.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Our <strong>car tyre fitting at home</strong> service is available across Greater Manchester, helping you avoid the time and inconvenience of visiting a garage. From a single tyre to a complete set, we make tyre replacement at home simple and convenient.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                'Professional Home Tyre Fitting',
                'Tyre Replacement at Home',
                'Convenient Driveway Fitting',
                'Greater Manchester Coverage',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90 text-sm sm:text-base font-medium">
                  <span className="text-green-400 text-lg">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="hidden sm:flex flex-row gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                Call Now
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center gap-2.5 transition-all text-base sm:text-lg shadow-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. IMAGE + TEXT ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/professional-mobile-tyre-fitting.webp"
              alt="Mobile tyre fitting technician at a home"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Home Tyre Fitting Specialists
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Home Tyre Fitters That Come to You
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Our <strong>Home Tyre Fitting</strong> service makes it easier to replace your tyres without arranging a trip to a garage. Our technicians come directly to your home with the required equipment, allowing your car tyre to be fitted at home at a suitable time.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Whether you need <strong>home tyre replacement</strong>{' '}because of worn tyres or simply want the convenience of having your tyres fitted while you&apos;re at home, we can arrange a suitable appointment across Greater Manchester.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              You don&apos;t need to wait around at a tyre centre. With our tyre fitting service at home, you can continue with your day while our technician carries out the required work at your property.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE ────────────────────────────────────────────── */}
      <WhyChooseGrid
        heading="Why Choose Our Home Tyre Fitting Service?"
        intro="Choosing Home Tyre Fitting means you can have your tyres replaced without the inconvenience of driving to a garage or waiting for your vehicle to be serviced."
        items={whyChooseHomeFitting}
      />

      {/* ── 4. HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f172a] text-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[#FF4444] font-bold uppercase tracking-widest text-sm mb-3 block">
              Simple Process
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              How Our Home Tyre Fitting Service Works
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Getting your tyres replaced at home is straightforward. We handle the tyre fitting at your property so you don&apos;t have to arrange a separate garage visit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, idx) => (
              <div key={step.n} className="relative text-center lg:text-left">
                <div className="w-14 h-14 bg-[#FF4444] rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-5 shadow-xl">
                  <span
                    className="text-white font-black text-xl"
                    style={{ fontFamily: 'var(--font-work-sans)' }}
                  >
                    {step.n}
                  </span>
                </div>
                <h3
                  className="text-lg sm:text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-work-sans)' }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-400 text-base leading-relaxed">{step.desc}</p>
                {idx < 3 && (
                  <span className="hidden lg:block absolute top-7 -right-3 text-[#FF4444] material-symbols-outlined text-3xl">
                    trending_flat
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SECOND IMAGE STRIP ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mobile-tyre-fitting-service.webp"
              alt="Home tyre fitting service at your driveway"
              className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Available 24/7
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              Home Tyre Replacement for Cars
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Our home tyre replacement service is suitable for drivers who need new tyres but prefer to have the work completed at home. Whether one tyre has become worn or damaged or you need a complete set, our technicians can assess your requirements and arrange suitable replacement tyres.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              With <strong>car tyre fitted at home</strong>, you don&apos;t need to drive to a tyre centre on worn or damaged tyres. We bring the required equipment to your property and complete the fitting at a suitable location on your driveway or other accessible area.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Our <strong>at home tyre replacement</strong> service is particularly useful for busy households, people working from home and customers who prefer the convenience of having their tyres fitted at their own property.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="tel:07759708646"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                Call: 07759 708 646
              </a>
              <a
                href="tel:01613995851"
                className="bg-[#FF4444] text-[#121212] font-black px-8 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center justify-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-base sm:text-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                Call: 0161 399 5851
              </a>
              <a
                href="https://wa.me/447759708646"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all text-base sm:text-lg shadow-lg"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. A CONVENIENT SERVICE FOR YOUR ROUTINE ───────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-3 block">
              Home Tyre Fitting for Different Needs
            </span>
            <h2
              className="text-2xl sm:text-4xl font-bold text-[#0f172a] mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-work-sans)' }}
            >
              A Convenient Tyre Fitting Service for Your Routine
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Our Home Tyre Fitting service can fit around different lifestyles and schedules. If you&apos;re working from home, looking after children or simply don&apos;t want to spend time travelling to a garage, having your tyres fitted at home can make the process much easier.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              It&apos;s also a practical option for elderly or disabled customers who may find visiting a tyre centre inconvenient. Subject to suitable access and working conditions, we can complete the tyre replacement at your house while you carry on with your day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {routineCards.map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <h3 className="font-bold text-[#0f172a] text-base mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#b70011] font-bold uppercase tracking-widest text-sm mb-2 block">
              Common Questions
            </span>
            <h2
              className="text-2xl sm:text-[32px] font-bold text-[#0f172a]"
              style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={`${faq.q}-${i}`}
                className="group bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm open:shadow-md transition-all"
              >
                <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-base sm:text-lg text-[#0f172a] gap-3">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#b70011] flex-shrink-0 text-xl sm:text-2xl">
                    expand_more
                  </span>
                </summary>
                <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed text-base">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA (commented out for now — may bring back later) ──
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0f172a] text-white text-center">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Book Your Home Tyre Fitting
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Get your tyres replaced without arranging a separate garage visit. Call or WhatsApp <strong>One Stop Mobile Tyres 24/7</strong> with your vehicle registration, tyre size and postcode, and we&apos;ll check suitable tyre options and arrange a technician to come to your home. <strong>One Stop Mobile Tyres 24/7</strong> — <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Alliance Mill, Willow St, Oldham OL1 3QH, United Kingdom</a>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:07759708646"
            className="bg-[#FF4444] text-[#121212] font-black px-10 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-lg sm:text-xl"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            Call: 07759 708 646
          </a>
          <a
            href="https://wa.me/447759708646"
            className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black px-10 py-4 rounded-xl flex items-center gap-2.5 transition-all text-lg sm:text-xl shadow-lg"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </section>
      ── end commented section 8 ── */}

      {/* ── 9. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0f172a] text-white text-center">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Need Tyre Fitting at Home?
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
          Need new tyres without visiting a garage? Book our Home Tyre Fitting service and have your tyres fitted at a convenient location at home. We provide professional home tyre replacement across Greater Manchester, helping you save time and avoid unnecessary travel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* TODO: confirm destination — see chat for the quote-form / booking-route question */}
          <a
            href="#TODO-get-a-quote-destination"
            className="bg-[#FF4444] text-[#121212] font-black px-10 py-4 rounded-xl shadow-2xl shadow-red-900/40 flex items-center gap-2.5 hover:bg-red-700 hover:text-white transition-all text-lg sm:text-xl"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Get a Quote
          </a>
          {/* TODO: confirm destination — see chat for the quote-form / booking-route question */}
          <a
            href="#TODO-book-tyre-fitting-destination"
            className="bg-white/10 border border-white/20 text-white font-black px-10 py-4 rounded-xl flex items-center gap-2.5 hover:bg-white/20 transition-all text-lg sm:text-xl"
            style={{ fontFamily: 'var(--font-work-sans)' }}
          >
            Book Tyre Fitting
          </a>
        </div>
      </section>
    </div>
  )
}
