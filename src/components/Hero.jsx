import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap.js'

const go = (id) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: 'smooth' })
}

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('.h-badge',  { y: 24, opacity: 0, duration: 0.7 })
        .from('.h-line1',  { y: 70, opacity: 0, duration: 1.1 }, '-=0.3')
        .from('.h-line2',  { y: 70, opacity: 0, duration: 1.1 }, '-=0.85')
        .from('.h-sub',    { y: 30, opacity: 0, duration: 0.8 }, '-=0.7')
        .from('.h-desc',   { y: 24, opacity: 0, duration: 0.8 }, '-=0.65')
        .from('.h-btns',   { y: 20, opacity: 0, duration: 0.7 }, '-=0.6')
        .from('.h-chips',  { y: 16, opacity: 0, duration: 0.6 }, '-=0.5')
        .from('.h-avatar', { scale: 0.55, opacity: 0, duration: 1.2, ease: 'back.out(1.4)' }, '-=1.1')
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="hero"
      className="noise-bg relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--hero-bg)', paddingTop: '68px' }}
    >
      {/* ── Aurora blobs ── */}
      <div className="aurora-a absolute -top-52 -left-52 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(96,165,250,0.18) 0%,transparent 65%)', filter: 'blur(100px)' }} />
      <div className="aurora-b absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(129,140,248,0.14) 0%,transparent 65%)', filter: 'blur(90px)' }} />
      <div className="aurora-c absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(192,132,252,0.09) 0%,transparent 65%)', filter: 'blur(80px)' }} />

      {/* ── Dot grid with vignette mask ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle,rgba(129,140,248,0.09) 1px,transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%,black,transparent)',
        }} />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">

          {/* ── LEFT ── */}
          <div className="flex-1 text-center md:text-left">

            {/* Availability badge */}
            <div className="h-badge inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full text-xs font-bold"
              style={{
                background: 'rgba(74,222,128,0.07)',
                border: '1px solid rgba(74,222,128,0.22)',
                color: '#4ade80',
              }}>
              <span className="avail-dot relative w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#4ade80' }} />
              Open to new opportunities
            </div>

            {/* Name */}
            <div className="overflow-hidden mb-2">
              <h1 className="h-line1 font-extrabold tracking-tighter leading-[0.95]"
                style={{ fontSize: 'clamp(3.2rem,8vw,6rem)', color: '#f1f0ff' }}>
                Hafiz Ammar
              </h1>
            </div>
            <div className="overflow-hidden mb-7">
              <h1
                className="h-line2 font-extrabold tracking-tighter leading-[0.95]"
                style={{
                  fontSize: 'clamp(3.2rem,8vw,6rem)',
                  background: 'linear-gradient(135deg,#60a5fa 0%,#818cf8 50%,#c084fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hameed.
              </h1>
            </div>

            {/* Role */}
            <div className="h-sub flex flex-wrap items-center gap-3 justify-center md:justify-start mb-5">
              <span className="text-base font-semibold" style={{ color: 'rgba(241,240,255,0.54)' }}>
                Senior Front-End Developer
              </span>
              <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(241,240,255,0.3)' }} />
              <span
                className="text-sm font-semibold px-2.5 py-1 rounded-lg"
                style={{ background: 'rgba(129,140,248,0.1)', color: '#818cf8', border: '1px solid rgba(129,140,248,0.2)' }}
              >
                7+ Years
              </span>
            </div>

            {/* Description */}
            <p className="h-desc text-[15px] leading-[1.9] mb-9 max-w-[480px] mx-auto md:mx-0"
              style={{ color: 'rgba(241,240,255,0.54)' }}>
              Building high-performance, pixel-perfect interfaces with React, Vue &amp; Angular.
              I turn complex requirements into clean, delightful user experiences.
            </p>

            {/* Buttons */}
            <div className="h-btns flex flex-wrap gap-3 justify-center md:justify-start mb-10">
              <button
                onClick={() => go('contact')}
                className="group relative px-8 py-3.5 rounded-full text-sm font-bold text-white overflow-hidden transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc)', boxShadow: '0 8px 30px rgba(129,140,248,0.45)' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(129,140,248,0.6)' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(129,140,248,0.45)' }}
              >
                <span className="relative z-10">Let's Work Together ✦</span>
              </button>
              <button
                onClick={() => go('projects')}
                className="px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:-translate-y-0.5"
                style={{
                  background: 'rgba(129,140,248,0.06)',
                  border: '1px solid rgba(129,140,248,0.2)',
                  color: '#bfdbfe',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(129,140,248,0.12)'; e.currentTarget.style.borderColor = 'rgba(129,140,248,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(129,140,248,0.06)'; e.currentTarget.style.borderColor = 'rgba(129,140,248,0.2)' }}
              >
                View My Work →
              </button>
            </div>

            {/* Tech chips */}
            <div className="h-chips flex flex-wrap gap-2 justify-center md:justify-start">
              {['React.js','Vue.js','Angular','TypeScript','Tailwind CSS','GSAP'].map((tech, i) => {
                const colors = ['#818cf8','#60a5fa','#c084fc','#818cf8','#60a5fa','#c084fc']
                const c = colors[i % colors.length]
                return (
                  <span
                    key={tech}
                    className="skill-tag px-3 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: `${c}10`, color: c, border: `1px solid ${c}25` }}
                  >
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>

          {/* ── RIGHT – Avatar ── */}
          <div className="h-avatar relative flex-shrink-0 flex items-center justify-center" style={{ width: '320px', height: '320px' }}>
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full"
              style={{ background: 'radial-gradient(circle,rgba(129,140,248,0.2),transparent 70%)', filter: 'blur(30px)' }} />

            {/* Spinning conic ring */}
            <div
              className="spin-ring absolute"
              style={{
                inset: '-3px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg,#60a5fa,#818cf8,#c084fc,#60a5fa)',
                filter: 'blur(1px)',
              }}
            />
            {/* Inner mask (covers ring interior) */}
            <div className="absolute"
              style={{ inset: '3px', borderRadius: '50%', background: 'var(--hero-bg)' }} />

            {/* Avatar content */}
            <div
              className="relative z-10 flex flex-col items-center justify-center rounded-full"
              style={{
                width: '280px', height: '280px',
                background: 'linear-gradient(135deg,rgba(96,165,250,0.2),rgba(129,140,248,0.2),rgba(4,2,14,0.8))',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)',
              }}
            >
              <div
                className="text-6xl font-extrabold mb-1"
                style={{
                  background: 'linear-gradient(135deg,#60a5fa,#818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AH
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase font-bold"
                style={{ color: 'rgba(255,255,255,0.3)' }}>
                Frontend Dev
              </div>
            </div>

            {/* Floating tech pills */}
            {[
              { label: 'React.js', pos: '-top-4 left-1/2 -translate-x-1/2', color: '#818cf8' },
              { label: 'Vue.js',   pos: 'top-1/2 -right-14 -translate-y-1/2', color: '#60a5fa' },
              { label: 'Angular',  pos: '-bottom-4 left-1/2 -translate-x-1/2', color: '#c084fc' },
              { label: 'TS',       pos: 'top-1/2 -left-10 -translate-y-1/2', color: '#818cf8' },
            ].map(({ label, pos, color }) => (
              <div
                key={label}
                className={`absolute ${pos} px-3 py-1.5 rounded-full text-[11px] font-bold z-20`}
                style={{
                  background: `${color}12`,
                  border: `1px solid ${color}35`,
                  color,
                  backdropFilter: 'blur(8px)',
                  boxShadow: `0 4px 16px ${color}20`,
                  transition: 'background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${color}25`
                  e.currentTarget.style.borderColor = `${color}65`
                  e.currentTarget.style.boxShadow = `0 8px 28px ${color}45`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${color}12`
                  e.currentTarget.style.borderColor = `${color}35`
                  e.currentTarget.style.boxShadow = `0 4px 16px ${color}20`
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="h-btns mt-16 pt-8 border-t flex flex-wrap gap-8 justify-center md:justify-start"
          style={{ borderColor: 'rgba(129,140,248,0.1)' }}>
          {[
            ['7+',  'Years of Experience'],
            ['8+',  'Projects Delivered'],
            ['5',   'Companies Worked'],
            ['20+', 'Tech Skills Mastered'],
          ].map(([n, l]) => (
            <div key={l} className="flex items-center gap-3">
              <span
                className="text-3xl font-extrabold"
                style={{
                  background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >{n}</span>
              <span className="text-sm max-w-[90px] leading-tight" style={{ color: 'rgba(241,240,255,0.3)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <button
        onClick={() => go('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2 transition-all"
          style={{ border: '1px solid rgba(129,140,248,0.2)' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(129,140,248,0.5)' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(129,140,248,0.2)' }}
        >
          <div
            className="w-1 h-2.5 rounded-full"
            style={{
              background: 'linear-gradient(to bottom,#60a5fa,#818cf8)',
              animation: 'scroll-dot 1.8s ease-in-out infinite',
            }}
          />
        </div>
        <span className="text-[9px] tracking-[0.25em] uppercase" style={{ color: 'rgba(241,240,255,0.3)' }}>scroll</span>
      </button>
    </section>
  )
}
