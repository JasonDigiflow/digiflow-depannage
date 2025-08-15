"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Target, 
  TrendingUp, 
  MousePointer2, 
  Zap, 
  ChartBar, 
  Users, 
  Award,
  Shield,
  CheckCircle2,
  ArrowRight,
  Star,
  Rocket,
  Brain,
  Globe,
  DollarSign,
  Search,
  BarChart3,
  Activity,
  Sparkles,
  Trophy,
  Clock,
  ShoppingCart,
  CreditCard,
  Eye,
  MessageSquare,
  Filter,
  Gauge,
  Smartphone,
  Monitor,
  PieChart,
  ArrowUpRight,
  ChevronRight,
  Plus,
  Minus
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Composant de particules animées
const AnimatedParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%"
          }}
          animate={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%"
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

// Données des services
const serviceFeatures = [
  {
    icon: Target,
    title: "Ciblage Chirurgical",
    description: "Audiences ultra-précises basées sur l'intention d'achat"
  },
  {
    icon: Brain,
    title: "IA & Machine Learning",
    description: "Optimisation continue par intelligence artificielle"
  },
  {
    icon: DollarSign,
    title: "ROI Garanti",
    description: "Performance mesurable et rentabilité assurée"
  },
  {
    icon: Zap,
    title: "Résultats Immédiats",
    description: "Visibilité instantanée dès le lancement"
  },
  {
    icon: Shield,
    title: "Budget Maîtrisé",
    description: "Contrôle total de vos investissements publicitaires"
  },
  {
    icon: Activity,
    title: "Tracking Avancé",
    description: "Suivi en temps réel de chaque conversion"
  }
]

const campaignTypes = [
  {
    name: "Search",
    description: "Captez l'intention d'achat au moment précis",
    icon: Search,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Shopping",
    description: "Vendez directement vos produits sur Google",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Display",
    description: "Touchez 90% des internautes mondiaux",
    icon: Monitor,
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Performance Max",
    description: "L'IA Google à votre service pour maximiser les conversions",
    icon: Rocket,
    color: "from-violet-500 to-indigo-500"
  },
  {
    name: "YouTube",
    description: "Engagez votre audience avec la vidéo",
    icon: Eye,
    color: "from-red-500 to-pink-500"
  },
  {
    name: "Discovery",
    description: "Soyez découvert au bon moment",
    icon: Sparkles,
    color: "from-green-500 to-emerald-500"
  }
]

const stats = [
  { value: "3.5M€", label: "Budget géré", icon: DollarSign },
  { value: "12.5", label: "ROAS moyen", icon: TrendingUp },
  { value: "250%", label: "Croissance moyenne", icon: ChartBar },
  { value: "2.3%", label: "Taux de conversion", icon: MousePointer2 }
]

const processSteps = [
  {
    number: "01",
    title: "Audit & Stratégie",
    description: "Analyse approfondie de votre marché et définition d'objectifs SMART",
    duration: "48h"
  },
  {
    number: "02",
    title: "Structure & Tracking",
    description: "Configuration optimale des campagnes et tracking avancé",
    duration: "72h"
  },
  {
    number: "03",
    title: "Lancement & Tests",
    description: "Déploiement progressif avec A/B testing systématique",
    duration: "1 semaine"
  },
  {
    number: "04",
    title: "Optimisation IA",
    description: "Machine learning et ajustements quotidiens",
    duration: "Continu"
  },
  {
    number: "05",
    title: "Scaling & Performance",
    description: "Montée en puissance progressive et rentable",
    duration: "2 semaines"
  }
]

const pricingPlans = [
  {
    name: "Starter",
    price: "Sur mesure",
    budget: "< 5K€/mois",
    features: [
      "Campagnes Search & Shopping",
      "Configuration tracking",
      "Rapport mensuel",
      "Support par email",
      "Optimisation hebdomadaire"
    ],
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "Growth",
    price: "Sur mesure",
    budget: "5K-15K€/mois",
    features: [
      "Tout Starter +",
      "Performance Max & YouTube",
      "Rapport bi-mensuel",
      "Support prioritaire",
      "Optimisation quotidienne",
      "A/B Testing avancé"
    ],
    popular: true,
    color: "from-blue-600 to-cyan-600"
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    budget: "> 15K€/mois",
    features: [
      "Tout Growth +",
      "Account manager dédié",
      "Rapport hebdomadaire",
      "Support 24/7",
      "Stratégie sur-mesure",
      "Formation équipe"
    ],
    color: "from-violet-600 to-purple-600"
  }
]

export default function GoogleAdsPage() {
  const { openCalendly } = useCalendlyStore()
  const { scrollYProgress } = useScroll()
  const [activeTab, setActiveTab] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  
  const heroRef = useRef<HTMLDivElement>(null)
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    // Animation GSAP pour les éléments
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      })
      
      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out"
      })
      
      gsap.from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "back.out(1.7)"
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const faqs = [
    {
      question: "Quel budget minimum pour Google Ads ?",
      answer: "Nous recommandons un budget minimum de 1500€/mois pour obtenir des résultats significatifs. Cela permet d'avoir suffisamment de données pour optimiser efficacement."
    },
    {
      question: "Combien de temps pour voir des résultats ?",
      answer: "Les premiers résultats sont visibles dès le premier jour. L'optimisation complète prend généralement 2-3 semaines pour atteindre une performance optimale."
    },
    {
      question: "Google Ads ou Meta Ads ?",
      answer: "Les deux sont complémentaires. Google Ads capture l'intention d'achat immédiate, Meta Ads crée la demande. Nous recommandons souvent une stratégie combinée."
    },
    {
      question: "Comment mesurez-vous le ROI ?",
      answer: "Nous mettons en place un tracking complet : conversions, valeur des conversions, ROAS, CPA, LTV. Tout est mesuré et reporté dans un dashboard temps réel."
    }
  ]

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <AnimatedParticles />
        
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.3),transparent_50%)]" />
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Google Ads badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
          >
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <div className="w-2 h-2 bg-green-500 rounded-full" />
            </div>
            <span className="text-white font-medium">Google Premier Partner 2024</span>
            <Award className="w-5 h-5 text-yellow-400" />
          </motion.div>

          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white">Google</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ads Expert
            </span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transformez chaque clic en client avec des campagnes Google Ads 
            ultra-optimisées par l'IA. ROI moyen : <span className="text-cyan-400 font-bold">x12.5</span>
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={openCalendly}
                className="group relative px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Audit gratuit Google Ads
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="#process">
                  Voir notre méthode
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Live stats ticker */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/40 text-center"
          >
            <p className="text-xs mb-2">Scroll pour découvrir</p>
            <ChevronRight className="w-5 h-5 rotate-90 mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Pourquoi nous sommes</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                les meilleurs en Google Ads
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une expertise technique pointue combinée à une obsession du ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Types de campagnes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Maîtrise complète de l'écosystème Google Ads
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 border border-slate-700 hover:border-transparent transition-all">
                  <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4`}>
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-400 text-sm">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
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
              Une méthodologie éprouvée pour maximiser votre ROI
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 hidden lg:block" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className={`bg-slate-800 rounded-3xl p-8 border border-slate-700 ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                        <div className="px-3 py-1 bg-blue-500/20 rounded-full">
                          <span className="text-sm text-blue-400">{step.duration}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden lg:flex w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full items-center justify-center shadow-lg shadow-cyan-500/50">
                    <div className="w-6 h-6 bg-slate-900 rounded-full" />
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tarifs transparents
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des forfaits adaptés à votre croissance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                      <span className="text-white text-sm font-medium">Plus populaire</span>
                    </div>
                  </div>
                )}
                
                <div className={`relative h-full bg-slate-800 rounded-3xl p-8 border ${plan.popular ? 'border-cyan-500' : 'border-slate-700'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 rounded-3xl`} />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">Budget: {plan.budget}</p>
                    
                    <div className="mb-8">
                      <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{plan.price}</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      onClick={openCalendly}
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-slate-700 hover:bg-slate-600'}`}
                    >
                      Commencer
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full bg-slate-800 rounded-2xl p-6 text-left hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 mt-4">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Prêt à exploser vos ventes ?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Rejoignez les 150+ entreprises qui nous font confiance pour leur croissance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="px-12 py-8 text-xl bg-white text-blue-900 hover:bg-gray-100"
                >
                  <Rocket className="w-6 h-6 mr-2" />
                  Démarrer maintenant
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
                    Discuter avec un expert
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Résultats en 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>ROI garanti</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}