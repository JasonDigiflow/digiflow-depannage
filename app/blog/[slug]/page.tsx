"use client"

import { useParams } from "next/navigation"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { BlogImageGenerator } from "@/components/BlogImageGenerator"
import { motion } from "framer-motion"
import Link from "next/link"
import { useCalendlyStore } from "@/hooks/useCalendly"
import { 
  Calendar,
  Clock,
  User,
  Eye,
  ArrowLeft,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageSquare,
  ChevronRight,
  Quote,
  CheckCircle,
  TrendingUp,
  Target,
  Zap,
  Users,
  Mail,
  Brain,
  Camera,
  Search,
  Map
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-content"

export default function BlogArticlePage() {
  const params = useParams()
  const slug = params?.slug as string
  const { openCalendly } = useCalendlyStore()
  
  const article = blogPosts[slug]
  
  if (!article) {
    return (
      <>
        <NavigationPremium />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
            <Link href="/blog">
              <Button>Retour au blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const relatedArticles = Object.entries(blogPosts)
    .filter(([key, post]) => key !== slug && post.category === article.category)
    .slice(0, 3)
    .map(([key, post]) => ({ ...post, slug: key }))

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <BlogImageGenerator 
            title={article.title}
            category={article.category}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{article.category}</span>
            </div>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              {article.icon && <article.icon className="w-4 h-4" />}
              {article.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-white/80 mb-8 max-w-3xl">
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">{article.author}</p>
                  <p className="text-xs">{article.authorRole}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} de lecture
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {article.views} vues
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          {/* Render article content sections */}
          {article.content.map((section, index) => (
            <div key={index} className="mb-12">
              {section.type === 'heading' && (
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  {section.icon && <section.icon className="w-8 h-8 text-violet-600" />}
                  {section.content}
                </h2>
              )}
              
              {section.type === 'paragraph' && (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {section.content}
                </p>
              )}
              
              {section.type === 'list' && (
                <ul className="space-y-3 mb-6">
                  {section.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {section.type === 'quote' && (
                <blockquote className="border-l-4 border-violet-600 pl-6 py-4 my-8 bg-violet-50 dark:bg-violet-900/20 rounded-r-lg">
                  <Quote className="w-8 h-8 text-violet-600 mb-3" />
                  <p className="text-xl italic text-gray-800 dark:text-gray-200 mb-2">
                    {section.content}
                  </p>
                  {section.author && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      — {section.author}
                    </p>
                  )}
                </blockquote>
              )}
              
              {section.type === 'stats' && (
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  {section.items?.map((stat, i) => (
                    <div key={i} className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-violet-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {section.type === 'cta' && (
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 my-12 text-white">
                  <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                  <p className="mb-6 text-white/90">{section.content}</p>
                  <Button size="lg" variant="secondary" onClick={openCalendly}>
                    {section.buttonText}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share Section */}
        <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <ThumbsUp className="w-5 h-5" />
              <span>Utile</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Bookmark className="w-5 h-5" />
              <span>Sauvegarder</span>
            </button>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 rounded-lg hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Partager</span>
          </button>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
              Articles similaires
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-video">
                      <BlogImageGenerator 
                        title={related.title}
                        category={related.category}
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span>{related.category}</span>
                        <span>•</span>
                        <span>{related.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {related.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à booster votre acquisition ?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Discutons de votre stratégie marketing et trouvons les leviers pour multiplier votre ROI
          </p>
          <Button size="lg" variant="secondary" onClick={openCalendly}>
            Réserver un appel stratégique
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}