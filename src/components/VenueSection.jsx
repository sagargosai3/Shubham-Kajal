import { motion } from 'framer-motion'
import { MapPin, Navigation, Plane, Hotel, MessageCircle, Train } from 'lucide-react'

export default function VenueSection({ config }) {
  const mapsUrl = 'https://maps.google.com/?q=Vishwakarma+Baug+Jasodanagar+Ahmedabad'

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
          <MapPin size={13} />
          <span>Shubh Lagna Sthal (Venue)</span>
        </div>

        <h2 className="font-royal text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-white to-amber-200 font-bold">
          {config.venueName}
        </h2>

        <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto italic font-serif">
          Gor No Kuvo, Next to Gayatri Mandir, Jasodanagar, Ahmedabad, Gujarat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Venue Information Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-[#38050e] via-[#4d0817] to-[#250208] border border-gold/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold text-xl">
                🏛️
              </div>
              <div>
                <h3 className="font-royal text-xl font-bold text-white">
                  {config.venueName}
                </h3>
                <p className="text-xs text-gold/80">Jasodanagar, Ahmedabad, Gujarat</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-serif">
              {config.venueFull}
            </p>

            <div className="space-y-3 pt-2">
              {/* Hotel / Stay */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-white/10 text-xs text-white/80">
                <Hotel size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gold block">Guest Accommodation:</strong>
                  {config.accommodation}
                </div>
              </div>

              {/* Transit / Airport & Trains */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-white/10 text-xs text-white/80">
                <Train size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-gold block">Transit & Travel:</strong>
                  Easily reached via Ahmedabad Junction Railway Station (Kalupur) and Sardar Vallabhbhai Patel International Airport.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-black font-bold text-xs sm:text-sm hover:brightness-110 transition-all shadow-lg"
            >
              <Navigation size={15} />
              <span>Open in Google Maps</span>
            </a>

            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(
                'Hello! I need assistance regarding directions to Vishwakarma Baug, Jasodanagar for Shubham & Kajal wedding!'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600/30 border border-emerald-500/50 text-emerald-200 font-semibold text-xs sm:text-sm hover:bg-emerald-600/40 transition-all"
            >
              <MessageCircle size={15} />
              <span>Contact Family Helpdesk</span>
            </a>
          </div>
        </motion.div>

        {/* Venue Picture & Route Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-gold/30 bg-[#25040a] relative flex flex-col shadow-xl min-h-[320px]"
        >
          {/* Ambience image */}
          <div className="relative flex-1 min-h-[220px]">
            <img
              src={config.landingCoverUrl}
              alt="Vishwakarma Baug Ahmedabad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25040a] via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold px-2 py-0.5 rounded-full bg-black/60 border border-gold/40">
                Ahmedabad Wedding Destination
              </span>
              <h4 className="text-lg font-serif font-bold mt-1">
                Vishwakarma Baug
              </h4>
              <p className="text-xs text-white/75">
                Next to Gayatri Mandir, Gor No Kuvo, Jasodanagar, Ahmedabad.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#2b040c] border-t border-gold/20 flex items-center justify-between">
            <span className="text-xs text-white/70">Ahmedabad, Gujarat</span>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-gold hover:underline flex items-center gap-1"
            >
              <span>View Route</span>
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
