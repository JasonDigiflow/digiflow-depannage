"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Cpu,
  GitBranch,
  Zap,
  RefreshCw,
  Activity,
  Settings,
  Database,
  Cloud,
  Mail,
  MessageSquare,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Bot,
  Layers,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Star,
  Trophy,
  Shield,
  Clock,
  Rocket,
  BarChart3,
  Filter,
  Bell,
  UserCheck,
  ShoppingCart,
  CreditCard,
  Package,
  Repeat,
  Timer,
  Workflow,
  Share2,
  PieChart,
  FileText,
  AlertCircle,
  MousePointer2,
  Eye,
  Hash,
  Sparkles,
  Award,
  ChartBar
} from "lucide-react"

// Animated workflow nodes
const WorkflowAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {/* Animated connection lines */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + (i * 10)}%`}
            y1="0%"
            x2={`${30 + (i * 10)}%`}
            y2="100%"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating workflow nodes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0
          }}
          animate={{
            scale: [0, 1, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-purple-400" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Interactive workflow builder preview
const WorkflowBuilder = () => {
  const [activeNode, setActiveNode] = useState(0)
  
  const nodes = [
    { icon: UserCheck, label: "Lead capture", color: "from-green-500 to-emerald-500" },
    { icon: Mail, label: "Email welcome", color: "from-blue-500 to-cyan-500" },
    { icon: Timer, label: "Wait 2 days", color: "from-yellow-500 to-orange-500" },
    { icon: Filter, label: "Segmentation", color: "from-purple-500 to-pink-500" },
    { icon: MessageSquare, label: "SMS follow-up", color: "from-red-500 to-pink-500" }
  ]
  
  return (
    <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
      <div className="flex items-center justify-between gap-4">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <motion.div
              onClick={() => setActiveNode(i)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative cursor-pointer ${activeNode === i ? 'z-10' : ''}`}
            >
              <motion.div
                animate={{
                  scale: activeNode === i ? 1.2 : 1,
                  rotate: activeNode === i ? 360 : 0
                }}
                transition={{ type: "spring" }}
                className={`w-16 h-16 bg-gradient-to-br ${node.color} rounded-2xl flex items-center justify-center shadow-lg`}
              >
                <node.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: activeNode === i ? 1 : 0, y: activeNode === i ? 0 : 10 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              >
                <span className="text-xs text-white bg-gray-800 px-2 py-1 rounded">
                  {node.label}
                </span>
              </motion.div>
            </motion.div>
            {i < nodes.length - 1 && (
              <motion.div
                className="flex-1 h-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-full overflow-hidden"
                animate={{
                  scaleX: i < activeNode ? 1 : i === activeNode ? 0.5 : 0
                }}
                transition={{ duration: 0.5 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

const automationFeatures = [
  {
    icon: Bot,
    title: "Workflows intelligents",
    description: "Scénarios automatisés basés sur le comportement",
    metrics: "+85% engagement"
  },
  {
    icon: Target,
    title: "Segmentation dynamique",
    description: "Audiences qui s'actualisent en temps réel",
    metrics: "+120% pertinence"
  },
  {
    icon: Repeat,
    title: "Nurturing automatique",
    description: "Lead scoring et maturation progressive",
    metrics: "+200% conversion"
  },
  {
    icon: Bell,
    title: "Triggers comportementaux",
    description: "Actions déclenchées par les interactions",
    metrics: "Temps réel"
  },
  {
    icon: PieChart,
    title: "A/B Testing continu",
    description: "Optimisation automatique des performances",
    metrics: "+45% ROI"
  },
  {
    icon: Database,
    title: "CRM synchronisé",
    description: "Intégration native avec tous vos outils",
    metrics: "360° view"
  }
]

const automationScenarios = [
  {
    name: "Welcome Series",
    triggers: "Inscription",
    actions: 7,
    duration: "14 jours",
    conversion: "32%"
  },
  {
    name: "Cart Abandonment",
    triggers: "Panier abandonné",
    actions: 4,
    duration: "72 heures",
    conversion: "28%"
  },
  {
    name: "Lead Nurturing",
    triggers: "Download",
    actions: 12,
    duration: "30 jours",
    conversion: "18%"
  },
  {
    name: "Re-engagement",
    triggers: "Inactivité",
    actions: 5,
    duration: "21 jours",
    conversion: "15%"
  }
]

const integrations = [
  { name: "HubSpot", icon: "🟠" },
  { name: "Salesforce", icon: "☁️" },
  { name: "Zapier", icon: "⚡" },
  { name: "Mailchimp", icon: "🐵" },
  { name: "ActiveCampaign", icon: "🔵" },
  { name: "Pipedrive", icon: "🟢" },
  { name: "Slack", icon: "💬" },
  { name: "Shopify", icon: "🛍️" }
]

const kpis = [
  { value: "3.2M", label: "Emails automatisés/mois", icon: Mail },
  { value: "68%", label: "Taux d'ouverture", icon: Eye },
  { value: "24%", label: "Taux de clic", icon: MousePointer2 },
  { value: "x5.2", label: "ROI moyen", icon: ChartBar }
]

export default function AutomationPage() {
  const { openCalendly } = useCalendlyStore()
  const { scrollYProgress } = useScroll()
  const [activeScenario, setActiveScenario] = useState(0)
  const [flowsCreated, setFlowsCreated] = useState(0)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    // Counter animation
    const interval = setInterval(() => {
      setFlowsCreated(prev => prev < 999 ? prev + 7 : 0)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900"
        onMouseMove={handleMouseMove}
      >
        <WorkflowAnimation />
        
        {/* Interactive gradient that follows mouse */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle 400px at ${springX}px ${springY}px, rgba(236, 72, 153, 0.3), transparent)`,
          }}
        />

        {/* Animated background orbs */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Live counter */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
            >
              <Workflow className="w-5 h-5 text-pink-400" />
              <span className="text-white font-medium">Workflows actifs</span>
              <motion.span
                key={flowsCreated}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold"
              >
                {flowsCreated}+
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="text-white">Marketing</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Automation Pro
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
            >
              Automatisez vos campagnes marketing et multipliez votre ROI. 
              Performance moyenne : <span className="text-pink-400 font-bold">x5.2 ROI</span>
            </motion.p>

            {/* Interactive Workflow Builder Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <WorkflowBuilder />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            >
              <Button
                size="lg"
                onClick={openCalendly}
                className="group px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600"
              >
                <span className="flex items-center gap-2">
                  Automatiser maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="#scenarios">
                  Voir les scénarios
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {kpis.map((kpi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all">
                    <kpi.icon className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{kpi.value}</div>
                    <div className="text-sm text-gray-400">{kpi.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Automation</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                nouvelle génération
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des workflows intelligents qui travaillent 24/7 pour vous
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {feature.metrics}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Scenarios */}
      <section id="scenarios" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Scénarios pré-configurés
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Templates prêts à l'emploi pour démarrer rapidement
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Scenario cards */}
            <div className="space-y-4">
              {automationScenarios.map((scenario, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveScenario(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all ${
                    activeScenario === index
                      ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500'
                      : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{scenario.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Zap className="w-4 h-4" />
                          {scenario.triggers}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitBranch className="w-4 h-4" />
                          {scenario.actions} actions
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {scenario.duration}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{scenario.conversion}</div>
                      <div className="text-xs text-gray-500">conversion</div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Scenario preview */}
            <motion.div
              key={activeScenario}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Workflow: {automationScenarios[activeScenario].name}
              </h3>
              
              {/* Workflow visualization */}
              <div className="space-y-4">
                {[
                  { step: "Trigger", desc: automationScenarios[activeScenario].triggers, icon: Zap },
                  { step: "Condition", desc: "Segmentation automatique", icon: Filter },
                  { step: "Action 1", desc: "Email personnalisé", icon: Mail },
                  { step: "Wait", desc: "Délai intelligent", icon: Timer },
                  { step: "Action 2", desc: "Follow-up contextuel", icon: MessageSquare },
                  { step: "Result", desc: `${automationScenarios[activeScenario].conversion} conversion`, icon: Trophy }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{step.step}</div>
                      <div className="text-sm text-gray-400">{step.desc}</div>
                    </div>
                    {i < 5 && (
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    )}
                  </motion.div>
                ))}
              </div>

              <Button
                className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600"
                onClick={openCalendly}
              >
                Utiliser ce workflow
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Intégrations natives
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connectez tous vos outils en un clic
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.1, rotate: 5 }}
                className="group"
              >
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all">
                  <div className="text-4xl mb-3 text-center">{integration.icon}</div>
                  <div className="text-white font-medium">{integration.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Prêt à automatiser votre marketing ?
            </h2>
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Libérez du temps et multipliez vos résultats
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="px-12 py-8 text-xl bg-white text-purple-900 hover:bg-gray-100"
                >
                  <Rocket className="w-6 h-6 mr-2" />
                  Démarrer l'automation
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
                    Audit gratuit
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
                <span>x5.2 ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}