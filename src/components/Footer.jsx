export default function Footer() {
  return (
    <footer className="relative py-8" style={{ background: 'var(--footer-bg)' }}>
      {/* Rainbow top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg,transparent 0%,#60a5fa 30%,#818cf8 60%,#c084fc 85%,transparent 100%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: 'rgba(241,240,255,0.2)' }}>
          Designed &amp; Built with ✦ by{' '}
          <span className="font-semibold" style={{ color: 'rgba(129,140,248,0.7)' }}>Hafiz Ammar Hameed</span>
          {' '}· {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-2">
          {[['#818cf8','React'],['#60a5fa','Vue'],['#c084fc','Angular']].map(([c, t]) => (
            <span
              key={t}
              className="skill-tag px-2.5 py-1 rounded-full text-[10px] font-semibold"
              style={{ background: `${c}10`, color: c, border: `1px solid ${c}20` }}
            >{t}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
