"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Loader2 } from "lucide-react"

interface WebsitePreviewProps {
  url: string
  title: string
  className?: string
}

export function WebsitePreview({ url, title, className = "" }: WebsitePreviewProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Create a placeholder preview based on the site
  const getPlaceholderContent = () => {
    if (url.includes("finary")) {
      return (
        <div className="w-full h-full bg-[#0A0B14] flex flex-col">
          {/* Finary Header */}
          <div className="bg-[#0F1019] p-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Finary
              </div>
              <div className="flex gap-3">
                <div className="h-2 w-16 bg-white/10 rounded" />
                <div className="h-2 w-16 bg-white/10 rounded" />
                <div className="h-2 w-16 bg-white/10 rounded" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-24 bg-[#6366F1]/20 rounded-lg" />
              <div className="h-8 w-24 bg-[#6366F1] rounded-lg" />
            </div>
          </div>
          
          {/* Finary Dashboard */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-[#1A1B2E]/40 rounded-xl p-4 border border-[#6366F1]/20">
                <div className="text-3xl font-bold text-[#6366F1]">€245K</div>
                <div className="text-xs text-white/40 mt-1">Patrimoine total</div>
              </div>
              <div className="bg-[#1A1B2E]/40 rounded-xl p-4 border border-[#8B5CF6]/20">
                <div className="text-3xl font-bold text-[#8B5CF6]">+18.4%</div>
                <div className="text-xs text-white/40 mt-1">Performance YTD</div>
              </div>
              <div className="bg-[#1A1B2E]/40 rounded-xl p-4 border border-[#6366F1]/20">
                <div className="text-3xl font-bold text-[#6366F1]">23</div>
                <div className="text-xs text-white/40 mt-1">Actifs</div>
              </div>
            </div>
            
            {/* Chart placeholder */}
            <div className="bg-[#1A1B2E]/20 rounded-xl p-4 h-32 relative overflow-hidden">
              <svg className="w-full h-full">
                <polyline
                  points="0,80 50,70 100,60 150,40 200,35 250,45 300,30 350,25 400,20"
                  fill="none"
                  stroke="url(#finaryGradient)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="finaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      )
    } else if (url.includes("litalien")) {
      return (
        <div className="w-full h-full bg-[#1a1a1a] flex flex-col">
          {/* L'Italien Header */}
          <div className="bg-black p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#009246] via-white to-[#CE2B37] rounded-full" />
              <div className="text-xl font-serif italic text-white">L'Italien</div>
            </div>
            <div className="flex gap-4 text-sm text-white/60">
              <span>Menu</span>
              <span>Réservation</span>
              <span>Contact</span>
            </div>
          </div>
          
          {/* Hero Image placeholder */}
          <div className="flex-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h1 className="text-5xl font-serif italic mb-4">Authentique cuisine italienne</h1>
                <p className="text-lg mb-6 text-white/80">Au cœur de votre ville</p>
                <div className="flex gap-4 justify-center">
                  <div className="px-6 py-3 bg-[#CE2B37] text-white rounded">Réserver</div>
                  <div className="px-6 py-3 border border-white/30 text-white rounded">Menu</div>
                </div>
              </div>
            </div>
            {/* Decorative pasta illustration */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#009246]/20 to-transparent" />
          </div>
        </div>
      )
    } else if (url.includes("be-hype")) {
      return (
        <div className="w-full h-full bg-black flex flex-col">
          {/* Be-Hype Header */}
          <div className="bg-black p-4 flex items-center justify-between border-b border-white/10">
            <div className="text-2xl font-black bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
              BE-HYPE
            </div>
            <div className="flex gap-4 text-sm text-white/60">
              <span>Sneakers</span>
              <span>Streetwear</span>
              <span>Accessories</span>
              <span className="text-[#4ECDC4]">SALE</span>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1 p-4">
            <div className="grid grid-cols-2 gap-3 h-full">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gradient-to-br from-white/5 to-white/10 rounded-lg p-3 group hover:from-white/10 hover:to-white/15 transition-all">
                  <div className="aspect-square bg-gradient-to-br from-[#FF6B6B]/20 to-[#4ECDC4]/20 rounded-lg mb-2 flex items-center justify-center">
                    <div className="text-4xl opacity-50">👟</div>
                  </div>
                  <div className="text-xs text-white/60">Nike Air Max</div>
                  <div className="text-sm font-bold text-white mt-1">€189</div>
                  <div className="text-xs text-[#4ECDC4] mt-1">En stock</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
    
    return null
  }

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-lg ${className}`}>
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm flex items-center justify-center z-10">
          <Loader2 className="w-8 h-8 text-violet animate-spin" />
        </div>
      )}

      {/* Placeholder content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
        onAnimationComplete={() => setIsLoading(false)}
      >
        {getPlaceholderContent()}
      </motion.div>

      {/* Hover overlay with link */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
        whileHover={{ scale: 1.02 }}
      >
        <div>
          <div className="text-white font-semibold">{title}</div>
          <div className="text-white/60 text-sm">{url}</div>
        </div>
        <ExternalLink className="w-5 h-5 text-white" />
      </motion.a>
    </div>
  )
}