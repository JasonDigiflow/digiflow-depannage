"use client"

import { motion } from "framer-motion"
import { CalendlyInline } from "@/components/CalendlyInline"
import { Calendar, Clock, CheckCircle, Star, Sparkles, Target, Zap } from "lucide-react"

export function CalendlyEmbedSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-muted/50 to-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-violet animate-pulse" />
            <span className="text-sm font-medium text-white/70">Réservation instantanée</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-4 sm:mb-6">
            <span className="block mb-2 text-white">Réservez votre</span>
            <span className="bg-gradient-to-r from-violet via-purple-400 to-orange bg-clip-text text-transparent">
              audit gratuit
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            20 minutes pour analyser votre potentiel digital.
            <span className="text-white/80 font-medium"> Sans engagement, avec résultats garantis.</span>
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {[
              { icon: Clock, text: "Réponse sous 24h", color: "violet" },
              { icon: CheckCircle, text: "100% gratuit", color: "green" },
              { icon: Target, text: "Plan d'action personnalisé", color: "orange" },
              { icon: Star, text: "4.9★ sur Google", color: "yellow" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 glass rounded-full"
              >
                <benefit.icon className={`w-3 h-3 sm:w-4 sm:h-4 text-${benefit.color}`} />
                <span className="text-xs sm:text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Calendly Embed Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="glass rounded-premium p-4 sm:p-6 md:p-8" style={{ position: 'relative', zIndex: 20 }}>
            
            {/* Header inside container */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-violet/20 to-orange/20 rounded-glass">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-violet" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Choisissez votre créneau</h3>
                  <p className="text-sm text-foreground-muted">Sélectionnez le moment qui vous convient</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-500">En ligne</span>
              </div>
            </div>

            {/* Calendly Widget */}
            <div 
              className="relative bg-white rounded-lg p-2 sm:p-3 md:p-4" 
              style={{ 
                isolation: 'isolate',
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 10
              }}
            >
              <CalendlyInline />
            </div>

            {/* Footer info */}
            <div className="relative z-10 mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 glass rounded-glass">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-violet" />
                <div>
                  <p className="text-xs sm:text-sm font-semibold">Confirmation instantanée</p>
                  <p className="text-[10px] sm:text-xs text-foreground-muted">Email + SMS de rappel</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 glass rounded-glass">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <div>
                  <p className="text-xs sm:text-sm font-semibold">Sans engagement</p>
                  <p className="text-[10px] sm:text-xs text-foreground-muted">Annulation gratuite</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 glass rounded-glass">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-orange" />
                <div>
                  <p className="text-xs sm:text-sm font-semibold">+500 audits réalisés</p>
                  <p className="text-[10px] sm:text-xs text-foreground-muted">98% de satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-violet/20 via-purple-500/20 to-orange/20 rounded-premium blur-3xl opacity-30 animate-pulse pointer-events-none" />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-foreground-muted">
            Des questions ? Appelez-nous directement au{" "}
            <a href="tel:+33600000000" className="text-violet hover:text-orange transition-colors font-semibold">
              06 00 00 00 00
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}