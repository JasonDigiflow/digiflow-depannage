"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const clients = [
  { name: "ARKANYS", logo: "/ASSETS/LOGOS CLIENTS/ARKANYS.png" },
  { name: "AS TCT", logo: "/ASSETS/LOGOS CLIENTS/AS TCT.png" },
  { name: "BEHYPE", logo: "/ASSETS/LOGOS CLIENTS/BEHYPE.png" },
  { name: "BRETONS", logo: "/ASSETS/LOGOS CLIENTS/BRETONs.png" },
  { name: "DFGM", logo: "/ASSETS/LOGOS CLIENTS/DFGM.png" },
  { name: "EJ", logo: "/ASSETS/LOGOS CLIENTS/EJ.png" },
  { name: "GENTLEMEN", logo: "/ASSETS/LOGOS CLIENTS/GENTLEMEN.png" },
  { name: "MG", logo: "/ASSETS/LOGOS CLIENTS/MG.png" },
  { name: "Maisons de Provence", logo: "/ASSETS/LOGOS CLIENTS/Maisons de provence.png" },
  { name: "Piscine", logo: "/ASSETS/LOGOS CLIENTS/Piscine.png" },
  { name: "REMI", logo: "/ASSETS/LOGOS CLIENTS/REMI.png" },
  { name: "SCPI", logo: "/ASSETS/LOGOS CLIENTS/SCPI.png" },
  { name: "Un Instant", logo: "/ASSETS/LOGOS CLIENTS/Un Instant.png" },
]

const clientsHorizontal = [
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/1.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/2.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/3.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/4.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/5.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/6.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/7.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/8.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/9.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/10.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/11.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/12.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/13.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/14.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/15.png",
  "/ASSETS/LOGOS CLIENTS/LOGOS CLIENTS HORIZ/16.png",
]

export function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const staticLogosRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animation du titre
    gsap.fromTo(
      ".clients-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".clients-title",
          start: "top 80%",
        },
      }
    )

    // Animation des logos statiques
    const logos = gsap.utils.toArray(".client-logo")
    logos.forEach((logo: any, index) => {
      gsap.fromTo(
        logo,
        {
          opacity: 0,
          scale: 0.8,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: logo,
            start: "top 90%",
          },
          delay: index * 0.05,
        }
      )
    })

    // Animation infinie du marquee
    if (marqueeRef.current) {
      const marqueeContent = marqueeRef.current.querySelector(".marquee-content")
      if (marqueeContent) {
        gsap.to(marqueeContent, {
          x: "-50%",
          duration: 30,
          ease: "none",
          repeat: -1,
        })
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:py-16 md:py-20 lg:py-24 relative overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-muted" />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="clients-title text-center mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2 glass rounded-full mb-4 sm:mb-6 mx-auto justify-center"
            >
              <div className="w-2 h-2 bg-accent-success rounded-full animate-pulse" />
              <span className="text-sm sm:text-sm font-semibold text-center">+150 clients nous font confiance</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 sm:mb-4 text-center mx-auto">
              Ils ont choisi <span className="text-gradient">DIGIFLOW</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto px-4 sm:px-0 text-center">
              Des startups aux grandes entreprises, nous accompagnons des marques ambitieuses
              dans leur croissance digitale
            </p>
          </div>

          {/* Grille de logos principaux */}
          <div 
            ref={staticLogosRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 mx-auto justify-center"
          >
            {clients.slice(0, 12).map((client, index) => (
              <motion.div
                key={client.name}
                className="client-logo group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="glass rounded-lg p-4 sm:p-3 md:p-4 lg:p-6 h-16 sm:h-20 md:h-24 flex items-center justify-center hover:bg-violet/5 transition-all w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee infini pour les logos horizontaux */}
        <div ref={marqueeRef} className="relative overflow-hidden py-4 sm:py-6 md:py-8 glass mx-auto">
          <div className="marquee-content flex gap-4 sm:gap-6 md:gap-8 justify-center items-center">
            {/* Dupliquer les logos pour créer l'effet infini */}
            {[...clientsHorizontal, ...clientsHorizontal].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-10 w-24 sm:h-14 sm:w-36 md:h-16 md:w-40 relative"
              >
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
        >
          {[
            { value: "+150", label: "Clients actifs", color: "violet" },
            { value: "98%", label: "Taux de rétention", color: "orange" },
            { value: "+500", label: "Projets livrés", color: "violet" },
            { value: "4.9★", label: "Note moyenne", color: "orange" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mx-auto"
            >
              <div className={`text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-center ${
                stat.color === "violet" ? "text-violet" : "text-orange"
              }`}>
                {stat.value}
              </div>
              <div className="text-sm sm:text-sm text-foreground-muted text-center">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}