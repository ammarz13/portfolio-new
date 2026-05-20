import { useEffect, useState } from 'react'

export function useCounter(target, duration = 1600, active = false) {
  const [value, setValue] = useState(0)
  const num = parseInt(target)

  useEffect(() => {
    if (!active || isNaN(num)) return
    let start = null
    const tick = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.floor(eased * num))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, num, duration])

  return value
}
