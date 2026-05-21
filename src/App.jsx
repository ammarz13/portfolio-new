import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CursorGlow from './components/CursorGlow.jsx'

export default function App() {
  useEffect(() => {
    const TILT = 9
    const fns = []

    const attach = (card) => {
      if (card.dataset.tilt) return
      card.dataset.tilt = '1'

      const move = (e) => {
        const r  = card.getBoundingClientRect()
        const nx = (e.clientX - r.left) / r.width  - 0.5
        const ny = (e.clientY - r.top)  / r.height - 0.5
        card.style.transform  = `perspective(900px) rotateX(${ny * -TILT}deg) rotateY(${nx * TILT}deg) translateY(-5px) scale3d(1.015,1.015,1.015)`
        card.style.transition = 'transform 0.12s ease'
        card.style.setProperty('--shine-x', `${(nx + 0.5) * 100}%`)
        card.style.setProperty('--shine-y', `${(ny + 0.5) * 100}%`)
      }
      const leave = () => {
        card.style.transform  = ''
        card.style.transition = 'transform 0.7s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.35s ease'
        card.style.setProperty('--shine-x', '50%')
        card.style.setProperty('--shine-y', '-20%')
      }

      card.addEventListener('mousemove', move)
      card.addEventListener('mouseleave', leave)
      fns.push(() => { card.removeEventListener('mousemove', move); card.removeEventListener('mouseleave', leave) })
    }

    const run = () => document.querySelectorAll('.glass-card').forEach(attach)
    run()
    const t = setTimeout(run, 900)
    return () => { clearTimeout(t); fns.forEach(f => f()) }
  }, [])

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
