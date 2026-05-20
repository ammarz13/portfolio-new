import { useInView, revealStyle } from '../hooks/useInView.js'

export default function SectionTitle({ children, sub, inverted = false }) {
  const [ref, visible] = useInView(0.3)

  const headingStyle = inverted
    ? {
        background: 'linear-gradient(135deg,#f0f4ff 10%,#bfdbfe 60%,#818cf8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: 'clamp(2.2rem,5vw,3.5rem)',
      }
    : { fontSize: 'clamp(2.2rem,5vw,3.5rem)' }

  return (
    <div ref={ref} className="mb-16">
      {sub && (
        <p
          className="section-sub text-[11px] font-bold tracking-[0.22em] uppercase mb-3"
          style={{ ...revealStyle(visible, 0, 'blur'), color: inverted ? '#bfdbfe' : 'var(--accent-text)' }}
        >
          ✦ {sub}
        </p>
      )}

      <div style={{ overflow: 'hidden' }}>
        <h2
          className={`font-extrabold tracking-tight leading-tight${inverted ? '' : ' grad-text'}`}
          style={{ ...headingStyle, ...revealStyle(visible, 100, 'clip') }}
        >
          {children}
        </h2>
      </div>

      <div
        className="mt-4 h-[3px] rounded-full"
        style={{
          width: visible ? '44px' : '0px',
          background: 'linear-gradient(90deg,#60a5fa,#818cf8,#c084fc)',
          transition: 'width 0.8s cubic-bezier(0.22,1,0.36,1) 340ms',
        }}
      />
    </div>
  )
}
