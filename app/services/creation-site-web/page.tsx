"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue } from "framer-motion"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Sparkles,
  Zap,
  Palette,
  Code2,
  Smartphone,
  Monitor,
  Gauge,
  Shield,
  TrendingUp,
  Users,
  Target,
  MousePointer2,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Layers,
  PaintBrush,
  Timer,
  BarChart3,
  Lock,
  Globe,
  Cpu,
  RefreshCw,
  ShoppingCart,
  Heart,
  MessageSquare,
  Star,
  Trophy,
  Rocket,
  ArrowUpRight,
  Play,
  Eye,
  FileCode,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Figma,
  Chrome
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Floating code snippets animation
const FloatingCode = () => {
  const codeSnippets = [
    "<div class='hero'>",
    "function convert() {",
    ".cta-button {",
    "@media (max-width:",
    "onClick={handleSubmit}",
    "animation: fadeIn",
    "transform: scale(1.1)",
    "background: linear-gradient"
  ]
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400/20 font-mono text-sm"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0
          }}
          animate={{
            y: [null, "-100%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 20,
            delay: i * 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  )
}

// Interactive browser mockup
const BrowserMockup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-t-xl p-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 text-gray-400 text-sm">
          https://votre-landing-page.com
        </div>
      </div>
      <div className="bg-gray-900 rounded-b-xl overflow-hidden">
        {children}
      </div>
    </div>
  )
}

const features = [
  {
    icon: Gauge,
    title: "Ultra Rapide",
    description: "Score PageSpeed 100/100, chargement < 1 seconde",
    metric: "0.8s"
  },
  {
    icon: MousePointer2,
    title: "Conversion Optimisée",
    description: "CRO intégré, A/B testing, heatmaps",
    metric: "+250%"
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Design responsive parfait sur tous les écrans",
    metric: "100%"
  },
  {
    icon: Shield,
    title: "Sécurité SSL",
    description: "HTTPS, protection DDOS, backups automatiques",
    metric: "A+"
  },
  {
    icon: BarChart3,
    title: "Analytics Avancé",
    description: "Tracking complet, Google Analytics 4, Tag Manager",
    metric: "360°"
  },
  {
    icon: Zap,
    title: "Performance IA",
    description: "Optimisation continue par machine learning",
    metric: "24/7"
  }
]

const technologies = [
  { name: "Next.js", icon: "⚡", color: "from-black to-gray-800" },
  { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-600" },
  { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800" },
  { name: "Tailwind", icon: "🎨", color: "from-cyan-400 to-teal-600" },
  { name: "Framer", icon: "✨", color: "from-pink-500 to-purple-600" },
  { name: "Vercel", icon: "▲", color: "from-black to-gray-700" }
]

const conversionElements = [
  {
    title: "Hero Section Impactant",
    description: "Proposition de valeur claire en 5 secondes",
    impact: "+40% engagement"
  },
  {
    title: "Social Proof",
    description: "Témoignages, logos clients, certifications",
    impact: "+35% confiance"
  },
  {
    title: "CTAs Stratégiques",
    description: "Boutons d'action optimisés et bien placés",
    impact: "+60% clics"
  },
  {
    title: "Urgence & Rareté",
    description: "Countdown, stocks limités, offres exclusives",
    impact: "+45% conversions"
  },
  {
    title: "Formulaires Simplifiés",
    description: "Minimum de champs, validation en temps réel",
    impact: "+30% complétion"
  },
  {
    title: "Chat & Support",
    description: "Live chat, FAQ interactive, assistance IA",
    impact: "+25% satisfaction"
  }
]

const portfolio = [
  {
    name: "SaaS B2B",
    image: "/portfolio/saas.jpg",
    conversion: "12.5%",
    improvement: "+320%"
  },
  {
    name: "E-commerce",
    image: "/portfolio/ecommerce.jpg",
    conversion: "8.7%",
    improvement: "+180%"
  },
  {
    name: "Lead Gen",
    image: "/portfolio/leadgen.jpg",
    conversion: "15.2%",
    improvement: "+425%"
  }
]

export default function LandingPagesPage() {
  const { openCalendly } = useCalendlyStore()
  const { scrollYProgress } = useScroll()
  const [activeDemo, setActiveDemo] = useState(0)
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  
  useEffect(() => {
    // Auto-rotate demos
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const demos = [
    {
      title: "Landing Page SaaS",
      gradient: "from-blue-600 to-purple-600",
      elements: ["Hero dynamique", "Pricing interactif", "Demo video", "Testimonials"]
    },
    {
      title: "Page E-commerce",
      gradient: "from-green-600 to-emerald-600",
      elements: ["Product showcase", "Reviews", "Urgency timer", "Trust badges"]
    },
    {
      title: "Lead Generation",
      gradient: "from-orange-600 to-red-600",
      elements: ["Form optimisé", "Value props", "Social proof", "Garanties"]
    }
  ]

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section with animated background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <FloatingCode />
        
        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{ scale, opacity }}
          >
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
          </motion.div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
              >
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-medium">Landing Pages Haute Conversion</span>
                <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">
                  CRO Expert
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Landing Pages</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  qui convertissent
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Pages d'atterrissage ultra-optimisées pour transformer vos visiteurs en clients. 
                Taux de conversion moyen : <span className="text-emerald-400 font-bold">12.5%</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={openCalendly}
                    className="px-8 py-6 text-lg bg-gradient-to-r from-emerald-600 to-cyan-600"
                  >
                    Créer ma landing page
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Voir démo
                  </Button>
                </motion.div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "250+", label: "Pages créées" },
                  { value: "12.5%", label: "Taux moyen" },
                  { value: "<1s", label: "Chargement" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right content - Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <BrowserMockup>
                <div className="relative h-[500px] bg-gradient-to-br from-gray-900 to-black p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDemo}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <div className={`h-3 bg-gradient-to-r ${demos[activeDemo].gradient} rounded-full w-3/4 mb-4`} />
                      <div className="h-20 bg-gray-800 rounded-lg mb-6" />
                      <div className="space-y-3">
                        {demos[activeDemo].elements.map((element, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span className="text-gray-300">{element}</span>
                          </motion.div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className={`mt-8 px-8 py-4 bg-gradient-to-r ${demos[activeDemo].gradient} text-white rounded-lg font-medium`}
                      >
                        Call to Action
                      </motion.button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </BrowserMockup>

              {/* Demo selector */}
              <div className="flex justify-center gap-2 mt-6">
                {demos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveDemo(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeDemo === i ? 'w-8 bg-emerald-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Technologies</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                de pointe
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stack moderne pour des performances exceptionnelles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-emerald-400">
                        {feature.metric}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onHoverStart={() => setHoveredTech(index)}
                onHoverEnd={() => setHoveredTech(null)}
                className="relative"
              >
                <div className={`px-6 py-3 bg-gray-900 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-all cursor-pointer`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-white font-medium">{tech.name}</span>
                  </div>
                </div>
                
                {hoveredTech === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur-xl opacity-30 pointer-events-none`}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Elements */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Éléments de conversion
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Chaque élément est optimisé pour maximiser vos conversions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversionElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{element.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-gray-400 mb-4">{element.description}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-sm font-medium text-emerald-400">{element.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Notre processus
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              De l'idée à la mise en ligne en 2 semaines
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-cyan-500 hidden lg:block" />

            <div className="space-y-12">
              {[
                {
                  day: "Jour 1-2",
                  title: "Discovery & Strategy",
                  description: "Analyse de vos objectifs, personas, parcours client",
                  icon: Target
                },
                {
                  day: "Jour 3-5",
                  title: "Design & UX",
                  description: "Maquettes haute fidélité, prototypes interactifs",
                  icon: Palette
                },
                {
                  day: "Jour 6-10",
                  title: "Développement",
                  description: "Codage, intégrations, animations, responsive",
                  icon: Code2
                },
                {
                  day: "Jour 11-12",
                  title: "Tests & Optimisation",
                  description: "A/B testing, speed optimization, SEO technique",
                  icon: Gauge
                },
                {
                  day: "Jour 13-14",
                  title: "Launch & Scale",
                  description: "Mise en ligne, monitoring, optimisations continues",
                  icon: Rocket
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className={`bg-gray-900 rounded-3xl p-8 border border-gray-800 ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-emerald-400 font-medium">{step.day}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden lg:flex w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full items-center justify-center">
                    <div className="w-6 h-6 bg-gray-900 rounded-full" />
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Prêt à convertir plus ?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Créons ensemble la landing page qui transformera votre business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="px-12 py-8 text-xl bg-white text-emerald-900 hover:bg-gray-100"
                >
                  <Rocket className="w-6 h-6 mr-2" />
                  Commencer mon projet
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-12 py-8 text-xl border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/contact">
                    <MessageSquare className="w-6 h-6 mr-2" />
                    Discuter du projet
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <span>Livraison 14 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Garantie performance</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>+12% conversion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}