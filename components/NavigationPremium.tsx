"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useCalendlyStore } from "@/hooks/useCalendly"

const navItems = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "🎯 Google Ads (SEA)", href: "/services/sea" },
      { label: "📱 Meta Ads (Facebook/Instagram)", href: "/services/sma" },
      { label: "🚀 Landing Pages d'Acquisition", href: "/services/creation-site-web" },
      { label: "🔍 SEO d'Acquisition", href: "/services/seo" },
      { label: "📧 Coldmail & Prospection", href: "/services/coldmail" },
      { label: "⚡ Marketing Automation", href: "/services/automation" },
      { label: "👥 Influence Marketing", href: "/services/influence" },
      { label: "📸 Shooting Photo/Vidéo", href: "/services/shooting" },
      { label: "⭐ Gestion Google Business", href: "/services/google-business" },
    ],
  },
  { label: "Réalisations", href: "/work" },
  { label: "À propos", href: "/about" },
  { label: "Blog", href: "/blog" },
]

export function NavigationPremium() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isInverted, setIsInverted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { openCalendly } = useCalendlyStore()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Navbar devient solide après 20px de scroll
      setIsScrolled(scrollPosition > 20)
      
      // Inversion des couleurs après 50% de la hauteur de la fenêtre
      setIsInverted(scrollPosition > windowHeight * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className={cn(
              "relative rounded-2xl transition-all duration-700 px-6",
              isScrolled ? (
                isInverted 
                  ? "backdrop-blur-2xl bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/5"
                  : "backdrop-blur-2xl bg-black/80 shadow-[0_8px_32px_rgba(123,97,255,0.25)] border border-white/10"
              ) : ""
            )}
          >
            <div className="flex items-center justify-between h-20">
              {/* Logo with smooth transition */}
              <Link href="/" className="flex items-center group">
                <motion.div 
                  className="relative h-32 w-[400px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Logo for dark mode */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isInverted ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/ASSETS/LOGOS DIGIFLOW/Logo Digiflow.svg"
                      alt="DIGIFLOW"
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                  
                  {/* Logo for light mode */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInverted ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="/ASSETS/LOGOS DIGIFLOW/Logo-Digiflow-Dark.svg"
                      alt="DIGIFLOW"
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                  
                  <motion.div 
                    className={cn(
                      "absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity rounded-full",
                      isInverted ? "bg-violet/50" : "bg-violet/30"
                    )}
                  />
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1 group relative",
                        isInverted 
                          ? "text-gray-700 hover:text-violet" 
                          : "text-white/80 hover:text-white"
                      )}
                    >
                      <span className="relative">
                        {item.label}
                        <motion.div
                          className={cn(
                            "absolute -bottom-1 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                            isInverted ? "bg-violet" : "bg-gradient-to-r from-violet to-orange"
                          )}
                        />
                      </span>
                      {item.dropdown && (
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          activeDropdown === item.label && "rotate-180"
                        )} />
                      )}
                    </Link>

                    {/* Dropdown Menu Premium */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, type: "spring", damping: 25 }}
                          className={cn(
                            "absolute top-full left-0 mt-2 w-72 rounded-xl p-2 shadow-2xl backdrop-blur-2xl",
                            isInverted 
                              ? "bg-white/95 border border-gray-200/50" 
                              : "bg-black/90 border border-white/10"
                          )}
                        >
                          {item.dropdown.map((subItem, index) => (
                            <motion.div
                              key={subItem.label}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                            >
                              <Link
                                href={subItem.href}
                                className={cn(
                                  "block px-4 py-3 text-sm rounded-lg transition-all duration-200",
                                  isInverted
                                    ? "text-gray-700 hover:text-violet hover:bg-violet/5"
                                    : "text-white/80 hover:text-white hover:bg-white/5"
                                )}
                              >
                                {subItem.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={cn(
                    "transition-all duration-300",
                    isInverted 
                      ? "text-gray-700 hover:text-violet hover:bg-violet/5" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                  asChild
                >
                  <Link href="/contact">Contact</Link>
                </Button>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="sm"
                    onClick={openCalendly}
                    className={cn(
                      "relative overflow-hidden group px-6 py-2.5 font-medium shadow-lg transition-all duration-300",
                      isInverted 
                        ? "bg-gradient-to-r from-violet to-purple-600 text-white hover:shadow-xl hover:shadow-violet/25" 
                        : "bg-gradient-to-r from-violet via-purple-500 to-orange hover:shadow-xl hover:shadow-violet/40"
                    )}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Audit acquisition
                    </span>
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-lg transition-colors",
                  isInverted 
                    ? "text-gray-700 hover:bg-gray-100" 
                    : "text-white hover:bg-white/10"
                )}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Premium */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
            <div className="relative h-full overflow-y-auto">
              <div className="pt-24 pb-6 px-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <Link
                      href={item.href}
                      className="block text-2xl font-medium text-white hover:text-violet transition-colors mb-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block text-sm text-white/60 hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 space-y-4"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/contact">Contact</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-violet via-purple-500 to-orange"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      openCalendly()
                    }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Audit acquisition gratuit
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}