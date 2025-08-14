"use client"

import { create } from "zustand"

interface CalendlyStore {
  isOpen: boolean
  openCalendly: () => void
  closeCalendly: () => void
}

export const useCalendlyStore = create<CalendlyStore>((set) => ({
  isOpen: false,
  openCalendly: () => set({ isOpen: true }),
  closeCalendly: () => set({ isOpen: false }),
}))