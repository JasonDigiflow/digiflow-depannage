"use client"

import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { 
  Building2,
  Mail,
  MapPin,
  User,
  FileText,
  Globe,
  Shield,
  Scale
} from "lucide-react"

export default function MentionsLegalesPage() {
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
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-300">
              Informations légales concernant le site www.digiflow-agency.fr
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
            {/* Éditeur du site */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-violet-600" />
                Éditeur du site
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                <p className="mb-2">
                  <strong>Raison sociale :</strong> EJ INVEST (Nom commercial : DIGIFLOW)
                </p>
                <p className="mb-2">
                  <strong>Forme juridique :</strong> SAS au capital de 15 000€
                </p>
                <p className="mb-2">
                  <strong>Siège social :</strong> 6 Allée des Banquiers, 13290 Aix-en-Provence
                </p>
                <p className="mb-2">
                  <strong>SIRET :</strong> 909 300 584 00010
                </p>
                <p className="mb-2">
                  <strong>RCS :</strong> 909 300 584 R.C.S. Aix-en-Provence
                </p>
                <p className="mb-2">
                  <strong>TVA intracommunautaire :</strong> FR58909300584
                </p>
                <p className="mb-2">
                  <strong>Email :</strong> jason@digiflow-agency.fr
                </p>
              </div>
            </div>

            {/* Directeur de publication */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-violet-600" />
                Directeur de publication
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                <p>
                  <strong>Monsieur Jason Sotoca</strong>
                  <br />
                  Président de la société EJ INVEST
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-violet-600" />
                Hébergement
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                <p className="mb-2">
                  <strong>Hébergeur :</strong> Infomaniak
                </p>
                <p className="mb-2">
                  <strong>Adresse :</strong> Rue Eugène-Marziano 25, 1227 Genève, Suisse
                </p>
                <p className="mb-2">
                  <strong>Site web :</strong> www.infomaniak.com
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-violet-600" />
                Propriété intellectuelle
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-700">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de publication.
                </p>
                <p className="text-gray-700">
                  La reproduction des textes de ce site sur un support papier est autorisée, tout particulièrement dans le cadre pédagogique, sous réserve du respect des trois conditions suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li className="text-gray-700">Gratuité de la diffusion</li>
                  <li className="text-gray-700">Respect de l'intégrité des documents reproduits</li>
                  <li className="text-gray-700">Citation claire et lisible de la source</li>
                </ul>
                <p className="text-gray-700">
                  Les marques DIGIFLOW et EJ INVEST ainsi que les logos figurant sur le site sont des marques déposées. Toute reproduction totale ou partielle de ces marques ou de ces logos effectuée à partir des éléments du site sans l'autorisation expresse est prohibée.
                </p>
              </div>
            </div>

            {/* Protection des données */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-violet-600" />
                Protection des données personnelles
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p>
                  <strong>Responsable du traitement :</strong> Jason Sotoca
                </p>
                <p className="text-gray-700">
                  Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-gray-700">
                  Pour exercer ces droits, vous pouvez contacter notre délégué à la protection des données (DPO) :
                </p>
                <ul className="list-none space-y-1">
                  <li className="text-gray-700"><strong>Par email :</strong> jason@digiflow-agency.fr</li>
                  <li className="text-gray-700"><strong>Par courrier :</strong> DIGIFLOW - Protection des données, 6 Allée des Banquiers, 13290 Aix-en-Provence</li>
                </ul>
                <p className="text-gray-700">
                  Pour plus d'informations sur le traitement de vos données personnelles, consultez notre <a href="/privacy" className="text-violet-600 hover:text-violet-700 font-medium">Politique de Confidentialité</a>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-violet-600" />
                Cookies
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                <p>
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Pour en savoir plus sur notre utilisation des cookies et vos droits, consultez notre <a href="/cookies" className="text-violet-600 hover:text-violet-700 font-medium">Politique de Cookies</a>.
                </p>
              </div>
            </div>

            {/* Litiges */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6 text-violet-600" />
                Litiges
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                <p>
                  Les présentes conditions sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive du Tribunal de Commerce d'Aix-en-Provence.
                </p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                Dernière mise à jour : Janvier 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}