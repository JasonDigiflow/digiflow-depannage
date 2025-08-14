"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Loader2, AlertCircle } from "lucide-react"

interface RealWebsitePreviewProps {
  url: string
  title: string
  className?: string
}

export function RealWebsitePreview({ url, title, className = "" }: RealWebsitePreviewProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Option 1: Utiliser un service de screenshot gratuit
  // Microlink.io offre un plan gratuit avec 50 requêtes/jour
  const getScreenshotUrl = () => {
    // Encoder l'URL pour l'API
    const encodedUrl = encodeURIComponent(url)
    
    // Option avec Microlink (gratuit, 50 req/jour)
    return `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&meta=false&embed=screenshot.url`
  }

  // Option 2: Utiliser une API de screenshot alternative
  const getAlternativeScreenshot = () => {
    const encodedUrl = encodeURIComponent(url)
    
    // Via thum.io (gratuit, illimité mais plus lent)
    return `https://image.thum.io/get/width/1200/crop/900/${url}`
  }

  // Option 3: Screenshots statiques locaux
  const getLocalScreenshot = () => {
    // Mapper les URLs aux screenshots locaux
    const screenshotMap: { [key: string]: string } = {
      "https://www.litalien.fr": "/screenshots/litalien.jpg",
      "https://www.be-hype.com": "/screenshots/behype.jpg", 
      "https://finary.com/fr": "/screenshots/finary.jpg"
    }
    
    return screenshotMap[url] || null
  }

  const handleImageError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  // Essayer d'abord les screenshots locaux, sinon utiliser l'API
  const screenshotUrl = getLocalScreenshot() || getAlternativeScreenshot()

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-lg bg-dark-muted ${className}`}>
      {/* Loading state */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm flex flex-col items-center justify-center z-10">
          <Loader2 className="w-8 h-8 text-violet animate-spin mb-2" />
          <p className="text-xs text-white/60">Chargement de l'aperçu...</p>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-violet/10 to-orange/10 flex flex-col items-center justify-center">
          <AlertCircle className="w-8 h-8 text-orange mb-2" />
          <p className="text-sm text-white/60 mb-1">Aperçu non disponible</p>
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-violet hover:text-orange transition-colors flex items-center gap-1"
          >
            Voir le site <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Screenshot */}
      {!hasError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={screenshotUrl}
            alt={`Aperçu de ${title}`}
            fill
            className="object-cover object-top"
            onLoad={handleImageLoad}
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-40" />
        </motion.div>
      )}

      {/* Hover overlay with link */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-end justify-between p-4 group"
        whileHover={{ scale: 1.01 }}
      >
        <div>
          <div className="text-white font-semibold text-lg mb-1">{title}</div>
          <div className="text-white/60 text-sm">{url}</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full group-hover:bg-violet/20 transition-colors">
          <ExternalLink className="w-5 h-5 text-white" />
        </div>
      </motion.a>
    </div>
  )
}