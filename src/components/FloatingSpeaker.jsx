import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

/**
 * FloatingSpeaker — Floating circular speaker button
 * Bottom-right, cream background (#FBF6EE), soft shadow, speaker/mute icon.
 * Toggles looping background music.
 */
export default function FloatingSpeaker({ isPlaying, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
      className="fixed bottom-6 right-5 z-40 w-12 h-12 rounded-full bg-[#FBF6EE] border border-[#C9A24B]/40 shadow-lg shadow-maroon-950/15 flex items-center justify-center text-[#8E2A2A] transition-all hover:bg-white active:bg-amber-50"
    >
      {isPlaying ? (
        <div className="relative flex items-center justify-center">
          <Volume2 className="w-5 h-5 text-[#8E2A2A]" />
          {/* Animated pulsing wave ring */}
          <span className="absolute -inset-1 rounded-full border border-[#C9A24B]/60 animate-ping pointer-events-none opacity-40" />
        </div>
      ) : (
        <VolumeX className="w-5 h-5 text-[#3A2A2A]/70" />
      )}
    </motion.button>
  )
}
