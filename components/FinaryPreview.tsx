"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, PieChart, Activity, Users, Award } from "lucide-react"

export function FinaryPreview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Finary
            </span>
          </div>
          <div className="flex gap-6">
            <span className="text-gray-600 hover:text-indigo-600 cursor-pointer transition-colors">Découvrir</span>
            <span className="text-gray-600 hover:text-indigo-600 cursor-pointer transition-colors">Tarifs</span>
            <span className="text-gray-600 hover:text-indigo-600 cursor-pointer transition-colors">Blog</span>
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
              Commencer
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section with animated chart */}
      <div className="p-12 flex items-center justify-between">
        <div className="max-w-xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900 mb-4"
          >
            Gérez votre
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              patrimoine
            </span>
            simplement
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg mb-8"
          >
            La plateforme tout-en-un pour suivre, analyser et optimiser vos investissements.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-xl transition-all transform hover:scale-105">
              Essayer gratuitement
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all">
              Voir la démo
            </button>
          </motion.div>
        </div>

        {/* Animated Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-80 h-80"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl" />
          <div className="absolute inset-4 bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Patrimoine total</span>
              <Activity className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">€285,420</div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-green-500 font-medium">+12.5%</span>
              <span className="text-gray-500 text-sm">ce mois</span>
            </div>
            
            {/* Mini chart bars */}
            <div className="flex items-end gap-2 h-20 mt-6">
              {[40, 65, 45, 70, 55, 80, 60].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t"
                />
              ))}
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3"
          >
            <DollarSign className="w-6 h-6 text-green-500" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3"
          >
            <PieChart className="w-6 h-6 text-purple-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-4 gap-4 p-8 bg-white/70 backdrop-blur-sm border-t"
      >
        <div className="text-center">
          <Users className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">50K+</div>
          <div className="text-sm text-gray-600">Utilisateurs</div>
        </div>
        <div className="text-center">
          <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">+34%</div>
          <div className="text-sm text-gray-600">Activation</div>
        </div>
        <div className="text-center">
          <Award className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">8M€</div>
          <div className="text-sm text-gray-600">Levés</div>
        </div>
        <div className="text-center">
          <Activity className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">Real-time</div>
          <div className="text-sm text-gray-600">Analytics</div>
        </div>
      </motion.div>
    </div>
  )
}