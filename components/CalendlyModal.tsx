"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, CheckCircle, Star } from "lucide-react"
import { PopupModal } from "react-calendly"

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof document !== "undefined") {
      setRootElement(document.getElementById("__next") || document.body)
    }
  }, [])

  if (!rootElement) return null

  return (
    <PopupModal
      url="https://calendly.com/jason-digiflow-agency/30min"
      onModalClose={onClose}
      open={isOpen}
      rootElement={rootElement}
      pageSettings={{
        backgroundColor: "1a1a1a",
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: "7b61ff",
        textColor: "ffffff",
      }}
    />
  )
}