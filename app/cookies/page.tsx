"use client"

import { useState } from "react"
import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { 
  Cookie,
  Shield,
  Settings,
  Eye,
  BarChart3,
  Target,
  CheckCircle,
  XCircle,
  Info,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    functional: true
  })

  const handleSavePreferences = () => {
    // Ici vous implémenteriez la sauvegarde réelle des préférences
    console.log('Préférences sauvegardées:', preferences)
    alert('Vos préférences ont été enregistrées')
  }

  return (
    <>
      <NavigationPremium />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Politique de Cookies
            </h1>
            <p className="text-xl text-gray-300">
              Transparence sur l'utilisation des cookies et technologies similaires
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="mb-12">
              <div className="bg-violet-50 border-l-4 border-violet-600 p-6 rounded-r-lg">
                <p className="text-gray-700">
                  Cette politique de cookies explique ce que sont les cookies, comment nous les utilisons sur notre site www.digiflow-agency.fr, et comment vous pouvez les gérer. En utilisant notre site, vous acceptez l'utilisation de cookies conformément à cette politique.
                </p>
              </div>
            </div>

            {/* Qu'est-ce qu'un cookie */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Info className="w-6 h-6 text-violet-600" />
                1. Qu'est-ce qu'un cookie ?
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lorsque vous visitez un site web. Les cookies permettent au site de :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Reconnaître votre appareil lors de vos visites ultérieures</li>
                  <li>Mémoriser vos préférences et paramètres</li>
                  <li>Améliorer votre expérience de navigation</li>
                  <li>Analyser l'utilisation du site pour l'optimiser</li>
                  <li>Proposer des contenus et publicités personnalisés</li>
                </ul>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Bon à savoir :</strong> Les cookies ne peuvent pas accéder à vos fichiers personnels, installer des programmes ou transmettre des virus.
                  </p>
                </div>
              </div>
            </div>

            {/* Types de cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Cookie className="w-6 h-6 text-violet-600" />
                2. Types de cookies utilisés
              </h2>
              <div className="space-y-6">
                {/* Cookies nécessaires */}
                <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Cookies strictement nécessaires
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Session ID</p>
                            <p className="text-sm text-gray-600">Maintient votre session active - Expire à la fermeture du navigateur</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Cookie consent</p>
                            <p className="text-sm text-gray-600">Mémorise vos préférences de cookies - 1 an</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Security token</p>
                            <p className="text-sm text-gray-600">Protection contre les attaques CSRF - Session</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies analytiques */}
                <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Cookies analytiques
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Eye className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Google Analytics (_ga, _gid)</p>
                            <p className="text-sm text-gray-600">Analyse du trafic et comportement des visiteurs - 30 jours à 2 ans</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Eye className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Hotjar (_hjid)</p>
                            <p className="text-sm text-gray-600">Cartes de chaleur et enregistrements de sessions - 365 jours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies marketing */}
                <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Target className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Cookies marketing
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Ces cookies sont utilisés pour suivre l'efficacité de nos campagnes publicitaires.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Target className="w-5 h-5 text-orange-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Google Ads</p>
                            <p className="text-sm text-gray-600">Suivi des conversions publicitaires - 90 jours</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Target className="w-5 h-5 text-orange-600 mt-0.5" />
                          <div>
                            <p className="font-medium">LinkedIn Insight Tag</p>
                            <p className="text-sm text-gray-600">Analyse des visiteurs LinkedIn - 120 jours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies fonctionnels */}
                <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Settings className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Cookies fonctionnels
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Ces cookies améliorent les fonctionnalités et la personnalisation du site.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Settings className="w-5 h-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Language preference</p>
                            <p className="text-sm text-gray-600">Mémorise votre langue préférée - 1 an</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Settings className="w-5 h-5 text-purple-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Chat widget</p>
                            <p className="text-sm text-gray-600">État du widget de chat en ligne - Session</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gestion des cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-violet-600" />
                3. Gérer vos préférences de cookies
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                <p className="mb-6">
                  Vous pouvez personnaliser vos préférences de cookies ci-dessous. Les cookies strictement nécessaires ne peuvent pas être désactivés car ils sont essentiels au fonctionnement du site.
                </p>
                
                <div className="space-y-4">
                  {/* Cookie nécessaires */}
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">Cookies nécessaires</p>
                        <p className="text-sm text-gray-600">Toujours actifs</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Requis
                    </div>
                  </div>
                  
                  {/* Cookies analytiques */}
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Cookies analytiques</p>
                        <p className="text-sm text-gray-600">Nous aident à améliorer le site</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPreferences({...preferences, analytics: !preferences.analytics})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? 'bg-violet-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  {/* Cookies marketing */}
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="font-medium">Cookies marketing</p>
                        <p className="text-sm text-gray-600">Publicités personnalisées</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPreferences({...preferences, marketing: !preferences.marketing})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? 'bg-violet-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  {/* Cookies fonctionnels */}
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <Settings className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-medium">Cookies fonctionnels</p>
                        <p className="text-sm text-gray-600">Fonctionnalités améliorées</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPreferences({...preferences, functional: !preferences.functional})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.functional ? 'bg-violet-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.functional ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button 
                    onClick={handleSavePreferences}
                    className="bg-violet-600 hover:bg-violet-700"
                  >
                    Sauvegarder mes préférences
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setPreferences({
                      necessary: true,
                      analytics: true,
                      marketing: true,
                      functional: true
                    })}
                  >
                    Accepter tous les cookies
                  </Button>
                </div>
              </div>
            </div>

            {/* Comment désactiver les cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-violet-600" />
                4. Désactiver les cookies dans votre navigateur
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Vous pouvez également configurer votre navigateur pour bloquer ou supprimer les cookies :
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Chrome</p>
                      <p className="text-sm text-gray-600">Paramètres → Confidentialité et sécurité → Cookies et autres données des sites</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Firefox</p>
                      <p className="text-sm text-gray-600">Paramètres → Vie privée et sécurité → Cookies et données de sites</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Safari</p>
                      <p className="text-sm text-gray-600">Préférences → Confidentialité → Cookies et données de sites web</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Edge</p>
                      <p className="text-sm text-gray-600">Paramètres → Cookies et autorisations de site → Cookies et données de site</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-yellow-800">
                    <strong>Attention :</strong> Bloquer tous les cookies peut affecter votre expérience de navigation et empêcher certaines fonctionnalités du site de fonctionner correctement.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies tiers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-violet-600" />
                5. Cookies tiers
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Certains cookies sont placés par des services tiers qui apparaissent sur nos pages. Nous ne contrôlons pas ces cookies. Voici les principaux tiers :
                </p>
                
                <table className="w-full border-collapse text-gray-700">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Service</th>
                      <th className="text-left py-2">Finalité</th>
                      <th className="text-left py-2">Politique</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Google Analytics</td>
                      <td className="py-3">Analyse du trafic</td>
                      <td className="py-3">
                        <a href="https://policies.google.com/privacy" className="text-violet-600 hover:text-violet-700" target="_blank" rel="noopener noreferrer">
                          Voir politique
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Google Ads</td>
                      <td className="py-3">Publicité ciblée</td>
                      <td className="py-3">
                        <a href="https://policies.google.com/technologies/ads" className="text-violet-600 hover:text-violet-700" target="_blank" rel="noopener noreferrer">
                          Voir politique
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">LinkedIn</td>
                      <td className="py-3">Marketing B2B</td>
                      <td className="py-3">
                        <a href="https://www.linkedin.com/legal/cookie-policy" className="text-violet-600 hover:text-violet-700" target="_blank" rel="noopener noreferrer">
                          Voir politique
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">Hotjar</td>
                      <td className="py-3">Analyse UX</td>
                      <td className="py-3">
                        <a href="https://www.hotjar.com/legal/policies/cookie-information" className="text-violet-600 hover:text-violet-700" target="_blank" rel="noopener noreferrer">
                          Voir politique
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-violet-600" />
                6. Durée de conservation
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  La durée de conservation des cookies varie selon leur type :
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
                  <li><strong>Cookies persistants :</strong> Conservés selon la durée définie (de 30 jours à 2 ans maximum)</li>
                  <li><strong>Cookies analytiques :</strong> 30 jours pour nos analyses internes</li>
                  <li><strong>Cookies marketing :</strong> Jusqu'à 90 jours pour le suivi des campagnes</li>
                  <li><strong>Préférences de cookies :</strong> 1 an pour mémoriser vos choix</li>
                </ul>
                
                <p className="text-gray-700">
                  Vous pouvez supprimer les cookies à tout moment via les paramètres de votre navigateur.
                </p>
              </div>
            </div>

            {/* Impact sur l'expérience */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Info className="w-6 h-6 text-violet-600" />
                7. Impact sur votre expérience
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Si vous choisissez de désactiver certains cookies, voici l'impact possible :
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Sans cookies analytiques</p>
                      <p className="text-sm text-gray-600">Nous ne pourrons pas améliorer le site selon vos besoins</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Sans cookies fonctionnels</p>
                      <p className="text-sm text-gray-600">Certaines fonctionnalités personnalisées seront indisponibles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Sans cookies marketing</p>
                      <p className="text-sm text-gray-600">Vous verrez toujours des publicités, mais moins pertinentes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modifications de la politique */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 text-violet-600" />
                8. Modifications de cette politique
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Nous pouvons mettre à jour cette politique de cookies pour refléter des changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
                </p>
                <p className="text-gray-700">
                  Les modifications seront publiées sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette politique.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Cookie className="w-6 h-6 text-violet-600" />
                9. Contact
              </h2>
              <div className="bg-violet-50 rounded-lg p-6 text-gray-700">
                <p className="mb-4">
                  Pour toute question concernant notre utilisation des cookies :
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Email :</strong> jason@digiflow-agency.fr</p>
                  <p className="text-gray-700"><strong>Adresse :</strong> DIGIFLOW<br />
                  6 Allée des Banquiers<br />
                  13290 Aix-en-Provence</p>
                </div>
                
                <p className="mt-4 text-sm">
                  Pour plus d'informations sur le traitement de vos données personnelles, consultez notre <a href="/privacy" className="text-violet-600 hover:text-violet-700 font-medium">Politique de Confidentialité</a>.
                </p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                Dernière mise à jour : Janvier 2024<br />
                Version 1.0
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}