"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Users,
  Heart,
  Star,
  TrendingUp,
  Award,
  Camera,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Hash,
  MessageCircle,
  Eye,
  ThumbsUp,
  Share2,
  UserCheck,
  Target,
  BarChart3,
  Sparkles,
  Trophy,
  Shield,
  Clock,
  Rocket,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Zap,
  Globe,
  Video,
  Image,
  Megaphone,
  Crown,
  Gift,
  ShoppingBag,
  DollarSign,
  Activity,
  Filter,
  Verified
} from "lucide-react"

// Floating social icons animation
const FloatingSocialIcons = () => {
  const icons = ["❤️", "👍", "🔥", "💯", "✨", "🚀", "💎", "⭐"]
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          initial={{
            x: Math.random() * 100 + "%",
            y: "110%",
            scale: 0,
            rotate: 0
          }}
          animate={{
            y: "-10%",
            scale: [0, 1.5, 1, 0],
            rotate: 360
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  )
}

// Influencer card component
const InfluencerCard = ({ influencer }: any) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border border-gray-700 hover:border-rose-500/50 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full" />
        <Verified className="w-6 h-6 text-blue-400" />
      </div>
      <h4 className="text-white font-bold text-lg mb-1">{influencer.name}</h4>
      <p className="text-gray-400 text-sm mb-4">{influencer.niche}</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Followers</span>
          <span className="text-white font-bold">{influencer.followers}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Engagement</span>
          <span className="text-rose-400 font-bold">{influencer.engagement}%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Reach</span>
          <span className="text-orange-400 font-bold">{influencer.reach}</span>
        </div>
      </div>
    </motion.div>
  )
}

const influencerTiers = [
  {
    tier: "Nano",
    followers: "1K-10K",
    engagement: "8-15%",
    price: "50-500€",
    benefits: ["Authenticité maximale", "Communauté engagée", "ROI élevé"]
  },
  {
    tier: "Micro",
    followers: "10K-100K",
    engagement: "5-8%",
    price: "500-5K€",
    benefits: ["Niche spécifique", "Trust élevé", "Contenu de qualité"]
  },
  {
    tier: "Macro",
    followers: "100K-1M",
    engagement: "2-5%",
    price: "5K-50K€",
    benefits: ["Large reach", "Professionnels", "Multi-plateformes"]
  },
  {
    tier: "Mega",
    followers: "1M+",
    engagement: "1-3%",
    price: "50K+€",
    benefits: ["Visibilité massive", "Célébrités", "Impact viral"]
  }
]

const campaignTypes = [
  {
    type: "Product Placement",
    description: "Intégration naturelle dans le contenu",
    icon: ShoppingBag,
    results: "+65% awareness"
  },
  {
    type: "Takeover",
    description: "Gestion temporaire des comptes",
    icon: Crown,
    results: "+120% engagement"
  },
  {
    type: "Ambassadeur",
    description: "Partenariat long terme",
    icon: Award,
    results: "+200% loyalty"
  },
  {
    type: "UGC Campaign",
    description: "Contenu généré par les utilisateurs",
    icon: Users,
    results: "+85% trust"
  },
  {
    type: "Event Coverage",
    description: "Couverture d'événements",
    icon: Camera,
    results: "+150% reach"
  },
  {
    type: "Giveaways",
    description: "Concours et cadeaux",
    icon: Gift,
    results: "+300% followers"
  }
]

const platforms = [
  { name: "Instagram", icon: Instagram, color: "from-pink-500 to-purple-600", users: "2B+" },
  { name: "TikTok", icon: Video, color: "from-black to-gray-800", users: "1B+" },
  { name: "YouTube", icon: Youtube, color: "from-red-600 to-red-800", users: "2.5B+" },
  { name: "LinkedIn", icon: Linkedin, color: "from-blue-600 to-blue-800", users: "900M+" }
]

const metrics = [
  { value: "250+", label: "Influenceurs partenaires", icon: Users },
  { value: "85M", label: "Reach total", icon: Eye },
  { value: "12%", label: "Engagement moyen", icon: Heart },
  { value: "x8", label: "ROI moyen", icon: TrendingUp }
]

export default function InfluencePage() {
  const { openCalendly } = useCalendlyStore()
  const [selectedTier, setSelectedTier] = useState(1)
  const [followersCount, setFollowersCount] = useState(0)

  useEffect(() => {
    // Animation s'arrête à 5000+
    const targetNumber = 5000
    let interval: NodeJS.Timeout
    interval = setInterval(() => {
      setFollowersCount(prev => {
        if (prev < targetNumber) {
          return Math.min(prev + 123, targetNumber)
        } else {
          clearInterval(interval)
          return targetNumber
        }
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const sampleInfluencers = [
    { name: "@lifestyle_pro", niche: "Lifestyle", followers: "125K", engagement: "6.8", reach: "850K/mois" },
    { name: "@tech_insider", niche: "Tech", followers: "89K", engagement: "8.2", reach: "620K/mois" },
    { name: "@foodie_love", niche: "Food", followers: "234K", engagement: "5.4", reach: "1.2M/mois" },
    { name: "@fitness_guru", niche: "Sport", followers: "567K", engagement: "4.1", reach: "2.8M/mois" }
  ]

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-900 via-orange-900 to-pink-900">
        <FloatingSocialIcons />
        
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-rose-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Live follower counter */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
            >
              <Heart className="w-5 h-5 text-rose-400 animate-pulse" />
              <span className="text-white font-medium">Followers générés</span>
              <motion.span
                key={followersCount}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="px-3 py-1 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full text-white font-bold font-mono"
              >
                {followersCount.toLocaleString()}+
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="text-white">Influence</span>
              <br />
              <span className="bg-gradient-to-r from-rose-400 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Marketing Pro
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
            >
              Collaborez avec les influenceurs qui font la différence. 
              ROI moyen : <span className="text-rose-400 font-bold">x8</span>
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
                className="group px-8 py-6 text-lg bg-gradient-to-r from-rose-600 to-orange-600"
              >
                <span className="flex items-center gap-2">
                  Lancer ma campagne
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="#influencers">
                  Voir nos influenceurs
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                >
                  <metric.icon className="w-8 h-8 text-rose-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Influencer Tiers */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Tous les types</span>
              <br />
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                d'influenceurs
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Du nano au mega, trouvez le partenaire idéal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {influencerTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedTier(index)}
                className={`cursor-pointer p-6 rounded-3xl border transition-all ${
                  selectedTier === index
                    ? 'bg-gradient-to-br from-rose-900/50 to-orange-900/50 border-rose-500'
                    : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{tier.tier}</h3>
                  {selectedTier === index && (
                    <CheckCircle2 className="w-6 h-6 text-rose-400" />
                  )}
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Followers</span>
                    <span className="text-white font-medium">{tier.followers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Engagement</span>
                    <span className="text-rose-400 font-medium">{tier.engagement}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Budget</span>
                    <span className="text-orange-400 font-medium">{tier.price}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-32 bg-black">
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
              Des stratégies adaptées à vos objectifs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignTypes.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-rose-500/50 transition-all h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-orange-600 rounded-2xl flex items-center justify-center">
                      <campaign.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {campaign.results}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{campaign.type}</h3>
                  <p className="text-gray-400">{campaign.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Multi-plateformes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Présence sur tous les réseaux qui comptent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-2xl font-bold text-gray-400">{platform.users}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Influencers */}
      <section id="influencers" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Notre réseau
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des créateurs de contenu triés sur le volet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleInfluencers.map((influencer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <InfluencerCard influencer={influencer} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={openCalendly}
              className="bg-gradient-to-r from-rose-600 to-orange-600"
            >
              Accéder à tout le réseau
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-rose-900 via-orange-900 to-pink-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Prêt à influencer ?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Créez des campagnes d'influence qui marquent les esprits
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="px-12 py-8 text-xl bg-white text-rose-900 hover:bg-gray-100"
                >
                  <Rocket className="w-6 h-6 mr-2" />
                  Démarrer ma campagne
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
                    Brief créatif gratuit
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Contrats sécurisés</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Matching 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>x8 ROI moyen</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}