import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WEDDING_CONFIG } from './config.js'

// Components
import PetalsCanvas from './components/PetalsCanvas.jsx'
import FloatingSpeaker from './components/FloatingSpeaker.jsx'
import EnvelopeIntro from './components/EnvelopeIntro.jsx'
import RoyalInvitationHero from './components/RoyalInvitationHero.jsx'
import ScratchDate from './components/ScratchDate.jsx'
import OurStory from './components/OurStory.jsx'
import TheVenueCard from './components/TheVenueCard.jsx'
import Festivities from './components/Festivities.jsx'
import RsvpSection from './components/RsvpSection.jsx'
import RoyalFooter from './components/RoyalFooter.jsx'
import AdminModal from './components/AdminModal.jsx'

/**
 * App — Master Wedding Invitation Experience
 * Mobile-first animated digital wedding invitation (single page, scroll-driven).
 * Cream paper background (#FBF6EE) with maroon (#8E2A2A) and gold (#C9A24B) accents.
 */
export default function App() {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [isAdminOpen, setIsAdminOpen] = useState(false)
  const audioRef = useRef(null)

  // Check URL params for direct ?admin=true
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('admin') === 'true') {
      setIsAdminOpen(true)
    }
  }, [])

  // Initialize Audio
  useEffect(() => {
    const audio = new Audio(WEDDING_CONFIG.audio.src)
    audio.loop = true
    audio.preload = 'auto'
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  // Open Envelope handler
  const handleOpenEnvelope = () => {
    // Start music on user touch gesture
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlayingMusic(true))
        .catch((err) => {
          console.warn('Audio play prevented:', err)
        })
    }

    // After animation sequence completes (~2.2s), reveal main invitation page
    setTimeout(() => {
      setHasOpenedEnvelope(true)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 2200)
  }

  // Toggle Audio
  const handleToggleMusic = () => {
    if (!audioRef.current) return
    if (isPlayingMusic) {
      audioRef.current.pause()
      setIsPlayingMusic(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlayingMusic(true))
        .catch((err) => console.warn('Audio error:', err))
    }
  }

  // Replay envelope intro
  const handleReplayEnvelope = () => {
    setHasOpenedEnvelope(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Scroll to Save the Date from Hero CTA
  const handleScrollToDate = () => {
    const dateEl = document.getElementById('save-the-date-section')
    if (dateEl) {
      dateEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-[#FBF6EE] text-[#3A2A2A] selection:bg-[#8E2A2A] selection:text-white overflow-x-hidden font-sans">
      {/* Global Background Falling Petals Canvas (Pink #E8B4B0 & Gold #C9A24B) */}
      <PetalsCanvas />

      {/* Floating Circular Speaker Button (Bottom-Right) */}
      {hasOpenedEnvelope && (
        <FloatingSpeaker
          isPlaying={isPlayingMusic}
          onToggle={handleToggleMusic}
        />
      )}

      {/* Section 1: Full-Screen Envelope Intro */}
      <AnimatePresence>
        {!hasOpenedEnvelope && (
          <EnvelopeIntro
            key="envelope"
            coupleTitle={WEDDING_CONFIG.coupleTitle}
            onOpen={handleOpenEnvelope}
          />
        )}
      </AnimatePresence>

      {/* Main Single-Page Scroll Experience (390px width mobile-first) */}
      {hasOpenedEnvelope && (
        <motion.div
          key="invitation-suite"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 flex flex-col min-h-screen"
        >
          {/* Top Royal Header Ribbon */}
          <header className="sticky top-0 z-30 w-full py-2.5 px-4 bg-[#FBF6EE]/90 backdrop-blur-md border-b border-[#C9A24B]/30 flex items-center justify-between shadow-xs">
            <span className="font-rozha text-xs font-semibold text-[#8E2A2A] tracking-wider">
              {WEDDING_CONFIG.shloka}
            </span>
            <span className="font-gloock text-sm text-[#8E2A2A] tracking-wide">
              {WEDDING_CONFIG.coupleTitle}
            </span>
            <span className="text-[10px] font-bold text-[#C9A24B] tracking-widest uppercase">
              21 NOV 2026
            </span>
          </header>

          {/* Central Scroll Content Container (max-w-[430px] for pristine mobile layout) */}
          <main className="w-full max-w-[430px] mx-auto flex-1 space-y-6 sm:space-y-8">
            {/* Section 2: Invitation Card */}
            <div id="invitation-hero">
              <RoyalInvitationHero
                config={WEDDING_CONFIG}
                onScrollDown={handleScrollToDate}
              />
            </div>

            {/* Section 3: Save the Date (Scratch Cards) */}
            <div id="save-the-date-section" className="scroll-mt-14">
              <ScratchDate
                month={WEDDING_CONFIG.saveTheDate.month}
                day={WEDDING_CONFIG.saveTheDate.day}
                year={WEDDING_CONFIG.saveTheDate.year}
                subtext={WEDDING_CONFIG.saveTheDate.subtext}
                revealQuote={WEDDING_CONFIG.saveTheDate.revealQuote}
              />
            </div>

            {/* Section 4: Our Story (Stacked Polaroids) */}
            <div id="our-story-section" className="scroll-mt-14">
              <OurStory story={WEDDING_CONFIG.story} />
            </div>

            {/* Section 5: The Venue */}
            <div id="venue-section" className="scroll-mt-14">
              <TheVenueCard venue={WEDDING_CONFIG.venue} />
            </div>

            {/* Section 6: Festivities (5 Events) */}
            <div id="festivities-section" className="scroll-mt-14">
              <Festivities events={WEDDING_CONFIG.events} />
            </div>

            {/* Section 7 & 9: RSVP Form & Thank-You */}
            <div id="rsvp-section" className="scroll-mt-14">
              <RsvpSection
                config={WEDDING_CONFIG}
                onOpenAdmin={() => setIsAdminOpen(true)}
              />
            </div>
          </main>

          {/* Section 8: Royal Footer */}
          <RoyalFooter
            config={WEDDING_CONFIG}
            onReplayEnvelope={handleReplayEnvelope}
          />
        </motion.div>
      )}

      {/* Admin Guestbook Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  )
}
