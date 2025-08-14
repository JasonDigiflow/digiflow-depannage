"use client"

import { InlineWidget } from "react-calendly"

export function CalendlyInline() {
  return (
    <div className="w-full relative z-[9999]" style={{ isolation: 'isolate' }}>
      <InlineWidget 
        url="https://calendly.com/jason-digiflow-agency/30min"
        styles={{
          height: "400px",
          width: "100%",
          minWidth: "320px",
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "7b61ff",
          textColor: "1a1a1a",
        }}
      />
    </div>
  )
}