"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCalendlyStore } from "@/hooks/useCalendly"
import {
  Globe,
  Search,
  Megaphone,
  Camera,
  Star,
  Mail,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: "sea",
    icon: TrendingUp,
    title: "Google Ads (SEA)",
    description: "Votre service #1 d'acquisition. ROI garanti x4 minimum",
    benefits: [
      "Campagnes Smart Bidding",
      "Quality Score optimisé",
      "Reporting temps réel",
    ],
    stat: "ROI x4 garanti",
    color: "violet",
  },
  {
    id: "sma",
    icon: Megaphone,
    title: "Meta Ads (Facebook/Instagram)",
    description: "Créas qui scroll-stoppent, ciblage ultra-précis",
    benefits: [
      "A/B testing continu",
      "Audiences lookalike",
      "Retargeting avancé",
    ],
    stat: "ROAS 4.2x",
    color: "orange",
  },
  {
    id: "web",
    icon: Globe,
    title: "Landing Pages d'Acquisition",
    description: "Pages conçues pour convertir le trafic payant en clients",
    benefits: [
      "Optimisées pour Google/Meta Ads",
      "Taux de conversion maximisé",
      "Tests A/B permanents",
    ],
    stat: "+67% conv. ads",
    color: "violet",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO d'Acquisition",
    description: "Trafic qualifié gratuit pour alimenter vos tunnels",
    benefits: [
      "Mots-clés achat prioritaires",
      "Stratégie de contenu ROI",
      "Suivi des positions business",
    ],
    stat: "Top 3 en 6 mois",
    color: "orange",
  },
  {
    id: "photo",
    icon: Camera,
    title: "Shooting Photo/Vidéo",
    description: "Visuels qui vendent, pas qui décorent",
    benefits: [
      "Direction artistique",
      "Post-production pro",
      "Formats optimisés",
    ],
    stat: "+52% engagement",
    color: "violet",
  },
  {
    id: "google",
    icon: Star,
    title: "Gestion Google Business",
    description: "Note + volume = rang + clics",
    benefits: [
      "Optimisation GMB",
      "Gestion des avis",
      "Posts réguliers",
    ],
    stat: "4.8★ moyenne",
    color: "orange",
  },
  {
    id: "coldmail",
    icon: Mail,
    title: "Coldmail",
    description: "Prospection à froid mais messages chauds",
    benefits: [
      "Delivrabilité 95%+",
      "Copywriting persuasif",
      "Séquences automatisées",
    ],
    stat: "12% taux réponse",
    color: "violet",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Marketing Automation",
    description: "Emails & SMS qui arrivent au bon moment",
    benefits: [
      "Workflows intelligents",
      "Scoring des leads",
      "Personnalisation avancée",
    ],
    stat: "+28% LTV",
    color: "orange",
  },
  {
    id: "influence",
    icon: Users,
    title: "Influence Marketing",
    description: "Créateurs locaux qui apportent du monde, pas des vues",
    benefits: [
      "Sélection qualitative",
      "Contrats négociés",
      "Tracking des ventes",
    ],
    stat: "ROI 5.3x",
    color: "violet",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const { openCalendly } = useCalendlyStore()

  useEffect(() => {
    const cards = gsap.utils.toArray(".service-card")

    cards.forEach((card: any, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        }
      )
    })

    // Animation du titre
    gsap.fromTo(
      ".services-title",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-title",
          start: "top 80%",
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-32 relative overflow-hidden">
      {/* Background premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-muted/50 to-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="services-title text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-violet rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/70">Services d'acquisition client</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6">
            <span className="block mb-2 text-white">Acquisition qui</span>
            <span className="bg-gradient-to-r from-violet via-purple-400 to-orange bg-clip-text text-transparent">
              convertit
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto">
            Google Ads, Meta Ads, SEO & landing pages optimisées. 
            <span className="text-white/80 font-medium"> ROI x4 garanti ou remboursé.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isExpanded = expandedService === service.id

            return (
              <motion.div
                key={service.id}
                layout
                className={`service-card ${isExpanded ? "lg:col-span-2" : ""}`}
              >
                <Card
                  className="h-full cursor-pointer transition-all duration-500 hover:shadow-2xl group relative overflow-hidden"
                  hover3d
                  variant="glass"
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet/5 to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-glass bg-gradient-to-br ${
                          service.color === "violet"
                            ? "from-violet/20 to-violet/10"
                            : "from-orange/20 to-orange/10"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            service.color === "violet" ? "text-violet" : "text-orange"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          service.color === "violet"
                            ? "bg-violet/10 text-violet"
                            : "bg-orange/10 text-orange"
                        }`}
                      >
                        {service.stat}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-foreground-muted">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <AnimatePresence>
                      {!isExpanded && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center text-sm text-foreground-muted group-hover:text-violet transition-colors"
                        >
                          <span>Voir le détail</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      )}

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ul className="space-y-2 mb-6">
                            {service.benefits.map((benefit, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <div
                                  className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                                    service.color === "violet" ? "bg-violet" : "bg-orange"
                                  }`}
                                />
                                <span className="text-sm text-foreground-muted">{benefit}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <div className="flex gap-3">
                            <Button size="sm" variant={service.color === "violet" ? "default" : "orange"}>
                              Devis express
                            </Button>
                            <Button size="sm" variant="outline">
                              En savoir plus
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground-muted mb-6">
            Besoin d'une stratégie sur-mesure ? Parlons de vos objectifs.
          </p>
          <Button size="lg" className="shadow-xl whitespace-nowrap" onClick={openCalendly}>
            <span className="flex items-center gap-2">
              Obtenir mon audit gratuit
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}