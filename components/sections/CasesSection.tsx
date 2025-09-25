'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Monitor, Smartphone, Users, Calendar, TrendingUp, ChevronLeft, ChevronRight, Globe, Code, Rocket } from 'lucide-react'
import { useCalendlyStore } from "@/hooks/useCalendly"
import { Button } from "@/components/ui/button"
import { LiveWebsitePreview } from "@/components/LiveWebsitePreview"
import Link from "next/link"

interface Project {
  id: string
  title: string
  url: string
  category: string
  description: string
  technologies: string[]
  stats: {
    visitors: string
    conversion: string
    launch: string
  }
  color: {
    primary: string
    secondary: string
  }
  screenshots: {
    desktop: string
    mobile?: string
  }
}

const projects: Project[] = [
  {
    id: 'litalien',
    title: "L'Italien",
    url: 'https://www.litalien.fr',
    category: 'Restaurant & Réservation',
    description: 'Site vitrine élégant pour restaurant italien avec système de réservation en ligne',
    technologies: ['React', 'Node.js', 'OpenTable API', 'Google Maps'],
    stats: {
      visitors: '25K+',
      conversion: '+185%',
      launch: '2025'
    },
    color: {
      primary: '#2d5016',
      secondary: '#ffd700'
    },
    screenshots: {
      desktop: '/screenshots/litalien-desktop.jpg',
      mobile: '/screenshots/litalien-mobile.jpg'
    }
  },
  {
    id: 'be-hype',
    title: 'Be-Hype',
    url: 'https://www.be-hype.com',
    category: 'SaaS & Influence Marketing',
    description: 'Plateforme de mise en relation entre établissements et créateurs de contenu',
    technologies: ['Next.js', 'Stripe', 'Firebase', 'Framer Motion'],
    stats: {
      visitors: '200 leads/mois',
      conversion: '+500% MRR',
      launch: '6 mois'
    },
    color: {
      primary: '#000000',
      secondary: '#ff6b35'
    },
    screenshots: {
      desktop: '/screenshots/be-hype-desktop.jpg',
      mobile: '/screenshots/be-hype-mobile.jpg'
    }
  },
  {
    id: 'faseya',
    title: 'Faseya',
    url: 'https://www.faseya.fr',
    category: 'Plateforme IT & Tech',
    description: 'Faseya vous connecte avec des développeurs, designers et consultants IT expérimentés — à la demande, en mode agile et prêts à innover',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    stats: {
      visitors: '25K+/mois',
      conversion: '+350%',
      launch: '2024'
    },
    color: {
      primary: '#6366f1',
      secondary: '#8b5cf6'
    },
    screenshots: {
      desktop: '/screenshots/faseya-desktop.jpg',
      mobile: '/screenshots/faseya-mobile.jpg'
    }
  }
]

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop')
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)
  const { openCalendly } = useCalendlyStore()

  const currentProject = projects[activeProject]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
    setIframeLoaded(false)
    setIframeError(false)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
    setIframeLoaded(false)
    setIframeError(false)
  }

  const goToProject = (index: number) => {
    setActiveProject(index)
    setIframeLoaded(false)
    setIframeError(false)
  }

  const openSite = () => {
    window.open(currentProject.url, '_blank', 'noopener,noreferrer')
  }

  // Auto-play through projects
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextProject()
      }, 8000) // Change every 8 seconds
      return () => clearInterval(interval)
    }
  }, [activeProject, isHovered])

  return (
    <section id="cases" className="py-12 px-4 sm:py-16 md:py-20 lg:py-24 relative overflow-x-hidden bg-gradient-to-br from-dark via-dark/95 to-dark">
      {/* Background effects - Couleurs DIGIFLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-violet/20 rounded-full blur-3xl -translate-x-24 -translate-y-24 sm:-translate-x-32 sm:-translate-y-32 md:-translate-x-48 md:-translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-orange/20 rounded-full blur-3xl translate-x-24 translate-y-24 sm:translate-x-32 sm:translate-y-32 md:translate-x-48 md:translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 text-center mx-auto">
            Nos{' '}
            <span className="bg-gradient-to-r from-violet to-orange bg-clip-text text-transparent">
              Réalisations
            </span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto px-4 sm:px-0 text-center">
            Découvrez les sites web que nous avons créés et qui génèrent de vrais résultats pour nos clients
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Browser Frame */}
          <div className="glass rounded-t-lg p-3 sm:p-3 flex items-center justify-between backdrop-blur-xl overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-3 sm:px-3 md:px-4 py-1 text-sm sm:text-sm text-foreground-muted ml-2 sm:ml-4 flex items-center gap-2 sm:gap-2 overflow-hidden">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate text-sm sm:text-sm">{currentProject.url}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setViewMode('desktop')}
                className={`p-2 sm:p-2 rounded-md transition-colors min-h-[44px] flex items-center justify-center ${
                  viewMode === 'desktop' ? 'bg-violet/20 text-violet' : 'bg-white/10 text-foreground-muted hover:text-white'
                }`}
              >
                <Monitor className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`p-2 sm:p-2 rounded-md transition-colors min-h-[44px] flex items-center justify-center ${
                  viewMode === 'mobile' ? 'bg-violet/20 text-violet' : 'bg-white/10 text-foreground-muted hover:text-white'
                }`}
              >
                <Smartphone className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Preview Area */}
          <div className={`relative bg-dark-muted/50 backdrop-blur-sm rounded-b-lg overflow-hidden w-full mx-auto ${
            viewMode === 'desktop' ? 'aspect-video' : 'aspect-[9/16] max-w-xs sm:max-w-sm mx-auto'
          }`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Utiliser LiveWebsitePreview pour un vrai aperçu */}
                <LiveWebsitePreview 
                  url={currentProject.url}
                  title={currentProject.title}
                  description={currentProject.description}
                  className="w-full h-full"
                  viewMode={viewMode}
                />
                
                {/* Fallback: Visual previews custom (caché par défaut) */}
                <div 
                  className="relative w-full h-full cursor-pointer group hidden"
                  onClick={openSite}
                >
                  {currentProject.id === 'litalien' ? (
                    // L'Italien Visual Preview - Interface Restaurant Élégante
                    <div className="w-full h-full bg-gradient-to-br from-green-50 to-yellow-50 overflow-hidden">
                      <div className="bg-white p-6 shadow-sm border-b">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg">L</div>
                            <span className="text-3xl font-serif text-green-800">L'Italien</span>
                          </div>
                          <div className="flex gap-8 text-green-700">
                            <span className="hover:text-green-900 cursor-pointer">Menu</span>
                            <span className="hover:text-green-900 cursor-pointer">Réserver</span>
                            <span className="hover:text-green-900 cursor-pointer">Contact</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-16 text-center">
                        <h1 className="text-5xl font-serif text-green-800 mb-4">
                          Autentica<br/>
                          <span className="text-yellow-600">Cucina Italiana</span>
                        </h1>
                        <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
                          Découvrez l'authenticité de la cuisine italienne dans un cadre raffiné au cœur de Paris
                        </p>
                        <div className="flex gap-4 justify-center">
                          <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
                            Réserver une table
                          </button>
                          <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50">
                            Voir le menu
                          </button>
                        </div>
                      </div>
                      {/* Restaurant ambiance simulation */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 flex justify-between">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">4.8★</div>
                            <div className="text-sm text-green-700">250 avis</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">Tables</div>
                            <div className="text-sm text-green-700">Disponibles</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">19h30</div>
                            <div className="text-sm text-green-700">Ce soir</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : currentProject.id === 'be-hype' ? (
                    // Be-Hype Visual Preview - Interface SaaS Moderne
                    <div className="w-full h-full bg-black text-white overflow-hidden">
                      <div className="p-6 border-b border-gray-800">
                        <div className="flex justify-between items-center">
                          <div className="text-3xl font-bold tracking-wider">BE-HYPE</div>
                          <div className="flex gap-6 text-gray-400">
                            <span className="hover:text-white cursor-pointer">Influenceurs</span>
                            <span className="hover:text-white cursor-pointer">Établissements</span>
                            <span className="hover:text-white cursor-pointer">Analytics</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-12">
                        <h1 className="text-6xl font-bold mb-6">
                          CONNECT<br/>
                          <span className="text-orange-500">CREATORS</span><br/>
                          WITH BRANDS
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                          La plateforme qui révolutionne la mise en relation entre établissements et créateurs de contenu.
                        </p>
                        <div className="flex gap-4">
                          <button className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg">
                            CRÉER MON COMPTE
                          </button>
                          <button className="px-8 py-3 border border-white rounded-lg">
                            DÉCOUVRIR
                          </button>
                        </div>
                      </div>
                      {/* Stats simulation */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-orange-500">3000+</div>
                            <div className="text-sm text-gray-400">Influenceurs</div>
                          </div>
                          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-orange-500">500+</div>
                            <div className="text-sm text-gray-400">Établissements</div>
                          </div>
                          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-orange-500">26K€</div>
                            <div className="text-sm text-gray-400">MRR</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Faseya Visual Preview - Plateforme IT & Tech
                    <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
                      <div className="bg-white p-6 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">F</div>
                            <span className="text-2xl font-bold text-gray-900">Faseya</span>
                          </div>
                          <div className="flex gap-6">
                            <span className="text-gray-600 hover:text-indigo-600 cursor-pointer">Talents</span>
                            <span className="text-gray-600 hover:text-indigo-600 cursor-pointer">Solutions</span>
                            <span className="text-gray-600 hover:text-indigo-600 cursor-pointer">Projets</span>
                            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
                              Trouver un expert
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-16 text-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                          Connectez-vous aux<br/>
                          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            meilleurs experts IT
                          </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                          Développeurs, designers et consultants IT expérimentés — à la demande, en mode agile
                        </p>
                        <div className="flex gap-4 justify-center mb-8">
                          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold">
                            Poster un projet
                          </button>
                          <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold">
                            Devenir expert
                          </button>
                        </div>
                      </div>
                      {/* Stats simulation */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                          <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">2000+</div>
                              <div className="text-sm text-gray-600">Experts vérifiés</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-green-600">98%</div>
                              <div className="text-sm text-gray-600">Satisfaction client</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-purple-600">500+</div>
                              <div className="text-sm text-gray-600">Projets livrés</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-semibold shadow-xl flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        Visiter {currentProject.title}
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all z-20 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all z-20 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Project Info */}
          <div className="mt-4 sm:mt-6 md:mt-8 glass rounded-lg p-4 sm:p-4 md:p-6 lg:p-8 backdrop-blur-xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-center md:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 text-center md:text-left">{currentProject.title}</h3>
                <p className="text-sm sm:text-base text-violet mb-3 sm:mb-4 text-center md:text-left">{currentProject.category}</p>
                <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 text-center md:text-left">{currentProject.description}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {currentProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 sm:px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center mt-4 md:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 md:gap-6 w-full text-center">
                  <div className="text-center">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-violet mb-1 sm:mb-2 mx-auto" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center">{currentProject.stats.visitors}</div>
                    <div className="text-sm sm:text-sm text-foreground-muted text-center">{currentProject.id === 'be-hype' ? 'Générés' : 'Visiteurs'}</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-orange mb-1 sm:mb-2 mx-auto" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center">{currentProject.stats.conversion}</div>
                    <div className="text-sm sm:text-sm text-foreground-muted text-center">Conversion</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-violet mb-1 sm:mb-2 mx-auto" />
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center">{currentProject.stats.launch}</div>
                    <div className="text-sm sm:text-sm text-foreground-muted text-center">{currentProject.id === 'be-hype' ? 'Résultats en' : 'Lancement'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Dots Navigation */}
          <div className="flex justify-center gap-2 sm:gap-2 mt-4 sm:mt-6 mx-auto">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`transition-all ${
                  index === activeProject
                    ? 'w-8 sm:w-12 h-2 sm:h-3 bg-gradient-to-r from-violet to-orange rounded-full'
                    : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/30 hover:bg-white/50 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mx-auto mt-8 sm:mt-12 md:mt-16 px-4"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
            Votre projet sera le prochain !
          </h3>
          <p className="text-sm sm:text-base text-foreground-muted mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0 text-center">
            Rejoignez nos clients satisfaits et donnez vie à votre vision digitale
          </p>
          <motion.button
            onClick={openCalendly}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 bg-gradient-to-r from-violet to-orange text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base w-full sm:w-auto min-h-[44px] justify-center"
          >
            Démarrer mon projet
            <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export { ProjectShowcase as CasesSection }