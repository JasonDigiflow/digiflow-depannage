"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Twitter,
  ArrowUpRight
} from "lucide-react"

const footerLinks = {
  services: [
    { label: "Google Ads (SEA)", href: "/services/sea" },
    { label: "Meta Ads (SMA)", href: "/services/sma" },
    { label: "Landing Pages Acquisition", href: "/services/creation-site-web" },
    { label: "SEO d'Acquisition", href: "/services/seo" },
    { label: "Marketing Automation", href: "/services/automation" },
  ],
  company: [
    { label: "À propos", href: "/about" },
    { label: "Réalisations", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Carrières", href: "/careers" },
  ],
  legal: [
    { label: "Mentions légales", href: "/legal" },
    { label: "Politique de confidentialité", href: "/privacy" },
    { label: "CGV", href: "/cgv" },
    { label: "Cookies", href: "/cookies" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/digiflow", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/digiflow", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/digiflow", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/digiflow", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="relative bg-dark-muted border-t border-glass">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-violet/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-orange/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 text-center md:text-left">
          {/* Brand section */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 text-center md:text-left">
            <Link href="/" className="inline-block mb-3 sm:mb-4 mx-auto md:mx-0">
              <div className="relative h-10 w-40 sm:h-12 sm:w-48 mx-auto md:mx-0">
                <Image
                  src="/ASSETS/LOGOS DIGIFLOW/digiflow white.svg"
                  alt="DIGIFLOW"
                  fill
                  className="object-contain object-center md:object-left"
                />
              </div>
            </Link>
            <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 max-w-sm text-center md:text-left mx-auto md:mx-0">
              Agence d'acquisition client spécialisée en Google Ads & Meta Ads. 
              ROI moyen x4 pour nos clients.
            </p>

            {/* Contact info */}
            <div className="space-y-2 sm:space-y-3 text-center md:text-left">
              <a
                href="mailto:contact@digiflow-agency.fr"
                className="flex items-center gap-2 sm:gap-2 text-foreground-muted hover:text-violet transition-colors justify-center md:justify-start"
              >
                <Mail className="w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-sm sm:text-sm">contact@digiflow-agency.fr</span>
              </a>
              <a
                href="tel:+33648105056"
                className="flex items-center gap-2 sm:gap-2 text-foreground-muted hover:text-violet transition-colors justify-center md:justify-start"
              >
                <Phone className="w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-sm sm:text-sm">06 48 10 50 56</span>
              </a>
              <div className="flex items-start gap-2 sm:gap-2 text-foreground-muted justify-center md:justify-start">
                <MapPin className="w-4 h-4 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-sm text-center md:text-left">6 Allée des banquiers, 13290 Aix-en-Provence</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 sm:gap-3 mt-4 sm:mt-6 justify-center md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 glass rounded-full flex items-center justify-center text-foreground-muted hover:text-violet hover:bg-violet/10 transition-all min-h-[44px] min-w-[44px]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Services links */}
          <div className="mt-6 sm:mt-6 md:mt-0 text-center md:text-left">
            <h3 className="text-lg sm:text-lg font-semibold mb-3 sm:mb-4 text-center md:text-left">Services</h3>
            <ul className="space-y-2 sm:space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-sm text-foreground-muted hover:text-violet transition-colors flex items-center gap-1 group justify-center md:justify-start"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="mt-6 sm:mt-6 md:mt-0 text-center md:text-left">
            <h3 className="text-lg sm:text-lg font-semibold mb-3 sm:mb-4 text-center md:text-left">Entreprise</h3>
            <ul className="space-y-2 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-sm text-foreground-muted hover:text-violet transition-colors flex items-center gap-1 group justify-center md:justify-start"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="mt-6 sm:mt-6 md:mt-0 text-center md:text-left">
            <h3 className="text-lg sm:text-lg font-semibold mb-3 sm:mb-4 text-center md:text-left">Légal</h3>
            <ul className="space-y-2 sm:space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-sm text-foreground-muted hover:text-violet transition-colors text-center md:text-left"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-glass text-center">
          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div>
              <h3 className="text-lg sm:text-lg font-semibold mb-2 sm:mb-2 text-center">Restez informé</h3>
              <p className="text-sm sm:text-sm text-foreground-muted text-center">
                Recevez nos meilleurs conseils en acquisition digitale
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 sm:px-4 py-2 sm:py-2 bg-glass border border-glass rounded-lg text-sm sm:text-sm focus:outline-none focus:border-violet transition-colors w-full sm:w-full md:w-64 min-h-[44px]"
              />
              <button
                type="submit"
                className="px-4 sm:px-4 md:px-6 py-2 sm:py-2 bg-gradient-to-r from-violet to-orange text-white rounded-lg text-sm sm:text-sm font-medium hover:shadow-glow transition-all w-full sm:w-full md:w-auto min-h-[44px]"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-glass text-center">
          <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-foreground-muted text-center sm:text-left">
              © 2024 DIGIFLOW. Tous droits réservés. Réalisé par EJ INVEST.
            </p>
            <div className="flex items-center gap-3 sm:gap-3 md:gap-4 text-sm sm:text-sm text-foreground-muted justify-center">
              <span className="text-center">Fait avec passion à Aix-en-Provence</span>
              <span className="text-violet">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}