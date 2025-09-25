"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { CalendlyModal } from "@/components/CalendlyModal"
import { Calendar, Clock, Shield, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function CTASection() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animation du glow de fond
    gsap.to(glowRef.current, {
      scale: 1.2,
      opacity: 0.8,
      duration: 4,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    })

    // Animation des éléments au scroll
    gsap.fromTo(
      ".cta-content",
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Animation des badges
    const badges = gsap.utils.toArray(".cta-badge")
    badges.forEach((badge: any, index) => {
      gsap.fromTo(
        badge,
        {
          opacity: 0,
          x: index % 2 === 0 ? -30 : 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: badge,
            start: "top 85%",
          },
          delay: index * 0.1,
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:py-16 md:py-20 relative overflow-x-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-dark to-orange/10" />
        <div
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-violet/30 to-orange/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="cta-content glass rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 text-center w-full mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet/20 to-orange/20 rounded-full mb-6 mx-auto justify-center"
          >
            <div className="w-2 h-2 bg-accent-success rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-center">Slots limités ce mois</span>
          </motion.div>

          {/* Titre principal */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-center mx-auto">
            Audit acquisition <span className="text-gradient">gratuit</span>
          </h2>

          <p className="text-sm sm:text-lg md:text-xl text-foreground-muted mb-6 sm:mb-8 max-w-2xl mx-auto text-center px-4 sm:px-0">
            Diagnostic complet de votre tunnel d'acquisition. Google Ads, Meta Ads, SEO. 
            <span className="text-white font-medium">ROI x4 garanti ou remboursé.</span>
          </p>

          {/* Badges de confiance */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-6 sm:mb-8 mx-auto">
            <div className="cta-badge flex items-center justify-center gap-2 glass rounded-lg p-4 w-full">
              <Calendar className="w-5 h-5 text-violet" />
              <span className="text-sm text-center">Rendez-vous sous 48h</span>
            </div>
            <div className="cta-badge flex items-center justify-center gap-2 glass rounded-lg p-4 w-full">
              <Clock className="w-5 h-5 text-orange" />
              <span className="text-sm text-center">Audit acquisition offert</span>
            </div>
            <div className="cta-badge flex items-center justify-center gap-2 glass rounded-lg p-4 w-full">
              <Shield className="w-5 h-5 text-accent-success" />
              <span className="text-sm text-center">Sans engagement</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-col md:flex-row gap-4 justify-center mx-auto w-full">
            <Button
              size="lg"
              className="group shadow-xl w-full sm:w-full md:w-auto min-h-[44px] px-6"
              onClick={() => setIsCalendlyOpen(true)}
            >
              Audit acquisition gratuit
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-full md:w-auto min-h-[44px] px-6"
              onClick={() => {
                // Scroll vers le formulaire ou ouvrir WhatsApp
                window.open("https://wa.me/33600000000?text=Bonjour, je souhaite obtenir un audit gratuit", "_blank")
              }}
            >
              Discuter sur WhatsApp
            </Button>
          </div>

          {/* Urgency text */}
          <p className="text-sm text-foreground-muted mt-4 sm:mt-6 text-center">
            Réponse garantie sous 24h • ROI x4 minimum garanti • Plus de 150 audits réalisés
          </p>

          {/* Mini calendrier visuel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 grid grid-cols-7 gap-2 max-w-xs mx-auto"
          >
            {[...Array(7)].map((_, i) => {
              const isAvailable = i === 2 || i === 4 || i === 5
              return (
                <div
                  key={i}
                  className={cn(
                    "h-10 rounded-md flex items-center justify-center text-sm font-medium transition-all min-h-[44px]",
                    isAvailable
                      ? "bg-gradient-to-br from-violet/20 to-orange/20 hover:from-violet/30 hover:to-orange/30 cursor-pointer"
                      : "bg-glass opacity-50"
                  )}
                >
                  {isAvailable && "Libre"}
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats flottants */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-4"
        >
          {[
            { value: "2h", label: "Temps de réponse moyen" },
            { value: "98%", label: "Taux de satisfaction" },
            { value: "+500", label: "Audits réalisés" },
            { value: "4.9★", label: "Note Google" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mx-auto"
            >
              <div className="text-xl sm:text-2xl font-bold text-gradient text-center">{stat.value}</div>
              <div className="text-sm text-foreground-muted text-center">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </section>
  )
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}