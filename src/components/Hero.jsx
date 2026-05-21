import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroImg from '../assets/hero.png'

const go = (id) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: 'smooth' })
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const up = {
  hidden: { y: 52, opacity: 0, filter: 'blur(8px)' },
  show:   { y: 0,  opacity: 1, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 72, damping: 18 } },
}

const TECH_COLORS = ['#818cf8','#60a5fa','#c084fc','#818cf8','#60a5fa','#c084fc']

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const blobY1  = useTransform(scrollYProgress, [0, 1], [0, -160])
  const blobY2  = useTransform(scrollYProgress, [0, 1], [0, -90])
  const blobY3  = useTransform(scrollYProgress, [0, 1], [0, -50])
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const slideUp = useTransform(scrollYProgress, [0, 0.55], [0, -48])

  return (
    <section
      ref={ref}
      id="hero"
      className="noise-bg relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--hero-bg)', paddingTop: '68px' }}
    >
      {/* ── Aurora blobs (parallax) ── */}
      <motion.div
        style={{ y: blobY1, background: 'radial-gradient(circle,rgba(96,165,250,0.18),transparent 65%)', filter: 'blur(100px)' }}
        className="aurora-a absolute -top-52 -left-52 w-[900px] h-[900px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: blobY2, background: 'radial-gradient(circle,rgba(129,140,248,0.14),transparent 65%)', filter: 'blur(90px)' }}
        className="aurora-b absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: blobY3, background: 'radial-gradient(circle,rgba(192,132,252,0.09),transparent 65%)', filter: 'blur(80px)' }}
        className="aurora-c absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
      />

      {/* ── Dot grid ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle,rgba(129,140,248,0.09) 1px,transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)',
        }} />

      {/* ── Main content ── */}
      <motion.div
        style={{ opacity: fadeOut, y: slideUp }}
        className="relative z-10 flex-1 flex items-center w-full max-w-6xl mx-auto px-6 py-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-14 xl:gap-20 w-full">

          {/* ── LEFT: text ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Availability badge */}
            <motion.div variants={up} className="inline-block mb-8">
              <div
                className="avail-badge h-badge inline-flex items-center gap-3 px-5 py-3 rounded-full cursor-default"
                style={{
                  background:     'rgba(74,222,128,0.05)',
                  border:         '1px solid rgba(74,222,128,0.32)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <span className="avail-dot relative flex-shrink-0 rounded-full"
                  style={{ width: '10px', height: '10px', background: '#4ade80', boxShadow: '0 0 10px rgba(74,222,128,0.9),0 0 22px rgba(74,222,128,0.45)' }} />
                <span className="text-[11px] font-bold tracking-[0.06em]" style={{ color: '#4ade80' }}>Open to new opportunities</span>
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(74,222,128,0.4)' }} />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={up} className="mb-7">
              <h1 className="font-extrabold tracking-tighter leading-[0.92]"
                style={{ fontSize: 'clamp(3rem,8vw,6rem)', color: 'var(--text-1)' }}>
                Hafiz Ammar
              </h1>
              <h1 className="font-extrabold tracking-tighter leading-[0.92]"
                style={{
                  fontSize: 'clamp(3rem,8vw,6rem)',
                  background: 'linear-gradient(135deg,#60a5fa 0%,#818cf8 50%,#c084fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                Hameed.
              </h1>
            </motion.div>

            {/* Role badge */}
            <motion.div variants={up} className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-5">
              <span className="text-base font-semibold" style={{ color: 'var(--text-2)' }}>
                Senior Front-End Developer
              </span>
              <span className="w-1 h-1 rounded-full" style={{ background: 'var(--text-3)' }} />
              <span className="text-sm font-semibold px-2.5 py-1 rounded-lg"
                style={{ background: 'rgba(129,140,248,0.1)', color: '#818cf8', border: '1px solid rgba(129,140,248,0.2)' }}>
                7+ Years
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={up}
              className="text-[15px] leading-[1.9] mb-9 max-w-[480px] mx-auto lg:mx-0"
              style={{ color: 'var(--text-2)' }}>
              Building high-performance, pixel-perfect interfaces with React, Vue &amp; Angular.
              I turn complex requirements into clean, delightful user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={up} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <motion.button
                onClick={() => go('contact')}
                className="px-8 py-3.5 rounded-full text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc)', boxShadow: '0 8px 30px rgba(129,140,248,0.45)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 14px 44px rgba(129,140,248,0.65)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                Let's Work Together ✦
              </motion.button>
              <motion.button
                onClick={() => go('projects')}
                className="px-8 py-3.5 rounded-full text-sm font-bold"
                style={{ background: 'rgba(129,140,248,0.06)', border: '1px solid rgba(129,140,248,0.2)', color: '#bfdbfe', backdropFilter: 'blur(8px)' }}
                whileHover={{ scale: 1.05, background: 'rgba(129,140,248,0.14)', borderColor: 'rgba(129,140,248,0.4)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                View My Work →
              </motion.button>
            </motion.div>

            {/* Tech chips */}
            <motion.div variants={up} className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['React.js','Vue.js','Angular','TypeScript','Tailwind CSS','GSAP'].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="skill-tag px-3 py-1 rounded-full text-[11px] font-semibold"
                  style={{ background: `${TECH_COLORS[i]}10`, color: TECH_COLORS[i], border: `1px solid ${TECH_COLORS[i]}25` }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Photo composition ── */}
          <motion.div
            className="hidden lg:flex flex-shrink-0 relative items-center justify-center"
            style={{ width: '420px', height: '500px' }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.7 }}
          >
            {/* Outer ambient glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 50%,rgba(129,140,248,0.28),transparent 65%)', filter: 'blur(50px)' }} />

            {/* Slow rotating dashed ring */}
            <div className="spin-ring-slow absolute rounded-full pointer-events-none"
              style={{ inset: '12px', border: '1px dashed rgba(129,140,248,0.18)' }} />

            {/* Reverse rotating ring */}
            <div className="spin-ring-reverse absolute rounded-full pointer-events-none"
              style={{ inset: '34px', border: '1px solid rgba(192,132,252,0.12)' }} />

            {/* Photo frame */}
            <motion.div
              className="relative rounded-full overflow-hidden z-10"
              style={{
                width: '280px',
                height: '280px',
                padding: '3px',
                background: 'linear-gradient(135deg,#60a5fa,#818cf8,#c084fc,#818cf8)',
                boxShadow: '0 0 0 1px rgba(129,140,248,0.15), 0 20px 60px rgba(129,140,248,0.35)',
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={heroImg}
                alt="Hafiz Ammar Hameed"
                className="w-full h-full rounded-full object-cover object-top"
                style={{ background: 'var(--hero-bg)' }}
              />
              {/* Subtle overlay for blending */}
              <div className="absolute inset-0 rounded-full"
                style={{ background: 'linear-gradient(to bottom,transparent 60%,rgba(4,2,14,0.35))' }} />
            </motion.div>

            {/* Online dot */}
            <div className="absolute z-20 rounded-full border-[3px]"
              style={{
                width: '22px', height: '22px',
                bottom: 'calc(50% - 140px + 22px)',
                right: 'calc(50% - 140px + 16px)',
                background: '#4ade80',
                borderColor: 'var(--hero-bg)',
                boxShadow: '0 0 12px rgba(74,222,128,0.9)',
              }} />

            {/* Chip: Experience — top right */}
            <motion.div
              className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl cursor-default"
              style={{ top: '40px', right: '0', background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.24)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 24px rgba(129,140,248,0.18)', zIndex: 3 }}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 75 }}
              whileHover={{ scale: 1.06, x: -4 }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: 'rgba(129,140,248,0.18)' }}>🚀</div>
              <div className="text-left">
                <div className="text-xs font-bold" style={{ color: 'var(--text-1)' }}>7+ Years</div>
                <div className="text-[10px]" style={{ color: 'var(--text-2)' }}>Experience</div>
              </div>
            </motion.div>

            {/* Chip: Design — left */}
            <motion.div
              className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl cursor-default"
              style={{ top: '130px', left: '0', background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.24)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 24px rgba(192,132,252,0.18)', zIndex: 3 }}
              initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 75 }}
              whileHover={{ scale: 1.06, x: 4 }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: 'rgba(192,132,252,0.18)' }}>🎨</div>
              <div className="text-left">
                <div className="text-xs font-bold" style={{ color: 'var(--text-1)' }}>UI Designer</div>
                <div className="text-[10px]" style={{ color: 'var(--text-2)' }}>& Developer</div>
              </div>
            </motion.div>

            {/* Chip: Tech — bottom left */}
            <motion.div
              className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl cursor-default"
              style={{ bottom: '90px', left: '0', background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.24)', backdropFilter: 'blur(16px)', boxShadow: '0 4px 24px rgba(96,165,250,0.18)', zIndex: 3 }}
              initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, type: 'spring', stiffness: 75 }}
              whileHover={{ scale: 1.06, x: 4 }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: 'rgba(96,165,250,0.18)' }}>⚡</div>
              <div className="text-left">
                <div className="text-xs font-bold" style={{ color: 'var(--text-1)' }}>React & Vue</div>
                <div className="text-[10px]" style={{ color: 'var(--text-2)' }}>Expert Level</div>
              </div>
            </motion.div>

            {/* Chip: Available — bottom right */}
            <motion.div
              className="absolute flex items-center gap-2 px-3.5 py-2.5 rounded-2xl cursor-default"
              style={{ bottom: '58px', right: '8px', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.28)', backdropFilter: 'blur(12px)', boxShadow: '0 4px 20px rgba(74,222,128,0.12)', zIndex: 3 }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, type: 'spring', stiffness: 75 }}
              whileHover={{ scale: 1.08 }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.9)' }} />
              <span className="text-[10px] font-bold" style={{ color: '#4ade80' }}>Available Now</span>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Tech marquee ── */}
      <div className="relative z-10 overflow-hidden py-4 mb-12"
        style={{
          borderTop:    '1px solid rgba(129,140,248,0.08)',
          borderBottom: '1px solid rgba(129,140,248,0.08)',
          maskImage:    'linear-gradient(90deg,transparent 0%,black 12%,black 88%,transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg,transparent 0%,black 12%,black 88%,transparent 100%)',
        }}>
        <div className="marquee-track gap-4">
          {(() => {
            const items = [
              { label: 'React.js',     c: '#818cf8' }, { label: 'Vue.js',       c: '#60a5fa' },
              { label: 'Angular',      c: '#c084fc' }, { label: 'TypeScript',   c: '#818cf8' },
              { label: 'Tailwind CSS', c: '#60a5fa' }, { label: 'Next.js',      c: '#c084fc' },
              { label: 'GSAP',         c: '#818cf8' }, { label: 'Figma',        c: '#60a5fa' },
              { label: 'Node.js',      c: '#c084fc' }, { label: 'Builder.io',   c: '#818cf8' },
              { label: 'WordPress',    c: '#60a5fa' }, { label: 'GraphQL',      c: '#c084fc' },
            ]
            return [...items, ...items].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0"
                style={{ background: `${item.c}12`, color: item.c, border: `1px solid ${item.c}28` }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.c }} />
                {item.label}
              </div>
            ))
          })()}
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.button
        onClick={() => go('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        style={{ opacity: fadeOut }}
      >
        <div className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: '1px solid rgba(129,140,248,0.2)' }}>
          <div className="w-1 h-2.5 rounded-full"
            style={{ background: 'linear-gradient(to bottom,#60a5fa,#818cf8)', animation: 'scroll-dot 1.8s ease-in-out infinite' }} />
        </div>
        <span className="text-[9px] tracking-[0.25em] uppercase" style={{ color: 'var(--text-3)' }}>scroll</span>
      </motion.button>
    </section>
  )
}
