"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { CalendlyModal } from "@/components/CalendlyModal"
import { Calendar, ArrowRight, Users, Trophy, Zap, Target, Gift, Flame, CheckCircle2, Star } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function CalendlySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [timeLeft, setTimeLeft] = useState({ hours: 48, minutes: 0, seconds: 0 })
  const [remainingAudits, setRemainingAudits] = useState(3)

  useEffect(() => {
    // Générer nombre aléatoire d'audits restants entre 1 et 5
    setRemainingAudits(Math.floor(Math.random() * 5) + 1)
    
    // Countdown timer pour créer l'urgence
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const stats = sectionRef.current.querySelectorAll('.booking-stat')
    stats.forEach((stat) => {
      const element = stat as HTMLElement
      const value = element.dataset.value || '0'
      const suffix = element.dataset.suffix || ''
      
      gsap.fromTo(element, 
        { textContent: '0' },
        {
          textContent: value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            once: true
          },
          snap: { textContent: 1 },
          onUpdate: function() {
            element.textContent = Math.floor(Number(this.targets()[0].textContent)) + suffix
          }
        }
      )
    })
  }, [])


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

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-6">
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
                  className="group shadow-xl flex items-center justify-center bg-gradient-to-r from-violet/90 to-orange/90 hover:from-violet hover:to-orange transition-all duration-300 border-2 border-white/20 backdrop-blur-sm transform hover:scale-105"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="font-semibold">Réserver mon créneau gratuit</span>
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
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

            {/* CTA Section droite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Card principale avec offre */}
              <div className="relative">
                {/* Badge "Offre limitée" - Positionné en dehors */}
                <div className="absolute -top-5 -right-4 z-50">
                  <div className="bg-gradient-to-r from-orange via-red-500 to-orange text-white px-8 py-3 rotate-12 text-sm font-black shadow-2xl rounded-sm transform hover:scale-110 transition-transform">
                    <span className="flex items-center gap-1">
                      <Flame className="w-4 h-4 animate-pulse" />
                      OFFRE LIMITÉE
                    </span>
                  </div>
                </div>

                {/* Glow effect animé */}
                <div className="absolute -inset-4 bg-gradient-to-r from-violet via-orange to-violet rounded-premium opacity-30 blur-2xl animate-pulse" />
                
                <div className="relative glass rounded-premium p-8 overflow-visible">

                  {/* Timer urgent */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                      <Flame className="w-4 h-4 text-red-500 animate-pulse" />
                      <span className="text-sm font-semibold text-red-500">Plus que {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                    </div>
                  </div>

                  {/* Offre principale */}
                  <div className="text-center mb-8">
                    <div className="mb-4">
                      <Gift className="w-16 h-16 mx-auto text-violet mb-4" />
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                        Audit{" "}
                        <span className="text-gradient">100% OFFERT</span>
                      </h3>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">
                        + 30% DE RÉDUCTION
                      </div>
                      <p className="text-lg text-foreground-muted">
                        Sur votre première prestation
                      </p>
                    </div>

                    {/* Valeur de l'offre */}
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-violet/10 to-orange/10 rounded-glass mb-6">
                      <div>
                        <span className="text-sm text-foreground-muted line-through">Valeur 497€</span>
                        <div className="text-2xl font-bold text-gradient">GRATUIT</div>
                      </div>
                      <div className="w-px h-12 bg-white/20" />
                      <div>
                        <span className="text-sm text-foreground-muted">Économisez</span>
                        <div className="text-2xl font-bold text-orange">897€</div>
                      </div>
                    </div>

                    {/* Points inclus */}
                    <div className="space-y-3 mb-8 text-left">
                      {[
                        "Analyse complète de votre présence digitale",
                        "Audit de vos concurrents directs",
                        "Plan d'action personnalisé sur 90 jours",
                        "Estimation du ROI potentiel",
                        "30 minutes de conseil stratégique"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Principal */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <Button
                        size="lg"
                        className="w-full text-lg py-7 bg-gradient-to-r from-violet via-purple-500 to-orange hover:from-orange hover:via-red-500 hover:to-violet transition-all duration-500 shadow-2xl group flex items-center justify-center relative overflow-hidden"
                        onClick={() => setIsModalOpen(true)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                        <span className="font-bold tracking-wide relative z-10">RÉCLAMER MON OFFRE</span>
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform flex-shrink-0 relative z-10" />
                      </Button>
                      {/* Icône cadeau dans le coin */}
                      <div className="absolute -bottom-2 -right-2 pointer-events-none">
                        <div className="p-3 bg-gradient-to-br from-violet to-orange rounded-full shadow-lg animate-bounce">
                          <Gift className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Garanties */}
                    <div className="flex items-center justify-center gap-6 mt-6 text-xs text-foreground-muted">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Sans engagement</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Résultats garantis</span>
                      </div>
                    </div>
                  </div>

                  {/* Nombre de places restantes */}
                  <div className="mt-6 p-4 bg-orange/10 border border-orange/20 rounded-glass">
                    <p className="text-center text-sm">
                      <span className="font-bold text-orange">⚠️ Attention:</span>{" "}
                      <span className="text-foreground-muted">
                        Plus que <span className="font-bold text-white">{remainingAudits} audit{remainingAudits > 1 ? 's' : ''} gratuit{remainingAudits > 1 ? 's' : ''}</span> disponible{remainingAudits > 1 ? 's' : ''} ce mois
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Témoignage rapide */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6 p-4 glass rounded-glass"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet to-orange rounded-full flex items-center justify-center text-white font-bold">
                      M
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground-muted italic">
                      "L'audit gratuit nous a permis d'identifier des opportunités insoupçonnées. ROI x4 en 3 mois!"
                    </p>
                    <p className="text-xs text-foreground-muted mt-2">
                      <span className="font-semibold">Marie L.</span> - CEO @TechStartup
                    </p>
                  </div>
                </div>
              </motion.div>
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