"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { HeroSectionPremium } from "@/components/sections/HeroSectionPremium"
import { ClientsSection } from "@/components/sections/ClientsSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { CasesSection } from "@/components/sections/CasesSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { CTASection } from "@/components/sections/CTASection"
import { CalendlySection } from "@/components/sections/CalendlySection"
import { CalendlyEmbedSection } from "@/components/sections/CalendlyEmbedSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <HeroSectionPremium />
      <ClientsSection />
      <ServicesSection />
      <CasesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CalendlyEmbedSection />
      <CTASection />
      <CalendlySection />
      <Footer />
    </>
  )
}