import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface PhotoSlideshowProps {
  photos: string[]
  alt: string
  intervalMs?: number
  className?: string
}

// Auto-looping, no-controls photo slideshow — same "just runs on its own" feel as the
// Trusted By logo ticker (StatsStrip.tsx), just a crossfade instead of a marquee since
// these are full photos rather than a scrolling logo row.
export default function PhotoSlideshow({
  photos,
  alt,
  intervalMs = 3500,
  className = '',
}: PhotoSlideshowProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % photos.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [photos.length, intervalMs])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        <motion.img
          key={photos[index]}
          src={photos[index]}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
    </div>
  )
}
