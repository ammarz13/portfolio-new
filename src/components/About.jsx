import { useEffect, useState } from 'react'
import { gsap } from '../lib/gsap.js'
import { useInView, revealStyle } from '../hooks/useInView.js'
import SectionTitle from './SectionTitle.jsx'

const PALETTE = ['#818cf8', '#60a5fa', '#c084fc']

const SPECIALTIES = [
  { icon: '⚛',  label: 'React / Vue / Angular', color: '#818cf8' },
  { icon: '🎨',  label: 'UI / UX Design',        color: '#c084fc' },
  { icon: '📱',  label: 'Responsive & PWA',       color: '#60a5fa' },
  { icon: '⚡',  label: 'Performance & SEO',      color: '#818cf8' },
]

const MINI_STATS = [
  { num: 8,  suffix: '+', label: 'Projects',  color: '#60a5fa' },
  { num: 5,  suffix: '',  label: 'Companies', color: '#c084fc' },
  { num: 20, suffix: '+', label: 'Skills',    color: '#818cf8' },
]

function Counter({ num, suffix, color, active, big = false }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const obj = { val: 0 }
    const tw = gsap.to(obj, {
      val: num, duration: big ? 2.2 : 1.6, ease: 'power3.out',
      onUpdate()  { setCount(Math.floor(obj.val)) },
      onComplete(){ setCount(num) },
    })
    return () => tw.kill()
  }, [active, num, big])
  return (
    <span style={{
      background: `linear-gradient(135deg,${color},${color}80)`,
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
    }}>
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const [textRef,  textVisible]  = useInView(0.1)
  const [statsRef, statsVisible] = useInView(0.15)
  const [active, setActive] = useState(false)
  useEffect(() => { if (statsVisible) setActive(true) }, [statsVisible])

  return (
    <section id="about" className="noise-bg relative py-32 overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="section-glow-left  absolute -top-40  -left-40  w-[600px] h-[600px] rounded-full pointer-events-none" />
      <div className="section-glow-right absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Who I Am">About Me</SectionTitle>

        <div className="grid lg:grid-cols-[1fr_380px] gap-14 xl:gap-20 items-start">

          {/* ══════════ LEFT ══════════ */}
          <div ref={textRef}>

            {/* Opening statement */}
            <div style={revealStyle(textVisible, 0, 'blur')}>
              <p className="text-[1.55rem] font-bold leading-snug mb-6" style={{ color: 'var(--text-1)' }}>
                I build{' '}
                <span style={{
                  background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>pixel-perfect interfaces</span>
                {' '}that users love and{' '}
                <span style={{ color: '#c084fc' }}>businesses rely on.</span>
              </p>
            </div>

            {/* Bio */}
            <p className="text-[16px] leading-[1.95] mb-4"
              style={{ ...revealStyle(textVisible, 100, 'blur'), color: 'var(--text-2)' }}>
              Passionate Front-End Developer with over{' '}
              <span className="font-semibold" style={{ color: 'var(--text-1)' }}>7 years of experience</span>{' '}
              designing and implementing responsive, high-performance web applications. Proficient in HTML, CSS,
              JavaScript, and modern frameworks like{' '}
              <span className="font-semibold" style={{ color: 'var(--accent-text)' }}>React.js, Angular, and Vue.js</span>.
            </p>
            <p className="text-[16px] leading-[1.95] mb-9"
              style={{ ...revealStyle(textVisible, 180, 'blur'), color: 'var(--text-2)' }}>
              Adept at collaborating with cross-functional teams to deliver high-quality digital solutions.
              I take pride in writing clean, maintainable code and staying current with the latest web technologies.
            </p>

            {/* Specialty pills */}
            <div className="flex flex-wrap gap-2 mb-9"
              style={revealStyle(textVisible, 260, 'blur')}>
              {SPECIALTIES.map(({ icon, label, color }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold cursor-default"
                  style={{
                    background: `${color}12`, color,
                    border: `1px solid ${color}2e`,
                    transition: 'background 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background  = `${color}24`
                    e.currentTarget.style.borderColor = `${color}58`
                    e.currentTarget.style.transform   = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow   = `0 6px 20px ${color}25`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background  = `${color}12`
                    e.currentTarget.style.borderColor = `${color}2e`
                    e.currentTarget.style.transform   = ''
                    e.currentTarget.style.boxShadow   = ''
                  }}
                >
                  <span>{icon}</span>
                  {label}
                </div>
              ))}
            </div>

          </div>

          {/* ══════════ RIGHT ══════════ */}
          <div ref={statsRef} className="flex flex-col gap-4">

            {/* ── Main stat card ── */}
            <div
              className="glass-card overflow-hidden"
              style={{ ...revealStyle(statsVisible, 0, 'scale'), borderColor: 'rgba(129,140,248,0.2)' }}
            >
              {/* Featured: 7+ years */}
              <div className="relative px-8 pt-8 pb-7 overflow-hidden"
                style={{ background: 'linear-gradient(145deg,rgba(129,140,248,0.1),rgba(129,140,248,0.04))' }}>

                {/* Ghost background number */}
                <span className="absolute -bottom-6 -right-3 font-extrabold leading-none select-none pointer-events-none"
                  style={{ fontSize: '8rem', color: 'rgba(129,140,248,0.07)' }}>7</span>

                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle,rgba(129,140,248,0.18),transparent 65%)', filter: 'blur(30px)' }} />

                <div className="relative z-10">
                  <div className="flex items-start gap-1 mb-2 leading-none">
                    <span className="font-extrabold" style={{ fontSize: '5rem', color: '#818cf8', lineHeight: 1 }}>
                      <Counter num={7} suffix="+" color="#818cf8" active={active} big />
                    </span>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--text-3)' }}>
                    Years of Experience
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(129,140,248,0.22),transparent)' }} />

              {/* 3 mini stats */}
              <div className="grid grid-cols-3">
                {MINI_STATS.map(({ num, suffix, label, color }, i) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1 py-6 text-center group cursor-default"
                    style={{
                      borderRight: i < 2 ? '1px solid var(--divider)' : 'none',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = `${color}08` }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                  >
                    <span className="text-3xl font-extrabold leading-none">
                      <Counter num={num} suffix={suffix} color={color} active={active} />
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-widest mt-1" style={{ color: 'var(--text-3)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Available badge ── */}
            <div
              className="glass-card flex items-center gap-4 p-5"
              style={{ ...revealStyle(statsVisible, 160, 'scale'), borderColor: 'rgba(74,222,128,0.2)' }}
            >
              <div className="relative flex-shrink-0">
                <span className="block w-3 h-3 rounded-full"
                  style={{ background: '#4ade80', boxShadow: '0 0 10px rgba(74,222,128,0.9)' }} />
                <span className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: 'rgba(74,222,128,0.4)' }} />
              </div>
              <div>
                <p className="text-sm font-extrabold tracking-wide" style={{ color: '#4ade80' }}>Open to Opportunities</p>
                <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-3)' }}>Available for full-time &amp; freelance</p>
              </div>
            </div>

            {/* ── Highlights strip ── */}
            <div
              className="glass-card p-5"
              style={{ ...revealStyle(statsVisible, 260, 'scale'), borderColor: 'rgba(129,140,248,0.14)' }}
            >
              <p className="text-[12px] font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-3)' }}>Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((tech, i) => {
                  const c = PALETTE[i % PALETTE.length]
                  return (
                    <span key={tech}
                      className="px-3 py-1 rounded-full text-[13px] font-semibold"
                      style={{ background: `${c}12`, color: c, border: `1px solid ${c}28` }}>
                      {tech}
                    </span>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
