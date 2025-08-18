"use client"

import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { 
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  FileText,
  Mail,
  Cookie,
  AlertCircle,
  CheckCircle
} from "lucide-react"

export default function PrivacyPage() {
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
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-300">
              Protection et traitement de vos données personnelles
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
                  <strong>DIGIFLOW</strong> (EJ INVEST SAS) accorde une importance primordiale à la protection de vos données personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                </p>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-violet-600" />
                1. Responsable du traitement
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  <strong>Identité :</strong> EJ INVEST SAS (DIGIFLOW)
                </p>
                <p className="text-gray-700">
                  <strong>Siège social :</strong> 6 Allée des Banquiers, 13290 Aix-en-Provence
                </p>
                <p className="text-gray-700">
                  <strong>SIRET :</strong> 909 300 584 00010
                </p>
                <p className="text-gray-700">
                  <strong>Délégué à la protection des données (DPO) :</strong> Jason Sotoca
                </p>
                <p className="text-gray-700">
                  <strong>Contact :</strong> jason@digiflow-agency.fr
                </p>
              </div>
            </div>

            {/* Données collectées */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-violet-600" />
                2. Données collectées
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  <strong>2.1 Types de données collectées</strong>
                </p>
                <p className="text-gray-700">Nous collectons les catégories de données suivantes :</p>
                
                <div className="ml-4 space-y-3">
                  <div>
                    <p className="font-medium">Données d'identification :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Nom et prénom</li>
                      <li>Adresse email professionnelle</li>
                      <li>Numéro de téléphone (optionnel)</li>
                      <li>Nom de l'entreprise</li>
                      <li>Fonction</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium">Données de connexion :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Adresse IP</li>
                      <li>Logs de connexion</li>
                      <li>Type de navigateur</li>
                      <li>Système d'exploitation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium">Données de navigation :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Pages visitées</li>
                      <li>Durée de visite</li>
                      <li>Source de trafic</li>
                      <li>Actions effectuées sur le site</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium">Données commerciales :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Historique des commandes</li>
                      <li>Factures</li>
                      <li>Correspondances commerciales</li>
                    </ul>
                  </div>
                </div>
                
                <p className="mt-4">
                  <strong>2.2 Méthodes de collecte</strong>
                </p>
                <p className="text-gray-700">Les données sont collectées via :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Formulaires de contact sur notre site web</li>
                  <li>Échanges par email</li>
                  <li>Conversations téléphoniques</li>
                  <li>Cookies et technologies similaires (voir notre <a href="/cookies" className="text-violet-600 hover:text-violet-700">Politique de Cookies</a>)</li>
                  <li>Outils d'analyse (Google Analytics)</li>
                </ul>
              </div>
            </div>

            {/* Finalités du traitement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-violet-600" />
                3. Finalités et bases légales du traitement
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">Vos données sont traitées pour les finalités suivantes :</p>
                
                <table className="w-full border-collapse text-gray-700">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Finalité</th>
                      <th className="text-left py-2">Base légale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Gestion de la relation client</td>
                      <td className="py-3">Exécution du contrat</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Réponse aux demandes de contact</td>
                      <td className="py-3">Consentement / Intérêt légitime</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Envoi de communications commerciales</td>
                      <td className="py-3">Consentement</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Amélioration de nos services</td>
                      <td className="py-3">Intérêt légitime</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Analyse statistique et reporting</td>
                      <td className="py-3">Intérêt légitime</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Respect des obligations légales</td>
                      <td className="py-3">Obligation légale</td>
                    </tr>
                    <tr>
                      <td className="py-3">Prévention de la fraude</td>
                      <td className="py-3">Intérêt légitime</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Destinataires */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-violet-600" />
                4. Destinataires des données
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">Vos données peuvent être partagées avec :</p>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Services internes :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Équipe commerciale</li>
                      <li>Équipe technique</li>
                      <li>Service comptabilité</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium">Prestataires techniques :</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Hébergeur web (Infomaniak)</li>
                      <li>Outils de gestion (CRM, facturation)</li>
                      <li>Plateformes publicitaires (Google, Meta)</li>
                      <li>Services d'emailing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-medium">Autorités :</p>
                    <p className="text-gray-700 ml-6">
                      Uniquement sur demande légale (autorités judiciaires, administratives, fiscales)
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Important :</strong> Nous ne vendons, ne louons et ne partageons jamais vos données personnelles avec des tiers à des fins commerciales sans votre consentement explicite.
                  </p>
                </div>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-violet-600" />
                5. Durée de conservation
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">Les données sont conservées selon les durées suivantes :</p>
                
                <table className="w-full border-collapse text-gray-700">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Type de données</th>
                      <th className="text-left py-2">Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Données clients actifs</td>
                      <td className="py-3">Durée de la relation + 3 ans</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Données prospects</td>
                      <td className="py-3">3 ans après le dernier contact</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Cookies analytiques</td>
                      <td className="py-3">30 jours</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Documents comptables</td>
                      <td className="py-3">10 ans (obligation légale)</td>
                    </tr>
                    <tr>
                      <td className="py-3">Logs de connexion</td>
                      <td className="py-3">1 an</td>
                    </tr>
                  </tbody>
                </table>
                
                <p className="mt-4 text-gray-700">
                  Au-delà de ces durées, les données sont supprimées ou anonymisées de manière irréversible.
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Lock className="w-6 h-6 text-violet-600" />
                6. Sécurité des données
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Chiffrement SSL/TLS pour toutes les transmissions</li>
                  <li>Hébergement sécurisé en Suisse (Infomaniak)</li>
                  <li>Accès restreint aux données (principe du besoin d'en connaître)</li>
                  <li>Authentification forte pour l'accès aux systèmes</li>
                  <li>Sauvegardes régulières et chiffrées</li>
                  <li>Mise à jour régulière des systèmes de sécurité</li>
                  <li>Formation du personnel à la protection des données</li>
                  <li>Procédures de gestion des incidents de sécurité</li>
                </ul>
                
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-yellow-800">
                    <strong>En cas de violation de données :</strong> Nous nous engageons à vous notifier dans les 72 heures si une violation est susceptible d'engendrer un risque pour vos droits et libertés.
                  </p>
                </div>
              </div>
            </div>

            {/* Droits des personnes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-violet-600" />
                7. Vos droits
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Droit d'accès</p>
                      <p className="text-gray-700 text-sm">Obtenir la confirmation que vos données sont traitées et en recevoir une copie</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Droit de rectification</p>
                      <p className="text-gray-700 text-sm">Corriger vos données si elles sont inexactes ou incomplètes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Droit à l'effacement</p>
                      <p className="text-gray-700 text-sm">Demander la suppression de vos données dans certains cas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Droit à la limitation</p>
                      <p className="text-gray-700 text-sm">Limiter le traitement de vos données dans certaines circonstances</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Droit à la portabilité</p>
                      <p className="text-gray-700 text-sm">Recevoir vos données dans un format structuré et lisible</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Droit d'opposition</p>
                      <p className="text-gray-700 text-sm">Vous opposer au traitement de vos données pour des raisons légitimes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Retrait du consentement</p>
                      <p className="text-gray-700 text-sm">Retirer votre consentement à tout moment pour les traitements basés sur celui-ci</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-violet-50 rounded-lg">
                  <p className="font-medium mb-2">Pour exercer vos droits :</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Email : jason@digiflow-agency.fr</li>
                    <li>• Courrier : DIGIFLOW - Protection des données, 6 Allée des Banquiers, 13290 Aix-en-Provence</li>
                  </ul>
                  <p className="text-sm mt-2 text-gray-600">
                    Nous répondrons à votre demande dans un délai d'un mois maximum.
                  </p>
                </div>
              </div>
            </div>

            {/* Transferts internationaux */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-violet-600" />
                8. Transferts internationaux
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Vos données sont principalement stockées en Europe (Suisse). Certains de nos prestataires peuvent transférer des données hors UE :
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Google (Analytics, Ads) : Transferts encadrés par les clauses contractuelles types de la Commission européenne</li>
                  <li>Meta (Facebook, Instagram) : Transferts basés sur les mécanismes approuvés par la CNIL</li>
                </ul>
                
                <p className="text-gray-700">
                  Nous nous assurons que ces transferts respectent le niveau de protection requis par le RGPD.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Cookie className="w-6 h-6 text-violet-600" />
                9. Cookies et technologies similaires
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Notre site utilise des cookies pour améliorer votre expérience et analyser l'utilisation de nos services.
                </p>
                <p className="text-gray-700">
                  Pour plus d'informations sur les cookies que nous utilisons et comment les gérer, consultez notre <a href="/cookies" className="text-violet-600 hover:text-violet-700 font-medium">Politique de Cookies</a>.
                </p>
              </div>
            </div>

            {/* Mineurs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-violet-600" />
                10. Protection des mineurs
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                <p className="text-gray-700">
                  Nos services s'adressent exclusivement aux professionnels et aux personnes majeures. Nous ne collectons pas sciemment de données personnelles de mineurs de moins de 18 ans.
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-violet-600" />
                11. Modifications de la politique
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.
                </p>
                <p className="text-gray-700">
                  En cas de modification substantielle, nous vous en informerons par email ou via une notification sur notre site.
                </p>
              </div>
            </div>

            {/* Réclamation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-violet-600" />
                12. Droit de réclamation
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Si vous estimez que le traitement de vos données personnelles constitue une violation de la réglementation, vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle :
                </p>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="font-medium">Commission Nationale de l'Informatique et des Libertés (CNIL)</p>
                  <p className="text-gray-700 mt-2">
                    3 Place de Fontenoy<br />
                    TSA 80715<br />
                    75334 PARIS CEDEX 07<br />
                    Tél : 01 53 73 22 22<br />
                    Site : www.cnil.fr
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-violet-600" />
                13. Contact
              </h2>
              <div className="bg-violet-50 rounded-lg p-6 text-gray-700">
                <p className="mb-4">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Délégué à la protection des données :</strong> Jason Sotoca</p>
                  <p className="text-gray-700"><strong>Email :</strong> jason@digiflow-agency.fr</p>
                  <p className="text-gray-700"><strong>Adresse :</strong> DIGIFLOW - Protection des données<br />
                  6 Allée des Banquiers<br />
                  13290 Aix-en-Provence</p>
                </div>
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