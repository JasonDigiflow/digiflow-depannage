"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { 
  Calendar,
  Clock,
  User,
  Eye,
  ArrowRight,
  Search,
  Filter,
  TrendingUp,
  Tag,
  Bookmark,
  Share2,
  ChevronRight,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"

const articles = [
  {
    id: "roi-google-ads",
    title: "Comment multiplier par 4 votre ROI avec Google Ads en 2024",
    excerpt: "Découvrez les stratégies avancées pour maximiser votre retour sur investissement avec Google Ads. Techniques d'optimisation, bidding strategies et automation.",
    category: "Google Ads",
    author: "Enzo",
    date: "15 Janvier 2024",
    readTime: "12 min",
    views: "2.3k",
    image: "/blog/google-ads-roi.jpg",
    featured: true,
    tags: ["Google Ads", "ROI", "PPC", "Acquisition"]
  },
  {
    id: "seo-local-guide",
    title: "Le guide ultime du SEO local en 2024 : Dominez votre marché",
    excerpt: "Stratégies complètes pour améliorer votre visibilité locale sur Google. De Google My Business aux citations locales, tout ce qu'il faut savoir.",
    category: "SEO",
    author: "Jason",
    date: "12 Janvier 2024",
    readTime: "15 min",
    views: "3.1k",
    image: "/blog/seo-local.jpg",
    featured: true,
    tags: ["SEO", "Local", "Google Business", "Ranking"]
  },
  {
    id: "meta-vs-google",
    title: "Meta Ads vs Google Ads : Quelle stratégie choisir en 2024 ?",
    excerpt: "Analyse comparative détaillée entre Meta Ads et Google Ads. Budget, audience, objectifs : trouvez la plateforme idéale pour votre business.",
    category: "Stratégie",
    author: "Enzo",
    date: "10 Janvier 2024",
    readTime: "10 min",
    views: "1.8k",
    image: "/blog/meta-vs-google.jpg",
    featured: false,
    tags: ["Meta Ads", "Google Ads", "Stratégie", "Comparaison"]
  },
  {
    id: "landing-pages-conversion",
    title: "Landing Pages qui convertissent : 15 secrets des experts",
    excerpt: "Les éléments essentiels d'une landing page haute conversion. Design, copywriting, CTA, social proof : optimisez chaque aspect.",
    category: "Conversion",
    author: "Jason",
    date: "8 Janvier 2024",
    readTime: "18 min",
    views: "4.2k",
    image: "/blog/landing-pages.jpg",
    featured: true,
    tags: ["Landing Pages", "CRO", "Conversion", "Design"]
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation : Le guide complet pour automatiser vos ventes",
    excerpt: "Workflows, segmentation, lead scoring : maîtrisez le marketing automation pour multiplier vos conversions sans effort supplémentaire.",
    category: "Automation",
    author: "Enzo",
    date: "5 Janvier 2024",
    readTime: "20 min",
    views: "2.7k",
    image: "/blog/automation.jpg",
    featured: false,
    tags: ["Automation", "Email", "Workflows", "CRM"]
  },
  {
    id: "cold-email-b2b",
    title: "Cold Email B2B : La méthode qui génère 12% de réponses",
    excerpt: "Templates, séquences, personnalisation : découvrez notre méthode éprouvée pour des campagnes de cold email qui convertissent.",
    category: "Prospection",
    author: "Jason",
    date: "3 Janvier 2024",
    readTime: "14 min",
    views: "5.1k",
    image: "/blog/cold-email.jpg",
    featured: false,
    tags: ["Cold Email", "B2B", "Prospection", "Outreach"]
  },
  {
    id: "influence-marketing-roi",
    title: "Influence Marketing : Comment obtenir un ROI x8 garanti",
    excerpt: "Sélection d'influenceurs, négociation, mesure du ROI : guide complet pour des campagnes d'influence marketing rentables.",
    category: "Influence",
    author: "Enzo",
    date: "28 Décembre 2023",
    readTime: "16 min",
    views: "3.5k",
    image: "/blog/influence.jpg",
    featured: false,
    tags: ["Influence", "Social Media", "ROI", "Créateurs"]
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile : La clé pour dominer le SEO local",
    excerpt: "Optimisation complète de votre profil Google Business. Photos, avis, posts : chaque détail compte pour votre visibilité locale.",
    category: "SEO Local",
    author: "Jason",
    date: "26 Décembre 2023",
    readTime: "11 min",
    views: "2.9k",
    image: "/blog/google-business.jpg",
    featured: false,
    tags: ["Google Business", "SEO Local", "Maps", "Reviews"]
  },
  {
    id: "shooting-photo-conversion",
    title: "Shooting photo produit : +65% de conversions avec les bons visuels",
    excerpt: "L'impact des visuels professionnels sur vos ventes. Guide complet du shooting produit : préparation, réalisation, post-production.",
    category: "Content",
    author: "Enzo",
    date: "22 Décembre 2023",
    readTime: "13 min",
    views: "1.6k",
    image: "/blog/shooting.jpg",
    featured: false,
    tags: ["Photo", "E-commerce", "Conversion", "Visuel"]
  },
  {
    id: "strategie-acquisition-2024",
    title: "Acquisition client 2024 : La stratégie complète qui cartonne",
    excerpt: "Plan d'action complet pour votre acquisition client. Canaux, budget, KPIs : construisez une machine d'acquisition performante.",
    category: "Stratégie",
    author: "Jason",
    date: "20 Décembre 2023",
    readTime: "22 min",
    views: "6.3k",
    image: "/blog/acquisition.jpg",
    featured: true,
    tags: ["Acquisition", "Stratégie", "Growth", "2024"]
  }
]

const categories = [
  { name: "Tous", count: articles.length },
  { name: "Google Ads", count: 1 },
  { name: "SEO", count: 2 },
  { name: "Stratégie", count: 2 },
  { name: "Conversion", count: 1 },
  { name: "Automation", count: 1 },
  { name: "Prospection", count: 1 },
  { name: "Influence", count: 1 },
  { name: "Content", count: 1 }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter(a => a.featured).slice(0, 3)

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Blog
              <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Insights & Stratégies Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Découvrez nos dernières analyses, études de cas et conseils d'experts 
              pour booster votre acquisition client et maximiser votre ROI.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.name
                    ? 'bg-violet-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === "Tous" && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Articles à la une
              </h2>
              <Sparkles className="w-6 h-6 text-violet-600" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${article.id}`}>
                    <div className="relative aspect-video bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl overflow-hidden mb-6">
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-violet-600 text-white text-xs font-medium rounded-full">
                        À la une
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{article.category}</span>
                        <span>•</span>
                        <span>{article.readTime} de lecture</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-violet-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-violet-100 dark:bg-violet-900 rounded-full" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{article.author}</span>
                        </div>
                        <span className="text-violet-600 group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            {selectedCategory === "Tous" ? "Tous les articles" : `Articles: ${selectedCategory}`}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <Link href={`/blog/${article.id}`}>
                  <div className="relative aspect-video bg-gradient-to-br from-gray-600 to-gray-800">
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-violet-100 dark:bg-violet-900 rounded-full" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{article.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <Bookmark className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-lg"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400">
                Aucun article trouvé pour cette recherche.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ne manquez aucun insight
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Recevez nos meilleurs articles et conseils directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
            />
            <Button className="px-8 py-3 bg-white text-violet-600 hover:bg-gray-100">
              S'abonner
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}