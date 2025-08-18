"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Search,
  TrendingUp,
  Globe,
  BarChart3,
  FileText,
  Link2,
  MapPin,
  Trophy,
  Target,
  Zap,
  ChartBar,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Activity,
  Sparkles,
  Shield,
  Clock,
  Rocket,
  Eye,
  MousePointer2,
  MessageSquare,
  Star,
  ArrowUpRight,
  Database,
  Code2,
  FileSearch,
  GitBranch,
  Cpu,
  Layers,
  Terminal,
  Hash,
  PenTool,
  Image,
  ShoppingBag,
  Filter,
  Settings,
  RefreshCw,
  AlertCircle,
  ChevronUp,
  ExternalLink
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Animated keyword particles
const KeywordCloud = () => {
  const keywords = [
    "top 1", "ranking", "organic", "backlinks", "crawl", 
    "index", "SERP", "keywords", "authority", "trust",
    "content", "schema", "sitemap", "robots.txt", "core web vitals"
  ]
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {keywords.map((keyword, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-400/20 font-mono text-sm whitespace-nowrap"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0
          }}
          animate={{
            y: [null, "-20%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          #{keyword}
        </motion.div>
      ))}
    </div>
  )
}

// SERP Preview Component
const SERPPreview = ({ title, url, description }: any) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full" />
        <span className="text-sm text-gray-600">{url}</span>
      </div>
      <h3 className="text-xl text-blue-600 hover:underline cursor-pointer mb-1">{title}</h3>
      <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
    </div>
  )
}

const seoServices = [
  {
    icon: FileSearch,
    title: "Audit SEO Complet",
    description: "Analyse technique approfondie de votre site",
    features: ["200+ points de contrôle", "Rapport détaillé", "Plan d'action prioritisé"]
  },
  {
    icon: PenTool,
    title: "Stratégie de Contenu",
    description: "Content marketing orienté SEO et conversion",
    features: ["Recherche de mots-clés", "Calendrier éditorial", "Optimisation sémantique"]
  },
  {
    icon: Link2,
    title: "Link Building Premium",
    description: "Acquisition de backlinks de haute autorité",
    features: ["DR 50+ minimum", "Liens contextuels", "Ancres optimisées"]
  },
  {
    icon: Code2,
    title: "SEO Technique",
    description: "Optimisation technique pour les Core Web Vitals",
    features: ["Performance", "Mobile-first", "Schema markup"]
  },
  {
    icon: MapPin,
    title: "SEO Local",
    description: "Dominez votre marché local sur Google",
    features: ["Google My Business", "Citations locales", "Reviews management"]
  },
  {
    icon: ShoppingBag,
    title: "SEO E-commerce",
    description: "Optimisation pour les boutiques en ligne",
    features: ["Pages produits", "Catégories", "Rich snippets"]
  }
]

const rankingFactors = [
  { name: "Contenu de qualité", impact: 95, color: "from-purple-500 to-indigo-600" },
  { name: "Backlinks", impact: 90, color: "from-indigo-500 to-purple-600" },
  { name: "Expérience utilisateur", impact: 85, color: "from-purple-600 to-pink-600" },
  { name: "Mobile-friendly", impact: 88, color: "from-pink-500 to-purple-600" },
  { name: "Vitesse de chargement", impact: 82, color: "from-purple-500 to-indigo-500" },
  { name: "HTTPS", impact: 75, color: "from-indigo-600 to-purple-500" }
]

const caseStudies = [
  {
    client: "E-commerce Tech",
    traffic: "+420%",
    keywords: "127 top 3",
    revenue: "+380%",
    duration: "6 mois"
  },
  {
    client: "SaaS B2B",
    traffic: "+280%",
    keywords: "89 top 3",
    revenue: "+250%",
    duration: "4 mois"
  },
  {
    client: "Services Pro",
    traffic: "+350%",
    keywords: "156 top 3",
    revenue: "+320%",
    duration: "5 mois"
  }
]

const seoProcess = [
  {
    phase: "Audit",
    duration: "Semaine 1-2",
    tasks: ["Analyse technique", "Étude concurrentielle", "Recherche mots-clés"],
    icon: FileSearch
  },
  {
    phase: "Stratégie",
    duration: "Semaine 3",
    tasks: ["Plan d'action", "Priorisation", "KPIs"],
    icon: Target
  },
  {
    phase: "Optimisation",
    duration: "Semaine 4-8",
    tasks: ["On-page SEO", "Contenu", "Technique"],
    icon: Settings
  },
  {
    phase: "Link Building",
    duration: "Mois 2-6",
    tasks: ["Outreach", "Guest posts", "Digital PR"],
    icon: Link2
  },
  {
    phase: "Monitoring",
    duration: "Continu",
    tasks: ["Tracking", "Reporting", "Ajustements"],
    icon: Activity
  }
]

export default function SEOPage() {
  const { openCalendly } = useCalendlyStore()
  const { scrollYProgress } = useScroll()
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [serpPosition, setSerpPosition] = useState(10)
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    // Animate SERP position jusqu'à #1 puis arrêter
    let interval: NodeJS.Timeout
    interval = setInterval(() => {
      setSerpPosition(prev => {
        if (prev > 1) {
          return prev - 1
        } else {
          clearInterval(interval)
          return 1
        }
      })
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <KeywordCloud />
        
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Search bar animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{ rotate }}
            className="w-[800px] h-[800px] relative"
          >
            <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full" />
            <div className="absolute inset-4 border-2 border-indigo-500/20 rounded-full" />
            <div className="absolute inset-8 border-2 border-pink-500/20 rounded-full" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Google position badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
            >
              <Search className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">Position Google</span>
              <motion.span
                key={serpPosition}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full text-white font-bold"
              >
                #{serpPosition}
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="text-white">SEO</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Première Position
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
            >
              Dominez Google avec une stratégie SEO sur-mesure. 
              Trafic organique moyen : <span className="text-purple-400 font-bold">+350%</span>
            </motion.p>

            {/* Live SERP Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="w-5 h-5 text-gray-400" />
                  <div className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white/60">
                    votre mot-clé principal
                  </div>
                </div>
                <SERPPreview
                  title="Votre Site en Position #1 | Marque"
                  url="www.votre-site.com"
                  description="Description optimisée qui attire les clics avec les bons mots-clés et qui respecte la longueur idéale pour un CTR maximum..."
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                size="lg"
                onClick={openCalendly}
                className="group px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-indigo-600"
              >
                <span className="flex items-center gap-2">
                  Audit SEO gratuit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="#services">
                  Nos services SEO
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {[
                { value: "500+", label: "Mots-clés #1", icon: Trophy },
                { value: "+350%", label: "Trafic moyen", icon: TrendingUp },
                { value: "92", label: "Score SEO", icon: ChartBar },
                { value: "3M€", label: "Revenus générés", icon: BarChart3 }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Services SEO</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                360° complets
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une approche holistique pour dominer les résultats de recherche
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking Factors */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Facteurs de ranking
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Notre expertise sur les critères qui comptent vraiment
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {rankingFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{factor.name}</h3>
                  <span className="text-2xl font-bold text-purple-400">{factor.impact}%</span>
                </div>
                <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${factor.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${factor.impact}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Résultats prouvés
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des succès mesurables et reproductibles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">{study.client}</h3>
                    <span className="text-sm text-purple-400">{study.duration}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Trafic</span>
                      <span className="text-3xl font-bold text-green-400">{study.traffic}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Keywords</span>
                      <span className="text-xl font-bold text-purple-400">{study.keywords}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Revenue</span>
                      <span className="text-3xl font-bold text-blue-400">{study.revenue}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <Button
                      variant="ghost"
                      className="w-full text-purple-400 hover:text-purple-300"
                    >
                      Voir l'étude de cas
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Notre processus SEO
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour des résultats durables
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-indigo-600 hidden md:block" />

            <div className="space-y-12">
              {seoProcess.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1 bg-gray-800 rounded-3xl p-8 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                      <span className="text-purple-400">{phase.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {phase.tasks.map((task, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-lg border border-purple-500/20"
                        >
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Prêt pour la première page ?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Commencez votre ascension vers le top de Google
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="px-12 py-8 text-xl bg-white text-purple-900 hover:bg-gray-100"
                >
                  <Search className="w-6 h-6 mr-2" />
                  Audit SEO offert
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
                    Parler stratégie
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Résultats 3-6 mois</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>100% White Hat</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>Top 3 garanti</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}