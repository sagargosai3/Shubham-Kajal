import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * OurStory — Section 4
 * Eyebrow: "OUR STORY", Heading: "Forever Us"
 * Stacked polaroid photo cards:
 * Card 1: Caption "Memories together"
 * Card 2: Arch-shaped photo mask with caption "Joy and laughter"
 * Uses authentic couple photos of Shubham & Kajal.
 */
export default function OurStory({ story }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % story.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + story.length) % story.length)
  }

  return (
    <section className="w-full max-w-[390px] mx-auto px-4 py-8 text-center">
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 mb-2">
        <span className="h-[1px] w-6 bg-[#C9A24B]/60" />
        <span className="text-[11px] font-semibold tracking-[0.25em] text-[#8E2A2A] uppercase">
          OUR STORY
        </span>
        <span className="h-[1px] w-6 bg-[#C9A24B]/60" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-gloock text-[#8E2A2A] tracking-tight mb-2">
        Forever Us
      </h2>

      <p className="text-xs sm:text-sm text-[#3A2A2A]/80 font-cormorant italic mb-6">
        Every picture is a chapter in our fairy tale
      </p>

      {/* Stacked Polaroids Container */}
      <div className="relative w-full h-[420px] mx-auto flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {story.map((item, index) => {
            // Position relative to current active card
            const offset = (index - currentIndex + story.length) % story.length
            if (offset > 2 && offset < story.length - 1) return null

            const isTop = offset === 0
            const rotation = isTop ? item.rotation : item.rotation + offset * 3
            const translateY = offset * 12
            const scale = 1 - offset * 0.05
            const zIndex = 10 - offset

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{
                  opacity: 1,
                  scale,
                  y: translateY,
                  rotate: rotation,
                  zIndex,
                }}
                exit={{ opacity: 0, scale: 0.8, x: -180, rotate: -15 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                onClick={handleNext}
                className="absolute w-[280px] sm:w-[300px] cursor-pointer"
                style={{
                  filter: 'drop-shadow(0 14px 25px rgba(142,42,42,0.14))',
                }}
              >
                {/* Polaroid Frame */}
                <div className="bg-[#FFFDF9] p-3 pb-5 rounded-2xl border border-[#C9A24B]/40 shadow-xl transition-transform hover:scale-[1.02]">
                  {/* Photo Container */}
                  <div
                    className={`relative w-full aspect-[4/5] overflow-hidden bg-amber-50 ${
                      item.style === 'arch' ? 'rounded-t-[100px] rounded-b-xl' : 'rounded-xl'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      style={{ objectPosition: item.objectPosition || 'center top' }}
                      className="w-full h-full object-cover"
                    />

                    {/* Subtle warm photo vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom small badge (does not obstruct heads/faces) */}
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/55 backdrop-blur-md text-[9px] text-amber-200 font-sans tracking-wider uppercase border border-white/10 shadow-sm pointer-events-none">
                      {item.date}
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="pt-3 px-1 text-center">
                    <h3 className="font-cormorant italic font-semibold text-lg sm:text-xl text-[#8E2A2A] tracking-tight">
                      "{item.title}"
                    </h3>
                    <p className="text-[11px] text-[#3A2A2A]/75 font-sans mt-0.5 leading-snug">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Controls & Tap Indicator */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#C9A24B]/50 flex items-center justify-center text-[#8E2A2A] hover:bg-amber-50 active:scale-95 transition-all shadow-sm"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="text-[11px] font-semibold text-[#8E2A2A] tracking-widest uppercase">
          {currentIndex + 1} / {story.length}
        </span>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#C9A24B]/50 flex items-center justify-center text-[#8E2A2A] hover:bg-amber-50 active:scale-95 transition-all shadow-sm"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <p className="text-[10px] text-[#C9A24B] uppercase tracking-widest mt-2 flex items-center justify-center gap-1">
        <Sparkles className="w-3 h-3" /> Tap photo or use arrows to shuffle
      </p>
    </section>
  )
}
