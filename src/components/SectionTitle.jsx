import { useInView, revealStyle } from '../hooks/useInView.js'

export default function SectionTitle({ children, sub, inverted = false }) {
  const [ref, visible] = useInView(0.3)

  const headingStyle = { fontSize: 'clamp(2.6rem,5.5vw,4rem)' }

  return (
    <div ref={ref} className="mb-16">
      {sub && (
        <p
          className="section-sub text-[13px] font-bold tracking-[0.22em] uppercase mb-3"
          style={{ ...revealStyle(visible, 0, 'blur'), color: 'var(--accent-text)' }}
        >
          ✦ {sub}
        </p>
      )}

      <div style={{ overflow: 'hidden' }}>
        <h2
          className="font-extrabold tracking-tight leading-tight grad-text"
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
