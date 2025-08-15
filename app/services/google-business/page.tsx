"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  MapPin,
  Star,
  MessageSquare,
  Clock,
  Phone,
  Globe,
  Navigation,
  Image,
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Heart,
  Award,
  Shield,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Trophy,
  Target,
  Calendar,
  Camera,
  Edit3,
  FileText,
  Hash,
  Search,
  ThumbsUp,
  AlertCircle,
  Zap,
  Activity,
  Store,
  ShoppingBag,
  Coffee,
  Utensils,
  Building2,
  Home,
  Car,
  Briefcase,
  Smile,
  PieChart,
  Filter,
  Settings,
  Bell,
  Map
} from "lucide-react"

// Animated map pins
const FloatingPins = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0
          }}
          animate={{
            scale: [0, 1, 1, 0],
            y: [null, "-20%"]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-green-500/30" />
            <div className="w-2 h-2 bg-green-500/50 rounded-full animate-pulse" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Google Business Profile mockup
const ProfileMockup = () => {
  const [activeTab, setActiveTab] = useState("overview")
  
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
            <Store className="w-10 h-10 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Votre Entreprise</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/80">4.9 (127 avis)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {["overview", "reviews", "photos"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 px-4 text-sm font-medium capitalize transition-colors ${
              activeTab === tab
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab === "overview" && "Aperçu"}
            {tab === "reviews" && "Avis"}
            {tab === "photos" && "Photos"}
          </button>
        ))}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-green-600" />
                <span>123 Rue Example, 13001 Marseille</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-medium">Ouvert</span>
                <span>· Ferme à 19h00</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-green-600" />
                <span>04 91 00 00 00</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Globe className="w-5 h-5 text-green-600" />
                <span className="text-blue-600 underline">www.votre-site.com</span>
              </div>
            </motion.div>
          )}
          
          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {[1, 2].map((i) => (
                <div key={i} className="border-b border-gray-200 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">Client Satisfait</span>
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Service excellent, très professionnel. Je recommande vivement !
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
          
          {activeTab === "photos" && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-3 gap-2"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

const services = [
  {
    icon: Store,
    title: "Création & Optimisation",
    description: "Configuration complète de votre profil Google My Business",
    features: ["Vérification", "Infos complètes", "Catégories optimisées"]
  },
  {
    icon: Star,
    title: "Gestion des Avis",
    description: "Stratégie complète pour augmenter vos avis positifs",
    features: ["Réponses automatisées", "Modération", "Campagnes d'avis"]
  },
  {
    icon: Camera,
    title: "Photos & Visite Virtuelle",
    description: "Visuels professionnels et tour 360°",
    features: ["Shooting pro", "Street View", "Photos produits"]
  },
  {
    icon: Edit3,
    title: "Posts & Actualités",
    description: "Animation régulière de votre profil",
    features: ["Posts hebdo", "Offres spéciales", "Événements"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Suivi de performance détaillé",
    features: ["Dashboard live", "Insights mensuels", "ROI tracking"]
  },
  {
    icon: MessageSquare,
    title: "Messagerie & Q&A",
    description: "Gestion des interactions clients",
    features: ["Réponses rapides", "FAQ optimisée", "Chat direct"]
  }
]

const stats = [
  { value: "+250%", label: "Visibilité locale", icon: Eye },
  { value: "4.8★", label: "Note moyenne", icon: Star },
  { value: "+180%", label: "Appels entrants", icon: Phone },
  { value: "x3.5", label: "Visites en magasin", icon: MapPin }
]

const industries = [
  { name: "Restaurant", icon: Utensils, color: "from-orange-500 to-red-500" },
  { name: "Commerce", icon: ShoppingBag, color: "from-blue-500 to-indigo-500" },
  { name: "Services", icon: Briefcase, color: "from-purple-500 to-pink-500" },
  { name: "Santé", icon: Heart, color: "from-green-500 to-emerald-500" },
  { name: "Auto", icon: Car, color: "from-gray-600 to-gray-800" },
  { name: "Immobilier", icon: Home, color: "from-yellow-500 to-orange-500" }
]

const rankings = [
  { factor: "Proximité", impact: 40, color: "from-green-500 to-emerald-500" },
  { factor: "Pertinence", impact: 35, color: "from-blue-500 to-indigo-500" },
  { factor: "Importance", impact: 25, color: "from-purple-500 to-pink-500" }
]

export default function GoogleBusinessPage() {
  const { openCalendly } = useCalendlyStore()
  const [reviewsCount, setReviewsCount] = useState(0)
  const [selectedIndustry, setSelectedIndustry] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewsCount(prev => prev < 999 ? prev + 7 : 0)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        <FloatingPins />
        
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
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
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
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

        {/* Map grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px),
                             linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Live counter */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
              >
                <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-white font-medium">Avis générés</span>
                <motion.span
                  key={reviewsCount}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-bold font-mono"
                >
                  {reviewsCount}+
                </motion.span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Google</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
                  Business Profile Pro
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Dominez les recherches locales et attirez plus de clients. 
                Visibilité augmentée de <span className="text-green-400 font-bold">+250%</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={openCalendly}
                    className="px-8 py-6 text-lg bg-gradient-to-r from-green-600 to-emerald-600"
                  >
                    Optimiser mon profil
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="#services">
                      Nos services
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Quick features */}
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Setup 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>100% gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>ROI immédiat</span>
                </div>
              </div>
            </motion.div>

            {/* Right content - Profile Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ProfileMockup />
            </motion.div>
          </div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
              >
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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
              <span className="text-white">Services Google</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Business complets
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tout pour dominer votre marché local
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-green-500/50 transition-all h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tous les secteurs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expertise adaptée à votre industrie
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedIndustry(index)}
                whileHover={{ y: -10, scale: 1.1 }}
                className={`cursor-pointer relative group ${
                  selectedIndustry === index ? 'ring-4 ring-green-500' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-gray-900 rounded-2xl p-6 border border-gray-800 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm">{industry.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking Factors */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Facteurs de ranking local
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Les 3 piliers du référencement local Google
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {rankings.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{factor.factor}</h3>
                  <span className="text-3xl font-bold text-green-400">{factor.impact}%</span>
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 max-w-2xl mx-auto">
              Notre expertise couvre l'optimisation complète de ces 3 facteurs 
              pour garantir votre visibilité maximale dans le pack local Google.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Prêt à dominer localement ?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Augmentez votre visibilité locale et attirez plus de clients dès aujourd'hui
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="px-12 py-8 text-xl bg-white text-green-900 hover:bg-gray-100"
                >
                  <MapPin className="w-6 h-6 mr-2" />
                  Audit gratuit
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
                    Discuter stratégie
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Google Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Setup 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>+250% visibilité</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}