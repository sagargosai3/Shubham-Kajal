import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

/**
 * EventCard — Reusable component for Festivities
 * Props:
 * title, weekday, day, month, year, time, illustrationUrl, quote,
 * dressCodeColors[], dressCodeText, venue, mapsUrl, theme
 */
export default function EventCard({
  title,
  weekday,
  day,
  month,
  year,
  time,
  illustrationUrl,
  quote,
  venue,
  mapsUrl,
  theme,
  objectPosition,
}) {
  const dateLine = `${weekday} | ${day} | ${month} ${year}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full rounded-[24px] overflow-hidden shadow-xl shadow-maroon-950/10 border border-[#C9A24B]/30 bg-[#FFFDF9] mb-8"
    >
      {/* Tall Rounded Illustration (Aspect Ratio 3:4) */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900">
        <motion.img
          src={illustrationUrl}
          alt={title}
          loading="lazy"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6 }}
          style={{ objectPosition: objectPosition || 'center center' }}
          className="w-full h-full object-cover"
        />

        {/* Top Vignette Overlay for Title Readability */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/80 via-black/45 to-transparent pointer-events-none" />

        {/* Bottom Vignette Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Overlaid Title & Date/Time at Top */}
        <div className="absolute top-0 inset-x-0 p-5 text-center text-white space-y-1">
          <h3 className="font-gloock text-2xl sm:text-3xl text-amber-100 drop-shadow-md tracking-wide">
            {title}
          </h3>

          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-amber-200/90 font-sans drop-shadow">
            {dateLine}
          </p>

          <p className="text-xs font-cormorant italic text-white/90 drop-shadow">
            {time}
          </p>
        </div>
      </div>

      {/* Floating Translucent Cream Card Below */}
      <div className="p-5 sm:p-6 bg-[#FFFDF9] -mt-5 relative z-10 rounded-t-[24px] border-t border-[#C9A24B]/30 space-y-4">
        {/* Italic Quote */}
        <p className="text-xs sm:text-sm font-cormorant italic text-[#3A2A2A] text-center leading-relaxed">
          "{quote}"
        </p>

        {/* Thin Divider */}
        <div className="h-[1px] w-full bg-[#C9A24B]/25" />

        {/* Venue Name */}
        <div className="text-center space-y-1">
          <span className="text-[10px] font-semibold tracking-widest text-[#3A2A2A]/60 uppercase block">
            VENUE
          </span>
          <p className="text-xs sm:text-sm font-semibold text-[#8E2A2A] font-sans mt-0.5 leading-snug">
            {venue}
          </p>
        </div>

        {/* Maroon Pill Button: "GET DIRECTIONS" */}
        <div className="pt-1">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#8E2A2A] hover:bg-[#721C1C] text-white shadow-md shadow-maroon-900/15 text-xs font-semibold tracking-[0.18em] uppercase transition-all active:scale-[0.98] border border-[#C9A24B]/30"
            style={{
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2), 0 4px 10px rgba(142,42,42,0.2)',
            }}
          >
            <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
