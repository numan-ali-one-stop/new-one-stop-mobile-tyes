const STEPS = [
  { icon: 'tire_repair',    title: 'Confirm Your Tyre Size',          desc: 'Tell us your vehicle and tyre size for an instant match and quote.',                         rot: 'rotate-3' },
  { icon: 'pin_drop',       title: 'Send Us Your Location',           desc: 'Share your exact location by call or WhatsApp pin for the fastest routing.',                 rot: '-rotate-3' },
  { icon: 'local_car_wash', title: 'Choose Branded or Economy Tyres', desc: 'Premium brands or budget options — every tyre is checked before it is fitted.',              rot: 'rotate-3' },
  { icon: 'directions_car', title: 'Get Back On The Road',            desc: 'Our technician completes the mobile tyre replacement on-site. Pay securely and drive away.', rot: '-rotate-3' },
]

/** The 4-step "how it works" section, shared by the homepage and the Google Ads landing page. */
export default function HowItWorksSteps({ heading }: { heading: string }) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0f172a] text-white relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2
          className="text-2xl sm:text-[32px] font-bold mb-10 sm:mb-16"
          style={{ fontFamily: 'var(--font-work-sans)', letterSpacing: '-0.01em' }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 relative">
          {STEPS.map((step, idx) => (
            <div key={step.icon} className="relative">
              <div
                className={`w-14 h-14 sm:w-20 sm:h-20 bg-[#FF4444] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-8 shadow-xl ${step.rot}`}
              >
                <span aria-hidden="true" data-nosnippet
                  className="material-symbols-outlined text-white text-[28px] sm:text-[36px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >{step.icon}</span>
              </div>
              <h3
                className="text-base sm:text-xl font-semibold mb-2 sm:mb-4 text-white"
                style={{ fontFamily: 'var(--font-work-sans)' }}
              >
                {step.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">{step.desc}</p>
              {idx < STEPS.length - 1 && (
                <span aria-hidden="true" data-nosnippet className="hidden md:block absolute top-10 -right-6 text-[#FF4444] material-symbols-outlined text-3xl">
                  trending_flat
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
