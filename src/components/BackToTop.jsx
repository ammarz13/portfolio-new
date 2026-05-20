import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transform = !visible
    ? 'translateY(20px) scale(0.75)'
    : hovered
      ? 'translateY(-5px) scale(1.08)'
      : 'translateY(0) scale(1)'

  const shadow = hovered && visible
    ? '0 20px 56px rgba(129,140,248,0.7), 0 0 0 6px rgba(129,140,248,0.12)'
    : '0 8px 32px rgba(129,140,248,0.45)'

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc)',
        boxShadow: shadow,
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform,
        transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
