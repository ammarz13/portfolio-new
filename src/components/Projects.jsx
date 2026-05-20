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
      <div className="section-glow-right absolute -top-20 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" />
      <div className="section-glow-left absolute -bottom-20 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Portfolio">Featured Projects</SectionTitle>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map(({ initials, name, desc, tags }, i) => {
            const [c1, c2] = gradients[i % gradients.length]
            const axis = i % 2 === 0 ? 'x' : '-x'
            return (
              <div
                key={name}
                className="glass-card group flex flex-col overflow-hidden"
                style={revealStyle(gridVisible, i * 65, axis)}
              >
                {/* Gradient header bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: `linear-gradient(90deg,${c1},${c2})` }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Monogram */}
                  <div
                    className="project-initials w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-extrabold mb-5"
                    style={{
                      background: `linear-gradient(135deg,${c1},${c2})`,
                      boxShadow: `0 8px 24px ${c1}40`,
                    }}
                  >
                    {initials}
                  </div>

                  <h3
                    className="text-sm font-bold mb-2 transition-all duration-200"
                    style={{ color: 'var(--text-1)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = c1 }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-1)' }}
                  >
                    {name}
                  </h3>
                  <p className="text-[12px] leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-2)' }}>
                    {desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                        style={{ background: `${c1}22`, color: c1, border: `1px solid ${c1}40` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
