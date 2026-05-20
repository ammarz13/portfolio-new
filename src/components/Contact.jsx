import { useInView, revealStyle } from '../hooks/useInView.js'
import SectionTitle from './SectionTitle.jsx'

const items = [
  { href: 'mailto:ammarz.g@gmail.com', icon: '✉️', label: 'ammarz.g@gmail.com', sub: 'Drop me a line',  c: '#818cf8' },
  { href: 'tel:+923324258602',          icon: '📱', label: '0332-4258602',        sub: 'Give me a call',  c: '#60a5fa' },
  { href: null,                          icon: '📍', label: 'Lahore, Pakistan',    sub: 'Based in',        c: '#c084fc' },
]

export default function Contact() {
  const [ref, visible] = useInView(0.1)

  return (
    <section
      id="contact"
      className="noise-bg relative py-32 overflow-hidden"
      style={{ background: 'var(--contact-bg)' }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.1),transparent 65%)', filter: 'blur(80px)' }} />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(192,132,252,0.08),transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(129,140,248,1) 1px,transparent 1px),linear-gradient(90deg,rgba(129,140,248,1) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%,black 40%,transparent)',
        }} />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <SectionTitle sub="Say Hello" inverted>Get In Touch</SectionTitle>

        <p
          className="text-[15px] leading-[1.9] mb-14 max-w-md mx-auto"
          style={{ ...revealStyle(visible, 100, 'blur'), color: 'rgba(241,240,255,0.5)' }}
        >
          Have a project in mind or want to explore an opportunity?
          I'm always excited to connect and collaborate on great things.
        </p>

        {/* Contact cards */}
        <div className="flex flex-wrap gap-4 justify-center mb-14">
          {items.map(({ href, icon, label, sub, c }, i) => {
            const base = {
              ...revealStyle(visible, 200 + i * 90),
              display: 'flex', alignItems: 'center', gap: '14px',
              padding: '16px 22px', borderRadius: '18px',
              border: `1px solid ${c}20`, background: `${c}07`,
              backdropFilter: 'blur(12px)',
              textDecoration: 'none', minWidth: '210px', textAlign: 'left',
              transition: 'all 0.25s ease',
            }
            const inner = (
              <>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${c}12`, border: `1px solid ${c}25` }}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
                    style={{ color: `${c}80` }}>{sub}</div>
                  <div className="text-sm font-bold" style={{ color: '#fff' }}>{label}</div>
                </div>
              </>
            )
            const hoverIn  = (e) => { e.currentTarget.style.borderColor=`${c}45`; e.currentTarget.style.background=`${c}12`; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow=`0 16px 40px ${c}20` }
            const hoverOut = (e) => { e.currentTarget.style.borderColor=`${c}20`; e.currentTarget.style.background=`${c}07`; e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='' }
            return href
              ? <a key={label} href={href} style={base} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{inner}</a>
              : <div key={label} style={base}>{inner}</div>
          })}
        </div>

        {/* CTA button */}
        <div style={revealStyle(visible, 580, 'scale')}>
          <a
            href="mailto:ammarz.g@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-extrabold text-white"
            style={{
              background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc)',
              boxShadow: '0 8px 32px rgba(129,140,248,0.45)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(129,140,248,0.6)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 32px rgba(129,140,248,0.45)' }}
          >
            Send Me an Email
            <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
