"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "CEO",
    company: "TechStart",
    avatar: "/placeholder.svg",
    content: "DIGIFLOW a transformé notre présence digitale. En 3 mois, notre taux de conversion a triplé et nos coûts d'acquisition ont baissé de 40%. Une équipe exceptionnelle !",
    rating: 5,
    highlight: "Conversion x3",
  },
  {
    id: 2,
    name: "Thomas Martin",
    role: "Directeur Marketing",
    company: "E-Shop Premium",
    avatar: "/placeholder.svg",
    content: "La stratégie SEO mise en place nous a propulsés en première page Google sur tous nos mots-clés stratégiques. Le ROI est au rendez-vous avec +180K€ de CA additionnel.",
    rating: 5,
    highlight: "+180K€ CA",
  },
  {
    id: 3,
    name: "Sophie Lefèvre",
    role: "Fondatrice",
    company: "BeautyLab",
    avatar: "/placeholder.svg",
    content: "Leur approche data-driven fait la différence. Chaque euro investi est optimisé. Notre ROAS Facebook Ads est passé de 2.1 à 5.4 en 2 mois seulement !",
    rating: 5,
    highlight: "ROAS 5.4x",
  },
  {
    id: 4,
    name: "Alexandre Roux",
    role: "Gérant",
    company: "Restaurant Le Gourmet",
    avatar: "/placeholder.svg",
    content: "Grâce à leur gestion Google Business et les campagnes locales, nos réservations ont augmenté de 85%. L'équipe est réactive et toujours de bon conseil.",
    rating: 5,
    highlight: "+85% réservations",
  },
  {
    id: 5,
    name: "Céline Moreau",
    role: "CMO",
    company: "FinanceApp",
    avatar: "/placeholder.svg",
    content: "Le marketing automation qu'ils ont mis en place a révolutionné notre funnel. Notre taux de conversion email est passé de 2% à 12%. Du travail de pro !",
    rating: 5,
    highlight: "12% conv. email",
  },
  {
    id: 6,
    name: "Pierre Durand",
    role: "Directeur Commercial",
    company: "B2B Solutions",
    avatar: "/placeholder.svg",
    content: "Les campagnes de coldmail ont généré 45 leads qualifiés par mois avec un taux de closing de 32%. Un partenariat qui dure depuis 2 ans et qui s'intensifie !",
    rating: 5,
    highlight: "45 leads/mois",
  },
  {
    id: 7,
    name: "Laurent Dupont",
    role: "CMO",
    company: "FinTech Solutions",
    avatar: "/placeholder.svg",
    content: "Des résultats concrets dès le premier mois ! Notre CAC a été divisé par 3 et nous générons 200 leads qualifiés par jour. DIGIFLOW est notre partenaire de croissance.",
    rating: 5,
    highlight: "CAC ÷3",
  },
  {
    id: 8,
    name: "Caroline Moreau",
    role: "Directrice",
    company: "Mode & Style",
    avatar: "/placeholder.svg",
    content: "Le shooting photo a complètement transformé notre image. +45% de conversions sur notre e-commerce. Les visuels sont magnifiques et l'équipe très professionnelle.",
    rating: 5,
    highlight: "+45% Conv.",
  },
  {
    id: 9,
    name: "Nicolas Bernard",
    role: "Fondateur",
    company: "SaaS Innovate",
    avatar: "/placeholder.svg",
    content: "Le cold emailing nous a permis de signer 12 clients grands comptes en 2 mois. Leur méthode est redoutable et les templates fournis convertissent à merveille.",
    rating: 5,
    highlight: "12 clients B2B",
  },
  {
    id: 10,
    name: "Valérie Petit",
    role: "CEO",
    company: "Wellness Center",
    avatar: "/placeholder.svg",
    content: "Grâce à l'influence marketing, nous avons touché 2M de personnes en 1 mois. Les retombées sont énormes avec +300% de notoriété et des ventes qui explosent.",
    rating: 5,
    highlight: "2M reach",
  },
  {
    id: 11,
    name: "Marc Fontaine",
    role: "VP Sales",
    company: "Tech Industries",
    avatar: "/placeholder.svg",
    content: "L'automation marketing a changé la donne. Nos équipes gagnent 15h par semaine et le taux de conversion des leads a doublé. ROI mesuré à 850% sur 6 mois.",
    rating: 5,
    highlight: "ROI 850%",
  },
  {
    id: 12,
    name: "Isabelle Leroy",
    role: "Marketing Manager",
    company: "Luxury Brand",
    avatar: "/placeholder.svg",
    content: "DIGIFLOW comprend notre marché. Les campagnes Google Ads sont chirurgicales avec un ROAS de 7.2x. Nous avons dépassé tous nos objectifs annuels en 8 mois.",
    rating: 5,
    highlight: "ROAS 7.2x",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animation du titre
    gsap.fromTo(
      ".testimonials-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-title",
          start: "top 80%",
        },
      }
    )

    // Animation des cartes
    const cards = gsap.utils.toArray(".testimonial-card")
    cards.forEach((card: any, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        }
      )
    })

    // Auto-scroll horizontal sur desktop - répéter pour éviter le vide
    if (window.innerWidth > 768) {
      gsap.to(carouselRef.current, {
        x: "-33%", // Réduit pour éviter le vide avec plus d'avis
        ease: "none",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:py-16 md:py-20 lg:py-24 relative overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-muted via-dark to-dark-muted" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="testimonials-title text-center mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 mx-auto justify-center"
          >
            <Quote className="w-8 h-8 sm:w-8 sm:h-8 text-violet" />
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 sm:mb-4 text-center mx-auto">
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto px-4 sm:px-0 text-center">
            Découvrez les témoignages de nos clients et leurs résultats concrets
          </p>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3 sm:gap-3 md:gap-4 mt-4 sm:mt-6 mx-auto">
            <div className="flex gap-1 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-5 sm:h-5 fill-orange text-orange" />
              ))}
            </div>
            <span className="text-lg sm:text-lg font-semibold text-center">4.9/5</span>
            <span className="text-sm sm:text-base text-foreground-muted text-center">sur 180+ avis Google</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div 
          ref={carouselRef}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mx-auto justify-center"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card variant="glass" className="h-full w-full">
                <CardContent className="p-4 sm:p-4 md:p-6">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 sm:w-8 sm:h-8 text-violet/30 mb-3 sm:mb-4 mx-auto" />
                  
                  {/* Content */}
                  <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 italic text-center">
                    "{testimonial.content}"
                  </p>

                  {/* Highlight badge */}
                  <div className="inline-flex items-center gap-2 sm:gap-2 px-3 sm:px-3 py-1 bg-gradient-to-r from-violet/20 to-orange/20 rounded-full mb-3 sm:mb-4 mx-auto justify-center">
                    <Star className="w-4 h-4 sm:w-4 sm:h-4 text-orange" />
                    <span className="text-sm sm:text-sm font-semibold text-center">{testimonial.highlight}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-3 md:gap-4 justify-center">
                    <div className="relative w-12 h-12 sm:w-12 sm:h-12">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-violet/30" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-center">{testimonial.name}</div>
                      <div className="text-sm sm:text-sm text-foreground-muted text-center">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 sm:gap-1 mt-3 sm:mt-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-4 sm:h-4 fill-orange text-orange" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 text-center mx-auto px-4"
        >
          <a
            href="https://g.page/r/digiflow/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-2 text-violet hover:text-violet-hover transition-colors text-sm sm:text-base justify-center"
          >
            <span className="text-sm sm:text-base text-center">Voir tous les avis sur Google</span>
            <Star className="w-4 h-4 sm:w-4 sm:h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}