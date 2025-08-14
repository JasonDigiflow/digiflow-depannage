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
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-muted to-dark opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-4"
          >
            La méthode <span className="text-gradient">DIGIFLOW</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-foreground-muted max-w-3xl mx-auto"
          >
            Un process éprouvé en 5 étapes pour transformer votre présence digitale en machine à acquérir
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Progress bar - moved to bottom with lower z-index */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-glass/30 rounded-full hidden lg:block z-0">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet/60 to-orange/60 rounded-full origin-left scale-x-0"
              style={{ width: "100%" }}
            />
          </div>

          {/* Steps - higher z-index to appear above progress bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
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
                    <div className="absolute top-20 left-1/2 w-0.5 h-24 bg-gradient-to-b from-violet to-orange opacity-30 lg:hidden" />
                  )}

                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-violet to-orange rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>

                  {/* Icon container - with background to cover progress bar */}
                  <div className="mb-4 relative">
                    <div className="process-icon w-20 h-20 mx-auto bg-gradient-to-br from-violet/20 to-orange/20 rounded-premium flex items-center justify-center preserve-3d backdrop-blur-sm border border-white/10">
                      <Icon className="w-10 h-10 text-violet" />
                    </div>
                    
                    {/* Pulse effect */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto bg-violet/20 rounded-premium animate-pulse" />
                  </div>

                  {/* Content - with background to ensure readability */}
                  <div className="relative bg-dark/50 backdrop-blur-sm rounded-lg p-2">
                    <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                    <p className="text-sm text-foreground-muted text-center mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Details (shown on hover) */}
                  <div className="absolute top-full mt-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="glass rounded-glass p-4 shadow-xl">
                      <ul className="space-y-1">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-accent-success mt-0.5" />
                            <span className="text-foreground-muted">{detail}</span>
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Délai moyen", value: "< 21 jours", color: "violet" },
            { label: "Taux de satisfaction", value: "98%", color: "orange" },
            { label: "ROI moyen", value: "4.5x", color: "violet" },
            { label: "Clients actifs", value: "+120", color: "orange" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center glass rounded-glass p-6"
            >
              <div className={`text-3xl font-bold mb-2 ${
                stat.color === "violet" ? "text-violet" : "text-orange"
              }`}>
                {stat.value}
              </div>
              <div className="text-sm text-foreground-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}