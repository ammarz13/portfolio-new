import { useInView, revealStyle } from '../hooks/useInView.js'
import { skills } from '../data/portfolio.js'
import SectionTitle from './SectionTitle.jsx'

const PALETTE = ['#c084fc', '#818cf8', '#60a5fa', '#c084fc']
const cats = PALETTE.map(color => ({
  color,
  bg:     `${color}12`,
  border: `${color}30`,
  glow:   `${color}18`,
}))

export default function Skills() {
  const [gridRef, gridVisible] = useInView(0.05)

  return (
    <section id="skills" className="noise-bg relative py-32 overflow-hidden" style={{ background: 'var(--bg-1)' }}>
      <div className="section-glow-right absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Expertise">Technical Skills</SectionTitle>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-5">
          {skills.map(({ title, items }, i) => {
            const { color, bg, border } = cats[i % cats.length]
            return (
              <div
                key={title}
                className="glass-card p-7 transition-all duration-300"
                style={{ ...revealStyle(gridVisible, i * 100), background: bg, borderColor: border }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4"
                  style={{ borderBottom: `1px solid ${border}` }}>
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{ background: `linear-gradient(to bottom,${color},${color}44)` }}
                  />
                  <h3 className="text-sm font-bold tracking-wide" style={{ color }}>
                    {title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((item, j) => (
                    <span
                      key={item}
                      className="skill-tag px-3.5 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        ...revealStyle(gridVisible, i * 100 + j * 25),
                        background: `${color}1a`,
                        color,
                        border: `1px solid ${color}35`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
