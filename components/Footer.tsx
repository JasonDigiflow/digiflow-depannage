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
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-12 w-48">
                <Image
                  src="/ASSETS/LOGOS DIGIFLOW/digiflow white.svg"
                  alt="DIGIFLOW"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-foreground-muted mb-6 max-w-sm">
              Agence d'acquisition client spécialisée en Google Ads & Meta Ads. 
              ROI moyen x4 pour nos clients.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a 
                href="mailto:contact@digiflow-agency.fr" 
                className="flex items-center gap-2 text-foreground-muted hover:text-violet transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@digiflow-agency.fr</span>
              </a>
              <a 
                href="tel:+33648105056" 
                className="flex items-center gap-2 text-foreground-muted hover:text-violet transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">06 48 10 50 56</span>
              </a>
              <div className="flex items-start gap-2 text-foreground-muted">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">6 Allée des banquiers, 13290 Aix-en-Provence</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-foreground-muted hover:text-violet hover:bg-violet/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-violet transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-violet transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-violet transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-glass">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold mb-2">Restez informé</h3>
              <p className="text-sm text-foreground-muted">
                Recevez nos meilleurs conseils en acquisition digitale
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 bg-glass border border-glass rounded-glass text-sm focus:outline-none focus:border-violet transition-colors flex-1 md:w-64"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-violet to-orange text-white rounded-glass text-sm font-medium hover:shadow-glow transition-all"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-glass">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground-muted">
              © 2024 DIGIFLOW. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground-muted">
              <span>Fait avec passion à Aix-en-Provence</span>
              <span className="text-violet">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}