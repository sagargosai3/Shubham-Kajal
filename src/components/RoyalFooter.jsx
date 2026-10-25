import { motion } from 'framer-motion'
import { Heart, MailOpen } from 'lucide-react'

/**
 * RoyalFooter — Section 8
 * Red section with the quote:
 * "Your presence will turn this real-life moment into a blockbuster we'll never forget.
 * Come, dance, laugh, and celebrate with us in style."
 */
export default function RoyalFooter({ config, onReplayEnvelope }) {
  return (
    <footer className="w-full bg-gradient-to-b from-[#8E2A2A] via-[#751B1B] to-[#540D0D] text-white pt-12 pb-14 px-6 text-center relative overflow-hidden border-t-2 border-[#C9A24B]/50">
      {/* Subtle gold glow & pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,75,0.18)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[360px] mx-auto space-y-6">
        {/* Sacred Shloka Symbol */}
        <div className="font-rozha text-[#C9A24B] text-sm tracking-[0.3em]">
          ॥ शुभ विवाह ॥
        </div>

        {/* Highlighted Italic Footer Quote */}
        <p className="font-cormorant italic text-base sm:text-lg text-amber-100 leading-relaxed font-normal px-2">
          "{config.footerMessage}"
        </p>

        {/* Gold Ornamental Divider */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent" />
          <Heart className="w-3.5 h-3.5 text-[#C9A24B] fill-current" />
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#C9A24B] to-transparent" />
        </div>

        {/* Couple Title */}
        <div className="space-y-1">
          <h2 className="font-gloock text-3xl sm:text-4xl text-amber-100 tracking-wide">
            {config.coupleTitle}
          </h2>
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase">
            {config.hashtag}
          </p>
        </div>

        {/* Replay Envelope Intro Button */}
        <div className="pt-4">
          <button
            type="button"
            onClick={onReplayEnvelope}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#C9A24B]/40 text-amber-100 text-xs font-medium tracking-wider uppercase transition-all active:scale-95 shadow-sm"
          >
            <MailOpen className="w-3.5 h-3.5 text-[#C9A24B]" />
            <span>Replay Envelope Intro</span>
          </button>
        </div>

        <p className="text-[10px] text-white/50 pt-2 font-sans">
          Designed with love for our family and friends · 2026
        </p>
      </div>
    </footer>
  )
}
