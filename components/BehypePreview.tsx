"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, DollarSign, Instagram } from "lucide-react"

export function BehypePreview() {
  return (
    <div className="w-full h-full bg-black text-white overflow-hidden relative">
      {/* Video Background simulé avec animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.pixabay.com/video/2024/02/14/200470-913358267_large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 border-b border-gray-800 backdrop-blur-sm bg-black/50">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold tracking-wider bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            BE-HYPE
          </div>
          <div className="flex gap-6 text-gray-400">
            <span className="hover:text-white cursor-pointer transition-colors">Influenceurs</span>
            <span className="hover:text-white cursor-pointer transition-colors">Établissements</span>
            <span className="hover:text-white cursor-pointer transition-colors">Analytics</span>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
              Connexion
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 p-12 flex items-center min-h-[400px]">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Connectez
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Établissements & Influenceurs
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg mb-8"
          >
            La plateforme SaaS qui révolutionne le marketing d'influence pour les établissements. 
            Trouvez les créateurs parfaits pour votre marque.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
              Démarrer Gratuitement
            </button>
            <button className="px-8 py-3 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              Voir la Démo
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 grid grid-cols-4 gap-4 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-md"
      >
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Instagram className="w-6 h-6 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-purple-400">+5000</div>
          <div className="text-sm text-gray-400">Abonnés Instagram</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-6 h-6 text-pink-400" />
          </div>
          <div className="text-2xl font-bold text-pink-400">+600%</div>
          <div className="text-sm text-gray-400">Croissance Inbound</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Users className="w-6 h-6 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-purple-400">3000+</div>
          <div className="text-sm text-gray-400">Influenceurs</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <DollarSign className="w-6 h-6 text-pink-400" />
          </div>
          <div className="text-2xl font-bold text-pink-400">26K€</div>
          <div className="text-sm text-gray-400">MRR</div>
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  )
}