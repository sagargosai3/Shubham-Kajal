import { useEffect, useRef } from 'react'

/**
 * PetalsCanvas — Global petal-fall effect
 * 25-30 soft pink (#E8B4B0) and gold (#C9A24B) oval petals slowly falling from the top.
 * Uses requestAnimationFrame with random size, rotation, sway, and speed.
 * Automatically pauses when the document is hidden.
 */
export default function PetalsCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let isVisible = !document.hidden

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Colors: soft pink and warm gold
    const petalColors = [
      { r: 232, g: 180, b: 176 }, // #E8B4B0 blush petal
      { r: 242, g: 198, b: 194 }, // soft blush light
      { r: 201, g: 162, b: 75 },  // #C9A24B gold
      { r: 226, g: 199, b: 132 }, // pale gold
      { r: 218, g: 148, b: 148 }, // rose petal
    ]

    const NUM_PETALS = 28
    const petals = Array.from({ length: NUM_PETALS }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight - window.innerHeight,
      size: 7 + Math.random() * 8, // length of major axis
      ratio: 0.4 + Math.random() * 0.25, // aspect ratio for oval
      speedY: 0.7 + Math.random() * 1.1,
      swayAmp: 1.2 + Math.random() * 2,
      swayFreq: 0.015 + Math.random() * 0.02,
      swayOffset: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      opacity: 0.45 + Math.random() * 0.4,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
    }))

    let time = 0

    const render = () => {
      if (!isVisible) return

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      time += 1

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i]

        // Update positions
        p.y += p.speedY
        p.x += Math.sin(time * p.swayFreq + p.swayOffset) * p.swayAmp
        p.rotation += p.rotSpeed

        // Wrap around when leaving screen
        if (p.y > window.innerHeight + 20) {
          p.y = -20 - Math.random() * 30
          p.x = Math.random() * window.innerWidth
        }
        if (p.x < -30) p.x = window.innerWidth + 20
        if (p.x > window.innerWidth + 30) p.x = -20

        // Draw oval petal
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.beginPath()
        ctx.ellipse(0, 0, p.size, p.size * p.ratio, 0, 0, Math.PI * 2)

        const { r, g, b } = p.color
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.25)`
        ctx.shadowBlur = 4
        ctx.fill()
        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    const handleVisibilityChange = () => {
      isVisible = !document.hidden
      if (isVisible) {
        animationFrameId = requestAnimationFrame(render)
      } else {
        cancelAnimationFrame(animationFrameId)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', setCanvasSize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[12]"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}
