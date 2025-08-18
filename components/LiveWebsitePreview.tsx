"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Globe, RefreshCw, AlertCircle, Zap, Camera } from "lucide-react"

interface LiveWebsitePreviewProps {
  url: string
  title: string
  description?: string
  className?: string
  viewMode?: 'desktop' | 'mobile'
}

export function LiveWebsitePreview({ 
  url, 
  title, 
  description, 
  className = "",
  viewMode = 'desktop'
}: LiveWebsitePreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [previewMethod, setPreviewMethod] = useState<'iframe' | 'screenshot' | 'proxy' | 'custom'>('iframe')
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    loadPreview()
  }, [url, previewMethod, refreshKey])

  const loadPreview = async () => {
    setLoading(true)
    setError(false)

    // Pour Be-Hype, utiliser directement thum.io qui fonctionne bien
    if (url.includes('be-hype')) {
      setPreviewMethod('screenshot')
      // Thum.io est gratuit et fonctionne bien pour les captures
      setPreviewUrl(`https://image.thum.io/get/width/1920/crop/1080/noanimate/${url}`)
      setLoading(false)
      return
    }

    // 1. Essayer l'iframe direct pour L'Italien et Faseya (qui l'acceptent)
    if (previewMethod === 'iframe') {
      if (url.includes('litalien') || url.includes('faseya')) {
        setPreviewUrl(url)
        setLoading(false)
        return
      }
      
      // Pour les autres, essayer le proxy
      setPreviewMethod('proxy')
      return
    }

    // 2. Essayer notre proxy qui contourne les restrictions
    if (previewMethod === 'proxy') {
      // Utiliser l'iframe direct pour Faseya (pas de restrictions)
      if (url.includes('faseya')) {
        setPreviewUrl(url)
        setLoading(false)
        return
      }
      
      // Proxy générique pour les autres sites
      const proxyUrl = `/api/proxy-frame?url=${encodeURIComponent(url)}`
      setPreviewUrl(proxyUrl)
      setLoading(false)
      return
    }

    // 3. Fallback sur screenshot
    if (previewMethod === 'screenshot') {
      const timestamp = Date.now()
      // Utiliser plusieurs services de capture
      const services = [
        `https://image.thum.io/get/width/${viewMode === 'desktop' ? '1920' : '375'}/crop/${viewMode === 'desktop' ? '1080' : '812'}/wait/3/${url}`,
        `https://api.apiflash.com/v1/urltoimage?access_key=demo&url=${encodeURIComponent(url)}&wait_until=page_loaded&fresh=true`,
        `https://api.screenshotmachine.com?key=demo&url=${encodeURIComponent(url)}&dimension=1920x1080&delay=3000`,
      ]
      
      setPreviewUrl(services[0])
      setLoading(false)
    }
  }

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1)
    setPreviewMethod('iframe')
  }

  const openSite = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Pour les sites locaux, utiliser les screenshots
  const getLocalScreenshot = () => {
    if (url.includes("faseya")) {
      return "/screenshots/faseya.png"
    } else if (url.includes("litalien")) {
      return "/screenshots/litalien.png"
    } else if (url.includes("be-hype")) {
      return "/screenshots/behype.png"
    }
    return null
  }

  return (
    <motion.div
      className={`relative w-full h-full overflow-hidden bg-dark-muted ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-muted">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 text-violet animate-spin mx-auto mb-2" />
            <p className="text-sm text-foreground-muted">Chargement de l'aperçu...</p>
          </div>
        </div>
      )}

      {!loading && !error && (
        <>
          {/* Méthode 1: Iframe direct pour L'Italien et Faseya */}
          {previewMethod === 'iframe' && (url.includes('litalien') || url.includes('faseya')) && previewUrl && (
            <iframe
              key={refreshKey}
              src={previewUrl}
              className="w-full h-full border-0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              onError={() => {
                setError(true)
                setPreviewMethod('proxy')
                loadPreview()
              }}
            />
          )}

          {/* Méthode 2: Screenshot pour Be-Hype */}
          {previewMethod === 'screenshot' && url.includes('be-hype') && previewUrl && (
            <div className="relative w-full h-full">
              <img
                key={refreshKey}
                src={previewUrl}
                alt={title}
                className="w-full h-full object-cover object-top"
                onError={() => {
                  // Si l'échec, essayer un autre service
                  const alternativeUrl = `https://shot.screenshotapi.net/screenshot?token=TBPJKP6-Z4RMHKB-HNJ6FGC-1TNVFVS&url=${encodeURIComponent(url)}&width=1920&height=1080&output=image&file_type=png&wait_for_event=load`
                  setPreviewUrl(alternativeUrl)
                }}
              />
              
              {/* Message d'information */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe className="w-4 h-4 text-orange" />
                    <span className="font-medium">Aperçu en temps réel</span>
                  </div>
                  <p className="text-xs text-white/70">
                    Capture actualisée du site Be-Hype. Cliquez pour visiter le site complet.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Méthode 3: Proxy frame pour autres sites */}
          {previewMethod === 'proxy' && previewUrl && !url.includes('litalien') && !url.includes('faseya') && !url.includes('be-hype') && (
            <iframe
              key={refreshKey}
              src={previewUrl}
              className="w-full h-full border-0"
              loading="lazy"
              onError={() => {
                setError(true)
                setPreviewMethod('screenshot')
                loadPreview()
              }}
            />
          )}

          {/* Méthode 4: Screenshot comme fallback */}
          {previewMethod === 'screenshot' && previewUrl && (
            <div className="relative w-full h-full">
              <img
                key={refreshKey}
                src={previewUrl}
                alt={title}
                className="w-full h-full object-cover object-top"
                onError={() => {
                  const fallback = getLocalScreenshot()
                  if (fallback && !error) {
                    setError(true)
                    setPreviewUrl(fallback)
                  }
                }}
              />
              
              {/* Message d'information */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle className="w-4 h-4 text-orange" />
                    <span className="font-medium">Mode capture d'écran</span>
                  </div>
                  <p className="text-xs text-white/70">
                    Ce site bloque l'affichage direct pour des raisons de sécurité. 
                    Cliquez pour visiter le site réel.
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Overlay d'erreur */}
      {error && !getLocalScreenshot() && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-muted">
          <div className="text-center">
            <AlertCircle className="w-8 h-8 text-orange mx-auto mb-2" />
            <p className="text-sm text-foreground-muted mb-2">Aperçu non disponible</p>
            <button
              onClick={handleRefresh}
              className="text-xs text-violet hover:text-orange transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      )}

      {/* Overlay au hover */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-none hover:pointer-events-auto"
      >
        <div>
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <p className="text-white/60 text-sm">{url}</p>
          {description && (
            <p className="text-white/40 text-xs mt-1">{description}</p>
          )}
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault()
            openSite()
          }}
          className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          <ExternalLink className="w-5 h-5 text-white" />
        </button>
      </motion.a>

      {/* Badges d'état */}
      <div className="absolute top-2 right-2 flex items-center gap-2">
        {previewMethod === 'iframe' && (url.includes('litalien') || url.includes('sudcouleur')) && (
          <div className="px-2 py-1 bg-green-500/90 text-white text-xs rounded flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Live
          </div>
        )}
        {previewMethod === 'proxy' && (
          <div className="px-2 py-1 bg-blue-500/90 text-white text-xs rounded flex items-center gap-1">
            <Globe className="w-3 h-3" />
            Proxy
          </div>
        )}
        {previewMethod === 'screenshot' && url.includes('be-hype') && (
          <div className="px-2 py-1 bg-orange-500/90 text-white text-xs rounded flex items-center gap-1">
            <Camera className="w-3 h-3" />
            Live
          </div>
        )}
        {previewMethod === 'screenshot' && (
          <div className="px-2 py-1 bg-orange-500/90 text-white text-xs rounded flex items-center gap-1">
            <RefreshCw className="w-3 h-3" />
            Capture
          </div>
        )}
        
        {/* Bouton refresh */}
        <button
          onClick={handleRefresh}
          className="p-1 bg-white/10 hover:bg-white/20 rounded transition-colors"
          title="Rafraîchir l'aperçu"
        >
          <RefreshCw className="w-3 h-3 text-white" />
        </button>
      </div>
    </motion.div>
  )
}