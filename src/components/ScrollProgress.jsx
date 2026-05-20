import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const update = () => {
      const { scrollY } = window
      const { scrollHeight, clientHeight } = document.documentElement
      const pct = (scrollY / (scrollHeight - clientHeight)) * 100
      if (barRef.current) barRef.current.style.width = `${pct}%`
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      ref={barRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: '0%',
        background: 'linear-gradient(90deg,#60a5fa,#818cf8,#c084fc)',
        boxShadow: '0 0 10px rgba(129,140,248,0.7)',
        zIndex: 99999,
        pointerEvents: 'none',
        borderRadius: '0 2px 2px 0',
      }}
    />
  )
}
