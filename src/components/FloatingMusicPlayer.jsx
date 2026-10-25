import { motion } from 'framer-motion'
import { Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Mail, Heart } from 'lucide-react'

export default function FloatingMusicPlayer({
  audio,
  track,
  onFoldPostcard,
  activeSection,
  onNavigate,
}) {
  const navItems = [
    { id: 'invite', label: 'Invitation', icon: '💌' },
    { id: 'ceremonies', label: 'Ceremonies', icon: '📅' },
    { id: 'photos', label: 'Photos', icon: '📸' },
    { id: 'rsvp', label: 'RSVP', icon: '💬' },
    { id: 'venue', label: 'Venue', icon: '📍' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-black/90 via-black/80 to-transparent backdrop-blur-md px-3 sm:px-6 py-3 border-b border-gold/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Couple Branding & Fold Postcard button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onFoldPostcard}
            title="Fold Postcard & Close Envelope"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-maroon-900/80 border border-gold/40 text-gold text-xs font-semibold hover:bg-maroon-800 transition-all shadow-md active:scale-95"
          >
            <Mail size={13} />
            <span className="hidden sm:inline">Fold Postcard</span>
          </button>

          <div className="hidden md:flex items-center gap-1.5 text-xs text-white/80 font-serif">
            <span className="font-script text-base text-gold font-bold">Shubham & Kajal</span>
          </div>
        </div>

        {/* Center: Navigation Pills */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all shrink-0 flex items-center gap-1 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-gold to-amber-500 text-black shadow-md shadow-gold/25 font-bold'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span>{item.icon}</span>
              <span className="hidden xs:inline">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Right: Floating Music Player */}
        <div className="flex items-center gap-2 bg-black/60 border border-gold/30 rounded-full px-3 py-1 backdrop-blur-md shrink-0">
          {/* Animated Equalizer Bars */}
          <div className="flex items-end gap-0.5 h-3.5 w-3.5">
            <span className={`w-1 rounded-full bg-gold ${audio.isPlaying ? 'animate-eq1' : 'h-1'}`} />
            <span className={`w-1 rounded-full bg-gold ${audio.isPlaying ? 'animate-eq2' : 'h-2'}`} />
            <span className={`w-1 rounded-full bg-gold ${audio.isPlaying ? 'animate-eq3' : 'h-1'}`} />
          </div>

          {/* Track name & Play/Pause */}
          <div className="hidden lg:block text-[11px] font-medium text-white/80 truncate max-w-[120px]">
            {track?.title || 'Wedding Shehnai'}
          </div>

          {/* Prev */}
          <button
            onClick={audio.prev}
            className="text-white/70 hover:text-white p-1"
            aria-label="Previous track"
          >
            <SkipBack size={12} />
          </button>

          {/* Play/Pause */}
          <button
            onClick={audio.togglePlay}
            className="w-6 h-6 rounded-full bg-gold text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
            aria-label={audio.isPlaying ? 'Pause music' : 'Play music'}
          >
            {audio.isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
          </button>

          {/* Next */}
          <button
            onClick={audio.next}
            className="text-white/70 hover:text-white p-1"
            aria-label="Next track"
          >
            <SkipForward size={12} />
          </button>
        </div>
      </div>
    </header>
  )
}
