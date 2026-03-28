import { useEffect } from 'react'

export function useReveal(dep?: unknown) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('visible')
          })
        },
        { threshold: 0.08 }
      )
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom').forEach((el) => {
        el.classList.remove('visible')
        observer.observe(el)
      })
      return () => observer.disconnect()
    }, 50)
    return () => clearTimeout(timer)
  }, [dep])
}
