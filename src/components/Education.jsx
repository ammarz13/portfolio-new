import { useInView, revealStyle } from '../hooks/useInView.js'
import { education } from '../data/portfolio.js'
import SectionTitle from './SectionTitle.jsx'

const palette = [
  { color: '#818cf8', bg: 'rgba(129,140,248,0.09)', border: 'rgba(129,140,248,0.25)' },
  { color: '#60a5fa', bg: 'rgba(96,165,250,0.09)',  border: 'rgba(96,165,250,0.25)'  },
  { color: '#c084fc', bg: 'rgba(192,132,252,0.09)', border: 'rgba(192,132,252,0.25)' },
]

export default function Education() {
  const [gridRef, gridVisible] = useInView(0.1)

  return (
    <section id="education" className="noise-bg relative py-32 overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="section-glow-left absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Academic Background">Education</SectionTitle>

        <div ref={gridRef} className="grid sm:grid-cols-3 gap-6">
          {education.map(({ icon, degree, institution, label }, i) => {
            const { color, bg, border } = palette[i]
            const axis = i === 0 ? 'x' : i === 2 ? '-x' : 'blur'
            return (
              <div
                key={degree}
                className="glass-card p-8 flex flex-col"
                style={{ ...revealStyle(gridVisible, i * 150, axis), background: bg, borderColor: border }}
              >
                {/* Icon */}
                <div
                  className="edu-icon w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6"
                  style={{ background: `${color}18`, border: `1px solid ${color}35`, boxShadow: `0 8px 24px ${color}20` }}
                >
                  {icon}
                </div>

                {/* Badge */}
                <span
                  className="self-start px-3 py-1.5 rounded-lg text-[11px] font-bold mb-4"
                  style={{ background: `${color}22`, color, border: `1px solid ${color}40`, transition: 'all 0.22s ease', cursor: 'default' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = color
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.boxShadow = `0 4px 16px ${color}50`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${color}22`
                    e.currentTarget.style.color = color
                    e.currentTarget.style.boxShadow = ''
                  }}
                >
                  {label}
                </span>

                <h3 className="text-sm font-bold leading-snug mb-2 flex-1" style={{ color: 'var(--text-1)' }}>{degree}</h3>
                <p className="text-xs" style={{ color: 'var(--text-3)' }}>{institution}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
