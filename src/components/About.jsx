import { useEffect, useState } from 'react'
import { gsap } from '../lib/gsap.js'
import { useInView, revealStyle } from '../hooks/useInView.js'
import SectionTitle from './SectionTitle.jsx'

const PALETTE = ['#818cf8', '#60a5fa', '#c084fc']
const stats = [
  { num: 7,  suffix: '+', label: 'Years Experience'  },
  { num: 8,  suffix: '+', label: 'Projects Delivered' },
  { num: 5,  suffix: '',  label: 'Companies Worked'   },
  { num: 20, suffix: '+', label: 'Tech Skills'        },
]

function StatCard({ num, suffix, label, color, bg, border, active }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const obj = { val: 0 }
    const tw = gsap.to(obj, {
      val: num, duration: 2, ease: 'power3.out',
      onUpdate() { setCount(Math.floor(obj.val)) },
      onComplete() { setCount(num) },
    })
    return () => tw.kill()
  }, [active, num])

  return (
    <div
      className="stat-card glass-card p-6 text-center flex flex-col items-center gap-2"
      style={{ background: bg, borderColor: border }}
    >
      <span
        className="text-[3rem] font-extrabold leading-none"
        style={{ background: `linear-gradient(135deg,${color},${color}88)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
      >
        {count}{suffix}
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-3)' }}>
        {label}
      </span>
    </div>
  )
}

export default function About() {
  const [textRef,  textVisible]  = useInView(0.15)
  const [statsRef, statsVisible] = useInView(0.2)
  const [active, setActive] = useState(false)
  useEffect(() => { if (statsVisible) setActive(true) }, [statsVisible])

  return (
    <section id="about" className="noise-bg relative py-32 overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="section-glow-left absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none" />
      <div className="section-glow-right absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Who I Am">About Me</SectionTitle>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Text block */}
          <div ref={textRef}>
            <p className="text-[15px] leading-[1.95] mb-5" style={{ ...revealStyle(textVisible, 0, 'blur'), color: 'var(--text-2)' }}>
              Passionate and skilled Front-End Developer with over{' '}
              <span className="font-semibold" style={{ color: 'var(--text-1)' }}>7 years of experience</span>{' '}
              designing and implementing responsive, user-friendly web applications. Proficient in HTML, CSS,
              JavaScript, and modern frameworks like{' '}
              <span className="font-semibold" style={{ color: 'var(--accent-text)' }}>React.js, Angular, and Vue.js</span>.
            </p>
            <p className="text-[15px] leading-[1.95] mb-10" style={{ ...revealStyle(textVisible, 140, 'blur'), color: 'var(--text-2)' }}>
              Adept at collaborating with cross-functional teams to deliver high-quality digital solutions.
              I take pride in writing clean, maintainable code and staying current with the latest
              web technologies and best practices.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: '📍', label: 'Location', value: 'Lahore, Pakistan',    color: PALETTE[0], href: null },
                { icon: '📞', label: 'Phone',    value: '0332-4258602',        color: PALETTE[1], href: 'tel:+923324258602' },
                { icon: '✉️', label: 'Email',    value: 'ammarz.g@gmail.com',  color: PALETTE[2], href: 'mailto:ammarz.g@gmail.com' },
              ].map(({ icon, label, value, color, href }, i) => {
                const Tag = href ? 'a' : 'div'
                return (
                  <Tag
                    key={label}
                    {...(href ? { href } : {})}
                    className="about-row flex items-center gap-4 px-5 py-3.5 rounded-2xl"
                    style={{
                      ...revealStyle(textVisible, 280 + i * 100, 'x'),
                      background: 'var(--card-bg)',
                      border: `1px solid ${color}30`,
                      backdropFilter: 'blur(8px)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(6px)'
                      e.currentTarget.style.background = `${color}10`
                      e.currentTarget.style.borderColor = `${color}55`
                      e.currentTarget.style.boxShadow = `0 6px 24px ${color}18`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = ''
                      e.currentTarget.style.background = 'var(--card-bg)'
                      e.currentTarget.style.borderColor = `${color}30`
                      e.currentTarget.style.boxShadow = ''
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-3)' }}>{label}</div>
                      <div className="text-sm font-medium" style={{ color: 'var(--text-1)' }}>{value}</div>
                    </div>
                  </Tag>
                )
              })}
            </div>
          </div>

          {/* Stats grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const c = PALETTE[i % PALETTE.length]
              return (
                <div key={s.label} style={revealStyle(statsVisible, i * 120, 'scale')}>
                  <StatCard {...s} color={c} bg={`${c}14`} border={`${c}50`} active={active} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
