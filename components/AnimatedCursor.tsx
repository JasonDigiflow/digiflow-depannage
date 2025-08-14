"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

interface Firefly {
  id: number
  x: number
  y: number
  size: number
  delay: number
  color: string
}

export function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  
  // Motion values for smooth cursor movement
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  // Spring physics for smooth animation
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Create fireflies
  const [fireflies] = useState<Firefly[]>(() => 
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
      size: Math.random() * 4 + 2,
      delay: i * 0.1,
      color: i % 2 === 0 ? "#7B61FF" : "#FF8A00"
    }))
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.onclick !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      
      setIsPointer(isClickable)
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY])

  useEffect(() => {
    // Add styles to hide cursor
    const style = document.createElement('style')
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>

      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isPointer ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Main cursor dot */}
          <motion.div
            className="w-4 h-4 rounded-full bg-white"
            animate={{
              scale: isPointer ? 0.5 : 1,
            }}
          />
          
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 -inset-4 rounded-full border-2 border-white/30"
            animate={{
              scale: isPointer ? 1.2 : 0.8,
              opacity: isPointer ? 1 : 0.5,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Fireflies following cursor */}
      {fireflies.map((firefly) => (
        <motion.div
          key={firefly.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          animate={{
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
          }}
          transition={{
            duration: 2 + firefly.delay,
            delay: firefly.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: firefly.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Firefly glow */}
            <div 
              className="rounded-full blur-md"
              style={{
                width: firefly.size * 4,
                height: firefly.size * 4,
                backgroundColor: firefly.color,
                opacity: 0.4,
                transform: `translate(-50%, -50%)`,
              }}
            />
            {/* Firefly core */}
            <div 
              className="absolute top-1/2 left-1/2 rounded-full"
              style={{
                width: firefly.size,
                height: firefly.size,
                backgroundColor: firefly.color,
                transform: `translate(-50%, -50%)`,
                boxShadow: `0 0 ${firefly.size * 2}px ${firefly.color}`,
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </>
  )
}