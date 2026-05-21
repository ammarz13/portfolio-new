import { useState } from 'react'
import { useInView, revealStyle } from '../hooks/useInView.js'
import { skills } from '../data/portfolio.js'
import SectionTitle from './SectionTitle.jsx'

const COLORS = ['#c084fc', '#818cf8', '#60a5fa', '#c084fc']
const ICONS  = ['⟨/⟩', '⚛', '⚙', '✦']

const FEATURED = [
  { name: 'React.js',     abbr: 'R',  color: '#818cf8' },
  { name: 'Vue.js',       abbr: 'V',  color: '#60a5fa' },
  { name: 'Angular',      abbr: 'A',  color: '#c084fc' },
  { name: 'TypeScript',   abbr: 'TS', color: '#818cf8' },
  { name: 'Tailwind CSS', abbr: 'TW', color: '#60a5fa' },
  { name: 'Figma',        abbr: 'Fi', color: '#c084fc' },
]

const PROF = [
  [5, 5, 4, 4, 4, 3],
  [5, 5, 4, 5, 5, 3, 4, 3],
  [5, 4, 4, 3, 5, 4, 3],
  [5, 5, 5, 4, 4, 4],
]

function Dots({ n, color }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(k => (
        <span
          key={k}
          className="block rounded-full"
          style={{
            width:      k <= n ? '10px' : '6px',
            height:     '6px',
            background: k <= n ? color : `${color}22`,
            boxShadow:  k <= n ? `0 0 4px ${color}55` : 'none',
            transition: 'all 0.2s ease',
          }}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const [sectionRef, sectionVisible] = useInView(0.05)

  const activeColor = COLORS[activeTab]

  return (
    <section id="skills" className="noise-bg relative py-32 overflow-hidden" style={{ background: 'var(--bg-1)' }}>
      <div className="section-glow-right absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" />
      <div className="section-glow-left absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" />

      <div ref={sectionRef} className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Expertise">Technical Skills</SectionTitle>

        {/* ── Featured tech strip ── */}
        <div className="flex flex-wrap gap-3 mb-12">
          {FEATURED.map(({ name, abbr, color }, i) => (
            <div
              key={name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl cursor-default"
              style={{
                ...revealStyle(sectionVisible, i * 55, 'blur'),
                background:     `${color}0c`,
                border:         `1px solid ${color}22`,
                backdropFilter: 'blur(10px)',
                transition:     [
                  `opacity 0.7s ease ${i * 55}ms`,
                  `transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 55}ms`,
                  `filter 0.7s ease ${i * 55}ms`,
                  'background 0.22s ease',
                  'border-color 0.22s ease',
                  'box-shadow 0.22s ease',
                ].join(', '),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background  = `${color}1c`
                e.currentTarget.style.borderColor = `${color}55`
                e.currentTarget.style.transform   = 'translateY(-3px)'
                e.currentTarget.style.boxShadow   = `0 10px 28px ${color}28`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background  = `${color}0c`
                e.currentTarget.style.borderColor = `${color}22`
                e.currentTarget.style.transform   = sectionVisible ? 'none' : ''
                e.currentTarget.style.boxShadow   = ''
              }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-extrabold text-white flex-shrink-0"
                style={{ background: `linear-gradient(135deg,${color},${color}88)`, boxShadow: `0 3px 10px ${color}40` }}
              >
                {abbr}
              </div>
              <span className="text-sm font-semibold whitespace-nowrap" style={{ color: 'var(--text-1)' }}>{name}</span>
            </div>
          ))}
        </div>

        {/* ── Tabbed skill panel ── */}
        <div
          className="glass-card overflow-hidden"
          style={revealStyle(sectionVisible, 360, 'blur')}
        >
          {/* Tab bar — no overflow-x-auto, no negative margin trick */}
          <div style={{ borderBottom: '1px solid var(--divider)' }}>
            <div className="flex">
              {skills.map(({ title }, i) => {
                const c      = COLORS[i]
                const active = i === activeTab
                return (
                  <button
                    key={title}
                    type="button"
                    onClick={() => setActiveTab(i)}
                    className="relative flex items-center gap-2 px-5 py-4 text-sm font-bold whitespace-nowrap flex-shrink-0"
                    style={{
                      color:      active ? c : 'var(--text-3)',
                      background: active ? `${c}0c` : 'transparent',
                      border:     'none',
                      cursor:     'pointer',
                      outline:    'none',
                      transition: 'color 0.18s ease, background 0.18s ease',
                    }}
                  >
                    {/* Icon */}
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                      style={{
                        background: active ? `${c}22` : 'transparent',
                        transition: 'background 0.18s ease',
                      }}
                    >
                      {ICONS[i]}
                    </span>

                    {/* Label */}
                    <span className="hidden sm:inline">{title}</span>

                    {/* Count badge */}
                    <span
                      className="text-[11px] px-1.5 py-0.5 rounded font-extrabold"
                      style={{
                        background: active ? `${c}22` : 'rgba(255,255,255,0.05)',
                        color:      active ? c : 'var(--text-3)',
                        transition: 'background 0.18s ease, color 0.18s ease',
                      }}
                    >
                      {skills[i].items.length}
                    </span>

                    {/* Active underline indicator */}
                    {active && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full"
                        style={{ background: `linear-gradient(90deg,transparent,${c},transparent)` }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Skill rows — key forces re-mount + tab-reveal animation on switch */}
          <div
            key={activeTab}
            className="p-6 lg:p-8 grid sm:grid-cols-2 gap-x-12"
            style={{ animation: 'tab-reveal 0.28s ease both' }}
          >
            {skills[activeTab].items.map((item, j) => (
              <div
                key={item}
                className="flex items-center justify-between gap-4 py-3.5"
                style={{ borderBottom: '1px solid var(--divider)' }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className="w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center text-[8px] font-extrabold"
                    style={{ background: `${activeColor}16`, color: activeColor, border: `1px solid ${activeColor}28` }}
                  >✦</span>
                  <span
                    className="text-[15px] font-medium truncate"
                    style={{
                      color: 'var(--text-2)',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = activeColor }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-2)' }}
                  >
                    {item}
                  </span>
                </div>
                <Dots n={PROF[activeTab][j] ?? 3} color={activeColor} />
              </div>
            ))}
          </div>

          {/* Footer legend */}
          <div
            className="flex items-center justify-between px-6 lg:px-8 py-4"
            style={{ borderTop: '1px solid var(--divider)', background: `${activeColor}05` }}
          >
            <span className="text-[12px]" style={{ color: 'var(--text-3)' }}>
              {skills[activeTab].items.length} skills
            </span>
            <div className="flex items-center gap-4 text-[12px]" style={{ color: 'var(--text-3)' }}>
              <span className="flex items-center gap-1.5">
                <span className="flex gap-0.5">
                  {[1,2,3].map(k => <span key={k} className="block w-2 h-1.5 rounded-full" style={{ background: `${activeColor}60` }} />)}
                  {[4,5].map(k => <span key={k} className="block w-2 h-1.5 rounded-full" style={{ background: `${activeColor}22` }} />)}
                </span>
                Proficient
              </span>
              <span className="flex items-center gap-1.5">
                <span className="flex gap-0.5">
                  {[1,2,3,4,5].map(k => <span key={k} className="block w-2 h-1.5 rounded-full" style={{ background: activeColor }} />)}
                </span>
                Expert
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
