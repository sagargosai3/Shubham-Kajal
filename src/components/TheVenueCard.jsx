import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Navigation, Car, Clock, Sparkles } from 'lucide-react'

/**
 * TheVenueCard — Section 5: The Venue
 * Displays both the Ahmedabad Wedding Venue (Hasta Melap)
 * and the Vadodara Pre-Wedding Venue (Ganesh Sthapna, Haldi, Mameru, Garba Night)
 */
export default function TheVenueCard({ venue, venues }) {
  const [selectedKey, setSelectedKey] = useState('preWedding') // default to pre-wedding or wedding

  const currentVenue = venues ? venues[selectedKey] || venue : venue

  return (
    <section className="w-full max-w-[390px] mx-auto px-4 py-8 text-center">
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 mb-2">
        <span className="h-[1px] w-6 bg-[#C9A24B]/60" />
        <span className="text-[11px] font-semibold tracking-[0.25em] text-[#8E2A2A] uppercase">
          WHERE
        </span>
        <span className="h-[1px] w-6 bg-[#C9A24B]/60" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-gloock text-[#8E2A2A] tracking-tight mb-2">
        The Venues
      </h2>

      <p className="text-xs sm:text-sm text-[#3A2A2A]/85 font-cormorant italic mb-4">
        Vadodara for Pre-Wedding Festivities · Ahmedabad for the Sacred Hasta Melap
      </p>

      {/* Dual Venue Switcher Tabs if multiple venues configured */}
      {venues && (
        <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-[#FFFDF9] border border-[#C9A24B]/30 shadow-xs mb-4">
          <button
            type="button"
            onClick={() => setSelectedKey('preWedding')}
            className={`py-2 px-2.5 rounded-xl text-[11px] font-semibold tracking-wider uppercase transition-all ${
              selectedKey === 'preWedding'
                ? 'bg-[#8E2A2A] text-white shadow-sm'
                : 'text-[#8E2A2A] hover:bg-amber-50/60'
            }`}
          >
            📍 Vadodara (Pre-Events)
          </button>

          <button
            type="button"
            onClick={() => setSelectedKey('wedding')}
            className={`py-2 px-2.5 rounded-xl text-[11px] font-semibold tracking-wider uppercase transition-all ${
              selectedKey === 'wedding'
                ? 'bg-[#8E2A2A] text-white shadow-sm'
                : 'text-[#8E2A2A] hover:bg-amber-50/60'
            }`}
          >
            📍 Ahmedabad (Hasta Melap)
          </button>
        </div>
      )}

      {/* Active Venue Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVenue.name + currentVenue.city}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="rounded-[24px] bg-[#FFFDF9] border border-[#C9A24B]/35 shadow-[0_16px_36px_rgba(142,42,42,0.08)] overflow-hidden text-left"
        >
          {/* Illustrated Picture of Venue */}
          <div className="relative w-full aspect-[4/3] bg-amber-100 overflow-hidden">
            <img
              src={currentVenue.image}
              alt={currentVenue.name}
              loading="lazy"
              style={{ objectPosition: currentVenue.objectPosition || 'center center' }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

            {/* Badge over image */}
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] font-semibold tracking-wider text-amber-200 uppercase">
              {currentVenue.tagline || currentVenue.day}
            </div>

            {/* Bottom Title inside Image */}
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <h3 className="font-gloock text-2xl text-amber-100 drop-shadow">
                {currentVenue.name}
              </h3>
              <p className="text-xs text-white/90 font-sans flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>{currentVenue.city}</span>
              </p>
            </div>
          </div>

          {/* Info & Address */}
          <div className="p-5 sm:p-6 space-y-4">
            {/* Events at this location */}
            {currentVenue.eventNames && (
              <div className="p-2.5 rounded-xl bg-amber-50/70 border border-[#C9A24B]/30 text-center">
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#8E2A2A] uppercase block">
                  CELEBRATIONS HOSTED HERE:
                </span>
                <p className="text-xs font-semibold text-[#3A2A2A] mt-0.5 font-sans">
                  {currentVenue.eventNames}
                </p>
                <p className="text-[10px] text-[#C9A24B] font-medium mt-0.5">
                  {currentVenue.day}
                </p>
              </div>
            )}

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#C9A24B] uppercase block">
                FULL ADDRESS
              </span>
              <p className="text-xs sm:text-sm text-[#3A2A2A] leading-relaxed font-sans">
                {currentVenue.address}
              </p>
            </div>

            {/* Quick Travel / Landmark Tips */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#C9A24B]/20 text-[11px] text-[#3A2A2A]/75">
              <div className="flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#8E2A2A] shrink-0" />
                <span className="truncate">{currentVenue.parkingNote || 'Parking available'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8E2A2A] shrink-0" />
                <span className="truncate">{currentVenue.gateNote || 'Gate opens 1h prior'}</span>
              </div>
            </div>

            {/* Maroon Pill Button: "VIEW ON MAPS" */}
            <div className="pt-2">
              <a
                href={currentVenue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#8E2A2A] hover:bg-[#721C1C] text-white shadow-md shadow-maroon-900/20 text-xs font-semibold tracking-[0.18em] uppercase transition-all active:scale-[0.98] border border-[#C9A24B]/30"
                style={{
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2), 0 4px 12px rgba(142,42,42,0.25)',
                }}
              >
                <Navigation className="w-4 h-4 text-[#C9A24B]" />
                <span>VIEW ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
