import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Check, Heart, Users, Utensils, MessageSquare, Phone, Sparkles } from 'lucide-react'

export default function WhatsAppRsvp({ config, events }) {
  const [guestName, setGuestName] = useState('')
  const [attending, setAttending] = useState('yes')
  const [selectedEvents, setSelectedEvents] = useState(events.map((e) => e.title))
  const [guestCount, setGuestCount] = useState('2')
  const [mealPreference, setMealPreference] = useState('Pure Vegetarian 🌿')
  const [wishes, setWishes] = useState('')
  const [whatsappPhone, setWhatsappPhone] = useState(config.rsvp.whatsappNumber || '+919876543210')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showPhoneEdit, setShowPhoneEdit] = useState(false)

  const toggleEvent = (title) => {
    if (selectedEvents.includes(title)) {
      setSelectedEvents(selectedEvents.filter((t) => t !== title))
    } else {
      setSelectedEvents([...selectedEvents, title])
    }
  }

  const toggleSelectAll = () => {
    if (selectedEvents.length === events.length) {
      setSelectedEvents([])
    } else {
      setSelectedEvents(events.map((e) => e.title))
    }
  }

  const handleSendWhatsApp = (e) => {
    e.preventDefault()

    if (!guestName.trim()) {
      alert('Please enter your name.')
      return
    }

    if (attending === 'yes' && selectedEvents.length === 0) {
      alert('Please select at least one celebration you will attend.')
      return
    }

    // Build the formatted WhatsApp message
    const cleanPhone = whatsappPhone.replace(/[^0-9]/g, '')
    const attendanceText = attending === 'yes' ? 'Attending with Joy! 💍' : 'Regretfully Decline 💔'

    let eventsText = ''
    if (attending === 'yes') {
      eventsText = `\n🎉 *Ceremonies Attending:*\n${selectedEvents.map((e) => `   • ${e}`).join('\n')}\n\n👥 *Total Guests:* ${guestCount}\n🍽️ *Meal Preference:* ${mealPreference}`
    }

    const wishesText = wishes.trim() ? `\n\n✍️ *Blessings / Message:*\n"${wishes.trim()}"` : ''

    const message = `✨ *WEDDING RSVP FOR SHUBHAM & KAJAL* ✨\n━━━━━━━━━━━━━━━━━━━━\n👤 *Guest Name:* ${guestName.trim()}\n💌 *Status:* ${attendanceText}${eventsText}${wishesText}\n━━━━━━━━━━━━━━━━━━━━\nSent with love via Royal Wedding Invitation 💌`

    const encoded = encodeURIComponent(message)
    const waUrl = cleanPhone.length >= 10
      ? `https://wa.me/${cleanPhone}?text=${encoded}`
      : `https://wa.me/?text=${encoded}`

    // Open WhatsApp
    window.open(waUrl, '_blank')
    setIsSubmitted(true)
  }

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-widest">
          <MessageSquare size={13} />
          <span>WhatsApp RSVP</span>
        </div>

        <h2 className="font-royal text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-white to-amber-200 font-bold">
          Confirm Your Attendance
        </h2>

        <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto italic font-serif">
          Kindly RSVP by {config.rsvp.deadline} so we can make your royal stay and celebration comfortable.
        </p>
      </div>

      {/* Main RSVP Box */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#38050e] via-[#4d0817] to-[#2b0209] border border-gold/40 p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/70">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="submitted"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-xl shadow-emerald-900/50">
                <Check size={36} />
              </div>

              <h3 className="font-royal text-2xl sm:text-3xl font-bold text-white">
                {config.rsvp.confirmationTitle}
              </h3>

              <p className="text-sm text-white/80 max-w-md mx-auto font-serif">
                Thank you, <span className="text-gold font-bold">{guestName}</span>! Your RSVP has been forwarded to the host via WhatsApp.
                {attending === 'yes' ? ` ${config.rsvp.confirmationYes}` : ` ${config.rsvp.confirmationNo}`}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Edit or Submit Another RSVP
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              {/* Guest Name Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gold/90">
                  Guest Full Name(s) *
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Priya & Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gold/30 text-white text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-white/30"
                />
              </div>

              {/* Attendance Choice Buttons */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gold/90">
                  Will You Be Attending? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttending('yes')}
                    className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      attending === 'yes'
                        ? 'bg-emerald-600/30 border-emerald-500 text-white shadow-lg shadow-emerald-900/30 ring-1 ring-emerald-400'
                        : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/[0.05]'
                    }`}
                  >
                    <span className="text-2xl">💍</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold">Yes, Attending with Joy!</p>
                      <p className="text-[11px] text-white/60">Can't wait to celebrate together</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttending('no')}
                    className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      attending === 'no'
                        ? 'bg-rose-600/30 border-rose-500 text-white shadow-lg shadow-rose-900/30 ring-1 ring-rose-400'
                        : 'bg-black/30 border-white/10 text-white/70 hover:bg-white/[0.05]'
                    }`}
                  >
                    <span className="text-2xl">💔</span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold">Cannot Make It</p>
                      <p className="text-[11px] text-white/60">Sending our warm blessings</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* If Attending: Ceremonies Selection */}
              {attending === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 pt-2"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gold/90">
                        Which Ceremonies Will You Attend?
                      </label>
                      <button
                        type="button"
                        onClick={toggleSelectAll}
                        className="text-[11px] font-semibold text-gold hover:underline"
                      >
                        {selectedEvents.length === events.length ? 'Deselect All' : 'Select All'}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {events.map((evt) => {
                        const isChecked = selectedEvents.includes(evt.title)
                        return (
                          <div
                            key={evt.id}
                            onClick={() => toggleEvent(evt.title)}
                            className={`p-2.5 rounded-xl border flex items-center gap-2.5 cursor-pointer select-none transition-all ${
                              isChecked
                                ? 'bg-gold/15 border-gold/60 text-white'
                                : 'bg-black/30 border-white/10 text-white/60 hover:bg-white/[0.04]'
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                                isChecked
                                  ? 'bg-gold border-gold text-black font-bold'
                                  : 'border-white/30'
                              }`}
                            >
                              {isChecked && '✓'}
                            </div>
                            <span className="text-xs font-medium">{evt.title}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Guest Count & Meal Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Guest Count */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold/90">
                        <Users size={13} />
                        <span>Number of Guests</span>
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-gold/30 text-white text-xs sm:text-sm outline-none focus:border-gold"
                      >
                        <option value="1" className="bg-[#24040a]">1 Guest</option>
                        <option value="2" className="bg-[#24040a]">2 Guests (Couple)</option>
                        <option value="3" className="bg-[#24040a]">3 Guests</option>
                        <option value="4" className="bg-[#24040a]">4 Guests</option>
                        <option value="5+" className="bg-[#24040a]">5+ Guests (Family)</option>
                      </select>
                    </div>

                    {/* Meal Preference */}
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold/90">
                        <Utensils size={13} />
                        <span>Food / Diet Preference</span>
                      </label>
                      <select
                        value={mealPreference}
                        onChange={(e) => setMealPreference(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-gold/30 text-white text-xs sm:text-sm outline-none focus:border-gold"
                      >
                        {config.rsvp.mealOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#24040a]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Wishes or Song Request */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-gold/90">
                  Wishes & Song Requests for Shubham & Kajal
                </label>
                <textarea
                  rows={2}
                  value={wishes}
                  onChange={(e) => setWishes(e.target.value)}
                  placeholder="Share a heartfelt blessing or a dance track you want on the Sangeet floor..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-gold/30 text-white text-xs sm:text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-white/30 resize-none"
                />
              </div>

              {/* Host Phone Number Details & Toggle */}
              <div className="pt-1">
                <div className="flex items-center justify-between text-[11px] text-white/60">
                  <span className="flex items-center gap-1">
                    <Phone size={11} className="text-emerald-400" />
                    <span>WhatsApp RSVP Recipient:</span>
                    <strong className="text-white ml-1">{whatsappPhone}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPhoneEdit(!showPhoneEdit)}
                    className="text-gold hover:underline text-[10px]"
                  >
                    {showPhoneEdit ? 'Done' : 'Change Number'}
                  </button>
                </div>

                {showPhoneEdit && (
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      value={whatsappPhone}
                      onChange={(e) => setWhatsappPhone(e.target.value)}
                      placeholder="+91..."
                      className="px-3 py-1.5 text-xs rounded-lg bg-black/50 border border-white/20 text-white w-48"
                    />
                    <span className="text-[10px] text-white/50 my-auto">
                      (Enter phone number with country code e.g. +91...)
                    </span>
                  </div>
                )}
              </div>

              {/* Submit Button to trigger WhatsApp */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-700 hover:from-emerald-400 hover:to-teal-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-2.5 transform active:scale-[0.98] transition-all"
              >
                <Send size={18} />
                <span>Confirm RSVP via WhatsApp</span>
                <Sparkles size={16} className="text-emerald-200" />
              </button>

              <p className="text-[11px] text-center text-white/50">
                Tapping the button automatically formats your invitation reply and launches WhatsApp.
              </p>
            </form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
