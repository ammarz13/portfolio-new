import { useInView, revealStyle } from '../hooks/useInView.js'
import SectionTitle from './SectionTitle.jsx'

const CONTACT_ITEMS = [
  { href: 'mailto:ammarz.g@gmail.com', icon: '✉️', label: 'Email',    value: 'ammarz.g@gmail.com', sub: 'Drop me a line',  c: '#818cf8' },
  { href: 'tel:+923324258602',          icon: '📱', label: 'Phone',    value: '0332-4258602',        sub: 'Give me a call',  c: '#60a5fa' },
  { href: null,                          icon: '📍', label: 'Location', value: 'Lahore, Pakistan',    sub: 'Based in',        c: '#c084fc' },
]

export default function Contact() {
  const [ref, visible] = useInView(0.08)

  return (
    <section
      id="contact"
      className="noise-bg relative py-32 overflow-hidden"
      style={{ background: 'var(--contact-bg)' }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.1),transparent 60%)', filter: 'blur(80px)' }} />
        <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(192,132,252,0.08),transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(96,165,250,0.07),transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(rgba(129,140,248,1) 1px,transparent 1px),linear-gradient(90deg,rgba(129,140,248,1) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%,black 40%,transparent)',
        }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle sub="Say Hello" inverted>Get In Touch</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: CTA copy ── */}
          <div style={revealStyle(visible, 0, 'x')}>
            {/* Availability pill */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 cursor-default"
              style={{ background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.28)', backdropFilter: 'blur(12px)' }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.9)' }} />
              <span className="text-[13px] font-bold tracking-wide" style={{ color: '#4ade80' }}>
                Open to new opportunities
              </span>
            </div>

            <h2
              className="font-extrabold tracking-tight leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', color: 'var(--text-1)' }}
            >
              Let's Build Something
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Amazing Together
              </span>
            </h2>

            <p
              className="text-[17px] leading-[1.9] mb-10 max-w-[420px]"
              style={{ color: 'var(--text-2)' }}
            >
              Have a project in mind or want to explore an opportunity?
              I'm always excited to connect and collaborate on great ideas.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:ammarz.g@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-extrabold text-white"
                style={{
                  background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc)',
                  boxShadow: '0 8px 32px rgba(129,140,248,0.45)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(129,140,248,0.6)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 32px rgba(129,140,248,0.45)' }}
              >
                Send Me an Email ✦
              </a>
              <a
                href="tel:+923324258602"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold"
                style={{
                  background: 'rgba(129,140,248,0.07)',
                  border: '1px solid rgba(129,140,248,0.22)',
                  color: '#bfdbfe',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background='rgba(129,140,248,0.15)'; e.currentTarget.style.borderColor='rgba(129,140,248,0.45)'; e.currentTarget.style.transform='translateY(-3px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background='rgba(129,140,248,0.07)'; e.currentTarget.style.borderColor='rgba(129,140,248,0.22)'; e.currentTarget.style.transform='' }}
              >
                Call Me →
              </a>
            </div>
          </div>

          {/* ── Right: contact cards ── */}
          <div className="flex flex-col gap-4">
            {CONTACT_ITEMS.map(({ href, icon, label, value, sub, c }, i) => {
              const Tag = href ? 'a' : 'div'
              return (
                <Tag
                  key={label}
                  {...(href ? { href } : {})}
                  className="glass-card group flex items-center gap-5 p-5"
                  style={{
                    ...revealStyle(visible, 180 + i * 110, '-x'),
                    borderColor: `${c}20`,
                    textDecoration: 'none',
                    transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${c}50`
                    e.currentTarget.style.background  = `${c}0a`
                    e.currentTarget.style.transform   = 'translateX(-6px)'
                    e.currentTarget.style.boxShadow   = `0 12px 40px ${c}18`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${c}20`
                    e.currentTarget.style.background  = ''
                    e.currentTarget.style.transform   = ''
                    e.currentTarget.style.boxShadow   = ''
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg,${c}1e,${c}0e)`,
                      border: `1px solid ${c}30`,
                      boxShadow: `0 4px 18px ${c}18`,
                    }}
                  >
                    {icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-bold uppercase tracking-widest mb-1" style={{ color: `${c}80` }}>{sub}</div>
                    <div className="text-[15px] font-bold truncate" style={{ color: 'var(--text-1)' }}>{value}</div>
                  </div>

                  {/* Arrow */}
                  {href && (
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ background: `${c}18`, color: c }}
                    >↗</div>
                  )}
                </Tag>
              )
            })}

            {/* Bottom note */}
            <p className="text-center text-[13px] font-medium mt-2" style={{ color: 'var(--text-3)' }}>
              Usually replies within <span style={{ color: 'var(--text-1)' }}>24 hours</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
