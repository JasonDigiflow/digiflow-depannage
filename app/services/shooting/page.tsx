"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Camera,
  Video,
  Image,
  Film,
  Aperture,
  Focus,
  Palette,
  Sun,
  Moon,
  Sparkles,
  Play,
  Pause,
  Settings,
  Layers,
  Eye,
  Star,
  Trophy,
  Award,
  Target,
  TrendingUp,
  Users,
  Heart,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Clock,
  Shield,
  Rocket,
  Zap,
  Monitor,
  Smartphone,
  Tv,
  Mic,
  Headphones,
  Music,
  FileVideo,
  ImageIcon,
  Edit3,
  Crop,
  Sliders,
  Grid,
  Move,
  Maximize2,
  PenTool,
  Droplet,
  Wind,
  Cloud,
  MapPin,
  Package,
  ShoppingBag,
  Coffee,
  Briefcase
} from "lucide-react"

// Floating camera lens animation
const FloatingLens = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0,
            rotate: 0
          }}
          animate={{
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.3, 0.3, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Aperture className="w-24 h-24 text-amber-400/20" />
        </motion.div>
      ))}
    </div>
  )
}

// Gallery preview component
const GalleryPreview = () => {
  const [activeImage, setActiveImage] = useState(0)
  const images = [
    { type: "Product", color: "from-amber-500 to-orange-600" },
    { type: "Portrait", color: "from-blue-500 to-purple-600" },
    { type: "Corporate", color: "from-gray-600 to-gray-800" },
    { type: "Lifestyle", color: "from-green-500 to-teal-600" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((img, i) => (
        <motion.div
          key={i}
          onClick={() => setActiveImage(i)}
          className={`relative aspect-video rounded-2xl cursor-pointer overflow-hidden ${
            activeImage === i ? 'ring-4 ring-amber-400' : ''
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${img.color}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{img.type}</span>
          </div>
          {activeImage === i && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center"
            >
              <Play className="w-4 h-4 text-gray-900" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}

const services = [
  {
    icon: Camera,
    title: "Photographie Pro",
    description: "Shootings produits, corporate, lifestyle",
    features: ["Retouche incluse", "HD & 4K", "Livraison 48h"]
  },
  {
    icon: Video,
    title: "Production Vidéo",
    description: "Spots publicitaires, interviews, events",
    features: ["Montage pro", "Motion design", "Sound design"]
  },
  {
    icon: Film,
    title: "Drone & Aérien",
    description: "Prises de vue aériennes spectaculaires",
    features: ["Pilote certifié", "4K stabilisé", "Autorisations"]
  },
  {
    icon: Palette,
    title: "Direction Artistique",
    description: "Conception créative complète",
    features: ["Moodboard", "Stylisme", "Décoration"]
  },
  {
    icon: Edit3,
    title: "Post-Production",
    description: "Montage et effets spéciaux",
    features: ["Color grading", "VFX", "Animation"]
  },
  {
    icon: Package,
    title: "Packshot E-commerce",
    description: "Photos produits optimisées",
    features: ["Fond blanc", "360°", "Zoom HD"]
  }
]

const shootingTypes = [
  {
    type: "Corporate",
    duration: "1/2 journée",
    deliverables: "50-100 photos",
    usage: "Web & Print",
    ideal: "Entreprises, portraits équipe"
  },
  {
    type: "Product",
    duration: "2-4 heures",
    deliverables: "20-40 photos",
    usage: "E-commerce, catalogue",
    ideal: "Boutiques, marques"
  },
  {
    type: "Event",
    duration: "Journée complète",
    deliverables: "200+ photos",
    usage: "Communication, presse",
    ideal: "Conférences, lancements"
  },
  {
    type: "Brand Content",
    duration: "1-2 jours",
    deliverables: "100+ assets",
    usage: "Réseaux sociaux",
    ideal: "Campagnes, storytelling"
  }
]

const equipment = [
  { name: "Canon R5", type: "Appareil", spec: "45MP, 8K" },
  { name: "RED Komodo", type: "Cinéma", spec: "6K, 120fps" },
  { name: "DJI Ronin", type: "Stabilisateur", spec: "3 axes" },
  { name: "Profoto B10", type: "Éclairage", spec: "500Ws" },
  { name: "Zeiss Prime", type: "Objectifs", spec: "T1.5" },
  { name: "DJI Inspire", type: "Drone", spec: "5.2K RAW" }
]

const stats = [
  { value: "500+", label: "Shootings réalisés", icon: Camera },
  { value: "98%", label: "Clients satisfaits", icon: Star },
  { value: "48h", label: "Livraison express", icon: Clock },
  { value: "4K+", label: "Assets créés", icon: Image }
]

export default function ShootingPage() {
  const { openCalendly } = useCalendlyStore()
  const { scrollYProgress } = useScroll()
  const [activeType, setActiveType] = useState(0)
  const [photosCount, setPhotosCount] = useState(0)
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    // Animation jusqu'à 5000+ puis incrémentation aléatoire
    let interval: NodeJS.Timeout
    let incrementInterval: NodeJS.Timeout
    
    // D'abord animer jusqu'à 5000
    interval = setInterval(() => {
      setPhotosCount(prev => {
        if (prev < 5000) {
          return Math.min(prev + 137, 5000)
        } else {
          clearInterval(interval)
          // Puis incrémenter de +1 toutes les 0.5 à 10 secondes
          const startIncrement = () => {
            incrementInterval = setInterval(() => {
              setPhotosCount(prev => prev + 1)
              // Redéfinir l'intervalle avec un nouveau délai aléatoire
              clearInterval(incrementInterval)
              const nextDelay = Math.random() * 9500 + 500 // Entre 500ms et 10000ms
              setTimeout(startIncrement, nextDelay)
            }, Math.random() * 9500 + 500)
          }
          startIncrement()
          return 5000
        }
      })
    }, 50)
    
    return () => {
      clearInterval(interval)
      clearInterval(incrementInterval)
    }
  }, [])

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900">
        <FloatingLens />
        
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
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
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
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

        {/* Camera aperture animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ rotate }}
        >
          <Aperture className="w-[600px] h-[600px] text-amber-500/10" />
        </motion.div>

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
                <Camera className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="text-white font-medium">Photos livrées</span>
                <motion.span
                  key={photosCount}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-bold font-mono"
                >
                  {photosCount.toLocaleString()}+
                </motion.span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Shooting</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
                  Photo & Vidéo Pro
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8">
                Capturez l'essence de votre marque avec des visuels professionnels. 
                Livraison : <span className="text-amber-400 font-bold">48h</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={openCalendly}
                    className="px-8 py-6 text-lg bg-gradient-to-r from-amber-600 to-orange-600"
                  >
                    Réserver un shooting
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
                    Voir portfolio
                  </Button>
                </motion.div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "4K-8K", label: "Résolution" },
                  { value: "Pro", label: "Équipement" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right content - Gallery Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <GalleryPreview />
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
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
              >
                <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Services</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                audiovisuels complets
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              De la conception à la post-production
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
                <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-amber-500/50 transition-all h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
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

      {/* Shooting Types */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Types de shootings
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Formules adaptées à vos besoins
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {shootingTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveType(index)}
                className={`cursor-pointer p-8 rounded-3xl border transition-all ${
                  activeType === index
                    ? 'bg-gradient-to-br from-amber-900/50 to-orange-900/50 border-amber-500'
                    : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{type.type}</h3>
                  {activeType === index && (
                    <CheckCircle2 className="w-6 h-6 text-amber-400" />
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-gray-400 text-sm">Durée</span>
                    <p className="text-white font-medium">{type.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Livrables</span>
                    <p className="text-amber-400 font-medium">{type.deliverables}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400 text-sm">Usage</span>
                    <p className="text-white">{type.usage}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Idéal pour</span>
                    <p className="text-gray-300">{type.ideal}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Équipement premium
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Du matériel professionnel pour des résultats exceptionnels
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 text-center"
              >
                <div className="text-3xl mb-3">📷</div>
                <h4 className="text-white font-bold text-sm mb-1">{item.name}</h4>
                <p className="text-gray-500 text-xs mb-2">{item.type}</p>
                <p className="text-amber-400 text-xs">{item.spec}</p>
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
              Notre process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              De la préparation à la livraison
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-600 hidden md:block" />
            
            <div className="space-y-12">
              {[
                { step: "Brief créatif", desc: "Compréhension de vos besoins", icon: Target, time: "J-7" },
                { step: "Préparation", desc: "Repérage, moodboard, planning", icon: Settings, time: "J-3" },
                { step: "Shooting", desc: "Captation photo/vidéo", icon: Camera, time: "Jour J" },
                { step: "Sélection", desc: "Tri et sélection des meilleures prises", icon: Grid, time: "J+1" },
                { step: "Post-production", desc: "Retouche, montage, color grading", icon: Edit3, time: "J+2" },
                { step: "Livraison", desc: "Remise des fichiers HD", icon: Package, time: "J+2" }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 bg-gray-800 rounded-3xl p-8 border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white">{phase.step}</h3>
                      <span className="text-amber-400">{phase.time}</span>
                    </div>
                    <p className="text-gray-400">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Prêt pour votre shooting ?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Créons ensemble des visuels qui marquent les esprits
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="px-12 py-8 text-xl bg-white text-amber-900 hover:bg-gray-100"
                >
                  <Camera className="w-6 h-6 mr-2" />
                  Réserver maintenant
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
                    <Image className="w-6 h-6 mr-2" />
                    Voir le portfolio
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Livraison 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Droits inclus</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>Qualité pro</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}