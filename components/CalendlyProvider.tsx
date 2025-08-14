"use client"

import { CalendlyModal } from "@/components/CalendlyModal"
import { useCalendlyStore } from "@/hooks/useCalendly"

export function CalendlyProvider() {
  const { isOpen, closeCalendly } = useCalendlyStore()
  
  return <CalendlyModal isOpen={isOpen} onClose={closeCalendly} />
}