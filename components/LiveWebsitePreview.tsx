"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Globe, RefreshCw, AlertCircle, Zap } from "lucide-react"

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

    // Pour Be-Hype, utiliser directement le screenshot
    if (url.includes('be-hype')) {
      // Utiliser directement une capture ou le composant personnalisé
      setPreviewMethod('custom')
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

          {/* Méthode 2: Custom preview pour Be-Hype */}
          {previewMethod === 'custom' && url.includes('be-hype') && (
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
        {previewMethod === 'custom' && (
          <div className="px-2 py-1 bg-purple-500/90 text-white text-xs rounded flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Preview
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