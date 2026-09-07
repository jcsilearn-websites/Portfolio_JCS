import { useEffect, useRef, useState } from 'react'

const HIDE_THRESHOLD = 80 // px scrolled down before the header is allowed to hide
const MIN_DELTA = 8 // ignore sub-pixel/trackpad jitter so direction doesn't flicker

export function useHideOnScroll() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastY.current = window.scrollY

    const update = () => {
      const y = window.scrollY
      const diff = y - lastY.current

      if (y <= HIDE_THRESHOLD) {
        setHidden(false)
      } else if (diff > MIN_DELTA) {
        setHidden(true)
      } else if (diff < -MIN_DELTA) {
        setHidden(false)
      }

      lastY.current = y
      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}
