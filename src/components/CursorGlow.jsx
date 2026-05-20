import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    // Only on pointer-capable devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    let tx = -600, ty = -600
    let cx = -600, cy = -600
    let raf

    const onMove = (e) => { tx = e.clientX; ty = e.clientY }
    document.addEventListener('mousemove', onMove, { passive: true })

    const tick = () => {
      cx += (tx - cx) * 0.09
      cy += (ty - cy) * 0.09
      if (ref.current) {
        ref.current.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '520px',
        height: '520px',
        borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(129,140,248,0.07) 0%,transparent 65%)',
        pointerEvents: 'none',
        zIndex: 9990,
        willChange: 'transform',
      }}
    />
  )
}
