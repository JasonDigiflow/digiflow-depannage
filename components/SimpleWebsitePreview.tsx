"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Globe } from "lucide-react"

interface SimpleWebsitePreviewProps {
  url: string
  title: string
  description?: string
  className?: string
}

export function SimpleWebsitePreview({ url, title, description, className = "" }: SimpleWebsitePreviewProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Obtenir le screenshot correspondant
  const getScreenshot = () => {
    if (url.includes("finary")) {
      return "/screenshots/finary.png"
    } else if (url.includes("litalien")) {
      return "/screenshots/litalien.png"
    } else if (url.includes("be-hype")) {
      return "/screenshots/behype.png"
    }
    return null
  }

  const screenshotPath = getScreenshot()

  return (
    <motion.div
      className={`relative w-full h-full overflow-hidden rounded-lg bg-dark-muted ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Vrai screenshot si disponible */}
      {screenshotPath && !imageError ? (
        <Image
          src={screenshotPath}
          alt={title}
          fill
          className="object-cover object-top"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        // Fallback si pas de screenshot
        <div className="w-full h-full bg-gradient-to-br from-violet/20 to-orange/20 flex items-center justify-center">
          <Globe className="w-16 h-16 text-white/20" />
        </div>
      )}
      
      {/* Overlay au hover */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
      >
        <div>
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <p className="text-white/60 text-sm">{url}</p>
        </div>
        <button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors">
          <ExternalLink className="w-5 h-5 text-white" />
        </button>
      </motion.a>
    </motion.div>
  )
}