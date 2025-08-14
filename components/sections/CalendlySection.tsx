"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { CalendlyModal } from "@/components/CalendlyModal"
import { CalendlyEmbed } from "@/components/CalendlyEmbed"
import { Calendar, ArrowRight, Users, Trophy, Zap, Target } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function CalendlySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animation du calendrier
    if (calendarRef.current) {
      const days = calendarRef.current.querySelectorAll(".calendar-day")
      
      gsap.fromTo(
        days,
        {
          opacity: 0,
          scale: 0.8,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.02,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: calendarRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }

    // Animation des stats
    const stats = document.querySelectorAll(".booking-stat")
    stats.forEach((stat) => {
      const value = stat.getAttribute("data-value") || "0"
      const suffix = stat.getAttribute("data-suffix") || ""
      
      gsap.to(stat, {
        innerHTML: value + suffix,
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: stat,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })
  }, [])

  // Générer un calendrier fictif pour l'effet visuel
  const generateCalendarDays = () => {
    const days = []
    const today = new Date().getDate()
    
    for (let i = 1; i <= 30; i++) {
      const isToday = i === today
      const isAvailable = [5, 8, 12, 15, 19, 22, 26, 29].includes(i)
      const isBooked = [3, 7, 10, 14, 17, 21, 24].includes(i)
      
      days.push({
        day: i,
        isToday,
        isAvailable,
        isBooked,
      })
    }
    return days
  }

  return (
    <>
      <section ref={sectionRef} className="py-20 relative overflow-hidden">
        {/* Background avec gradient animé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-dark to-orange/5" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet/20 to-orange/20 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu gauche */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                <Calendar className="w-4 h-4 text-violet" />
                <span className="text-sm font-semibold">Derniers créneaux disponibles</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Transformez votre business en{" "}
                <span className="text-gradient">30 minutes</span>
              </h2>

              <p className="text-xl text-foreground-muted mb-8">
                Découvrez comment exploser votre acquisition client avec une stratégie sur-mesure. 
                Audit offert, plan d'action concret, ROI garanti.
              </p>

              {/* Points clés */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Target, text: "Analyse de votre positionnement actuel" },
                  { icon: Zap, text: "Identification des leviers de croissance rapides" },
                  { icon: Trophy, text: "Plan d'action concret et chiffré" },
                  { icon: Users, text: "Accès à notre expertise 150+ clients" },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="p-2 bg-gradient-to-br from-violet/20 to-orange/20 rounded-glass">
                        <Icon className="w-4 h-4 text-violet" />
                      </div>
                      <span className="text-foreground-muted">{item.text}</span>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group shadow-xl"
                  onClick={() => setIsModalOpen(true)}
                >
                  Réserver mon créneau gratuit
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center gap-2 text-sm text-foreground-muted">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-violet to-orange flex items-center justify-center text-xs font-bold border-2 border-dark"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span>+12 RDV cette semaine</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { value: "500", suffix: "+", label: "Audits réalisés" },
                  { value: "98", suffix: "%", label: "Satisfaction" },
                  { value: "24", suffix: "h", label: "Réponse max" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="booking-stat text-3xl font-bold text-gradient"
                      data-value={stat.value}
                      data-suffix={stat.suffix}
                    >
                      0
                    </div>
                    <div className="text-xs text-foreground-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Calendrier visuel droite */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-premium p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Décembre 2024</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-violet rounded-full" />
                      <span className="text-foreground-muted">Disponible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange rounded-full" />
                      <span className="text-foreground-muted">Réservé</span>
                    </div>
                  </div>
                </div>

                {/* Grille calendrier */}
                <div ref={calendarRef} className="grid grid-cols-7 gap-2">
                  {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                    <div key={i} className="text-center text-xs text-foreground-muted font-semibold py-2">
                      {day}
                    </div>
                  ))}
                  
                  {generateCalendarDays().map((day, i) => (
                    <motion.div
                      key={i}
                      className={`
                        calendar-day aspect-square rounded-glass flex items-center justify-center text-sm font-medium
                        transition-all cursor-pointer
                        ${day.isToday ? "ring-2 ring-violet" : ""}
                        ${day.isAvailable ? "bg-gradient-to-br from-violet/20 to-violet/10 hover:from-violet/30 hover:to-violet/20 text-violet" : ""}
                        ${day.isBooked ? "bg-gradient-to-br from-orange/20 to-orange/10 text-orange opacity-50" : ""}
                        ${!day.isAvailable && !day.isBooked ? "bg-glass opacity-30" : ""}
                      `}
                      whileHover={day.isAvailable ? { scale: 1.1 } : {}}
                      whileTap={day.isAvailable ? { scale: 0.95 } : {}}
                      onClick={day.isAvailable ? () => setIsModalOpen(true) : undefined}
                    >
                      {day.day}
                    </motion.div>
                  ))}
                </div>

                {/* Message */}
                <div className="mt-6 p-4 bg-gradient-to-r from-violet/10 to-orange/10 rounded-glass">
                  <p className="text-sm text-center">
                    <span className="font-semibold text-violet">8 créneaux</span> disponibles cette semaine
                  </p>
                </div>

                {/* Action rapide */}
                <Button 
                  className="w-full mt-4"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Voir tous les créneaux disponibles
                </Button>
              </div>

              {/* Effet de brillance */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet to-orange rounded-premium opacity-20 blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal Calendly */}
      <CalendlyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}