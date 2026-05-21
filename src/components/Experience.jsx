import { useInView, revealStyle } from '../hooks/useInView.js'
import { experience } from '../data/portfolio.js'
import SectionTitle from './SectionTitle.jsx'

const COLORS = ['#60a5fa', '#c084fc', '#818cf8', '#60a5fa', '#c084fc']

export default function Experience() {
  const [listRef, listVisible] = useInView(0.05)

  return (
    <section id="experience" className="noise-bg relative py-32 overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="section-glow-left absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Career Path">Work Experience</SectionTitle>

        <div ref={listRef} className="space-y-5">
          {experience.map((job, i) => {
            const color = COLORS[i % COLORS.length]
            const num = String(i + 1).padStart(2, '0')

            return (
              <div
                key={i}
                className="glass-card group overflow-hidden"
                style={{ ...revealStyle(listVisible, i * 110, 'x'), borderColor: `${color}20` }}
              >
                <div className="flex flex-col lg:flex-row">

                  {/* ── Left accent panel ── */}
                  <div
                    className="relative flex flex-col justify-between gap-3 p-7 lg:w-64 xl:w-72 flex-shrink-0 overflow-hidden"
                    style={{
                      background: `linear-gradient(145deg,${color}16,${color}06)`,
                      borderRight: '1px solid var(--divider)',
                    }}
                  >
                    {/* Ghost number */}
                    <span
                      className="absolute -bottom-4 -right-1 font-extrabold leading-none select-none pointer-events-none"
                      style={{ fontSize: '7rem', color: `${color}11` }}
                    >{num}</span>

                    {/* Corner glow */}
                    <div className="absolute -top-12 -left-12 w-44 h-44 rounded-full pointer-events-none"
                      style={{ background: `radial-gradient(circle,${color}16,transparent 65%)`, filter: 'blur(28px)' }} />

                    <div className="relative z-10 flex flex-col gap-2.5">
                      {/* Company badge */}
                      <div
                        className="inline-flex items-center gap-2 self-start px-3.5 py-2 rounded-xl text-[13px] font-bold cursor-default"
                        style={{ background: `${color}1c`, color, border: `1px solid ${color}38` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
                        {job.company}
                      </div>

                      {/* Period */}
                      <div
                        className="inline-flex items-center self-start px-3 py-1.5 rounded-lg text-[13px] font-semibold"
                        style={{ background: 'var(--tag-bg)', color: 'var(--text-3)', border: '1px solid var(--divider)' }}
                      >
                        {job.period}
                      </div>
                    </div>
                  </div>

                  {/* ── Right content panel ── */}
                  <div className="flex-1 p-7 lg:p-8">
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <h3 className="text-xl font-extrabold" style={{ color: 'var(--text-1)' }}>{job.role}</h3>
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ background: `${color}18`, color }}
                      >↗</span>
                    </div>

                    <ul className="space-y-3">
                      {job.points.map((pt, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-[15px] leading-relaxed"
                          style={{ ...revealStyle(listVisible, i * 110 + 200 + j * 75, 'blur'), color: 'var(--text-2)' }}
                        >
                          <span
                            className="mt-[3px] w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center text-[8px] font-extrabold"
                            style={{ background: `${color}15`, color, border: `1px solid ${color}28` }}
                          >✦</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom shimmer line on hover */}
                <div
                  className="h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg,transparent,${color}80,transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
