"use client"

import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Globe, 
  Code, 
  Mail, 
  Users, 
  Camera,
  DollarSign,
  Search,
  Megaphone,
  BarChart3,
  Rocket,
  Brain,
  Lightbulb,
  Award,
  ShoppingCart,
  MessageSquare,
  Map,
  Star
} from "lucide-react"

interface BlogImageGeneratorProps {
  title: string
  category: string
  gradient?: string
  icon?: string
}

const categoryConfigs = {
  "Google Ads": {
    gradient: "from-blue-600 via-blue-500 to-cyan-500",
    icon: Target,
    bgPattern: "radial"
  },
  "SEO": {
    gradient: "from-green-600 via-emerald-500 to-teal-500",
    icon: Search,
    bgPattern: "grid"
  },
  "SEO Local": {
    gradient: "from-emerald-600 via-green-500 to-lime-500",
    icon: Map,
    bgPattern: "dots"
  },
  "Stratégie": {
    gradient: "from-purple-600 via-violet-500 to-indigo-500",
    icon: Brain,
    bgPattern: "circuit"
  },
  "Conversion": {
    gradient: "from-orange-600 via-amber-500 to-yellow-500",
    icon: TrendingUp,
    bgPattern: "waves"
  },
  "Automation": {
    gradient: "from-indigo-600 via-blue-500 to-purple-500",
    icon: Zap,
    bgPattern: "hexagon"
  },
  "Prospection": {
    gradient: "from-slate-600 via-gray-500 to-zinc-500",
    icon: Mail,
    bgPattern: "diagonal"
  },
  "Influence": {
    gradient: "from-pink-600 via-rose-500 to-red-500",
    icon: Users,
    bgPattern: "circles"
  },
  "Content": {
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    icon: Camera,
    bgPattern: "squares"
  },
  "default": {
    gradient: "from-violet-600 via-purple-500 to-indigo-500",
    icon: Rocket,
    bgPattern: "mesh"
  }
}

const getPatternSVG = (pattern: string) => {
  switch (pattern) {
    case "radial":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="radial" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="white" />
              <circle cx="20" cy="20" r="10" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="18" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#radial)" />
        </svg>
      )
    case "grid":
      return (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]" />
      )
    case "dots":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      )
    case "circuit":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 5 L30 25 L50 25" stroke="white" fill="none" strokeWidth="0.5"/>
              <path d="M10 30 L30 30 L30 50" stroke="white" fill="none" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="3" fill="white" />
              <circle cx="50" cy="25" r="2" fill="white" />
              <circle cx="10" cy="30" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      )
    case "waves":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q25 5 50 10 T100 10" stroke="white" fill="none" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      )
    case "hexagon":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="hexagon" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,0 45,15 45,37 30,52 15,37 15,15" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagon)" />
        </svg>
      )
    case "diagonal":
      return (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
        </div>
      )
    case "circles":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="20" fill="none" stroke="white" strokeWidth="0.5"/>
              <circle cx="25" cy="25" r="10" fill="none" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      )
    case "squares":
      return (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="squares" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <rect x="5" y="5" width="20" height="20" fill="none" stroke="white" strokeWidth="0.5"/>
              <rect x="10" y="10" width="10" height="10" fill="white" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#squares)" />
        </svg>
      )
    default:
      return (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        </div>
      )
  }
}

export function BlogImageGenerator({ title, category, gradient, icon }: BlogImageGeneratorProps) {
  const config = categoryConfigs[category as keyof typeof categoryConfigs] || categoryConfigs.default
  const Icon = config.icon
  const bgGradient = gradient || config.gradient
  const pattern = config.bgPattern

  // Extraire les mots clés du titre pour les animations
  const keywords = title.split(' ').slice(0, 3)

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${bgGradient} overflow-hidden`}>
      {/* Pattern de fond */}
      {getPatternSVG(pattern)}

      {/* Effet de lumière */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Icône principale animée */}
      <motion.div
        className="absolute top-8 right-8"
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Icon className="w-32 h-32 text-white" />
      </motion.div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <div className="w-2 h-2 bg-white/30 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8">

        {/* Logo DIGIFLOW */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-8 left-8"
        >
          <div className="text-white font-bold text-xl">DIGIFLOW</div>
        </motion.div>

        {/* Élément graphique d'angle */}
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-white/10">
          <path d="M0,256 L256,256 L256,0 Q256,128 128,128 Q128,256 0,256" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}