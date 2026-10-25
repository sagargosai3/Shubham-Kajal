import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Sparkles, Navigation, Music } from 'lucide-react'

export default function CeremoniesTimeline({ events, onPlayTrack }) {
  // Group events by Day 1 (21 Nov) and Day 2 (22 Nov)
  const day1Events = events.filter((e) => e.dayNumber === 'Day 1')
  const day2Events = events.filter((e) => e.dayNumber === 'Day 2')

  const renderEventCard = (event, index) => (
    <motion.div
      key={event.id || index}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-[#38050e] via-[#4d0817] to-[#250208] border border-gold/30 p-5 sm:p-6 shadow-xl shadow-black/60"
    >
      <div className="flex flex-col sm:flex-row gap-5 items-center">
        {/* Event Photo Preview with ceremony icon */}
        <div className="relative w-full sm:w-48 h-40 sm:h-40 rounded-xl overflow-hidden shrink-0 border border-gold/40 shadow-lg group">
          <img
            src={event.coverUrl}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end justify-between p-3">
            <span className="text-[11px] font-bold text-white uppercase tracking-wider font-serif">
              {event.time}
            </span>
            <span className="text-2xl drop-shadow">{event.icon || '✨'}</span>
          </div>
        </div>

        {/* Event Details in English */}
        <div className="flex-1 w-full space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-gold uppercase tracking-widest">
                {event.dayNumber} · {event.dateShort}
              </span>
              <h3 className="font-royal text-lg sm:text-xl font-bold text-white">
                {event.title}
              </h3>
            </div>

            {/* Timing Pill */}
            <div className="px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-xs font-bold text-amber-200 flex items-center gap-1.5 shadow-sm">
              <Clock size={12} className="text-gold" />
              <span>{event.time}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif">
            {event.description}
          </p>

          {/* Details Row: Dress Code & Venue */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-white/80">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-black/30 border border-white/10">
              <span className="text-gold">👗</span>
              <span className="truncate">Dress Code: {event.dressCode}</span>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg bg-black/30 border border-white/10">
              <MapPin size={13} className="text-gold shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
          </div>

          {/* Action Buttons: Audio track & directions */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href="https://maps.google.com/?q=Vishwakarma+Baug+Jasodanagar+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold hover:bg-gold/25 transition-colors"
            >
              <Navigation size={12} />
              <span>Get Venue Directions</span>
            </a>

            {event.audioUrl && (
              <button
                onClick={() => onPlayTrack(index)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium transition-colors"
              >
                <Music size={12} className="text-spotify" />
                <span>Play Shehnai Tune</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
          <Calendar size={13} />
          <span>Auspicious Ceremonies (Manglik Prasango)</span>
        </div>

        <h2 className="font-royal text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-white to-amber-200 font-bold">
          Wedding Schedule
        </h2>

        <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto italic font-serif">
          Detailed ceremonies itinerary for Saturday, 21 November & Sunday, 22 November 2026.
        </p>
      </div>

      <div className="space-y-10">
        {/* DAY 1 SECTION */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 border-b border-gold/30 pb-2">
            <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-bold text-xs">
              01
            </span>
            <div>
              <h3 className="font-royal text-xl sm:text-2xl font-bold text-white">
                Saturday, 21 November 2026
              </h3>
              <p className="text-xs text-gold/80 font-serif">
                Vikram Samvat 2083, Kartak Sud 12 · Mandap Muhurat, Mameru & Garba Night
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {day1Events.map((evt, idx) => renderEventCard(evt, idx))}
          </div>
        </div>

        {/* DAY 2 SECTION */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3 border-b border-gold/30 pb-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-red-700 text-white flex items-center justify-center font-bold text-xs shadow-md">
              02
            </span>
            <div>
              <h3 className="font-royal text-xl sm:text-2xl font-bold text-white">
                Sunday, 22 November 2026 — The Wedding Day
              </h3>
              <p className="text-xs text-gold/80 font-serif">
                Vikram Samvat 2083, Kartak Sud 13 · Jaan Prasthan & Hasta Melap
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {day2Events.map((evt, idx) => renderEventCard(evt, day1Events.length + idx))}
          </div>
        </div>
      </div>
    </section>
  )
}
