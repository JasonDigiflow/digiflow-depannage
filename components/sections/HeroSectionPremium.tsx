"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useDragControls, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { ArrowRight, Sparkles, Rocket, Target, Zap, TrendingUp, Code, Palette, MousePointer2, Star, Award, BarChart3, Heart } from "lucide-react"
import Link from "next/link"

// Éléments draggables avec icônes acquisition
const draggableElements = [
  { id: 1, label: "Google Ads", color: "from-violet/30 to-purple-500/30", icon: Rocket },
  { id: 2, label: "Meta Ads", color: "from-orange/30 to-red-500/30", icon: Target },
  { id: 3, label: "ROI x4", color: "from-yellow-500/30 to-orange/30", icon: Zap },
  { id: 4, label: "Growth", color: "from-green-500/30 to-emerald-500/30", icon: TrendingUp },
  { id: 5, label: "Landing", color: "from-blue-500/30 to-violet/30", icon: Sparkles },
  { id: 6, label: "Convert", color: "from-pink-500/30 to-purple-500/30", icon: Palette },
  { id: 7, label: "Acquire", color: "from-cyan-500/30 to-blue-500/30", icon: Code },
]

function DraggableElement({ element, index, constraintRef, showAfterPreload }: { element: any; index: number; constraintRef: React.RefObject<HTMLDivElement>; showAfterPreload: boolean }) {
  const dragControls = useDragControls()
  const [isDragging, setIsDragging] = useState(false)
  const Icon = element.icon

  // Générer des positions aléatoires autour du centre qui évitent le texte
  const getRandomPosition = () => {
    // Positions prédéfinies qui évitent le centre où se trouve le texte
    const safePositions = [
      { x: -350, y: -200 }, // Haut gauche
      { x: 350, y: -180 },  // Haut droite
      { x: -400, y: 0 },    // Gauche
      { x: 400, y: 20 },    // Droite
      { x: -300, y: 250 },  // Bas gauche
      { x: 300, y: 240 },   // Bas droite
      { x: 0, y: -280 },    // Haut centre
    ]
    
    // Ajouter une variation aléatoire à la position de base
    const basePosition = safePositions[index] || { x: 0, y: 0 }
    const variation = 50 // Variation aléatoire en pixels
    
    return {
      x: basePosition.x + (Math.random() - 0.5) * variation,
      y: basePosition.y + (Math.random() - 0.5) * variation
    }
  }

  const [position] = useState(getRandomPosition)

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragConstraints={constraintRef}
      dragElastic={0.3}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
      whileDrag={{ scale: 1.2, zIndex: 9999 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ 
        opacity: 0, 
        scale: 0,
        x: 0,
        y: 0
      }}
      animate={{ 
        opacity: showAfterPreload ? 1 : 0, 
        scale: showAfterPreload ? 1 : 0,
        x: showAfterPreload ? position.x : 0,
        y: showAfterPreload ? position.y : 0
      }}
      transition={{ 
        delay: showAfterPreload ? 0.5 + index * 0.15 : 0,
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }}
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        zIndex: isDragging ? 9999 : 40
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: isDragging ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          y: {
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 0.5,
            repeat: Infinity
          }
        }}
        className={`
          relative group
          w-20 h-20 md:w-24 md:h-24
          bg-gradient-to-br ${element.color}
          backdrop-blur-xl
          rounded-2xl md:rounded-3xl
          border border-white/10
          shadow-2xl
          hover:shadow-[0_20px_50px_rgba(123,97,255,0.3)]
          transition-all duration-300
          ${isDragging ? 'ring-4 ring-violet/50' : ''}
        `}
      >
        {/* Icône principale avec effet de brillance */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-white/90 drop-shadow-lg" />
          <span className="text-xs font-medium text-white/70 mt-1">{element.label}</span>
        </div>
        
        {/* Effet de brillance au survol */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl md:rounded-3xl" />
        </div>

        {/* Label */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
          <span className="text-xs text-white/60 whitespace-nowrap">{element.label}</span>
        </div>

        {/* Effet de brillance */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </motion.div>
  )
}

export function HeroSectionPremium() {
  const { openCalendly } = useCalendlyStore()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showDraggables, setShowDraggables] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const constraintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Vérifier si le preload est terminé
    const checkPreloadStatus = () => {
      const preloadElement = document.querySelector('.preloader')
      if (!preloadElement) {
        // Si pas de preloader ou déjà terminé, montrer les éléments après un délai
        setTimeout(() => {
          setShowDraggables(true)
        }, 1000)
      } else {
        // Attendre que le preloader disparaisse
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              const preloadElement = document.querySelector('.preloader')
              if (!preloadElement) {
                setShowDraggables(true)
                observer.disconnect()
              }
            }
          })
        })
        observer.observe(document.body, { childList: true, subtree: true })
      }
    }

    checkPreloadStatus()

    // Animation d'entrée avec GSAP
    const tl = gsap.timeline()

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      )

    // Effet de particules qui suivent la souris
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Gradient de fond animé premium */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-muted to-dark" />
        
        {/* Mesh gradient animé */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(123, 97, 255, 0.15) 0%, transparent 50%)`,
          }}
        />
        
        {/* Grille subtile */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Orbes de lumière flottants */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Éléments draggables - devant le texte mais positionnés pour ne pas l'empiéter */}
      <div 
        ref={constraintRef}
        className="absolute inset-0 overflow-hidden pointer-events-none z-30"
      >
        <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
          {draggableElements.map((element, index) => (
            <DraggableElement 
              key={element.id} 
              element={element} 
              index={index} 
              constraintRef={constraintRef}
              showAfterPreload={showDraggables}
            />
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge disponibilité premium */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          {/* Message de disponibilité */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 blur-xl opacity-80 animate-pulse" />
            <div className="relative px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-full border border-green-500/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  🔥 2 projets disponibles pour Septembre 2025
                </span>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Badge interactif */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet to-orange blur-xl opacity-60 animate-pulse" />
            <div className="relative px-6 py-3 bg-gradient-to-r from-violet/10 to-orange/10 backdrop-blur-xl rounded-full border border-white/10">
              <div className="flex items-center gap-2">
                <MousePointer2 className="w-4 h-4 text-violet animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-violet to-orange bg-clip-text text-transparent">
                  Déplacez les éléments • Créez votre expérience
                </span>
                <Sparkles className="w-4 h-4 text-orange animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Titre principal avec effet premium */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 leading-tight"
        >
          <span className="block mb-2">
            <span className="inline-block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Multipliez vos
            </span>
          </span>
          <span className="inline-block relative">
            <span className="relative z-10 bg-gradient-to-r from-violet via-purple-400 to-orange bg-clip-text text-transparent animate-gradient-x">
              clients par 4
            </span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-violet/30 to-orange/30 blur-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </span>
        </h1>

        {/* Sous-titre stylé */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Agence d'acquisition client avec{" "}
          <span className="text-white font-medium">ROI moyen x4</span>. 
          Google Ads, Meta Ads et{" "}
          <span className="bg-gradient-to-r from-violet to-orange bg-clip-text text-transparent font-medium">
            stratégies d'acquisition performantes
          </span>
        </p>

        {/* CTAs premium */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="group relative px-8 py-6 text-base font-medium overflow-hidden inline-flex"
              onClick={openCalendly}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet via-purple-500 to-orange transition-all duration-300 group-hover:scale-110" />
              <span className="relative z-10 inline-flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                <span>Obtenir mon audit gratuit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-base backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10"
              asChild
            >
              <Link href="#cases">
                <span className="flex items-center gap-3">
                  Voir nos réalisations
                  <TrendingUp className="w-5 h-5" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Social Proof premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { label: "Sites lancés", value: "+150", icon: Rocket },
            { label: "Note Google", value: "4.9★", icon: Star },
            { label: "ROI garanti", value: "x4", icon: BarChart3 },
            { label: "Satisfaction", value: "98%", icon: Heart },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet/20 to-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative px-6 py-3 glass rounded-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-violet/30 to-orange/30 rounded-xl">
                      <Icon className="w-6 h-6 text-white/90" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-violet to-orange bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Indicateur de scroll premium */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-xl">
            <motion.div 
              className="w-1.5 h-3 bg-gradient-to-b from-violet to-orange rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

    </section>
  )
}