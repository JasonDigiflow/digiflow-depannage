"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Mail,
  Send,
  Users,
  Target,
  TrendingUp,
  MessageSquare,
  Inbox,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Shield,
  Clock,
  Trophy,
  Rocket,
  Eye,
  MousePointer2,
  Star,
  ArrowUpRight,
  Database,
  Filter,
  UserCheck,
  MailOpen,
  Reply,
  FileText,
  BarChart3,
  Zap,
  Globe,
  Award,
  RefreshCw,
  GitBranch,
  Calendar,
  Phone,
  Linkedin,
  AtSign,
  PenTool,
  AlertCircle,
  Activity,
  Layers,
  Bot,
  Hash,
  ChartBar
} from "lucide-react"

// Animated email flow
const EmailFlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: -100,
            y: Math.random() * 100 + "%",
            opacity: 0
          }}
          animate={{
            x: "110vw",
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
            <Mail className="w-4 h-4 text-sky-400" />
            <div className="w-32 h-2 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Email preview component
const EmailPreview = ({ subject, preview, openRate }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800 rounded-xl p-4 border border-slate-700"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold mb-1">{subject}</h4>
          <p className="text-gray-400 text-sm line-clamp-2">{preview}</p>
          <div className="flex items-center gap-4 mt-3">
            <span className="text-xs text-sky-400">Taux d'ouverture: {openRate}%</span>
            <span className="text-xs text-green-400">Haute délivrabilité</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const services = [
  {
    icon: Database,
    title: "Enrichissement de données",
    description: "Bases de données B2B qualifiées et vérifiées",
    features: ["Emails vérifiés", "LinkedIn enrichi", "Données RGPD compliant"]
  },
  {
    icon: PenTool,
    title: "Copywriting sur-mesure",
    description: "Messages personnalisés qui convertissent",
    features: ["A/B testing", "Personnalisation avancée", "Ton adapté"]
  },
  {
    icon: Send,
    title: "Campagnes automatisées",
    description: "Séquences multi-canal optimisées",
    features: ["Email + LinkedIn", "Follow-ups intelligents", "Warm-up inclus"]
  },
  {
    icon: UserCheck,
    title: "Qualification des leads",
    description: "Scoring et segmentation avancés",
    features: ["Lead scoring", "Segmentation auto", "CRM integration"]
  },
  {
    icon: Calendar,
    title: "Prise de RDV automatique",
    description: "Calendly intégré dans les campagnes",
    features: ["Booking direct", "Rappels auto", "Sync calendrier"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Dashboard temps réel et insights",
    features: ["Métriques détaillées", "ROI tracking", "Rapports hebdo"]
  }
]

const stats = [
  { value: "45%", label: "Taux d'ouverture", icon: MailOpen },
  { value: "12%", label: "Taux de réponse", icon: Reply },
  { value: "8%", label: "Taux de conversion", icon: TrendingUp },
  { value: "250€", label: "CAC moyen", icon: ChartBar }
]

const sequences = [
  {
    name: "Séquence CEO/Founders",
    emails: 5,
    duration: "14 jours",
    replyRate: "18%",
    template: ["Email intro", "Value prop", "Case study", "Social proof", "Urgency"]
  },
  {
    name: "Séquence Sales Teams",
    emails: 7,
    duration: "21 jours",
    replyRate: "15%",
    template: ["Pain point", "Solution", "Demo", "Testimonial", "Objections", "Offer", "Last chance"]
  },
  {
    name: "Séquence Marketing",
    emails: 6,
    duration: "18 jours",
    replyRate: "22%",
    template: ["Trend alert", "Benchmark", "ROI data", "Case study", "Free audit", "Meeting"]
  }
]

const channels = [
  { name: "Email", icon: Mail, color: "from-sky-500 to-blue-600" },
  { name: "LinkedIn", icon: Linkedin, color: "from-blue-600 to-indigo-600" },
  { name: "Phone", icon: Phone, color: "from-green-500 to-emerald-600" },
  { name: "SMS", icon: MessageSquare, color: "from-purple-500 to-pink-600" }
]

export default function ColdmailPage() {
  const { openCalendly } = useCalendlyStore()
  const { scrollYProgress } = useScroll()
  const [activeSequence, setActiveSequence] = useState(0)
  const [emailsSent, setEmailsSent] = useState(0)
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    // Counter animation
    const interval = setInterval(() => {
      setEmailsSent(prev => prev < 10000 ? prev + 137 : 0)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900">
        <EmailFlow />
        
        {/* Animated background gradient */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{ scale, opacity }}
          >
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-600 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
          </motion.div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Live counter */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
            >
              <Send className="w-5 h-5 text-sky-400" />
              <span className="text-white font-medium">Emails envoyés aujourd'hui</span>
              <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full font-mono font-bold">
                {emailsSent.toLocaleString()}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="text-white">Cold Email</span>
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
                Prospection 2.0
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
            >
              Générez des rendez-vous qualifiés avec des campagnes de prospection multi-canal. 
              Taux de réponse moyen : <span className="text-sky-400 font-bold">12%</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            >
              <Button
                size="lg"
                onClick={openCalendly}
                className="group px-8 py-6 text-lg bg-gradient-to-r from-sky-600 to-blue-600"
              >
                <span className="flex items-center gap-2">
                  Lancer ma prospection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="#sequences">
                  Voir les séquences
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                >
                  <stat.icon className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Services de</span>
              <br />
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                prospection complète
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une approche 360° pour votre acquisition B2B
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-sky-500/50 transition-all h-full overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Sequences */}
      <section id="sequences" className="py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Séquences qui convertissent
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Templates éprouvés et personnalisables
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sequence selector */}
            <div className="space-y-4">
              {sequences.map((sequence, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveSequence(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all ${
                    activeSequence === index
                      ? 'bg-gradient-to-r from-sky-900/50 to-blue-900/50 border-sky-500'
                      : 'bg-slate-900 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{sequence.name}</h3>
                    <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm">
                      {sequence.replyRate} reply
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {sequence.emails} emails
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {sequence.duration}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Sequence preview */}
            <motion.div
              key={activeSequence}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Template: {sequences[activeSequence].name}
              </h3>
              <div className="space-y-4">
                {sequences[activeSequence].template.map((email, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-slate-800 rounded-lg px-4 py-3 border border-slate-700">
                        <span className="text-white">{email}</span>
                      </div>
                    </div>
                    {index < sequences[activeSequence].template.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-slate-600" />
                    )}
                  </motion.div>
                ))}
              </div>

              <Button
                className="w-full mt-8 bg-gradient-to-r from-sky-600 to-blue-600"
                onClick={openCalendly}
              >
                Utiliser ce template
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-channel Approach */}
      <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Approche multi-canal
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Maximisez vos chances de réponse sur tous les canaux
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-700 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{channel.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Integration flow */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 bg-slate-900 rounded-3xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Workflow automatisé intelligent
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {[
                { step: 1, label: "Email initial", icon: Mail },
                { step: 2, label: "LinkedIn connect", icon: Linkedin },
                { step: 3, label: "Follow-up email", icon: Send },
                { step: 4, label: "Call direct", icon: Phone },
                { step: 5, label: "Meeting booked", icon: Calendar }
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mb-3">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-gray-400">{step.label}</span>
                  </div>
                  {index < 4 && (
                    <ChevronRight className="w-6 h-6 text-slate-600 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Exemples de campagnes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des emails qui génèrent des réponses
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <EmailPreview
              subject="Quick question about [Company]'s growth strategy"
              preview="Hi [Name], I noticed [Company] just raised Series B - congrats! I've helped similar companies like [Competitor] increase their pipeline by 3x in 90 days..."
              openRate="52"
            />
            <EmailPreview
              subject="[Name], 15 min to discuss [specific pain point]?"
              preview="Hey [Name], saw your post about struggling with [specific challenge]. We solved this exact problem for [Similar Company]..."
              openRate="48"
            />
            <EmailPreview
              subject="Ideas for [Company] + proven results"
              preview="Hi [Name], spent 10 minutes analyzing [Company]'s current [specific area]. Found 3 quick wins that could add $[amount] in revenue..."
              openRate="61"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Prêt à remplir votre pipeline ?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Commencez à générer des rendez-vous qualifiés dès demain
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="px-12 py-8 text-xl bg-white text-sky-900 hover:bg-gray-100"
                >
                  <Rocket className="w-6 h-6 mr-2" />
                  Démarrer la prospection
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-12 py-8 text-xl border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/contact">
                    <MessageSquare className="w-6 h-6 mr-2" />
                    Voir une démo
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>RGPD compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Setup 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>12% taux réponse</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}