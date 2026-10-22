import QuickQuoteForm from '@/components/QuickQuoteForm'

/** Instant-quote card in its own section directly below a hero. */
export default function HeroQuoteSection({ area, heading }: { area?: string; heading?: string }) {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#0f172a] text-white relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="max-w-xl mx-auto relative z-10 [&>div]:mt-0">
        <QuickQuoteForm variant="hero" area={area} heading={heading} />
      </div>
    </section>
  )
}
