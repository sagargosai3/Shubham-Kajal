import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Heart, Mail, MapPin } from 'lucide-react'

/**
 * GlossyMaroonPostcard
 * Features:
 * - Rich royal maroon glossy postcard design with specular sheen sweep
 * - Ornate golden filigree borders, corner mandalas, vintage Indian wedding postage stamp
 * - Central round ribbon & wax seal medallion with "Shubham & Kajal"
 * - Dynamic unsealing animation with golden particles / rose petal burst on tap
 */
export default function GlossyMaroonPostcard({ config, onOpen }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleSealClick = (e) => {
    e.stopPropagation()
    if (isOpening) return
    setIsOpening(true)
    setTimeout(() => {
      onOpen()
    }, 900)
  }

  // Golden particle burst coordinates
  const particles = Array.from({ length: 18 }, (_, i) => {
    const angle = (i / 18) * 360
    const distance = 90 + (i % 3) * 35
    const rad = (angle * Math.PI) / 180
    return {
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
      scale: 0.6 + (i % 4) * 0.25,
      delay: (i % 5) * 0.04,
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, transition: { duration: 0.7, ease: 'easeInOut' } }}
      className="relative z-10 flex min-h-dvh w-full items-center justify-center p-4 sm:p-6 md:p-8 select-none"
    >
      {/* Background ambient royal glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-maroon-700/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[420px] h-[420px] bg-gold/15 rounded-full blur-[100px]" />
      </div>

      {/* Main Postcard Envelope Container */}
      <motion.div
        initial={{ y: 30, opacity: 0, rotateX: 10 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, type: 'spring', damping: 20 }}
        className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl aspect-[1.48/1] min-h-[460px] sm:min-h-[500px] rounded-2xl md:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(107,10,30,0.5)] overflow-hidden cursor-pointer"
        onClick={handleSealClick}
        role="button"
        tabIndex={0}
        aria-label="Tap ribbon to open wedding invitation postcard"
      >
        {/* Postcard Background: Deep Glossy Maroon Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#450512] via-[#6f0c22] to-[#3a040e]" />

        {/* Realistic Gloss Sheen Sweep Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.13] to-transparent animate-glossSweep" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.45)_0%,transparent_70%)]" />
        </div>

        {/* Intricate Royal Golden Foil Frame & Mandala Accents */}
        <div className="absolute inset-3 sm:inset-4 md:inset-5 rounded-xl md:rounded-2xl border-2 border-gold/60 pointer-events-none">
          <div className="absolute inset-1 sm:inset-1.5 rounded-lg border border-dashed border-gold/40" />

          {/* Corner Mandala Flourishes */}
          <div className="absolute top-1 left-1 text-gold/80 text-xs sm:text-sm font-serif">❖</div>
          <div className="absolute top-1 right-1 text-gold/80 text-xs sm:text-sm font-serif">❖</div>
          <div className="absolute bottom-1 left-1 text-gold/80 text-xs sm:text-sm font-serif">❖</div>
          <div className="absolute bottom-1 right-1 text-gold/80 text-xs sm:text-sm font-serif">❖</div>

          {/* Traditional Indian Airmail / Royal Chevron Trim at top & bottom */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-75" />
          <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-75" />
        </div>

        {/* Postcard Content Grid (Left: Inviting note | Right: Address & Stamp) */}
        <div className="relative z-10 h-full w-full p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          {/* Top Row: Invocation on Left, Vintage Stamp on Right */}
          <div className="flex items-start justify-between">
            {/* Left Top: Auspicious Mantra */}
            <div className="space-y-1">
              <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-gold/90 font-hindi drop-shadow">
                || ॐ श्री गणेशाय नमः ||
              </span>
              <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-white/60 uppercase">
                Royal Wedding Postcard
              </p>
              <p className="hidden sm:block text-xs text-white/70 italic font-serif">
                Shubh Vivah Nimantran Patrika
              </p>
            </div>

            {/* Right Top: Vintage Indian Royal Postage Stamp */}
            <div className="flex flex-col items-end">
              <div className="relative p-1.5 bg-[#40040e] rounded-sm border-2 border-dashed border-gold/80 shadow-md transform rotate-2">
                <div className="w-16 h-20 sm:w-20 sm:h-24 bg-gradient-to-b from-[#5c0a1b] to-[#2e030b] border border-gold/50 flex flex-col items-center justify-between p-1.5 text-center">
                  <div className="w-full flex justify-between items-center text-[7px] sm:text-[8px] font-bold text-gold/90 uppercase tracking-widest">
                    <span>INDIA</span>
                    <span>₹50</span>
                  </div>
                  {/* Miniature Royal Elephant / Ganesha motif */}
                  <div className="my-auto flex flex-col items-center">
                    <span className="text-xl sm:text-2xl drop-shadow">🐘</span>
                    <span className="text-[7px] sm:text-[8px] font-semibold text-gold/80 uppercase tracking-wide">
                      AHMEDABAD 2026
                    </span>
                  </div>
                  <div className="text-[6px] sm:text-[7px] text-white/60 uppercase font-mono tracking-tighter">
                    ROYAL POST
                  </div>
                </div>

                {/* Overlaid Ink Cancellation Postmark */}
                <div className="absolute -bottom-3 -left-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gold/40 flex flex-col items-center justify-center pointer-events-none rotate-[-15deg] bg-black/10 backdrop-blur-[0.5px]">
                  <span className="text-[6px] sm:text-[7px] font-bold text-gold/80 tracking-widest uppercase">
                    AHMEDABAD
                  </span>
                  <div className="w-8 h-[0.5px] bg-gold/50 my-0.5" />
                  <span className="text-[6px] font-mono text-white/70">22.11.26</span>
                </div>
              </div>
            </div>
          </div>

          {/* Golden Ribbon Strips running across the postcard */}
          {/* Horizontal Silk Ribbon */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-8 sm:h-10 bg-gradient-to-r from-[#b37a1e] via-[#f7d468] to-[#b37a1e] shadow-[0_4px_12px_rgba(0,0,0,0.5)] border-y border-amber-300/60 pointer-events-none">
            <div className="h-full w-full opacity-35 bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(0,0,0,0.15)_6px,rgba(0,0,0,0.15)_12px)]" />
          </div>

          {/* Vertical Silk Ribbon */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 bg-gradient-to-b from-[#b37a1e] via-[#f7d468] to-[#b37a1e] shadow-[0_0_15px_rgba(0,0,0,0.4)] border-x border-amber-300/60 pointer-events-none">
            <div className="h-full w-full opacity-35 bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(0,0,0,0.15)_6px,rgba(0,0,0,0.15)_12px)]" />
          </div>

          {/* Middle Decorative Postcard Elements (Behind the Center Seal) */}
          <div className="grid grid-cols-2 gap-4 my-auto relative z-0 pointer-events-none">
            {/* Left Column: Short auspicious invite preview */}
            <div className="pr-12 sm:pr-16 space-y-1">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gold/85">
                Shree Chamunda & Vishwakarma Krupahi
              </p>
              <p className="text-xs sm:text-sm text-white/80 font-serif leading-snug">
                Together with our families, we cordially invite you to celebrate our holy union.
              </p>
            </div>

            {/* Right Column: Postcard Address Lines */}
            <div className="pl-12 sm:pl-16 space-y-1.5 text-right sm:text-left">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gold/80">
                To:
              </p>
              <div className="border-b border-gold/30 pb-0.5 text-xs text-white/85 font-serif italic">
                Our Beloved Family & Friends
              </div>
              <div className="border-b border-gold/30 pb-0.5 text-[11px] text-white/70">
                Vishwakarma Baug, Jasodanagar
              </div>
              <div className="text-[10px] text-gold/70 tracking-widest uppercase">
                AHMEDABAD · GUJARAT
              </div>
            </div>
          </div>

          {/* Bottom Row: City State & Interaction prompt */}
          <div className="flex items-end justify-between text-xs text-white/60">
            <div className="flex items-center gap-1.5 text-gold/80 font-medium text-[11px] sm:text-xs">
              <MapPin size={13} className="text-gold" />
              <span>Ahmedabad · Vadodara, Gujarat</span>
            </div>

            <div className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-gold/90 uppercase">
              #ShubhamWedsKajal
            </div>
          </div>
        </div>

        {/* =========================================================================
            CENTER ROUND RIBBON & WAX SEAL MEDALLION
            Requested: "in center round ribind and name shubham and kajal when i tap on this ribben post card open"
           ========================================================================= */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-auto">
          {/* Ribbon Tails hanging down from the center medallion */}
          <div className="relative -mb-4 flex gap-4 pointer-events-none">
            {/* Left Satin Ribbon Tail */}
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="w-5 sm:w-6 h-16 sm:h-20 bg-gradient-to-b from-[#e5b325] via-[#f7d468] to-[#9b710e] shadow-lg origin-top"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 82%, 0% 100%)',
              }}
            />
            {/* Right Satin Ribbon Tail */}
            <motion.div
              animate={{ rotate: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="w-5 sm:w-6 h-18 sm:h-22 bg-gradient-to-b from-[#e5b325] via-[#f7d468] to-[#9b710e] shadow-lg origin-top"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%)',
              }}
            />
          </div>

          {/* The Round Ribbon Medallion / Wax Seal */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={
              isOpening
                ? { scale: [1, 1.25, 0], rotate: [0, 15, 90], opacity: [1, 1, 0] }
                : { scale: [1, 1.03, 1] }
            }
            transition={
              isOpening
                ? { duration: 0.75, ease: 'backIn' }
                : { repeat: Infinity, duration: 3, ease: 'easeInOut' }
            }
            className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.45)] group"
          >
            {/* Outer Braided Golden Rope Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-gold bg-gradient-to-br from-[#ffd966] via-[#d4af37] to-[#8c6d16] p-1 shadow-inner">
              <div className="w-full h-full rounded-full border border-dashed border-amber-900/50" />
            </div>

            {/* Glowing Golden Pulse Aura */}
            <div className="absolute inset-0 rounded-full animate-pulseGlow pointer-events-none" />

            {/* Inner Glossy Maroon Lacquer Seal */}
            <div className="relative w-[86%] h-[86%] rounded-full bg-gradient-to-br from-[#590717] via-[#850f28] to-[#3d030d] p-2 flex flex-col items-center justify-center text-center shadow-[inset_0_4px_12px_rgba(255,255,255,0.3),inset_0_-6px_14px_rgba(0,0,0,0.7)] border-2 border-gold/70">
              {/* Glossy Reflection Highlight arc */}
              <div className="absolute top-1 left-2 right-2 h-10 rounded-t-full bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />

              {/* Auspicious motif / Om / Kalash */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="text-xs sm:text-sm text-gold/90 font-bold tracking-widest drop-shadow"
              >
                ✦ ॐ ✦
              </motion.div>

              {/* Couple Names: SHUBHAM AND KAJAL */}
              <div className="my-0.5 sm:my-1 px-1">
                <h2 className="font-script text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffe49e] via-[#ffffff] to-[#ffd700] font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-tight">
                  Shubham
                </h2>
                <span className="block text-[10px] sm:text-xs font-serif text-gold-light italic -my-0.5 sm:-my-1">
                  &
                </span>
                <h2 className="font-script text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffe49e] via-[#ffffff] to-[#ffd700] font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-tight">
                  Kajal
                </h2>
              </div>

              {/* Shubh Vivah Inscription */}
              <div className="text-[9px] sm:text-[10px] font-hindi font-semibold text-gold/95 tracking-widest uppercase mt-0.5 border-t border-gold/30 pt-0.5">
                शुभ विवाह
              </div>
            </div>

            {/* Sparkles icon corner badge */}
            <div className="absolute -top-1 -right-1 bg-gold text-black rounded-full p-1.5 shadow-md transform group-hover:rotate-12 transition-transform">
              <Sparkles size={14} className="fill-black" />
            </div>
          </motion.div>

          {/* Interactive Tap Prompt Below the Round Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-3 sm:mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-gold/40 backdrop-blur-md shadow-lg"
          >
            <Mail size={13} className="text-gold animate-bounce" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-200">
              Tap Ribbon to Open Invitation
            </span>
            <Sparkles size={13} className="text-gold" />
          </motion.div>

          {/* Golden Confetti / Petal Burst on Tap */}
          <AnimatePresence>
            {isOpening && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {particles.map((p, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{
                      x: p.x,
                      y: p.y,
                      scale: p.scale,
                      opacity: [1, 1, 0],
                      rotate: Math.random() * 360,
                    }}
                    transition={{
                      duration: 0.85,
                      delay: p.delay,
                      ease: 'easeOut',
                    }}
                    className={`absolute rounded-full shadow-lg ${
                      idx % 3 === 0
                        ? 'w-3 h-3 bg-gradient-to-br from-amber-200 to-gold'
                        : idx % 3 === 1
                        ? 'w-3.5 h-3.5 bg-rose-500 rounded-full'
                        : 'w-2 h-2 bg-yellow-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}
