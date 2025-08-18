"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { 
  Sparkles, 
  Users, 
  Rocket, 
  Target, 
  Heart, 
  Award,
  Coffee,
  Zap,
  TrendingUp,
  MapPin,
  Sun,
  ChevronRight,
  Calendar,
  Star,
  Quote,
  ArrowDown,
  Globe,
  Briefcase,
  Code2,
  Megaphone,
  Building2,
  Gamepad2,
  Music,
  Camera,
  Mountain,
  Wine,
  TreePine,
  Waves,
  Pizza,
  Croissant,
  Smile,
  PartyPopper,
  Palette,
  Mic,
  Trophy,
  Flame,
  Bird
} from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Composant Lavande animée
const LavenderField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 30}%`
          }}
          animate={{
            rotate: [0, 3, -3, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2
          }}
        >
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
            <path d="M20 10 Q20 30 20 50" stroke="rgb(147, 51, 234)" strokeWidth="2"/>
            <ellipse cx="20" cy="10" rx="8" ry="12" fill="rgb(147, 51, 234)" opacity="0.6"/>
            <ellipse cx="20" cy="18" rx="6" ry="10" fill="rgb(168, 85, 247)" opacity="0.5"/>
            <ellipse cx="20" cy="25" rx="4" ry="8" fill="rgb(196, 181, 253)" opacity="0.4"/>
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

// Composant Cigale animée
const CigaleAnimation = ({ className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={() => setIsPlaying(!isPlaying)}
      animate={{
        rotate: isPlaying ? [0, 5, -5, 0] : 0,
      }}
      transition={{
        duration: 0.2,
        repeat: isPlaying ? Infinity : 0
      }}
    >
      <Bird className="w-8 h-8 text-amber-500" />
      {isPlaying && (
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full whitespace-nowrap">
            ♪ Tchik tchik tchik ♪
          </span>
        </motion.div>
      )}
    </motion.div>
  )
}

// Composant Soleil 3D réaliste
const ProvenceSun3D = () => {
  return (
    <div className="fixed -top-20 -left-20 w-96 h-96 pointer-events-none overflow-hidden">
      {/* Rayons de lumière animés */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-48 origin-bottom"
            style={{
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scaleY: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-gradient-to-t from-transparent via-yellow-300/30 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Halo externe animé */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.2) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Couronne solaire */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="20%" stopColor="#FDE68A" />
              <stop offset="40%" stopColor="#FCD34D" />
              <stop offset="60%" stopColor="#FBBF24" />
              <stop offset="80%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Protubérances solaires */}
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M100,100 Q${100 + Math.cos(i * Math.PI / 4) * 50},${100 + Math.sin(i * Math.PI / 4) * 50} ${100 + Math.cos(i * Math.PI / 4) * 80},${100 + Math.sin(i * Math.PI / 4) * 80}`}
              stroke="url(#sunGradient)"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
              animate={{
                d: [
                  `M100,100 Q${100 + Math.cos(i * Math.PI / 4) * 50},${100 + Math.sin(i * Math.PI / 4) * 50} ${100 + Math.cos(i * Math.PI / 4) * 80},${100 + Math.sin(i * Math.PI / 4) * 80}`,
                  `M100,100 Q${100 + Math.cos(i * Math.PI / 4) * 60},${100 + Math.sin(i * Math.PI / 4) * 60} ${100 + Math.cos(i * Math.PI / 4) * 90},${100 + Math.sin(i * Math.PI / 4) * 90}`,
                  `M100,100 Q${100 + Math.cos(i * Math.PI / 4) * 50},${100 + Math.sin(i * Math.PI / 4) * 50} ${100 + Math.cos(i * Math.PI / 4) * 80},${100 + Math.sin(i * Math.PI / 4) * 80}`,
                ]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Corps du soleil avec effet 3D */}
          <circle cx="100" cy="100" r="60" fill="url(#sunGradient)" filter="url(#glow)" />
          
          {/* Taches solaires animées */}
          <motion.circle
            cx="85"
            cy="90"
            r="8"
            fill="#F59E0B"
            opacity="0.3"
            animate={{
              cx: [85, 90, 85],
              cy: [90, 95, 90],
              r: [8, 10, 8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle
            cx="115"
            cy="110"
            r="6"
            fill="#D97706"
            opacity="0.3"
            animate={{
              cx: [115, 110, 115],
              cy: [110, 105, 110],
              r: [6, 8, 6],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Effet de lumière sur la page */}
      <div 
        className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] pointer-events-none"
        style={{
          transform: "translate(-25%, -25%)",
          background: "radial-gradient(circle at 0% 0%, rgba(254, 243, 199, 0.3) 0%, rgba(253, 230, 138, 0.15) 20%, transparent 50%)",
        }}
      />
    </div>
  )
}

// Composant Carte postale interactive
const PostCard = ({ children, className = "", delay = 0 }: any) => {
  const [isFlipped, setIsFlipped] = useState(false)
  
  return (
    <motion.div
      className={`relative preserve-3d cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay }}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Recto */}
        <div className="backface-hidden">
          {children}
        </div>
        
        {/* Verso - Style carte postale */}
        <div 
          className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="text-amber-900 font-handwriting text-lg">
                Salut de Provence ! ☀️
              </p>
              <p className="text-amber-800 mt-2 text-sm">
                On travaille dur... entre deux apéros ! 
              </p>
            </div>
            <div className="flex items-end justify-between">
              <div className="text-xs text-amber-600">
                <p>13100 Aix-en-Provence</p>
                <p>Avec amour 💜</p>
              </div>
              <div className="w-16 h-20 bg-amber-200/30 rounded flex items-center justify-center">
                <span className="text-2xl">📮</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Données des fondateurs version fun
const founderPersonality = {
  enzo: {
    title: "Le Stratège Solaire",
    traits: ["Visionnaire", "Créatif", "Optimiste"],
    hobbies: ["Pétanque champion", "DJ du dimanche", "Sommelier de pastis"],
    quote: "Un client content, c'est comme un bon rosé : ça se partage !",
    superpower: "Transforme les KPI en apéro",
    emoji: "🎯",
    favoriteDish: "Bouillabaisse",
    musicStyle: "De Gazo à Gims",
    morningRoutine: "Café, Analytics, Soleil",
    spirit: "70% stratégie, 30% bonne humeur"
  },
  jason: {
    title: "Le Geek des Calanques",
    traits: ["Tech Wizard", "Perfectionniste", "Drôle"],
    hobbies: ["Codeur nocturne", "Randonneur du dimanche", "Pizza tester pro"],
    quote: "Le code c'est bien, mais avec vue sur mer c'est mieux !",
    superpower: "Debug en bermuda",
    emoji: "💻",
    favoriteDish: "Pizza 4 fromages",
    musicStyle: "Lo-fi & Jul",
    morningRoutine: "Code, Coffee, Repeat",
    spirit: "80% logique, 20% magie provençale"
  },
  alexandre: {
    title: "Le Growth Hacker Méditerranéen",
    traits: ["Data-driven", "Innovateur", "Ambitieux"],
    hobbies: ["Trading crypto", "Jet-ski expert", "Mixologue amateur"],
    quote: "Les données ne mentent jamais, mais elles bronzent bien au soleil !",
    superpower: "Fait x10 sur n'importe quelle métrique",
    emoji: "📈",
    favoriteDish: "Sushi & Red Bull",
    musicStyle: "Techno & Drake",
    morningRoutine: "Stats, Stratégie, Scale",
    spirit: "60% data, 40% intuition géniale"
  }
}

// Timeline avec événements fun
const timelineEvents = [
  {
    year: "2020",
    season: "Été",
    title: "La Rencontre",
    description: "Trois étudiants, une terrasse, un projet fou",
    funny: "Premier brainstorming : 5 pizzas, 18 cafés, 1 idée géniale",
    icon: Coffee,
    weather: "32°C ☀️"
  },
  {
    year: "2021",
    season: "Automne",
    title: "Les Grandes Boîtes",
    description: "Stages chez Accor & Uber",
    funny: "On a appris leurs secrets... et leur machine à café",
    icon: Building2,
    weather: "25°C 🍂"
  },
  {
    year: "2022",
    season: "Printemps",
    title: "DIGIFLOW est né !",
    description: "Premier bureau : 15m² avec vue sur parking",
    funny: "Climatisation : ouvrir la fenêtre. Motivation : 200%",
    icon: Rocket,
    weather: "28°C 🌸"
  },
  {
    year: "2023",
    season: "Été",
    title: "La Montée en Puissance",
    description: "100 clients, 5 collaborateurs, 1 baby-foot",
    funny: "Record : 17 Mojitos vendus = 1 client signé",
    icon: TrendingUp,
    weather: "35°C 🔥"
  },
  {
    year: "2024",
    season: "Toute l'année",
    title: "Les Rois du ROI",
    description: "x4 de moyenne, 0 client mécontent",
    funny: "Notre secret ? L'IA... et l'Aïoli",
    icon: Trophy,
    weather: "Parfait 👌"
  }
]

// Méthode de travail fun
const workMethod = [
  {
    step: "1",
    title: "On prend un café",
    description: "Virtuel ou réel, mais toujours avec le sourire",
    icon: Coffee,
    duration: "30 min"
  },
  {
    step: "2",
    title: "On écoute vraiment",
    description: "Vos rêves, vos galères, vos ambitions",
    icon: Mic,
    duration: "1h"
  },
  {
    step: "3",
    title: "On cogite au soleil",
    description: "Les meilleures idées viennent en terrasse",
    icon: Sun,
    duration: "2-3 jours"
  },
  {
    step: "4",
    title: "On lance la machine",
    description: "Campagnes, tracking, optimisation, magie",
    icon: Rocket,
    duration: "2 semaines"
  },
  {
    step: "5",
    title: "On célèbre ensemble",
    description: "Vos succès = Notre apéro",
    icon: PartyPopper,
    duration: "∞"
  }
]

export default function AboutPage() {
  const { openCalendly } = useCalendlyStore()
  const { scrollYProgress } = useScroll()
  const [selectedFounder, setSelectedFounder] = useState<"enzo" | "jason" | null>(null)
  
  // Parallax effects
  const cloudsX = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <>
      <NavigationPremium />
      
      {/* Soleil 3D spectaculaire */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <ProvenceSun3D />
      </div>
      
      {/* Hero Section Provence Premium */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Fond animé Provence additionnel */}
        <LavenderField />
        
        {/* Cigales interactives */}
        <div className="absolute top-40 left-20">
          <CigaleAnimation />
        </div>
        <div className="absolute bottom-40 right-32">
          <CigaleAnimation />
        </div>

        {/* Nuages flottants */}
        <motion.div
          className="absolute top-20 left-1/4 text-white opacity-70"
          style={{ x: cloudsX }}
        >
          ☁️
        </motion.div>
        <motion.div
          className="absolute top-32 right-1/3 text-white opacity-50 text-3xl"
          style={{ x: cloudsX }}
        >
          ☁️
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge Marseillais */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.3 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 blur-xl opacity-40 animate-pulse" />
                <div className="relative px-8 py-4 bg-white rounded-full border-2 border-amber-200 shadow-xl">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                      Aix-en-Provence • 300 jours de soleil/an
                    </span>
                    <Sun className="w-5 h-5 text-amber-500 animate-spin-slow" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Titre avec style manuscrit */}
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block text-amber-900 font-serif italic">Salut, nous c'est</span>
              <motion.span 
                className="block text-8xl md:text-9xl bg-gradient-to-r from-violet via-purple-400 to-orange bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200%",
                }}
              >
                DIGIFLOW
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-2xl md:text-3xl text-amber-800 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              L'agence qui fait <span className="font-bold text-violet">x4 sur votre ROI</span> 
              {" "}entre deux parties de pétanque 🎯
            </motion.p>

            {/* Fondateurs en mode fun */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <PostCard delay={0.6}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-violet-200 relative overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  onClick={() => setSelectedFounder("enzo")}
                >
                  <div className="absolute top-4 right-4 text-4xl">🎯</div>
                  
                  {/* Photo polaroid */}
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-violet to-purple-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center">
                      <span className="text-7xl font-bold text-white">E</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-lg">
                      <span className="text-xs font-bold text-violet">CEO • 23 ans</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enzo</h3>
                  <p className="text-violet font-medium mb-3">{founderPersonality.enzo.title}</p>
                  
                  <div className="space-y-2 text-left">
                    <p className="text-sm text-gray-600 italic">
                      "{founderPersonality.enzo.quote}"
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {founderPersonality.enzo.traits.map((trait) => (
                        <span key={trait} className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-violet-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>🥘 {founderPersonality.enzo.favoriteDish}</span>
                      <span>🎵 {founderPersonality.enzo.musicStyle}</span>
                    </div>
                  </div>
                </motion.div>
              </PostCard>

              <PostCard delay={0.8}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-orange-200 relative overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  onClick={() => setSelectedFounder("jason")}
                >
                  <div className="absolute top-4 right-4 text-4xl">💻</div>
                  
                  {/* Photo polaroid */}
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-orange to-yellow-500 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform flex items-center justify-center">
                      <span className="text-7xl font-bold text-white">J</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-lg">
                      <span className="text-xs font-bold text-orange">CTO • 23 ans</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Jason</h3>
                  <p className="text-orange font-medium mb-3">{founderPersonality.jason.title}</p>
                  
                  <div className="space-y-2 text-left">
                    <p className="text-sm text-gray-600 italic">
                      "{founderPersonality.jason.quote}"
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {founderPersonality.jason.traits.map((trait) => (
                        <span key={trait} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-orange-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>🍕 {founderPersonality.jason.favoriteDish}</span>
                      <span>🎵 {founderPersonality.jason.musicStyle}</span>
                    </div>
                  </div>
                </motion.div>
              </PostCard>

              <PostCard delay={1.0}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-green-200 relative overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  onClick={() => setSelectedFounder("alexandre")}
                >
                  <div className="absolute top-4 right-4 text-4xl">📈</div>
                  
                  {/* Photo polaroid */}
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform flex items-center justify-center">
                      <span className="text-7xl font-bold text-white">A</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-lg">
                      <span className="text-xs font-bold text-green-600">CMO • 25 ans</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Alexandre</h3>
                  <p className="text-green-600 font-medium mb-3">{founderPersonality.alexandre.title}</p>
                  
                  <div className="space-y-2 text-left">
                    <p className="text-sm text-gray-600 italic">
                      "{founderPersonality.alexandre.quote}"
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {founderPersonality.alexandre.traits.map((trait) => (
                        <span key={trait} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-green-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>🍣 {founderPersonality.alexandre.favoriteDish}</span>
                      <span>🎵 {founderPersonality.alexandre.musicStyle}</span>
                    </div>
                  </div>
                </motion.div>
              </PostCard>
            </div>

            {/* Fun fact */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-200">
                <p className="text-amber-900 font-medium">
                  💡 Fun fact : Notre meilleure stratégie est née un dimanche à 16h... en pleine sieste
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animation scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <p className="text-sm text-amber-600 mb-2">Scrollez pour l'aventure</p>
            <ArrowDown className="w-5 h-5 text-amber-600 mx-auto" />
          </div>
        </motion.div>
      </section>

      {/* Notre Histoire en BD */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-amber-900">Notre histoire</span>
              <br />
              <span className="text-3xl text-amber-600 font-serif italic">
                (version bande dessinée)
              </span>
            </h2>
          </motion.div>

          {/* Timeline façon BD */}
          <div className="relative">
            {/* Ligne de timeline en zigzag */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
              <div className="relative h-full">
                {/* Ligne principale continue */}
                <div className="absolute inset-0 w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-violet-500" 
                     style={{
                       backgroundImage: "repeating-linear-gradient(180deg, #f59e0b 0px, #f59e0b 10px, transparent 10px, transparent 20px)"
                     }}
                />
              </div>
            </div>

            {/* Événements en mode BD */}
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
                      className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-3 border-black relative"
                      style={{
                        boxShadow: "8px 8px 0px rgba(0,0,0,0.2)"
                      }}
                    >
                      {/* Bulle de BD */}
                      <div className={`absolute ${index % 2 === 0 ? '-right-4' : '-left-4'} top-8 w-8 h-8 bg-white border-3 border-black transform rotate-45`} />
                      
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-4xl font-bold text-amber-600">{event.year}</span>
                          <span className="ml-2 text-sm text-gray-500">{event.season} • {event.weather}</span>
                        </div>
                        <event.icon className="w-10 h-10 text-violet" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      
                      <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                        <p className="text-sm text-amber-900 font-medium">
                          😄 {event.funny}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Point central animé */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.3, rotate: 180 }}
                  >
                    <span className="text-2xl">{index % 2 === 0 ? "🌻" : "🌊"}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notre Méthode (version apéro) */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Notre méthode</span>
              <br />
              <span className="text-2xl text-violet font-medium">
                (Testée et approuvée sous 35°C)
              </span>
            </h2>
          </motion.div>

          {/* Steps en mode fun */}
          <div className="grid md:grid-cols-5 gap-8">
            {workMethod.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-violet-200 text-center h-full">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet to-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="mt-8 mb-4">
                    <step.icon className="w-12 h-12 text-violet mx-auto" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  
                  <div className="pt-3 border-t border-violet-100">
                    <span className="text-xs text-violet-600 font-medium">⏱ {step.duration}</span>
                  </div>
                </div>

                {index < workMethod.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-2xl z-10">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs (avec emojis) */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Nos valeurs</span>
              <br />
              <span className="text-xl text-gray-600">
                (Certifiées AOC - Appellation d'Origine Créative)
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🎯",
                title: "Précision Chirurgicale",
                description: "On vise le ROI comme on vise au pétanque : en plein dans le mille",
                color: "violet"
              },
              {
                emoji: "💜",
                title: "Passion Méditerranéenne", 
                description: "On met autant d'amour dans vos campagnes que dans une ratatouille maison",
                color: "purple"
              },
              {
                emoji: "🚀",
                title: "Vitesse TGV",
                description: "Plus rapide qu'un marseillais qui raconte une histoire",
                color: "orange"
              },
              {
                emoji: "🎨",
                title: "Créativité Sans Limite",
                description: "Des idées fraîches comme la brise du matin sur le Vieux-Port",
                color: "amber"
              },
              {
                emoji: "🤝",
                title: "Transparence Totale",
                description: "Clair comme l'eau de la Méditerranée (les jours de mistral)",
                color: "blue"
              },
              {
                emoji: "🎉",
                title: "Bonne Humeur Obligatoire",
                description: "Travailler sérieusement sans se prendre au sérieux",
                color: "green"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, rotate: [-1, 1, -1, 0] }}
                className="bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-gray-200"
              >
                <div className="text-6xl mb-4">{value.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Provençal */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <LavenderField />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-amber-900">On prend</span>
              <br />
              <span className="bg-gradient-to-r from-violet via-purple-400 to-orange bg-clip-text text-transparent">
                un pastis ensemble ?
              </span>
            </h2>

            <p className="text-2xl text-amber-800 mb-4 font-medium">
              (ou un café, on juge pas)
            </p>

            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Rejoignez les 150+ entreprises qui nous ont fait confiance 
              pour transformer leur acquisition en machine de guerre... provençale
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="group relative px-12 py-8 text-xl bg-gradient-to-r from-violet via-purple-500 to-orange hover:shadow-2xl transition-all"
                >
                  <span className="flex items-center gap-3">
                    <Coffee className="w-6 h-6" />
                    Prendre un café virtuel
                    <span className="group-hover:rotate-12 transition-transform">☕</span>
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-12 py-8 text-xl border-2 border-amber-600 text-amber-700 hover:bg-amber-50"
                  asChild
                >
                  <Link href="/#cases">
                    <Trophy className="w-6 h-6 mr-2" />
                    Voir nos victoires
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Signatures fun */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-amber-200 max-w-2xl mx-auto">
              <p className="text-gray-700 mb-4">
                PS : On a toujours des calissons pour les clients qui viennent nous voir
              </p>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <p className="font-handwriting text-2xl text-violet">Enzo</p>
                  <p className="text-xs text-gray-500">Team Rosé 🍷</p>
                </div>
                <span className="text-2xl">🤝</span>
                <div className="text-center">
                  <p className="font-handwriting text-2xl text-orange">Jason</p>
                  <p className="text-xs text-gray-500">Team Pastis 🥃</p>
                </div>
              </div>
            </div>

            {/* Easter egg */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-amber-600 mt-8"
            >
              🦗 Cliquez sur les cigales pour les faire chanter !
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Modal détails fondateur */}
      <AnimatePresence>
        {selectedFounder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFounder(null)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {founderPersonality[selectedFounder].emoji}
                </div>
                <h3 className="text-3xl font-bold mb-4 capitalize">{selectedFounder}</h3>
                <p className="text-xl text-gray-600 mb-6">{founderPersonality[selectedFounder].title}</p>
                
                <div className="space-y-4 text-left">
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Morning Routine:</p>
                    <p className="text-gray-600">{founderPersonality[selectedFounder].morningRoutine}</p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Superpower:</p>
                    <p className="text-gray-600">{founderPersonality[selectedFounder].superpower}</p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Spirit:</p>
                    <p className="text-gray-600">{founderPersonality[selectedFounder].spirit}</p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Hobbies du weekend:</p>
                    <div className="flex flex-wrap gap-2">
                      {founderPersonality[selectedFounder].hobbies.map((hobby) => (
                        <span key={hobby} className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-sm">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFounder(null)}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-violet to-orange text-white rounded-full font-medium hover:shadow-lg transition-all"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}