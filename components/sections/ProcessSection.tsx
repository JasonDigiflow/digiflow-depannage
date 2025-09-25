"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { 
  Search, 
  Palette, 
  Code, 
  Rocket, 
  TrendingUp,
  CheckCircle 
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Audit",
    description: "Analyse approfondie de votre présence digitale et identification des opportunités de croissance",
    details: [
      "Audit technique SEO",
      "Analyse concurrentielle",
      "Étude du parcours client",
      "Identification des KPIs",
    ],
  },
  {
    id: 2,
    icon: Palette,
    title: "Design & Copy",
    description: "Création de maquettes et rédaction de contenus orientés conversion",
    details: [
      "Wireframes & prototypes",
      "Design system sur-mesure",
      "Copywriting persuasif",
      "Tests utilisateurs",
    ],
  },
  {
    id: 3,
    icon: Code,
    title: "Build",
    description: "Développement technique optimisé pour la performance et le SEO",
    details: [
      "Développement responsive",
      "Optimisation Core Web Vitals",
      "Intégrations API",
      "Tests multi-navigateurs",
    ],
  },
  {
    id: 4,
    icon: Rocket,
    title: "Trafic",
    description: "Déploiement des campagnes d'acquisition multi-canal",
    details: [
      "Campagnes Google Ads",
      "Social Ads ciblés",
      "Content marketing",
      "Email automation",
    ],
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Scale & Automation",
    description: "Optimisation continue et automatisation des processus",
    details: [
      "A/B testing continu",
      "Marketing automation",
      "Reporting mensuel",
      "Optimisations data-driven",
    ],
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    })

    // Animation de la barre de progression
    timeline.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
    })

    // Animation des étapes
    const steps = gsap.utils.toArray(".process-step")
    steps.forEach((step: any, index) => {
      gsap.fromTo(
        step,
        {
          opacity: 0,
          scale: 0.8,
          rotateY: -30,
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      )

      // Animation des icônes 3D
      const icon = step.querySelector(".process-icon")
      if (icon) {
        gsap.to(icon, {
          rotateY: 360,
          duration: 2,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 3,
        })
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:py-16 md:py-20 lg:py-24 relative overflow-x-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-muted to-dark opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-violet/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-orange/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 sm:mb-4 text-center mx-auto"
          >
            La méthode <span className="text-gradient">DIGIFLOW</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto px-4 sm:px-0 text-center"
          >
            Un process éprouvé en 5 étapes pour transformer votre présence digitale en machine à acquérir
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Progress bar - moved to bottom with lower z-index */}
          <div className="absolute top-24 sm:top-28 md:top-32 left-0 right-0 h-1 sm:h-1 bg-glass/30 rounded-full hidden lg:block z-0">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet/60 to-orange/60 rounded-full origin-left scale-x-0"
              style={{ width: "100%" }}
            />
          </div>

          {/* Steps - higher z-index to appear above progress bar */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 relative z-10 text-center">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.id}
                  className="process-step relative"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Connection line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 sm:top-20 left-1/2 w-1 h-16 sm:h-20 md:h-24 bg-gradient-to-b from-violet to-orange opacity-30 xl:hidden" />
                  )}

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-8 sm:h-8 bg-gradient-to-br from-violet to-orange rounded-full flex items-center justify-center text-sm sm:text-sm font-bold">
                    {step.id}
                  </div>

                  {/* Icon container - with background to cover progress bar */}
                  <div className="mb-3 sm:mb-4 relative">
                    <div className="process-icon w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-violet/20 to-orange/20 rounded-lg flex items-center justify-center preserve-3d backdrop-blur-sm border border-white/10">
                      <Icon className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 text-violet" />
                    </div>
                    
                    {/* Pulse effect */}
                    <div className="absolute inset-0 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto bg-violet/20 rounded-lg animate-pulse" />
                  </div>

                  {/* Content - with background to ensure readability */}
                  <div className="relative bg-dark/50 backdrop-blur-sm rounded-lg p-4 sm:p-3 w-full">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-2 text-center">{step.title}</h3>
                    <p className="text-sm sm:text-sm text-foreground-muted text-center mb-3 sm:mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Details (shown on hover) */}
                  <div className="absolute top-full mt-2 sm:mt-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <div className="glass rounded-lg p-3 sm:p-3 md:p-4 shadow-xl">
                      <ul className="space-y-1">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-2 text-sm">
                            <CheckCircle className="w-3 h-3 sm:w-3 sm:h-3 text-accent-success mt-0.5 flex-shrink-0" />
                            <span className="text-foreground-muted text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center mx-auto"
        >
          {[
            { label: "Délai moyen", value: "< 21 jours", color: "violet" },
            { label: "Taux de satisfaction", value: "98%", color: "orange" },
            { label: "ROI moyen", value: "4.5x", color: "violet" },
            { label: "Clients actifs", value: "+120", color: "orange" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center glass rounded-lg p-4 sm:p-4 md:p-6 w-full mx-auto"
            >
              <div className={`text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-2 text-center ${
                stat.color === "violet" ? "text-violet" : "text-orange"
              }`}>
                {stat.value}
              </div>
              <div className="text-sm sm:text-sm text-foreground-muted text-center">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}