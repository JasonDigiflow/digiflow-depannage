"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  ThumbsUp,
  MessageCircle,
  Share2,
  Heart,
  Users,
  Target,
  TrendingUp,
  Smartphone,
  Video,
  ShoppingBag,
  Eye,
  Calendar,
  BarChart3,
  Zap,
  Globe,
  Instagram,
  Facebook,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Award,
  CheckCircle2,
  PlayCircle,
  Image as ImageIcon,
  Hash,
  DollarSign,
  Layers,
  Megaphone,
  MousePointer2,
  PieChart,
  Filter,
  Palette,
  Clock,
  Shield,
  Trophy,
  Star,
  Rocket
} from "lucide-react"

// 3D Card component
const Card3D = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setRotateX((y - 0.5) * -20)
    setRotateY((x - 0.5) * 20)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative preserve-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  )
}

// Floating social reactions
const FloatingReactions = () => {
  const reactions = ["👍", "❤️", "😮", "😍", "🔥", "💯"]
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {reactions.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          initial={{
            x: Math.random() * 100 + "%",
            y: "110%",
            scale: 0,
          }}
          animate={{
            y: "-10%",
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  )
}

const platforms = [
  {
    name: "Facebook",
    icon: Facebook,
    users: "3 milliards",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Instagram",
    icon: Instagram,
    users: "2 milliards",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "Messenger",
    icon: MessageCircle,
    users: "1.3 milliard",
    color: "from-blue-400 to-purple-500"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    users: "2 milliards",
    color: "from-green-500 to-green-700"
  }
]

const adFormats = [
  {
    title: "Stories Ads",
    description: "Format immersif plein écran avec un engagement maximum",
    icon: Smartphone,
    metrics: "CTR +35%"
  },
  {
    title: "Reels Ads",
    description: "Vidéos courtes virales qui captent l'attention",
    icon: Video,
    metrics: "Reach x3"
  },
  {
    title: "Collection Ads",
    description: "Expérience shopping immersive directement dans l'app",
    icon: ShoppingBag,
    metrics: "Conv. +45%"
  },
  {
    title: "Carousel Ads",
    description: "Jusqu'à 10 images ou vidéos dans une seule pub",
    icon: Layers,
    metrics: "Eng. +25%"
  },
  {
    title: "Dynamic Ads",
    description: "Personnalisation automatique selon le comportement",
    icon: Zap,
    metrics: "ROAS x2.5"
  },
  {
    title: "Lead Ads",
    description: "Formulaires natifs pour capturer des leads qualifiés",
    icon: Users,
    metrics: "CPL -40%"
  }
]

const targetingOptions = [
  {
    title: "Audiences Similaires",
    description: "Trouvez des clients qui ressemblent à vos meilleurs clients",
    improvement: "+180% reach"
  },
  {
    title: "Retargeting Dynamique",
    description: "Re-engagez les visiteurs avec les produits qu'ils ont vus",
    improvement: "+250% ROAS"
  },
  {
    title: "Intérêts & Comportements",
    description: "Ciblez selon les activités et préférences détaillées",
    improvement: "+65% CTR"
  },
  {
    title: "Custom Audiences",
    description: "Uploadez vos listes clients pour un ciblage précis",
    improvement: "+90% conv."
  }
]

const caseStudies = [
  {
    client: "E-commerce Mode",
    sector: "Fashion",
    results: {
      roas: "x8.5",
      sales: "+320%",
      cpa: "-45%"
    },
    budget: "5K€/mois"
  },
  {
    client: "App Mobile Fitness",
    sector: "Sport",
    results: {
      downloads: "25K",
      cpi: "2.3€",
      retention: "68%"
    },
    budget: "8K€/mois"
  },
  {
    client: "Restaurant Chain",
    sector: "Food",
    results: {
      footfall: "+85%",
      orders: "+220%",
      ltv: "+40%"
    },
    budget: "3K€/mois"
  }
]

export default function MetaAdsPage() {
  const { openCalendly } = useCalendlyStore()
  const { scrollYProgress } = useScroll()
  const [activeFormat, setActiveFormat] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section with gradient mesh */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900">
        <FloatingReactions />
        
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Meta badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
          >
            <div className="flex gap-2">
              <Facebook className="w-5 h-5 text-blue-400" />
              <Instagram className="w-5 h-5 text-pink-400" />
            </div>
            <span className="text-white font-medium">Meta Business Partner</span>
            <Award className="w-5 h-5 text-yellow-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-white">Meta Ads</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Social Selling Expert
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
          >
            Transformez vos followers en clients avec des campagnes Meta 
            ultra-ciblées. ROAS moyen : <span className="text-pink-400 font-bold">x8.5</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <Button
              size="lg"
              onClick={openCalendly}
              className="group px-8 py-6 text-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
            >
              <span className="flex items-center gap-2">
                Audit Meta Ads gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <Link href="#formats">
                Découvrir les formats
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Platform stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all">
                  <platform.icon className="w-8 h-8 text-white mb-3 mx-auto" />
                  <div className="text-lg font-semibold text-white">{platform.name}</div>
                  <div className="text-sm text-gray-300">{platform.users} d'utilisateurs</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ad Formats Section with 3D cards */}
      <section id="formats" className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Formats publicitaires</span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                qui convertissent
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Maîtrise complète de tous les formats Meta pour maximiser votre impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card3D className="h-full">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <format.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {format.metrics}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{format.title}</h3>
                    <p className="text-gray-400">{format.description}</p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting Options */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ciblage laser précis
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Atteignez exactement les bonnes personnes au bon moment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {targetingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{option.title}</h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      {option.improvement}
                    </span>
                  </div>
                  <p className="text-gray-400">{option.description}</p>
                  
                  {/* Animated progress bar */}
                  <div className="mt-6 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
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
              Nos success stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des résultats concrets pour des clients ambitieux
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.client}</h3>
                      <p className="text-sm text-gray-400">{study.sector}</p>
                    </div>
                    <Trophy className="w-8 h-8 text-yellow-400" />
                  </div>
                  
                  <div className="space-y-4">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-gray-400 capitalize">{key}</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Budget</span>
                      <span className="text-white font-medium">{study.budget}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Voyez la différence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Avant / Après notre intervention
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 px-4 py-2 bg-red-500 text-white rounded-full font-medium">
                Avant
              </div>
              <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">ROAS</span>
                    <span className="text-2xl text-red-400">x1.2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">CPA</span>
                    <span className="text-2xl text-red-400">45€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">CTR</span>
                    <span className="text-2xl text-red-400">0.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Conversions/mois</span>
                    <span className="text-2xl text-red-400">67</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-green-500 text-white rounded-full font-medium">
                Après
              </div>
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-8 border border-purple-500/50">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">ROAS</span>
                    <span className="text-2xl text-green-400 font-bold">x8.5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">CPA</span>
                    <span className="text-2xl text-green-400 font-bold">12€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">CTR</span>
                    <span className="text-2xl text-green-400 font-bold">3.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Conversions/mois</span>
                    <span className="text-2xl text-green-400 font-bold">412</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            onMouseMove={handleMouseMove}
            className="relative"
          >
            {/* Interactive glow effect */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(236, 72, 153, 0.3), transparent 50%)`,
              }}
            />
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 relative z-10">
              Prêt à dominer les réseaux sociaux ?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto relative z-10">
              Rejoignez les marques qui cartonnent sur Meta
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="px-12 py-8 text-xl bg-white text-purple-900 hover:bg-gray-100"
                >
                  <Rocket className="w-6 h-6 mr-2" />
                  Lancer ma campagne
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
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Parler à un expert
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-white/60 relative z-10">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Résultats en 72h</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>ROAS garanti</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}