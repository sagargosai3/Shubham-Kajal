import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Sparkles, Heart } from 'lucide-react'

/**
 * Single Scratch Card Component
 */
function SingleScratchCard({ label, value, isRevealed, onRevealed }) {
  const canvasRef = useRef(null)
  const isScratching = useRef(false)
  const clearedRef = useRef(false)
  const [fadedOut, setFadedOut] = useState(false)

  // Initialize Canvas scratch layer
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const width = canvas.offsetWidth
    const height = canvas.offsetHeight

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Silver-maroon metallic gradient
    const grad = ctx.createLinearGradient(0, 0, width, height)
    grad.addColorStop(0, '#9E3232') // Maroon sheen
    grad.addColorStop(0.3, '#D1A36A') // Gold sparkle
    grad.addColorStop(0.5, '#B87B7B') // Silver-rose
    grad.addColorStop(0.8, '#8E2A2A') // Deep maroon
    grad.addColorStop(1, '#6E1D1D')

    ctx.fillStyle = grad
    ctx.fillRect(0, 0, width, height)

    // Subtle texture pattern on scratch surface
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)'
    for (let i = 0; i < width; i += 12) {
      for (let j = 0; j < height; j += 12) {
        if ((i + j) % 24 === 0) {
          ctx.beginPath()
          ctx.arc(i + 6, j + 6, 1.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // Scratch prompt text
    ctx.fillStyle = '#FFF2D6'
    ctx.font = '600 11px "Plus Jakarta Sans", sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('SCRATCH', width / 2, height / 2 - 4)

    ctx.fillStyle = 'rgba(255, 242, 214, 0.75)'
    ctx.font = '10px "Plus Jakarta Sans", sans-serif'
    ctx.fillText('✨', width / 2, height / 2 + 12)
  }, [])

  useEffect(() => {
    initCanvas()
  }, [initCanvas])

  // Check how much percentage is cleared
  const checkScratchPercentage = useCallback(() => {
    if (clearedRef.current) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = canvas.width
    const h = canvas.height

    const imgData = ctx.getImageData(0, 0, w, h)
    const pixels = imgData.data
    const totalPixels = pixels.length / 4

    let transparentCount = 0
    // Sample every 16th pixel for performance
    const step = 16
    for (let i = 3; i < pixels.length; i += 4 * step) {
      if (pixels[i] < 64) {
        transparentCount++
      }
    }

    const clearedFraction = transparentCount / (totalPixels / step)

    if (clearedFraction > 0.55 && !clearedRef.current) {
      clearedRef.current = true
      setFadedOut(true)
      setTimeout(() => {
        onRevealed()
      }, 250)
    }
  }, [onRevealed])

  // Scratch handler at coordinate (x, y)
  const scratch = (x, y) => {
    if (clearedRef.current) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 18, 0, Math.PI * 2)
    ctx.fill()
  }

  // Mouse handlers
  const handleMouseDown = (e) => {
    isScratching.current = true
    const rect = e.currentTarget.getBoundingClientRect()
    scratch(e.clientX - rect.left, e.clientY - rect.top)
  }

  const handleMouseMove = (e) => {
    if (!isScratching.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    scratch(e.clientX - rect.left, e.clientY - rect.top)
    checkScratchPercentage()
  }

  const handleMouseUp = () => {
    isScratching.current = false
    checkScratchPercentage()
  }

  // Touch handlers (prevent page scroll while scratching)
  const handleTouchStart = (e) => {
    isScratching.current = true
    const touch = e.touches[0]
    const rect = e.currentTarget.getBoundingClientRect()
    scratch(touch.clientX - rect.left, touch.clientY - rect.top)
  }

  const handleTouchMove = (e) => {
    if (!isScratching.current) return
    if (e.cancelable) e.preventDefault() // prevent scroll
    const touch = e.touches[0]
    const rect = e.currentTarget.getBoundingClientRect()
    scratch(touch.clientX - rect.left, touch.clientY - rect.top)
    checkScratchPercentage()
  }

  const handleTouchEnd = () => {
    isScratching.current = false
    checkScratchPercentage()
  }

  return (
    <div className="flex flex-col items-center flex-1 min-w-0">
      {/* Label above */}
      <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#8E2A2A] mb-2">
        {label}
      </span>

      {/* Card container */}
      <div className="relative w-full aspect-[4/5] max-w-[110px] rounded-2xl bg-[#FFFDF9] border border-[#C9A24B]/40 shadow-md shadow-maroon-900/10 overflow-hidden flex items-center justify-center select-none">
        {/* Real Date Value Revealed Behind */}
        <div className="flex flex-col items-center justify-center p-2 text-center">
          <span className="font-gloock text-2xl sm:text-3xl font-bold text-[#8E2A2A] tracking-tight">
            {value}
          </span>
          <span className="text-[9px] text-[#C9A24B] uppercase tracking-widest mt-1 font-semibold">
            Confidential
          </span>
        </div>

        {/* Scratch Canvas Overlay */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'none' }}
            className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-300 ${
              fadedOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          />
        )}
      </div>
    </div>
  )
}

/**
 * ScratchDate Component
 * Props:
 * - month: "NOV"
 * - day: "22"
 * - year: "2026"
 * - subtext: "Scratch below to reveal our wedding date"
 * - revealQuote: "A lifetime of togetherness begins with one single step"
 */
export default function ScratchDate({
  month = 'NOV',
  day = '22',
  year = '2026',
  subtext = 'Scratch below to reveal our wedding date',
  revealQuote = 'A lifetime of togetherness begins with one single step',
}) {
  const [revealed, setRevealed] = useState({
    month: false,
    day: false,
    year: false,
  })

  const allRevealed = revealed.month && revealed.day && revealed.year
  const hasTriggeredRef = useRef(false)

  // Fire confetti and haptics when all three cards are revealed
  useEffect(() => {
    if (allRevealed && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true

      // Haptic feedback
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        try {
          navigator.vibrate([80, 50, 100])
        } catch {
          // ignore
        }
      }

      // Canvas Confetti in Gold (#C9A24B), Maroon (#8E2A2A), Cream (#FBF6EE)
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C9A24B', '#8E2A2A', '#FBF6EE', '#E8B4B0', '#FFD700'],
        })

        // Secondary delayed burst
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#C9A24B', '#8E2A2A', '#FFFDF9'],
          })
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#C9A24B', '#8E2A2A', '#FFFDF9'],
          })
        }, 250)
      } catch {
        // ignore
      }
    }
  }, [allRevealed])

  const handleRevealAll = () => {
    setRevealed({ month: true, day: true, year: true })
  }

  return (
    <div className="w-full max-w-[390px] mx-auto px-4 py-8 text-center">
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 mb-2">
        <span className="h-[1px] w-6 bg-[#C9A24B]/60" />
        <span className="text-[11px] font-semibold tracking-[0.25em] text-[#8E2A2A] uppercase">
          THE DATE
        </span>
        <span className="h-[1px] w-6 bg-[#C9A24B]/60" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-gloock text-[#8E2A2A] tracking-tight mb-2">
        Save the Date
      </h2>

      {/* Subtext */}
      <p className="text-xs sm:text-sm text-[#3A2A2A]/80 font-cormorant italic mb-6">
        {subtext}
      </p>

      {/* 3 Scratch Cards in a row */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
        <SingleScratchCard
          label="MONTH"
          value={month}
          isRevealed={revealed.month}
          onRevealed={() => setRevealed((prev) => ({ ...prev, month: true }))}
        />
        <SingleScratchCard
          label="DAY"
          value={day}
          isRevealed={revealed.day}
          onRevealed={() => setRevealed((prev) => ({ ...prev, day: true }))}
        />
        <SingleScratchCard
          label="YEAR"
          value={year}
          isRevealed={revealed.year}
          onRevealed={() => setRevealed((prev) => ({ ...prev, year: true }))}
        />
      </div>

      {/* Reveal Status / Prompt */}
      {!allRevealed ? (
        <button
          type="button"
          onClick={handleRevealAll}
          className="text-[11px] text-[#C9A24B] hover:text-[#8E2A2A] underline underline-offset-4 tracking-wider uppercase transition-colors"
        >
          Tap here to reveal instantly
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 p-4 rounded-2xl bg-[#FFFDF9] border border-[#C9A24B]/30 shadow-sm"
          >
            <div className="flex items-center justify-center gap-1.5 text-[#C9A24B] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <Heart className="w-3.5 h-3.5 fill-current text-[#8E2A2A]" />
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <p className="text-sm font-cormorant italic text-[#8E2A2A] font-medium leading-relaxed">
              "{revealQuote}"
            </p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
