import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Heart, Sparkles, Users, Award, Gift } from 'lucide-react'
import { useState, useEffect } from 'react'

/**
 * Live Countdown timer hook for 22 November 2026 (Hasta Melap)
 */
function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  })

  useEffect(() => {
    if (!targetDate) return

    const updateTimer = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const diff = target - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        isComplete: false,
      })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}

export default function InvitationCard({ config, onNavigateToSection }) {
  const countdown = useCountdown(config?.isoWeddingDate)

  // Build Google Calendar URL for 22 Nov 2026
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Shubham weds Kajal — Mangal Parinay & Hasta Melap 💍'
  )}&dates=20261122T053000Z/20261122T113000Z&details=${encodeURIComponent(
    'With blessings of Shree Chamunda Mataji & Shree Vishwakarma Dada. Hasta Melap of Chi. Shubham & Chi. Kajal at 11:00 AM on Sunday, 22 November 2026.'
  )}&location=${encodeURIComponent(config.venueFull)}&ctz=Asia/Kolkata`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-4xl mx-auto px-4 py-6"
    >
      {/* Outer Royal Gold Foil Frame */}
      <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-br from-gold/70 via-amber-300 to-gold/50 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(107,10,30,0.4)]">
        {/* Inner Card Velvet Parchment */}
        <div className="relative rounded-[22px] bg-gradient-to-b from-[#35040d] via-[#4d0716] to-[#250208] p-6 sm:p-10 md:p-12 text-center border border-gold/40 shadow-inner">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Corner Flourishes */}
          <div className="absolute top-4 left-4 text-gold/70 text-lg sm:text-xl font-serif">❖</div>
          <div className="absolute top-4 right-4 text-gold/70 text-lg sm:text-xl font-serif">❖</div>
          <div className="absolute bottom-4 left-4 text-gold/70 text-lg sm:text-xl font-serif">❖</div>
          <div className="absolute bottom-4 right-4 text-gold/70 text-lg sm:text-xl font-serif">❖</div>

          {/* 1. Divine Invocations (From top of physical card) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 space-y-2"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold/90 font-royal">
              <span>|| Shree Ganeshay Namah ||</span>
              <span className="hidden sm:inline text-gold/50">•</span>
              <span>|| Shree Vishwakarma Namah ||</span>
              <span className="hidden sm:inline text-gold/50">•</span>
              <span>|| Shree Chamunda Matay Namah ||</span>
            </div>

            {/* Sacred Heading */}
            <div className="pt-2">
              <h2 className="font-royal text-2xl sm:text-3xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-200">
                MANGAL PARINAY
              </h2>
              <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-gold font-semibold">
                Holy Matrimony
              </p>
            </div>
          </motion.div>

          {/* 2. Opening Blessing & Salutation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="my-5 p-3 rounded-2xl bg-black/30 border border-gold/20 max-w-2xl mx-auto space-y-1.5"
          >
            <p className="text-xs sm:text-sm font-semibold text-gold-light italic font-serif">
              Dear Family, Relatives & Beloved Friends,
            </p>
            <p className="text-xs text-white/80 leading-relaxed font-serif">
              {config.divineBlessing}:
            </p>
          </motion.div>

          {/* 3. Groom & Bride Lineage (Vadodara & Ahmedabad) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-left max-w-3xl mx-auto">
            {/* Groom's Family Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-gold/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/30">
                  Groom's Family · Vadodara
                </span>
                <p className="mt-2.5 text-xs text-white/70">Son of:</p>
                <h4 className="text-sm sm:text-base font-bold text-white font-serif mt-0.5">
                  {config.groomParents}
                </h4>
                <p className="text-[11px] text-gold/80 italic mt-0.5">
                  Hunavadiya Parivar · Resident of Vadodara
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-gold/20 flex items-center justify-between">
                <span className="text-xs text-white/60">Groom:</span>
                <span className="text-sm font-bold text-amber-200 font-royal">
                  {config.groomFull}
                </span>
              </div>
            </div>

            {/* Bride's Family Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-gold/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/30">
                  Bride's Family · Ahmedabad
                </span>
                <p className="mt-2.5 text-xs text-white/70">Daughter of:</p>
                <h4 className="text-sm sm:text-base font-bold text-white font-serif mt-0.5">
                  {config.brideParents}
                </h4>
                <p className="text-[11px] text-gold/80 italic mt-0.5">
                  Mistry (Mahidhariya) Parivar · Resident of Ahmedabad
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-gold/20 flex items-center justify-between">
                <span className="text-xs text-white/60">Bride:</span>
                <span className="text-sm font-bold text-amber-200 font-royal">
                  {config.brideFull}
                </span>
              </div>
            </div>
          </div>

          {/* 4. Grand Couple Names Display */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="my-6 py-2"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] font-bold">
                Shubham
              </h1>

              <div className="flex items-center gap-2 text-gold">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold" />
                <span className="font-script text-3xl sm:text-4xl text-gold-light italic">
                  weds
                </span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold" />
              </div>

              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] font-bold">
                Kajal
              </h1>
            </div>

            <p className="mt-2 text-xs font-semibold tracking-[0.25em] text-gold uppercase font-royal">
              #ShubhamWedsKajal
            </p>
          </motion.div>

          {/* 5. Auspicious Date, Muhurat & Venue Card */}
          <div className="max-w-2xl mx-auto rounded-2xl bg-black/50 border border-gold/30 p-5 sm:p-6 backdrop-blur-md shadow-xl my-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left divide-y sm:divide-y-0 sm:divide-x divide-gold/20">
              {/* Date & Muhurat */}
              <div className="space-y-1 sm:pr-4">
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider">
                  <Calendar size={14} />
                  <span>Auspicious Wedding Date</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                  Sunday, 22 November 2026
                </h3>
                <p className="text-xs text-amber-200/90 font-medium">
                  Vikram Samvat 2083, Kartak Sud 13
                </p>
                <p className="text-xs text-white/70">
                  <strong className="text-gold">Hasta Melap:</strong> 11:00 AM IST
                </p>
              </div>

              {/* Venue */}
              <div className="space-y-1 pt-3 sm:pt-0 sm:pl-4">
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider">
                  <MapPin size={14} />
                  <span>Shubh Lagna Sthal (Venue)</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                  {config.venueName}
                </h3>
                <p className="text-xs text-white/80 leading-snug">
                  Gor No Kuvo, Next to Gayatri Mandir, Jasodanagar, Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            {/* Live Countdown */}
            <div className="mt-5 pt-4 border-t border-gold/20">
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gold mb-3">
                <Clock size={13} />
                <span>Countdown to Hasta Melap</span>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-xs sm:max-w-sm mx-auto">
                {[
                  { label: 'Days', val: countdown.days },
                  { label: 'Hours', val: countdown.hours },
                  { label: 'Mins', val: countdown.minutes },
                  { label: 'Secs', val: countdown.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.06] border border-gold/20"
                  >
                    <span className="font-mono text-xl sm:text-2xl font-bold text-white drop-shadow">
                      {String(item.val).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gold/80 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Invitation Request Line */}
          <p className="text-xs sm:text-sm text-white/80 italic font-serif max-w-xl mx-auto leading-relaxed my-5">
            "{config.invitationNote}"
          </p>

          {/* Action Buttons: Add to Google Calendar & WhatsApp RSVP */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-6">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/30 border border-gold/60 text-white font-semibold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg"
            >
              <Calendar size={15} className="text-gold" />
              <span>Add to Google Calendar</span>
            </a>

            <button
              onClick={() => onNavigateToSection('rsvp')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-emerald-900/50"
            >
              <Sparkles size={15} className="text-emerald-200" />
              <span>RSVP via WhatsApp</span>
            </button>
          </div>

          {/* =========================================================================
              FAMILY SECTIONS FROM CARD (IN ENGLISH):
              1. Darshanabhilashi (Well-Wishers) - Hunavadiya Parivar
              2. Mameru Shobhavshe (Maternal Visavadiya Parivar)
              3. Sisters (Baheno) & Nieces/Nephews (Bhanej)
              4. Tahuko (Sweet Words from Disha & Sagar)
             ========================================================================= */}
          <div className="mt-10 pt-8 border-t border-gold/30 space-y-6 text-left">
            {/* 1. Darshanabhilashi (Well-Wishers) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-gold/20">
              <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3">
                <Users size={14} />
                <span>With Best Compliments & Well-Wishers (Darshanabhilashi)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/85">
                {config.wellWishers.map((name, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-gold text-[10px]">❖</span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gold/90 font-semibold border-t border-gold/20 pt-2 text-center sm:text-left">
                & Together with the {config.familyCollective}
              </p>
            </div>

            {/* 2. Mameru Shobhavshe (Maternal Visavadiya Family) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-gold/20">
              <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3">
                <Gift size={14} />
                <span>Gracing the Mameru / Mosal Ceremony (Maternal Family)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-white/85">
                {config.maternalFamily.map((name, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-gold text-[10px]">❖</span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gold/90 font-semibold border-t border-gold/20 pt-2 text-center sm:text-left">
                & Together with the {config.maternalCollective}
              </p>
            </div>

            {/* 3. Sisters (Baheno) & Nieces / Nephews (Bhanej) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sisters */}
              <div className="p-4 rounded-2xl bg-black/40 border border-gold/20 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                  Beloved Sisters (Baheno)
                </span>
                <div className="space-y-1 text-xs text-white/85">
                  {config.sisters.map((sis, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-gold text-[9px]">❖</span>
                      <span>{sis}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nieces & Nephews */}
              <div className="p-4 rounded-2xl bg-black/40 border border-gold/20 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                  Nieces & Nephews (Bhanej)
                </span>
                <div className="grid grid-cols-2 gap-1 text-xs text-white/85">
                  {config.niecesNephews.map((bn, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-gold text-[9px]">❖</span>
                      <span>{bn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Tahuko (Sweet Invitation Rhyme) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-gold/15 via-maroon-800/30 to-gold/15 border border-gold/40 text-center space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                ✦ Sweet Words of Affection (Tahuko) ✦
              </span>
              <p className="text-xs sm:text-sm text-white/90 italic font-serif leading-relaxed max-w-lg mx-auto">
                "{config.tahuko.english}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
