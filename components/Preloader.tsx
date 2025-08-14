"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [textIndex, setTextIndex] = useState(0)

  const loadingTexts = [
    "Initialisation de l'excellence",
    "Chargement des performances",
    "Optimisation de votre expérience",
    "Préparation de la transformation",
    "Activation du mode croissance"
  ]

  useEffect(() => {
    // Simulate loading progress with variable speed
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 20 + 5
        const newProgress = Math.min(prev + increment, 100)
        
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 800)
        }
        
        return newProgress
      })
    }, 300)

    // Change text periodically
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length)
    }, 1500)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)"
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-gradient-to-br from-dark via-dark-muted to-dark flex items-center justify-center overflow-hidden"
        >
          {/* Animated background patterns */}
          <div className="absolute inset-0">
            {/* Rotating gradient orbs */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
            >
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet/30 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange/30 rounded-full blur-[120px]" />
            </motion.div>

            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #7B61FF 1px, transparent 1px),
                  linear-gradient(to bottom, #7B61FF 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />

            {/* Floating particles */}
            {typeof window !== 'undefined' && Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-violet/50 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                  y: (typeof window !== 'undefined' ? window.innerHeight : 1080) + 10,
                }}
                animate={{
                  y: -10,
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          <div className="relative z-10 w-full max-w-2xl px-8">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                damping: 15
              }}
              className="flex justify-center mb-16"
            >
              <div className="relative">
                {/* Logo glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-violet to-orange blur-3xl opacity-50"
                />
                
                {/* Logo */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 rounded-full border-2 border-violet/20"
                  />
                  <motion.div
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 rounded-full border-2 border-orange/20 scale-110"
                  />
                  <Image
                    src="/ASSETS/LOGOS DIGIFLOW/Logo Digiflow.svg"
                    alt="DIGIFLOW"
                    width={200}
                    height={200}
                    className="relative z-10"
                  />
                </div>
              </div>
            </motion.div>

            {/* Progress container */}
            <div className="space-y-8">
              {/* Progress percentage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-7xl font-bold bg-gradient-to-r from-violet via-purple-400 to-orange bg-clip-text text-transparent tabular-nums">
                  {Math.round(progress)}%
                </div>
              </motion.div>

              {/* Advanced progress bar */}
              <div className="relative h-2 bg-white/5 rounded-full overflow-hidden backdrop-blur-xl">
                {/* Background shimmer */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                
                {/* Progress fill */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet via-purple-500 to-orange rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Glow at the end */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-md" />
                </motion.div>
              </div>

              {/* Loading text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center space-y-2"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={textIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg text-white/80 font-medium"
                  >
                    {loadingTexts[textIndex]}
                  </motion.p>
                </AnimatePresence>
                
                <p className="text-sm text-white/40">
                  Préparation de votre expérience premium
                </p>
              </motion.div>

              {/* Mini stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5"
              >
                {[
                  { value: "150+", label: "Sites lancés" },
                  { value: "4.9★", label: "Note moyenne" },
                  { value: "98%", label: "Satisfaction" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-xl font-bold text-white/90">{stat.value}</div>
                    <div className="text-xs text-white/40">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}