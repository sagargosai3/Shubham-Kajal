import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Heart, X, ChevronLeft, ChevronRight, Sparkles, Maximize2 } from 'lucide-react'

export default function PhotoGallery({ photos, coupleTitle }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filterOptions = [
    { id: 'all', label: 'All Memories' },
    { id: 'couple', label: 'Royal Couple' },
    { id: 'ceremonies', label: 'Ceremonies' },
  ]

  const filteredPhotos = photos.filter((photo) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'couple') return photo.tag.includes('Couple') || photo.tag.includes('Vows')
    if (activeFilter === 'ceremonies') return !photo.tag.includes('Couple')
    return true
  })

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhotoIndex(null)
  }

  const prevPhoto = (e) => {
    e.stopPropagation()
    if (selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1)
    } else {
      setSelectedPhotoIndex(filteredPhotos.length - 1)
    }
  }

  const nextPhoto = (e) => {
    e.stopPropagation()
    if (selectedPhotoIndex < filteredPhotos.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1)
    } else {
      setSelectedPhotoIndex(0)
    }
  }

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
          <Camera size={13} />
          <span>Cherished Moments</span>
        </div>

        <h2 className="font-royal text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-white to-amber-200 font-bold">
          Shubham & Kajal’s Gallery
        </h2>

        <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto italic font-serif">
          Glimpses of love, laughter, and timeless traditions leading up to our forever.
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 pt-3">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-gold text-black font-bold shadow-md shadow-gold/30'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={photo.id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            onClick={() => openLightbox(index)}
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#3a0610] to-[#200207] border border-gold/30 p-2.5 shadow-xl shadow-black/60 cursor-pointer"
          >
            {/* Polaroid / Royal Frame Image Container */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black/40">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Tag Pill */}
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 border border-gold/40 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur-sm">
                {photo.tag}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Maximize2 size={14} />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 text-left transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white drop-shadow">
                  {photo.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 mt-0.5">
                  {photo.caption}
                </p>
              </div>
            </div>

            {/* Subtle Gold Corner accents */}
            <div className="flex justify-between items-center px-1 pt-2 text-[10px] text-gold/70 font-serif">
              <span>Shubham & Kajal</span>
              <Heart size={10} className="fill-gold/40 text-gold/70" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Close photo view"
            >
              <X size={22} />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 transition-all"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 transition-all"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Photo Card inside modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[85vh] flex flex-col rounded-2xl overflow-hidden bg-[#24040a] border border-gold/50 shadow-2xl"
            >
              <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center min-h-[350px] max-h-[65vh]">
                <img
                  src={filteredPhotos[selectedPhotoIndex].url}
                  alt={filteredPhotos[selectedPhotoIndex].title}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Caption Bar */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-[#3a0610] via-[#4f0817] to-[#3a0610] border-t border-gold/30 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold px-2 py-0.5 rounded-full bg-black/40 border border-gold/30">
                      {filteredPhotos[selectedPhotoIndex].tag}
                    </span>
                    <span className="text-xs text-white/60">
                      {selectedPhotoIndex + 1} of {filteredPhotos.length}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
                    {filteredPhotos[selectedPhotoIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                    {filteredPhotos[selectedPhotoIndex].caption}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-gold/80 font-script text-xl">
                  <span>Shubham & Kajal</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
