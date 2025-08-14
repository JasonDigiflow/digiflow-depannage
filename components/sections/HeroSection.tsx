"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FlowRingScene } from "@/components/three/FlowRing"
import { CalendlyModal } from "@/components/CalendlyModal"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      )

    // Animation des mots clés
    gsap.to(".hero-keyword", {
      backgroundPosition: "200% center",
      duration: 3,
      ease: "power2.inOut",
      stagger: 0.5,
      repeat: -1,
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec effet de particules */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-muted to-dark" />
      
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Ellipses décoratives */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 right-10 w-64 h-64 opacity-20"
      >
        <Image
          src="/ASSETS/LOGOS DIGIFLOW/elipse2.png"
          alt=""
          fill
          className="object-contain animate-rotate-slow"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-20 left-10 w-48 h-48 opacity-15"
      >
        <Image
          src="/ASSETS/LOGOS DIGIFLOW/elipse3.svg"
          alt=""
          fill
          className="object-contain animate-float"
        />
      </motion.div>
      
      {/* Scene Three.js */}
      <FlowRingScene />
      
      {/* Effet de lumière radiale */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet/20 blur-[100px] rounded-full" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 glass rounded-full"
        >
          <Sparkles className="w-4 h-4 text-violet" />
          <span className="text-sm text-foreground-muted">Agence d'acquisition digitale</span>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight"
        >
          Des sites qui{" "}
          <span className="hero-keyword text-gradient bg-gradient-to-r from-violet to-orange bg-[length:200%_auto]">
            convertissent
          </span>
          .<br />
          Des campagnes qui{" "}
          <span className="hero-keyword text-gradient bg-gradient-to-r from-orange to-violet bg-[length:200%_auto]">
            acquièrent
          </span>
          .
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto"
        >
          DIGIFLOW crée des sites & systèmes d'acquisition qui génèrent de vraies opportunités,
          pas des likes.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="group"
            onClick={() => setIsCalendlyOpen(true)}
          >
            Obtenir mon audit gratuit
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#cases">Voir nos résultats</Link>
          </Button>
        </div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-success rounded-full animate-pulse" />
            <span className="text-sm text-foreground-muted">
              <span className="text-foreground font-semibold">+150</span> sites lancés
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-violet rounded-full animate-pulse" />
            <span className="text-sm text-foreground-muted">
              <span className="text-foreground font-semibold">4.9★</span> sur Google
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange rounded-full animate-pulse" />
            <span className="text-sm text-foreground-muted">
              CPA réduit jusqu'à <span className="text-foreground font-semibold">32%</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground-muted/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground-muted/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </section>
  )
}