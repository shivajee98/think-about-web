"use client"

import { useEffect, useState } from "react"

export default function CursorSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let animationFrame: number

    const updateMousePosition = (e: MouseEvent | TouchEvent) => {
      let clientX: number, clientY: number

      if (e.type.startsWith("touch")) {
        const touchEvent = e as TouchEvent
        if (touchEvent.touches.length > 0) {
          clientX = touchEvent.touches[0].clientX
          clientY = touchEvent.touches[0].clientY
        } else {
          return
        }
      } else {
        const mouseEvent = e as MouseEvent
        clientX = mouseEvent.clientX
        clientY = mouseEvent.clientY
      }

      // Cancel previous animation frame
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }

      // Use requestAnimationFrame for smooth animation
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: clientX, y: clientY })
        setIsVisible(true)
      })
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Mouse events for desktop
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseleave", handleMouseLeave)

    // Touch events for mobile
    window.addEventListener("touchmove", updateMousePosition, { passive: true })
    window.addEventListener("touchstart", updateMousePosition, { passive: true })
    window.addEventListener("touchend", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("touchmove", updateMousePosition)
      window.removeEventListener("touchstart", updateMousePosition)
      window.removeEventListener("touchend", handleMouseLeave)

      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(17, 63, 103, 0.06), transparent 40%)`,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    />
  )
}
