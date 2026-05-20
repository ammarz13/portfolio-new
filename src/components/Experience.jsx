import { useInView, revealStyle } from '../hooks/useInView.js'
import { experience } from '../data/portfolio.js'
import SectionTitle from './SectionTitle.jsx'

const PALETTE = ['#60a5fa', '#c084fc', '#818cf8', '#60a5fa', '#c084fc']
const palette = PALETTE.map(color => ({ color, bg: `${color}14`, border: `${color}30` }))

export default function Experience() {
  const [listRef, listVisible] = useInView(0.05)

  return (
    <section id="experience" className="noise-bg relative py-32 overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="section-glow-left absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Career Path">Work Experience</SectionTitle>

        <div ref={listRef} className="relative pl-10 timeline-line">
          {experience.map((job, i) => {
            const { color, bg, border } = palette[i % palette.length]
            const cardDelay = i * 130
            return (
              <div key={i} className="relative mb-7 last:mb-0" style={revealStyle(listVisible, cardDelay, 'x')}>

                {/* Timeline dot — pops in with scale */}
                <div
                  className="absolute -left-[31px] top-7 w-4 h-4 rounded-full z-10"
                  style={{
                    ...revealStyle(listVisible, cardDelay + 60, 'scale'),
                    background: `linear-gradient(135deg,${color},${color}88)`,
                    boxShadow: `0 0 0 3px var(--dot-border), 0 0 0 5px ${color}40, 0 0 16px ${color}50`,
                  }}
                />

                {/* Card */}
                <div className="glass-card p-7 group" style={{ background: bg, borderColor: border }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-1)' }}>{job.role}</h3>
                      <span
                        className="exp-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold"
                        style={{ background: `${color}22`, color, border: `1px solid ${color}40` }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${color}35`
                          e.currentTarget.style.boxShadow = `0 6px 20px ${color}30`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `${color}22`
                          e.currentTarget.style.boxShadow = ''
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                        {job.company}
                      </span>
                    </div>
                    <span
                      className="exp-period self-start sm:self-auto px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap"
                      style={{ background: 'var(--tag-bg)', color: 'var(--text-3)', border: '1px solid var(--card-border)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--text-1)'
                        e.currentTarget.style.borderColor = `${color}40`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-3)'
                        e.currentTarget.style.borderColor = 'var(--card-border)'
                      }}
                    >
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {job.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-[13px] leading-relaxed"
                        style={{ ...revealStyle(listVisible, cardDelay + 180 + j * 70, 'blur'), color: 'var(--text-2)' }}
                      >
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color, opacity: 0.7 }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
