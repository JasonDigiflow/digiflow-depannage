"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Sites Web & Landing Pages", href: "/services/creation-site-web" },
      { label: "SEO", href: "/services/seo" },
      { label: "Google Ads (SEA)", href: "/services/sea" },
      { label: "Social Ads (SMA)", href: "/services/sma" },
      { label: "Shooting Photo/Vidéo", href: "/services/shooting" },
      { label: "Gestion Google Business", href: "/services/google-business" },
      { label: "Coldmail", href: "/services/coldmail" },
      { label: "Marketing Automation", href: "/services/automation" },
      { label: "Influence Marketing", href: "/services/influence" },
    ],
  },
  { label: "Réalisations", href: "/work" },
  { label: "À propos", href: "/about" },
  { label: "Blog", href: "/blog" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-3" : "py-6"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-500",
            isScrolled ? "mt-2" : "mt-0"
          )}
        >
          <div
            className={cn(
              "relative transition-all duration-500 rounded-2xl",
              isScrolled && "backdrop-blur-2xl bg-gradient-to-r from-dark/90 via-dark/80 to-dark/90 shadow-2xl border border-white/5"
            )}
          >
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative h-10 w-40">
                <Image
                  src="/ASSETS/LOGOS DIGIFLOW/digiflow white.svg"
                  alt="DIGIFLOW"
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-violet/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </div>
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
                      "px-4 py-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors flex items-center gap-1 group"
                    )}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 glass rounded-glass p-2 shadow-xl"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground-muted hover:text-foreground hover:bg-violet/10 rounded-md transition-all"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white/70 hover:text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button 
                size="sm" 
                className="relative overflow-hidden group px-6 py-2.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet via-purple-500 to-orange transition-all duration-300 group-hover:scale-110" />
                <span className="relative z-10">Audit gratuit</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground-muted hover:text-foreground transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl" />
            <div className="relative h-full overflow-y-auto">
              <div className="pt-20 pb-6 px-6">
                {navItems.map((item) => (
                  <div key={item.label} className="mb-4">
                    <Link
                      href={item.href}
                      className="block text-xl font-medium text-foreground hover:text-violet transition-colors mb-2"
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
                            className="block text-sm text-foreground-muted hover:text-foreground transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-8 space-y-4">
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link href="/contact">Contact</Link>
                  </Button>
                  <Button size="lg" className="w-full">
                    Obtenir mon audit gratuit
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}