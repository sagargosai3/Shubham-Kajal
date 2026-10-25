import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, Users, CheckCircle2, XCircle, Download, Trash2, Music } from 'lucide-react'

/**
 * AdminModal — View all RSVPs, guest count, and exported responses
 */
export default function AdminModal({ isOpen, onClose }) {
  const [rsvps, setRsvps] = useState([])

  const loadData = () => {
    try {
      const data = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]')
      setRsvps(data)
    } catch {
      setRsvps([])
    }
  }

  useEffect(() => {
    if (isOpen) {
      loadData()
    }
  }, [isOpen])

  if (!isOpen) return null

  const acceptedList = rsvps.filter((r) => r.attendance === 'accepted')
  const declinedList = rsvps.filter((r) => r.attendance === 'declined')

  // Calculate estimated total attendees
  const totalGuestsCount = acceptedList.reduce((sum, r) => {
    const num = parseInt(r.partySize) || 1
    return sum + num
  }, 0)

  const handleExportCSV = () => {
    if (rsvps.length === 0) return
    const headers = ['Full Name', 'Phone', 'Attendance', 'Party Size', 'Dietary', 'Song', 'Advice', 'Date']
    const rows = rsvps.map((r) => [
      `"${r.fullName || ''}"`,
      `"${r.phone || ''}"`,
      `"${r.attendance || ''}"`,
      `"${r.partySize || ''}"`,
      `"${r.dietary || ''}"`,
      `"${r.song || ''}"`,
      `"${(r.advice || '').replace(/"/g, '""')}"`,
      `"${r.timestamp || ''}"`,
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `Wedding_RSVP_Export_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all stored RSVPs on this browser?')) {
      localStorage.removeItem('wedding_rsvps')
      setRsvps([])
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-[24px] bg-[#FFFDF9] border border-[#C9A24B]/40 shadow-2xl overflow-hidden text-left"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#C9A24B]/20 flex items-center justify-between bg-[#FBF6EE]">
          <div>
            <h3 className="font-gloock text-xl text-[#8E2A2A]">RSVP Guestbook Admin</h3>
            <p className="text-xs text-[#3A2A2A]/70 font-sans">
              Real-time guest responses saved in your browser
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#C9A24B]/30 flex items-center justify-center text-[#8E2A2A] hover:bg-rose-50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Summary Cards */}
        <div className="grid grid-cols-3 gap-3 p-4 bg-amber-50/50 border-b border-[#C9A24B]/20 text-center">
          <div className="p-3 rounded-xl bg-white border border-[#C9A24B]/30">
            <span className="text-[10px] font-bold text-[#C9A24B] uppercase tracking-wider block">
              Estimated Guests
            </span>
            <span className="font-gloock text-2xl text-[#8E2A2A]">{totalGuestsCount}</span>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#C9A24B]/30">
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
              Accepted
            </span>
            <span className="font-gloock text-2xl text-emerald-700">{acceptedList.length}</span>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#C9A24B]/30">
            <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block">
              Declined
            </span>
            <span className="font-gloock text-2xl text-rose-700">{declinedList.length}</span>
          </div>
        </div>

        {/* Responses Table / List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {rsvps.length === 0 ? (
            <div className="py-12 text-center text-[#3A2A2A]/60 font-cormorant italic text-sm">
              No RSVPs recorded yet. Fill out the form to test!
            </div>
          ) : (
            rsvps.map((r) => (
              <div
                key={r.id}
                className="p-3.5 rounded-xl border border-[#C9A24B]/25 bg-white space-y-2 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-[#8E2A2A]">{r.fullName}</span>
                    <span className="text-xs text-[#3A2A2A]/70 font-sans">({r.phone})</span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      r.attendance === 'accepted'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {r.attendance === 'accepted' ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Accepted · {r.partySize}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3 h-3" />
                        <span>Declined</span>
                      </>
                    )}
                  </span>
                </div>

                {r.attendance === 'accepted' && (
                  <div className="text-xs text-[#3A2A2A]/80 grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#C9A24B] block">
                        Dietary:
                      </span>
                      <span>{r.dietary}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#C9A24B] block">
                        Dance Track:
                      </span>
                      <span className="truncate block">{r.song || 'None specified'}</span>
                    </div>
                  </div>
                )}

                {r.advice && (
                  <p className="text-xs font-cormorant italic text-[#8E2A2A] bg-amber-50/60 p-2 rounded-lg">
                    "{r.advice}"
                  </p>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#C9A24B]/20 bg-[#FBF6EE] flex items-center justify-between">
          <button
            type="button"
            onClick={handleExportCSV}
            disabled={rsvps.length === 0}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8E2A2A] hover:bg-[#721C1C] text-white text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CSV</span>
          </button>

          <button
            type="button"
            onClick={handleClearData}
            disabled={rsvps.length === 0}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-rose-700 hover:bg-rose-100 text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-50"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Entries</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
