import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

/**
 * EnvelopeIntro — Full-screen envelope-opening intro animation
 * Deep red (#7A1E1E to #A32B2B) paper envelope with embossed floral vine pattern.
 * Center flap warm orange-gold glow and floating sparkles.
 * On tap:
 * 1. 3D flap opens (rotateX 0.8s ease-out)
 * 2. Swirling golden-red vortex with sparkle particles spins out
 * 3. Warm white flash and smooth cross-fade to invitation page
 * 4. Audio starts on the user's tap
 */
export default function EnvelopeIntro({ onOpen, coupleTitle = 'Shubham & Kajal' }) {
  const [isOpening, setIsOpening] = useState(false)
  const [showFlash, setShowFlash] = useState(false)
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  const handleTap = () => {
    if (isOpening) return
    setIsOpening(true)

    // Trigger audio immediately on user gesture
    if (onOpen) {
      onOpen()
    }

    // White flash transition at 1.8s
    setTimeout(() => {
      setShowFlash(true)
    }, 1800)
  }

  // Swirling golden-red particle vortex animation
  useEffect(() => {
    if (!isOpening) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    ctx.scale(dpr, dpr)

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // Generate 160 vortex particles
    const PARTICLE_COUNT = 160
    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const angle = (i / PARTICLE_COUNT) * Math.PI * 4 + Math.random() * 0.5
      const radius = 10 + Math.random() * 20
      const speed = 0.04 + Math.random() * 0.04
      const radialSpeed = 2.5 + Math.random() * 4.5
      const size = 1.5 + Math.random() * 3.5
      const hue = Math.random() > 0.3 ? 42 : 12 // 42 = Gold, 12 = Warm Orange/Red
      return {
        angle,
        radius,
        speed,
        radialSpeed,
        size,
        hue,
        alpha: 0.2 + Math.random() * 0.8,
      }
    })

    let startTime = performance.now()

    const animateVortex = (now) => {
      const elapsed = (now - startTime) / 1000
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Draw swirling central energy ribbon
      const ribbonRadius = Math.min(elapsed * 220, window.innerWidth * 0.8)
      const grad = ctx.createRadialGradient(
        centerX,
        centerY,
        5,
        centerX,
        centerY,
        Math.max(ribbonRadius, 20)
      )
      grad.addColorStop(0, 'rgba(255, 235, 170, 0.95)')
      grad.addColorStop(0.3, 'rgba(245, 166, 35, 0.8)')
      grad.addColorStop(0.7, 'rgba(216, 45, 45, 0.5)')
      grad.addColorStop(1, 'rgba(122, 30, 30, 0)')

      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(centerX, centerY, ribbonRadius, 0, Math.PI * 2)
      ctx.fill()

      // Swirling particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.angle += p.speed * (1 + elapsed * 1.5)
        p.radius += p.radialSpeed * (1 + elapsed * 2)

        const x = centerX + Math.cos(p.angle) * p.radius
        const y = centerY + Math.sin(p.angle) * p.radius

        ctx.save()
        ctx.beginPath()
        ctx.arc(x, y, p.size * (1 + elapsed * 0.5), 0, Math.PI * 2)
        ctx.fillStyle =
          p.hue === 42
            ? `hsla(42, 95%, 65%, ${Math.min(p.alpha, 1)})`
            : `hsla(15, 95%, 60%, ${Math.min(p.alpha, 1)})`
        ctx.shadowColor = p.hue === 42 ? '#FFD700' : '#FF6B4A'
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.restore()
      }

      if (elapsed < 2.5) {
        animRef.current = requestAnimationFrame(animateVortex)
      }
    }

    animRef.current = requestAnimationFrame(animateVortex)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [isOpening])

  return (
    <div
      onClick={handleTap}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleTap()
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#5c0e15] overflow-hidden select-none cursor-pointer"
      style={{ touchAction: 'manipulation' }}
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#9E2A2B_0%,_#7A1E1E_50%,_#45080E_100%)]" />

      {/* Subtle paper grain & texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FFF 1px, transparent 1px), radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
        }}
      />

      {/* Full-screen Envelope Card Container (Perspective for 3D Flap) */}
      <div
        className="relative w-full max-w-[390px] h-[580px] mx-4 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between"
        style={{
          perspective: 1200,
          background: 'linear-gradient(145deg, #8E2024 0%, #6E1519 100%)',
          boxShadow:
            '0 25px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -2px 4px rgba(0,0,0,0.4)',
        }}
      >
        {/* Embossed Vine/Floral Border Art (Dual-stroke fake embossing) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="envelopeFloral" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Highlight stroke */}
              <path
                d="M40 0 C45 20, 60 35, 80 40 C60 45, 45 60, 40 80 C35 60, 20 45, 0 40 C20 35, 35 20, 40 0 Z"
                fill="none"
                stroke="rgba(255, 220, 150, 0.28)"
                strokeWidth="1.2"
                transform="translate(0.5, 0.5)"
              />
              {/* Shadow stroke */}
              <path
                d="M40 0 C45 20, 60 35, 80 40 C60 45, 45 60, 40 80 C35 60, 20 45, 0 40 C20 35, 35 20, 40 0 Z"
                fill="none"
                stroke="rgba(40, 5, 8, 0.7)"
                strokeWidth="1.2"
                transform="translate(-0.5, -0.5)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#envelopeFloral)" />
          {/* Inner Golden Border */}
          <rect
            x="14"
            y="14"
            width="calc(100% - 28px)"
            height="calc(100% - 28px)"
            rx="12"
            fill="none"
            stroke="#C9A24B"
            strokeWidth="1"
            strokeDasharray="6 4"
            opacity="0.5"
          />
        </svg>

        {/* 3D Flap at Top */}
        <motion.div
          animate={
            isOpening
              ? {
                  rotateX: -160,
                  opacity: [1, 1, 0.2],
                  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
                }
              : { rotateX: 0 }
          }
          style={{
            transformOrigin: 'top center',
            transformStyle: 'preserve-3d',
          }}
          className="absolute top-0 inset-x-0 h-[280px] z-20"
        >
          {/* Flap Triangle Shape */}
          <svg
            className="w-full h-full drop-shadow-[0_12px_15px_rgba(0,0,0,0.45)]"
            viewBox="0 0 390 280"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9C2428" />
                <stop offset="70%" stopColor="#7F1B1F" />
                <stop offset="100%" stopColor="#5D1215" />
              </linearGradient>
            </defs>
            <path
              d="M 0 0 L 390 0 L 195 240 Z"
              fill="url(#flapGrad)"
              stroke="rgba(201, 162, 75, 0.4)"
              strokeWidth="1.5"
            />
          </svg>

          {/* Golden Embossed Flap Edge Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C9A24B]/50 to-transparent" />
        </motion.div>

        {/* Flap Center Seal with Pulsing Warm Orange-Gold Glow & Sparkles */}
        <div className="absolute top-[220px] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
          {/* Pulsing Warm Orange-Gold Glow */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.65, 0.95, 0.65],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#FF7A00] via-[#FFAE00] to-[#FF4500] blur-xl opacity-75 pointer-events-none"
          />

          {/* Floating sparkle dots */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-10, -35, -50],
                  x: [(i % 2 === 0 ? 1 : -1) * 10, (i % 2 === 0 ? -1 : 1) * 20],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.4],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeOut',
                }}
                className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-amber-200 shadow-[0_0_8px_#FFD700]"
              />
            ))}
          </div>

          {/* Embossed Royal Wax Seal / Medallion */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={
              isOpening
                ? {
                    scale: [1, 1.3, 0],
                    opacity: [1, 1, 0],
                    transition: { duration: 0.6 },
                  }
                : {}
            }
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#E2C784] via-[#C9A24B] to-[#8C6B1B] p-[2px] shadow-2xl flex items-center justify-center cursor-pointer border border-[#FFEDB3]"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#7A1E1E] to-[#480E13] flex flex-col items-center justify-center text-center shadow-inner">
              <span className="text-[#C9A24B] text-xs font-serif font-bold tracking-widest leading-none">
                ॥ श्री ॥
              </span>
              <span className="text-[10px] text-amber-200/90 font-serif tracking-tight mt-0.5">
                S & K
              </span>
            </div>
          </motion.div>
        </div>

        {/* Envelope Body / Content Preview */}
        <div className="relative z-10 pt-[305px] px-6 text-center space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-1"
          >
            <p className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#C9A24B] uppercase">
              Royal Wedding Invitation
            </p>
            <h1 className="text-3xl font-gloock text-amber-100 tracking-wide drop-shadow">
              {coupleTitle}
            </h1>
            <p className="text-xs text-amber-200/70 font-cormorant italic">
              A celebration of holy union & eternal love
            </p>
          </motion.div>
        </div>

        {/* Bottom "Tap to open" CTA with Pulsing Sparkle Icon */}
        <div className="relative z-10 pb-8 flex flex-col items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-[#C9A24B]/40 text-amber-100 shadow-lg text-xs font-semibold tracking-[0.2em] uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24B] animate-spin-slow" />
            <span>Tap to open</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24B] animate-spin-slow" />
          </motion.div>
        </div>
      </div>

      {/* Swirling Vortex Canvas (Triggers on Tap) */}
      {isOpening && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-50"
          style={{ mixBlendMode: 'screen' }}
        />
      )}

      {/* Warm White Flash & Cross-Fade Transition */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[#FBF6EE] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  )
}
