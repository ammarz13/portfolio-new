import { useInView, revealStyle } from '../hooks/useInView.js'
import { education } from '../data/portfolio.js'
import SectionTitle from './SectionTitle.jsx'

const palette = [
  { color: '#818cf8', g1: '#818cf8', g2: '#60a5fa' },
  { color: '#60a5fa', g1: '#60a5fa', g2: '#c084fc' },
  { color: '#c084fc', g1: '#c084fc', g2: '#818cf8' },
]

const DETAILS = [
  { year: '2016 – 2020', type: 'University' },
  { year: '2013 – 2015', type: 'College'    },
  { year: '2011 – 2013', type: 'School'     },
]

export default function Education() {
  const [gridRef, gridVisible] = useInView(0.1)

  return (
    <section id="education" className="noise-bg relative py-32 overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="section-glow-left absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none" />
      <div className="section-glow-right absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Academic Background">Education</SectionTitle>

        <div ref={gridRef} className="grid sm:grid-cols-3 gap-6">
          {education.map(({ icon, degree, institution, label }, i) => {
            const { color, g1, g2 } = palette[i]
            const { year, type } = DETAILS[i]
            const axis = i === 0 ? 'x' : i === 2 ? '-x' : 'blur'

            return (
              <div
                key={degree}
                className="glass-card group flex flex-col overflow-hidden cursor-default"
                style={{ ...revealStyle(gridVisible, i * 140, axis), borderColor: `${color}22` }}
              >
                {/* ── Gradient header area ── */}
                <div
                  className="relative flex flex-col items-center justify-center pt-10 pb-8 px-6 overflow-hidden"
                  style={{ background: `linear-gradient(140deg,${g1}1e,${g2}12)` }}
                >
                  {/* Corner glow */}
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle,${g1}18,transparent 65%)`, filter: 'blur(24px)' }} />

                  {/* Decorative ring */}
                  <div className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg,transparent,${color}30,transparent)` }} />

                  {/* Icon circle */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg,${g1}28,${g2}1c)`,
                      border: `1px solid ${color}35`,
                      boxShadow: `0 8px 32px ${color}25`,
                    }}
                  >
                    {icon}
                  </div>

                  {/* Label badge */}
                  <div
                    className="relative z-10 px-3.5 py-1.5 rounded-lg text-[13px] font-extrabold tracking-wider"
                    style={{
                      background: `linear-gradient(135deg,${g1},${g2})`,
                      color: '#fff',
                      boxShadow: `0 4px 16px ${color}40`,
                    }}
                  >
                    {label}
                  </div>
                </div>

                {/* ── Card body ── */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Type + Year row */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[12px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                      style={{ background: `${color}14`, color, border: `1px solid ${color}28` }}>
                      {type}
                    </span>
                    <span className="text-[12px] font-medium" style={{ color: 'var(--text-3)' }}>{year}</span>
                  </div>

                  <h3 className="text-base font-bold leading-snug mb-2 flex-1" style={{ color: 'var(--text-1)' }}>
                    {degree}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 pt-3"
                    style={{ borderTop: `1px solid ${color}12` }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                    <p className="text-[13px] font-medium" style={{ color: 'var(--text-3)' }}>{institution}</p>
                  </div>
                </div>

                {/* Bottom shimmer */}
                <div className="h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg,transparent,${color}70,transparent)` }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
