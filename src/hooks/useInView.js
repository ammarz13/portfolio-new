import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

// axis: 'y' | 'x' | '-x' | 'scale' | 'blur' | 'clip'
export function revealStyle(visible, delay = 0, axis = 'y') {
  if (axis === 'clip') {
    return {
      clipPath: visible ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
      transition: `clip-path 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }
  }

  const transforms = {
    y:     'translateY(32px)',
    x:     'translateX(-36px)',
    '-x':  'translateX(36px)',
    scale: 'scale(0.85) translateY(12px)',
    blur:  'translateY(16px)',
  }
  const hidden = transforms[axis] ?? transforms.y
  const isBlur = axis === 'blur'

  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : hidden,
    ...(isBlur ? { filter: visible ? 'blur(0px)' : 'blur(8px)' } : {}),
    transition: [
      `opacity 0.7s ease ${delay}ms`,
      `transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      ...(isBlur ? [`filter 0.7s ease ${delay}ms`] : []),
    ].join(', '),
  }
}
