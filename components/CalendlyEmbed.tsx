"use client"

import { useEffect } from "react"

export function CalendlyEmbed() {
  useEffect(() => {
    // Charger le script Calendly
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    // Charger le CSS Calendly
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      // Nettoyer si nécessaire
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [])

  return (
    <div className="w-full h-full min-h-[650px] rounded-lg overflow-hidden">
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/digiflow-sotoca/30min"
        style={{ minWidth: "320px", height: "650px", position: "relative" }}
      />
    </div>
  )
}