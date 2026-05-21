import { useState, useEffect } from 'react'

const links    = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']
const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('hero')
  const [dark, setDark]         = useState(() => {
    try { return localStorage.getItem('theme') !== 'light' } catch { return true }
  })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const mid = window.scrollY + window.innerHeight / 3
      let current = 'hero'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= mid) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  function scrollTo(id) {
    setOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 84
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const navText  = 'var(--nav-text)'
  const navTextH = 'var(--nav-text-h)'

  return (
    <nav
      className="nav-bar fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:     scrolled ? 'var(--nav-bg)'                   : 'transparent',
        borderBottom:   scrolled ? '1px solid var(--nav-border)'     : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(160%)'       : 'none',
        boxShadow:      scrolled ? '0 4px 24px rgba(0,0,0,0.2)'     : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 cursor-pointer"
          style={{ background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc)', boxShadow: '0 4px 14px rgba(129,140,248,0.4)' }}
        >
          AH
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {links.slice(0, -1).map((l) => {
            const isActive = active === l.toLowerCase()
            return (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l.toLowerCase())}
                  className="relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer nav-hover"
                  style={{ color: isActive ? '#818cf8' : navText }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = isActive ? '#818cf8' : navTextH }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? '#818cf8' : navText }}
                >
                  {l}
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg,#60a5fa,#818cf8,#c084fc)' }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Right: Contact CTA + theme + burger */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-px cursor-pointer"
            style={{
              background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc)',
              boxShadow: active === 'contact'
                ? '0 4px 18px rgba(129,140,248,0.6)'
                : '0 4px 14px rgba(129,140,248,0.35)',
              transform: active === 'contact' ? 'translateY(-1px)' : '',
            }}
          >
            Contact
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all nav-hover cursor-pointer"
            style={{ color: navText }}
          >
            {dark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Burger (mobile only) */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`}
              style={{ background: navTextH }} />
            <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`}
              style={{ background: navTextH }} />
            <span className={`block w-5 h-0.5 rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}
              style={{ background: navTextH }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-4 py-3 flex flex-col gap-1"
          style={{
            background:   'var(--nav-bg)',
            borderColor:  'var(--nav-border)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {links.map((l) => {
            const isActive = active === l.toLowerCase()
            return (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all nav-hover cursor-pointer"
                style={{
                  color:      isActive ? '#818cf8' : navText,
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {l}
              </button>
            )
          })}
        </div>
      )}
    </nav>
  )
}
