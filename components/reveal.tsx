"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

// Aparición al hacer scroll: opacidad + 12px, una sola vez por sección.
// Si el navegador no soporta IntersectionObserver, o el usuario prefiere
// menos movimiento, el contenido simplemente se ve desde el inicio — la
// clase base .reveal solo oculta algo dentro de
// @media (prefers-reduced-motion: no-preference) en globals.css.
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </div>
  )
}
