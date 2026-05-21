import { useInView, revealStyle } from '../hooks/useInView.js'
import { projects } from '../data/portfolio.js'
import SectionTitle from './SectionTitle.jsx'

const gradients = [
  ['#818cf8','#60a5fa'],
  ['#60a5fa','#c084fc'],
  ['#c084fc','#818cf8'],
  ['#818cf8','#c084fc'],
  ['#60a5fa','#818cf8'],
  ['#c084fc','#60a5fa'],
  ['#818cf8','#60a5fa'],
  ['#c084fc','#818cf8'],
]

export default function Projects() {
  const [gridRef, gridVisible] = useInView(0.05)

  return (
    <section id="projects" className="noise-bg relative py-32 overflow-hidden" style={{ background: 'var(--bg-1)' }}>
      <div className="section-glow-right absolute -top-20 right-0 w-[700px] h-[700px] rounded-full pointer-events-none" />
      <div className="section-glow-left absolute -bottom-20 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Portfolio">Featured Projects</SectionTitle>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ gridAutoFlow: 'dense' }}
        >
          {projects.map(({ initials, name, desc, tags }, i) => {
            const [c1, c2] = gradients[i % gradients.length]
            const isFeatured = i === 0

            return (
              <div
                key={name}
                className={`glass-card group flex flex-col overflow-hidden cursor-default ${isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                style={revealStyle(gridVisible, i * 65, i % 2 === 0 ? 'x' : '-x')}
              >
                {/* ── Preview mockup area ── */}
                <div
                  className="relative flex-shrink-0 overflow-hidden"
                  style={{
                    height: isFeatured ? '186px' : '124px',
                    background: `linear-gradient(140deg,${c1}16,${c2}10)`,
                  }}
                >
                  {/* Ambient gradient */}
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(155deg,${c1}12,transparent 50%,${c2}0e)` }} />

                  {/* Simulated browser bar */}
                  <div className="absolute top-5 left-5 right-5 flex items-center gap-2">
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: `${c1}40` }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: `${c2}35` }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: `${c1}30` }} />
                    </div>
                    <div className="flex-1 h-2.5 rounded-full" style={{ background: `${c1}15` }} />
                  </div>

                  {/* Simulated content rows */}
                  <div className="absolute left-5 right-5" style={{ top: isFeatured ? '54px' : '46px' }}>
                    <div className="h-2.5 rounded-full mb-2.5" style={{ width: '72%', background: `${c1}1a` }} />
                    <div className="h-2 rounded-full mb-2" style={{ width: '55%', background: `${c2}14` }} />
                    {isFeatured && (
                      <>
                        <div className="h-2 rounded-full mb-2" style={{ width: '40%', background: `${c1}12` }} />
                        <div className="flex gap-2 mt-4">
                          <div className="h-7 w-20 rounded-lg" style={{ background: `${c1}20` }} />
                          <div className="h-7 w-16 rounded-lg" style={{ background: `${c2}18` }} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Background glow blob */}
                  <div className="absolute -bottom-14 -right-14 w-44 h-44 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle,${c1}22,transparent 65%)`, filter: 'blur(28px)' }} />

                  {/* Initials badge — bottom left */}
                  <div
                    className={`absolute bottom-4 left-5 rounded-2xl flex items-center justify-center font-extrabold text-white ${isFeatured ? 'w-12 h-12 text-base' : 'w-9 h-9 text-[11px]'}`}
                    style={{
                      background: `linear-gradient(135deg,${c1},${c2})`,
                      boxShadow: `0 6px 20px ${c1}50`,
                    }}
                  >
                    {initials}
                  </div>

                  {/* Featured label */}
                  {isFeatured && (
                    <div
                      className="absolute top-4 right-5 px-2.5 py-1 rounded-lg text-[10px] font-bold"
                      style={{ background: `${c1}22`, color: c1, border: `1px solid ${c1}40` }}
                    >
                      ★ Featured
                    </div>
                  )}

                  {/* Hover shimmer overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(135deg,${c1}0a,${c2}08)` }} />
                </div>

                {/* ── Card content ── */}
                <div className={`flex flex-col flex-1 ${isFeatured ? 'p-6' : 'p-5'}`}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      className={`${isFeatured ? 'text-lg' : 'text-[15px]'} font-bold transition-colors duration-200`}
                      style={{ color: 'var(--text-1)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = c1 }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-1)' }}
                    >
                      {name}
                    </h3>
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ background: `${c1}18`, color: c1 }}
                    >↗</span>
                  </div>

                  <p
                    className={`${isFeatured ? 'text-[15px] leading-[1.8]' : 'text-[13px] leading-relaxed'} mb-4 flex-1`}
                    style={{ color: 'var(--text-2)' }}
                  >
                    {desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[12px] font-semibold transition-all duration-200"
                        style={{ background: `${c1}18`, color: c1, border: `1px solid ${c1}32` }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = `${c1}2e`; e.currentTarget.style.borderColor = `${c1}60` }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = `${c1}18`; e.currentTarget.style.borderColor = `${c1}32` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom shimmer */}
                <div
                  className="h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg,transparent,${c1}70,transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
