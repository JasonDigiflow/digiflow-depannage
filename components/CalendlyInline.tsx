"use client"

import { InlineWidget } from "react-calendly"
import { useEffect, useState } from "react"

export function CalendlyInline() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Ensure the widget loads properly
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="w-full h-[650px] flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du calendrier...</p>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="w-full relative" 
      style={{ 
        zIndex: 50,
        pointerEvents: 'auto',
        isolation: 'isolate'
      }}
    >
      <InlineWidget 
        url="https://calendly.com/alexandre-digiflow-agency/30min"
        styles={{
          height: "650px", // Increased height for better usability
          width: "100%",
          minWidth: "320px",
          overflow: "auto",
          pointerEvents: 'auto'
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "7b61ff",
          textColor: "1a1a1a",
        }}
        prefill={{
          name: "",
          email: "",
          customAnswers: {
            a1: "Site web DIGIFLOW"
          }
        }}
        utm={{
          utmCampaign: "website",
          utmSource: "digiflow-agency",
          utmMedium: "organic"
        }}
      />
    </div>
  )
}