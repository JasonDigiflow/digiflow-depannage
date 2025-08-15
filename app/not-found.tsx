"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Rocket, Sparkles, AlertTriangle, ArrowLeft } from "lucide-react"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useEffect, useState } from "react"

const funnyMessages = [
  "🤔 Cette page s'est perdue en cherchant du trafic organique...",
  "🔍 404 : Page introuvable. Mais votre succès, lui, on peut le trouver !",
  "🚀 Houston, nous avons un problème... Cette page est dans l'espace !",
  "💸 Cette page a dépensé tout son budget Google Ads et a disparu...",
  "🎯 Oops ! Cette page a raté sa cible... comme vos campagnes sans nous !",
  "📧 Cette page est partie en cold email et n'est jamais revenue...",
  "🤖 L'IA a mangé cette page... Elle avait faim de données !",
  "📱 Cette page est partie faire un shooting Instagram et s'est perdue dans les filtres...",
  "🎮 Erreur 404 : Cette page a ragequit après avoir vu ses stats SEO...",
  "🍕 Cette page est partie chercher une pizza et n'est jamais revenue...",
  "🦄 Cette page est aussi rare qu'un client qui dit 'le budget n'est pas un problème'...",
  "🎪 Cette page est partie au cirque du marketing digital...",
  "🏖️ Cette page est en vacances... Elle reviendra peut-être après l'été !",
  "🎨 Cette page est en cours de redesign depuis 2019...",
  "☕ Cette page est partie chercher un café... Il y a 3 ans.",
]

const floatingEmojis = ["🚀", "💡", "🎯", "📊", "💰", "🔥", "⚡", "✨", "🌟", "💎"]

export default function NotFound() {
  const [message, setMessage] = useState("")
  const [typedMessage, setTypedMessage] = useState("")
  
  useEffect(() => {
    // Sélectionner un message basé sur le timestamp pour éviter l'hydratation error
    const messageIndex = new Date().getSeconds() % funnyMessages.length
    const randomMessage = funnyMessages[messageIndex]
    setMessage(randomMessage)
    
    // Animation de typing
    let index = 0
    const interval = setInterval(() => {
      if (index <= randomMessage.length) {
        setTypedMessage(randomMessage.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <NavigationPremium />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
        {/* Animated background */}
        <div className="absolute inset-0">
          {/* Floating emojis */}
          {floatingEmojis.map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{
                x: `${(i * 17) % 100}%`, // Deterministic position based on index
                y: "110%",
              }}
              animate={{
                y: "-10%",
              }}
              transition={{
                duration: 10 + (i * 2), // Deterministic duration based on index
                delay: i * 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${i * 10}%`,
              }}
            >
              {emoji}
            </motion.div>
          ))}
          
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-30"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-[150px] md:text-[200px] font-bold leading-none">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
                404
              </span>
            </h1>
          </motion.div>

          {/* Glitch effect on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative group">
              <span className="relative z-10">Page Introuvable</span>
              <motion.span
                className="absolute inset-0 text-pink-400 opacity-0 group-hover:opacity-100"
                animate={{
                  x: [0, 2, -2, 2, 0],
                  y: [0, -2, 2, -2, 0],
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                }}
              >
                Page Introuvable
              </motion.span>
            </h2>
            
            {/* Typed message */}
            <p className="text-xl text-gray-200 min-h-[60px]">
              {typedMessage}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-white ml-1"
              />
            </p>
          </motion.div>

          {/* Fun stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-6 mb-12"
          >
            {[
              { value: "404", label: "Pages perdues" },
              { value: "∞", label: "Possibilités manquées" },
              { value: "0€", label: "CA généré ici" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600"
              asChild
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
                <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/services/sea">
                <Rocket className="w-5 h-5 mr-2" />
                Découvrir nos services
              </Link>
            </Button>
          </motion.div>

          {/* Easter egg */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="mt-20"
          >
            <p className="text-sm text-gray-400">
              PS: Pendant que vous êtes là, saviez-vous qu'on peut multiplier votre ROI par 4 ? 
              <Link href="/services/sea" className="text-purple-400 hover:text-pink-400 ml-1 underline">
                Vraie histoire.
              </Link>
            </p>
          </motion.div>
        </div>

        {/* Konami code easter egg hint */}
        <motion.div
          className="absolute bottom-10 right-10 text-white/20 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
        >
          ↑ ↑ ↓ ↓ ← → ← → B A
        </motion.div>
      </section>

      <Footer />
    </>
  )
}