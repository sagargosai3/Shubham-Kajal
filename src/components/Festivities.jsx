import EventCard from './EventCard.jsx'

/**
 * Festivities — Section 6
 * Eyebrow: "THE CELEBRATIONS UNFOLD"
 * Heading: "Festivities"
 * 6 Event Cards (Sangeet Night, After Party, Carnival, Shera Bandi, Phere, Reception)
 */
export default function Festivities({ events }) {
  return (
    <section className="w-full max-w-[390px] mx-auto px-4 py-8 text-center">
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 mb-2">
        <span className="h-[1px] w-6 bg-[#C9A24B]/60" />
        <span className="text-[11px] font-semibold tracking-[0.25em] text-[#8E2A2A] uppercase">
          THE CELEBRATIONS UNFOLD
        </span>
        <span className="h-[1px] w-6 bg-[#C9A24B]/60" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-gloock text-[#8E2A2A] tracking-tight mb-2">
        Festivities
      </h2>

      <p className="text-xs sm:text-sm text-[#3A2A2A]/80 font-cormorant italic mb-8">
        Join us as we laugh, dance, and create memories for a lifetime
      </p>

        {/* 5 Auspicious Event Cards */}
        <div className="space-y-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              weekday={event.weekday}
              day={event.day}
              month={event.month}
              year={event.year}
              time={event.time}
              illustrationUrl={event.illustrationUrl}
              quote={event.quote}
              venue={event.venue}
              mapsUrl={event.mapsUrl}
              theme={event.theme}
              objectPosition={event.objectPosition}
            />
          ))}
        </div>
    </section>
  )
}
