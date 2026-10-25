import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/**
 * RoyalInvitationHero — Section 2: Invitation Card
 * Features:
 * - Small lotus or Ganesh emblem at top
 * - Sanskrit shloka in maroon
 * - "With the blessings of Shri Ganesh and our beloved families, we joyfully invite you to celebrate the union of"
 * - Huge names "Shubham & Kajal" (gold "&" between thin gold lines)
 * - Parents' line
 * - "SCROLL TO SEE MAGIC" with down arrow inside gold corner brackets
 */
export default function RoyalInvitationHero({ config, onScrollDown }) {
  return (
    <section className="relative w-full max-w-[390px] mx-auto px-4 pt-6 pb-10 text-center">
      {/* Royal Cream Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative rounded-[24px] bg-[#FFFDF9]/95 border border-[#C9A24B]/35 shadow-[0_16px_40px_rgba(142,42,42,0.08)] p-6 sm:p-8 overflow-hidden backdrop-blur-sm"
      >
        {/* Subtle royal corner ornaments */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C9A24B]/60 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C9A24B]/60 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C9A24B]/60 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C9A24B]/60 rounded-br-sm pointer-events-none" />

        {/* Small Ganesh / Lotus Emblem at Top */}
        <div className="flex justify-center mb-4">
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-b from-[#FFF5DE] to-[#FBF6EE] border border-[#C9A24B]/50 flex items-center justify-center shadow-inner">
            <svg
              className="w-8 h-8 text-[#8E2A2A]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sacred Lotus / Ganesh Graphic */}
              <path
                d="M24 6C24 6 20 16 14 18C14 18 19 22 24 22C29 22 34 18 34 18C28 16 24 6 24 6Z"
                fill="#C9A24B"
                opacity="0.9"
              />
              <path
                d="M24 10C24 10 16 22 8 26C8 26 15 30 24 30C33 30 40 26 40 26C32 22 24 10 24 10Z"
                fill="#8E2A2A"
              />
              <path
                d="M24 20C24 20 18 30 12 36C12 36 18 40 24 40C30 40 36 36 36 36C30 30 24 20 24 20Z"
                fill="#C9A24B"
                opacity="0.75"
              />
              <circle cx="24" cy="24" r="3" fill="#FFFDF9" />
            </svg>
          </div>
        </div>

        {/* Sanskrit Shloka in Maroon */}
        <div className="mb-5 space-y-1">
          <p className="font-rozha text-[#8E2A2A] text-base sm:text-lg tracking-wider font-semibold">
            {config.shloka}
          </p>
          <p className="font-rozha text-[#8E2A2A]/80 text-[11px] sm:text-xs leading-relaxed whitespace-pre-line">
            {config.shlokaSubtext}
          </p>
        </div>

        {/* Thin Gold Ornamental Divider */}
        <div className="flex items-center justify-center gap-3 my-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent" />
          <span className="text-[#C9A24B] text-xs">❖</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#C9A24B] to-transparent" />
        </div>

        {/* Invitation Text */}
        <p className="font-cormorant italic text-sm sm:text-base text-[#3A2A2A] leading-relaxed max-w-[320px] mx-auto mb-6">
          {config.inviteOpening}
        </p>

        {/* Huge Couple Names with Gold "&" between Thin Gold Lines */}
        <div className="my-6 space-y-2">
          <div className="font-gloock text-4xl sm:text-5xl text-[#8E2A2A] tracking-tight leading-tight">
            {config.groomName}
          </div>

          {/* Gold "&" between thin gold lines */}
          <div className="flex items-center justify-center gap-4 my-2">
            <span className="h-[1px] w-16 bg-[#C9A24B]/70" />
            <span className="font-cormorant italic text-2xl font-bold text-[#C9A24B]">
              &amp;
            </span>
            <span className="h-[1px] w-16 bg-[#C9A24B]/70" />
          </div>

          <div className="font-gloock text-4xl sm:text-5xl text-[#8E2A2A] tracking-tight leading-tight">
            {config.brideName}
          </div>
        </div>

        {/* Parents' Line */}
        <div className="my-6 space-y-2 text-xs sm:text-sm font-cormorant text-[#3A2A2A]/85 border-t border-b border-[#C9A24B]/25 py-3">
          <p className="italic">{config.parents.groom}</p>
          <p className="italic">{config.parents.bride}</p>
        </div>

        {/* "SCROLL TO SEE MAGIC" with Down Arrow inside Gold Corner Brackets */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={onScrollDown}
            className="group relative inline-flex flex-col items-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            {/* Gold Corner Brackets around CTA */}
            <div className="relative px-6 py-2 border border-[#C9A24B]/40 rounded-lg bg-[#FBF6EE]/60">
              {/* Corner accent marks */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C9A24B]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C9A24B]" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C9A24B]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C9A24B]" />

              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#8E2A2A] uppercase">
                SCROLL TO SEE MAGIC
              </span>
            </div>

            {/* Down Arrow */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-2 text-[#C9A24B]"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </section>
  )
}
