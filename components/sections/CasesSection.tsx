"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { SimpleWebsitePreview } from "@/components/SimpleWebsitePreview"

gsap.registerPlugin(ScrollTrigger)

const cases = [
  {
    id: 1,
    client: "L'Italien",
    sector: "Restaurant",
    url: "https://www.litalien.fr",
    problem: "Visibilité locale et réservations en ligne insuffisantes",
    solution: "Site vitrine premium + SEO local + Système de réservation intégré",
    results: {
      conversion: "+185%",
      reservations: "+120/mois",
      gmb: "4.8★ (250 avis)",
    },
    color: "violet",
    description: "Restaurant italien authentique avec ambiance moderne"
  },
  {
    id: 2,
    client: "Be-Hype",
    sector: "SaaS / Influence Marketing",
    url: "https://www.be-hype.com",
    problem: "Plateforme nouvelle, besoin d'acquisition rapide d'établissements et influenceurs",
    solution: "Refonte complète du site + Système d'acquisition SMA sur mesure + SEO",
    results: {
      instagram: "+5000 abonnés",
      inbound: "+600%",
      influenceurs: "+3000 inscrits",
      mrr: "26K€ MRR"
    },
    color: "orange",
    description: "Plateforme de mise en relation entre établissements et créateurs de contenu"
  },
  {
    id: 3,
    client: "Finary",
    sector: "FinTech",
    url: "https://finary.com/fr",
    problem: "Acquisition utilisateurs et activation difficiles",
    solution: "Landing pages A/B testées + SEO content + Growth loops",
    results: {
      users: "+50K users",
      activation: "+34%",
      funding: "8M€ levés",
    },
    color: "violet",
    description: "Plateforme de gestion de patrimoine nouvelle génération"
  },
]

export function CasesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const graphRefs = useRef<(HTMLDivElement | null)[]>([])
  const { openCalendly } = useCalendlyStore()

  useEffect(() => {
    // Animation des cartes au scroll
    const cards = gsap.utils.toArray(".case-card")
    
    cards.forEach((card: any, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          rotateX: -10,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        }
      )
    })

    // Animation des graphiques de résultats
    graphRefs.current.forEach((graph) => {
      if (!graph) return

      const bars = graph.querySelectorAll(".result-bar")
      
      gsap.fromTo(
        bars,
        { scaleY: 0, transformOrigin: "bottom" },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: graph,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    // Animation du compteur de résultats
    const counters = document.querySelectorAll(".result-counter")
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0")
      const suffix = counter.getAttribute("data-suffix") || ""
      
      gsap.to(counter, {
        innerHTML: target + suffix,
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    })
  }, [])

  return (
    <section ref={sectionRef} id="cases" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-muted to-dark opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Résultats qui <span className="text-gradient">parlent</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl">
            Découvrez comment nous transformons les défis en opportunités de croissance mesurables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              className="case-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card variant="glass" className="h-full overflow-hidden group">
                {/* Website Preview */}
                <div className="relative h-48 overflow-hidden bg-dark-muted">
                  {caseStudy.url ? (
                    <SimpleWebsitePreview 
                      url={caseStudy.url}
                      title={caseStudy.client}
                      description={caseStudy.description}
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-violet/10 to-orange/10 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white/10">{caseStudy.client}</div>
                    </div>
                  )}
                  
                  {/* Badge secteur */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      caseStudy.color === "violet"
                        ? "bg-violet/20 text-violet backdrop-blur-sm"
                        : "bg-orange/20 text-orange backdrop-blur-sm"
                    }`}>
                      {caseStudy.sector}
                    </span>
                  </div>

                  {/* Hover overlay avec résultats */}
                  <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div 
                      ref={(el) => graphRefs.current[index] = el}
                      className="flex gap-4"
                    >
                      {Object.entries(caseStudy.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="result-bar h-16 w-2 bg-gradient-to-t from-violet to-orange rounded-full mb-2" />
                          <span 
                            className="result-counter text-2xl font-bold text-white"
                            data-target={value.toString().replace(/\D/g, "")}
                            data-suffix={value.toString().replace(/[0-9]/g, "")}
                          >
                            0
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold">{caseStudy.client}</h3>
                    {caseStudy.url && (
                      <a 
                        href={caseStudy.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                        title="Visiter le site"
                      >
                        <ArrowUpRight className="w-4 h-4 text-violet" />
                      </a>
                    )}
                  </div>
                  
                  {caseStudy.description && (
                    <p className="text-sm text-foreground-muted mb-3">
                      {caseStudy.description}
                    </p>
                  )}
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-foreground-muted uppercase tracking-wider mb-1">
                        Problème
                      </p>
                      <p className="text-sm text-foreground-muted">
                        {caseStudy.problem}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-foreground-muted uppercase tracking-wider mb-1">
                        Solution
                      </p>
                      <p className="text-sm text-foreground-muted">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Résultats clés */}
                  <div className="flex items-center justify-between pt-4 border-t border-glass">
                    <div className="flex items-center gap-2">
                      <TrendingUp className={`w-4 h-4 ${
                        caseStudy.color === "violet" ? "text-violet" : "text-orange"
                      }`} />
                      <span className="text-sm font-semibold">
                        {Object.values(caseStudy.results)[0]}
                      </span>
                    </div>
                    
                    {caseStudy.url ? (
                      <Button variant="ghost" size="sm" className="group/btn" asChild>
                        <a href={caseStudy.url} target="_blank" rel="noopener noreferrer">
                          Voir le site
                          <ArrowUpRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" className="group/btn" asChild>
                        <Link href={`/work/${caseStudy.id}`}>
                          Voir l'étude
                          <ArrowUpRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass rounded-premium p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Prêt à devenir notre prochain succès ?
          </h3>
          <p className="text-foreground-muted mb-6">
            Discutons de vos objectifs et créons votre stratégie de croissance sur-mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openCalendly}>
              Obtenir mon audit gratuit
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/work">Voir tous les cas</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}