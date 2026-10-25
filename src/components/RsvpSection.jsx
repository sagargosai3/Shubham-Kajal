import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import {
  Check,
  Music,
  Users,
  Calendar,
  Utensils,
  MessageSquare,
  Heart,
  Phone,
  User,
  Search,
  Sparkles,
  ShieldCheck,
  Send,
  MessageCircle,
} from 'lucide-react'

const COUNTRY_CODES = [
  { flag: '🇮🇳', code: '+91', country: 'India' },
  { flag: '🇺🇸', code: '+1', country: 'USA' },
  { flag: '🇬🇧', code: '+44', country: 'UK' },
  { flag: '🇦🇪', code: '+971', country: 'UAE' },
  { flag: '🇦🇺', code: '+61', country: 'Australia' },
  { flag: '🇸🇬', code: '+65', country: 'Singapore' },
  { flag: '🇨🇦', code: '+1', country: 'Canada' },
]

const DIETARY_OPTIONS = [
  'Pure Vegetarian (Standard)',
  'Jain (Strict No Root Vegetables)',
  'Swaminarayan (No Onion / Garlic)',
  'Vegan',
  'No Restrictions',
]

/**
 * RsvpSection — Section 7 & 9
 * Cream card style, maroon accents, form validation, dance floor song autocomplete,
 * full-screen animated thank-you screen with confetti and animated checkmark draw.
 */
export default function RsvpSection({ config, onOpenAdmin }) {
  const [fullName, setFullName] = useState('')
  const [countryCode, setCountryCode] = useState('+91')
  const [phone, setPhone] = useState('')
  const [attendance, setAttendance] = useState('accepted') // 'accepted' | 'declined'
  const [partySize, setPartySize] = useState('2 guests')
  const [selectedEvents, setSelectedEvents] = useState(
    config.events.map((e) => e.id) // Default all checked
  )
  const [songQuery, setSongQuery] = useState('')
  const [selectedSong, setSelectedSong] = useState(null)
  const [showSongDropdown, setShowSongDropdown] = useState(false)
  const [dietary, setDietary] = useState(DIETARY_OPTIONS[0])
  const [advice, setAdvice] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Filter songs from config
  const filteredSongs = config.danceFloorSongs.filter(
    (s) =>
      s.title.toLowerCase().includes(songQuery.toLowerCase()) ||
      s.artist.toLowerCase().includes(songQuery.toLowerCase())
  )

  const handleToggleEvent = (eventId) => {
    setSelectedEvents((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.')
      return
    }

    if (!phone.trim() || phone.trim().length < 6) {
      setErrorMessage('Please enter a valid phone number.')
      return
    }

    setIsLoading(true)

    const rsvpEntry = {
      id: Date.now(),
      fullName: fullName.trim(),
      phone: `${countryCode} ${phone.trim()}`,
      attendance,
      partySize: attendance === 'accepted' ? partySize : '0',
      selectedEvents: attendance === 'accepted' ? selectedEvents : [],
      song: selectedSong ? `${selectedSong.title} - ${selectedSong.artist}` : songQuery,
      dietary: attendance === 'accepted' ? dietary : 'N/A',
      advice: advice.trim(),
      timestamp: new Date().toISOString(),
    }

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]')
      existing.unshift(rsvpEntry)
      localStorage.setItem('wedding_rsvps', JSON.stringify(existing))
    } catch {
      // ignore localStorage errors
    }

    // Simulate short network request
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)

      // Trigger big confetti burst
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#8E2A2A', '#C9A24B', '#FBF6EE', '#FFD700', '#B8302E'],
        })
      } catch {
        // ignore
      }
    }, 800)
  }

  // Pre-fill WhatsApp message
  const handleSendWhatsApp = () => {
    const text = `*Wedding RSVP for ${config.coupleTitle}*%0A%0A*Name:* ${encodeURIComponent(
      fullName
    )}%0A*Attendance:* ${attendance === 'accepted' ? 'JOYFULLY ACCEPTED 🎉' : 'REGRETTABLY DECLINED'}%0A*Party Size:* ${
      attendance === 'accepted' ? encodeURIComponent(partySize) : 'None'
    }%0A*Phone:* ${encodeURIComponent(countryCode + ' ' + phone)}%0A*Dietary:* ${encodeURIComponent(
      dietary
    )}%0A*Dance Floor Song:* ${encodeURIComponent(
      selectedSong ? `${selectedSong.title} - ${selectedSong.artist}` : songQuery || 'Any groovy beat!'
    )}%0A*Blessing:* ${encodeURIComponent(advice || 'Wishing you both eternal joy!')}`

    window.open(`https://wa.me/${config.hostWhatsApp}?text=${text}`, '_blank')
  }

  return (
    <section className="w-full max-w-[390px] mx-auto px-4 py-8 text-center">
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 mb-2">
        <span className="h-[1px] w-6 bg-[#C9A24B]/60" />
        <span className="text-[11px] font-semibold tracking-[0.25em] text-[#8E2A2A] uppercase">
          JOIN THE CELEBRATION
        </span>
        <span className="h-[1px] w-6 bg-[#C9A24B]/60" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-gloock text-[#8E2A2A] tracking-tight mb-2">
        RSVP
      </h2>

      {/* Subtext */}
      <p className="text-xs sm:text-sm text-[#3A2A2A]/80 font-cormorant italic mb-6">
        Kindly let us know if you can make it — your presence will make this celebration whole
      </p>

      {/* Form Card */}
      <div className="rounded-[24px] bg-[#FFFDF9] border border-[#C9A24B]/35 shadow-[0_16px_36px_rgba(142,42,42,0.08)] p-6 sm:p-7 text-left space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name (Underline-style input) */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold tracking-[0.2em] text-[#8E2A2A] uppercase flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Rahul & Priya Sharma"
              className="w-full py-2.5 bg-transparent border-b-2 border-[#C9A24B]/50 focus:border-[#8E2A2A] outline-none text-sm font-sans text-[#3A2A2A] placeholder:text-[#3A2A2A]/40 transition-colors"
            />
          </div>

          {/* Phone with Country Flag Dropdown */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold tracking-[0.2em] text-[#8E2A2A] uppercase flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>Phone / WhatsApp *</span>
            </label>
            <div className="flex items-center gap-2 border-b-2 border-[#C9A24B]/50 focus-within:border-[#8E2A2A] transition-colors py-1">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="bg-transparent text-xs font-semibold text-[#8E2A2A] outline-none cursor-pointer py-1"
              >
                {COUNTRY_CODES.map((item) => (
                  <option key={item.code} value={item.code} className="text-black bg-white">
                    {item.flag} {item.code} ({item.country})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="98765 43210"
                className="flex-1 bg-transparent py-1 text-sm font-sans text-[#3A2A2A] placeholder:text-[#3A2A2A]/40 outline-none"
              />
            </div>
          </div>

          {/* "Will you join us?" Buttons */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-[0.2em] text-[#8E2A2A] uppercase block text-center">
              WILL YOU JOIN US?
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {/* Filled Red/Maroon Button */}
              <button
                type="button"
                onClick={() => setAttendance('accepted')}
                className={`py-3 px-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all shadow-sm ${
                  attendance === 'accepted'
                    ? 'bg-[#B8302E] text-white shadow-md shadow-red-900/20 border border-[#B8302E]'
                    : 'bg-[#FBF6EE] text-[#3A2A2A] border border-[#C9A24B]/40 hover:bg-amber-50'
                }`}
              >
                JOYFULLY ACCEPT 🎉
              </button>

              {/* Outlined Button */}
              <button
                type="button"
                onClick={() => setAttendance('declined')}
                className={`py-3 px-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                  attendance === 'declined'
                    ? 'bg-[#8E2A2A] text-white border border-[#8E2A2A]'
                    : 'bg-transparent text-[#8E2A2A] border border-[#8E2A2A] hover:bg-rose-50'
                }`}
              >
                REGRETTABLY DECLINE
              </button>
            </div>
          </div>

          {/* Conditional Fields: Only if Accepted */}
          {attendance === 'accepted' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-6 pt-2"
            >
              {/* Party Size Dropdown */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold tracking-[0.2em] text-[#8E2A2A] uppercase flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>Party Size</span>
                </label>
                <select
                  value={partySize}
                  onChange={(e) => setPartySize(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[#FBF6EE] border border-[#C9A24B]/40 text-xs font-medium text-[#3A2A2A] outline-none focus:border-[#8E2A2A] transition-colors"
                >
                  <option value="1 (just me)">1 (just me)</option>
                  <option value="2 guests">2 guests</option>
                  <option value="3 guests">3 guests</option>
                  <option value="4 guests">4 guests</option>
                  <option value="5+ family members">5+ family members</option>
                </select>
              </div>

              {/* "Events you'll attend" Checkbox List */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-[#8E2A2A] uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>Events You'll Attend</span>
                </label>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {config.events.map((evt) => {
                    const isChecked = selectedEvents.includes(evt.id)
                    return (
                      <div
                        key={evt.id}
                        onClick={() => handleToggleEvent(evt.id)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-amber-50/70 border-[#8E2A2A]/50 shadow-xs'
                            : 'bg-[#FFFDF9] border-[#C9A24B]/25 opacity-70'
                        }`}
                      >
                        <div className="pr-2">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <p className="text-xs font-semibold text-[#8E2A2A]">{evt.title}</p>
                            {evt.cityTag && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-[#8E2A2A] border border-amber-300">
                                📍 {evt.cityTag}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-[#3A2A2A]/70 font-sans mt-0.5">
                            {evt.dateTimeDisplay} · {evt.time}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-[#8E2A2A] border-[#8E2A2A] text-white'
                              : 'border-[#C9A24B]/60 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* "A song for the dance floor" with Autocomplete Search */}
              <div className="space-y-1.5 relative">
                <label className="text-[10px] font-bold tracking-[0.2em] text-[#8E2A2A] uppercase flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>A Song for the Dance Floor</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={songQuery}
                    onFocus={() => setShowSongDropdown(true)}
                    onChange={(e) => {
                      setSongQuery(e.target.value)
                      setSelectedSong(null)
                      setShowSongDropdown(true)
                    }}
                    placeholder="Search song, artist, or movie..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#FBF6EE] border border-[#C9A24B]/40 text-xs text-[#3A2A2A] placeholder:text-[#3A2A2A]/40 outline-none focus:border-[#8E2A2A]"
                  />
                  <Search className="w-4 h-4 text-[#C9A24B] absolute left-3 top-3 pointer-events-none" />
                </div>

                {/* Autocomplete Dropdown with Album Art / Emoji */}
                {showSongDropdown && songQuery && (
                  <div className="absolute z-20 left-0 right-0 mt-1 max-h-48 overflow-y-auto rounded-xl bg-[#FFFDF9] border border-[#C9A24B]/50 shadow-xl p-1 space-y-1">
                    {filteredSongs.length > 0 ? (
                      filteredSongs.map((s, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setSelectedSong(s)
                            setSongQuery(`${s.title} — ${s.artist}`)
                            setShowSongDropdown(false)
                          }}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 cursor-pointer text-left transition-colors"
                        >
                          <span className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-sm shrink-0">
                            {s.cover}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-[#8E2A2A] truncate">
                              {s.title}
                            </p>
                            <p className="text-[10px] text-[#3A2A2A]/70 truncate">
                              {s.artist} · {s.movie}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div
                        onClick={() => setShowSongDropdown(false)}
                        className="p-2 text-[11px] text-[#3A2A2A]/70 italic cursor-pointer"
                      >
                        Use custom track: "{songQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Dietary Preferences Dropdown */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold tracking-[0.2em] text-[#8E2A2A] uppercase flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>Dietary Preferences</span>
                </label>
                <select
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-[#FBF6EE] border border-[#C9A24B]/40 text-xs font-medium text-[#3A2A2A] outline-none focus:border-[#8E2A2A] transition-colors"
                >
                  {DIETARY_OPTIONS.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}

          {/* Marriage Advice Textarea */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-[0.2em] text-[#8E2A2A] uppercase flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>Marriage Advice for Us</span>
            </label>
            <textarea
              rows={3}
              value={advice}
              onChange={(e) => setAdvice(e.target.value)}
              placeholder="Share your wishes, golden tips, or favorite memories..."
              className="w-full p-3 rounded-xl bg-[#FBF6EE] border border-[#C9A24B]/40 text-xs text-[#3A2A2A] placeholder:text-[#3A2A2A]/40 outline-none focus:border-[#8E2A2A] transition-colors resize-none"
            />
          </div>

          {/* Error Notice */}
          {errorMessage && (
            <p className="text-xs text-red-600 font-medium text-center">{errorMessage}</p>
          )}

          {/* Red Full-Width "SEND RSVP" Button with Loading State */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-6 rounded-full bg-[#B8302E] hover:bg-[#9E2422] text-white shadow-lg shadow-red-950/20 text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-75"
            style={{
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.25), 0 4px 14px rgba(184,48,46,0.3)',
            }}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>RECEIVING YOUR BLESSINGS...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>SEND RSVP</span>
              </div>
            )}
          </button>
        </form>

        {/* Discreet Admin Link */}
        <div className="pt-2 text-center border-t border-[#C9A24B]/20">
          <button
            type="button"
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-1 text-[10px] text-[#C9A24B] hover:text-[#8E2A2A] tracking-wider uppercase transition-colors"
          >
            <ShieldCheck className="w-3 h-3" />
            <span>Admin / Guest List Overview</span>
          </button>
        </div>
      </div>

      {/* FULL SCREEN THANK-YOU MODAL (Section 9) */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-[360px] rounded-[24px] bg-[#FFFDF9] border border-[#C9A24B]/40 shadow-2xl p-6 sm:p-8 text-center space-y-4"
            >
              {/* Maroon Circle with Animated White Checkmark */}
              <div className="flex justify-center my-2">
                <div className="w-20 h-20 rounded-full bg-[#8E2A2A] shadow-xl shadow-maroon-900/30 flex items-center justify-center relative">
                  <motion.svg
                    className="w-10 h-10 text-white"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M14 27 L23 36 L38 18"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
                    />
                  </motion.svg>
                </div>
              </div>

              {/* Thank You Heading */}
              <div className="space-y-1">
                <h3 className="font-gloock text-3xl text-[#8E2A2A] tracking-tight">
                  Thank You!
                </h3>
                <p className="text-xs font-semibold tracking-widest text-[#C9A24B] uppercase">
                  {config.coupleTitle}
                </p>
              </div>

              {/* Message */}
              <p className="text-xs sm:text-sm font-cormorant italic text-[#3A2A2A] leading-relaxed">
                "Your RSVP has been beautifully received. We can't wait to celebrate with you!"
              </p>

              {/* WhatsApp prefilled backup button */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notify Hosts on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-2 px-4 rounded-full bg-[#FBF6EE] text-[#8E2A2A] border border-[#C9A24B]/30 hover:bg-amber-50 text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Close &amp; View Invitation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
