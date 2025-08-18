"use client"

import { NavigationPremium } from "@/components/NavigationPremium"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { 
  FileText,
  CreditCard,
  Shield,
  Clock,
  AlertCircle,
  CheckCircle,
  Package,
  RefreshCw,
  Scale,
  Euro
} from "lucide-react"

export default function CGVPage() {
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
              Conditions Générales de Vente
            </h1>
            <p className="text-xl text-gray-300">
              En vigueur au 1er janvier 2024
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
            {/* Article 1 - Objet */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-violet-600" />
                Article 1 - Objet et champ d'application
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Les présentes Conditions Générales de Vente (ci-après "CGV") constituent le socle unique de la relation commerciale entre :
                </p>
                <p className="text-gray-700">
                  <strong>La société EJ INVEST</strong>, SAS au capital de 15 000€, immatriculée au RCS d'Aix-en-Provence sous le numéro 909 300 584, dont le siège social est situé 6 Allée des Banquiers, 13290 Aix-en-Provence, exploitant la marque commerciale DIGIFLOW (ci-après "le Prestataire"),
                </p>
                <p className="text-gray-700">
                  Et toute personne physique ou morale, professionnelle ou consommateur, de droit privé ou de droit public, souhaitant bénéficier des services proposés par le Prestataire (ci-après "le Client").
                </p>
                <p className="text-gray-700">
                  Les présentes CGV s'appliquent à toutes les prestations de services commercialisées par DIGIFLOW, notamment :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Gestion de campagnes publicitaires (Google Ads, Meta Ads)</li>
                  <li>Création et optimisation de sites web et landing pages</li>
                  <li>Services de référencement (SEO)</li>
                  <li>Marketing automation</li>
                  <li>Prospection commerciale et cold emailing</li>
                  <li>Influence marketing</li>
                  <li>Production de contenu (photo, vidéo)</li>
                  <li>Gestion de profils Google Business</li>
                  <li>Conseil et stratégie digitale</li>
                </ul>
              </div>
            </div>

            {/* Article 2 - Acceptation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-violet-600" />
                Article 2 - Acceptation des conditions
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Le Client reconnaît avoir pris connaissance des présentes CGV et les accepter sans réserve. Cette acceptation est matérialisée par :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>La signature d'un devis ou d'un contrat faisant référence aux présentes CGV</li>
                  <li>Le paiement d'une facture émise par le Prestataire</li>
                  <li>La validation d'une commande en ligne</li>
                  <li>Tout commencement d'exécution des prestations</li>
                </ul>
                <p className="text-gray-700">
                  Les présentes CGV prévalent sur toutes autres conditions générales ou particulières non expressément agréées par le Prestataire.
                </p>
              </div>
            </div>

            {/* Article 3 - Prestations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Package className="w-6 h-6 text-violet-600" />
                Article 3 - Description des prestations
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  <strong>3.1 Nature des prestations</strong>
                </p>
                <p className="text-gray-700">
                  Le Prestataire s'engage à mettre en œuvre tous les moyens nécessaires à la bonne exécution des prestations commandées, dans le cadre d'une obligation de moyens. Les prestations sont détaillées dans le devis accepté par le Client.
                </p>
                
                <p className="text-gray-700">
                  <strong>3.2 Modalités d'exécution</strong>
                </p>
                <p className="text-gray-700">
                  Les prestations sont réalisées selon les modalités définies dans le devis ou le contrat. Le Client s'engage à :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Fournir toutes les informations et documents nécessaires</li>
                  <li>Collaborer activement avec le Prestataire</li>
                  <li>Valider les livrables dans les délais convenus</li>
                  <li>Donner accès aux outils et plateformes nécessaires</li>
                </ul>
                
                <p className="text-gray-700">
                  <strong>3.3 Modifications</strong>
                </p>
                <p className="text-gray-700">
                  Toute modification des prestations en cours d'exécution devra faire l'objet d'un avenant écrit et pourra entraîner une révision du prix et des délais.
                </p>
              </div>
            </div>

            {/* Article 4 - Tarifs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Euro className="w-6 h-6 text-violet-600" />
                Article 4 - Tarifs et modalités de paiement
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  <strong>4.1 Prix</strong>
                </p>
                <p className="text-gray-700">
                  Les prix sont indiqués en euros hors taxes. La TVA au taux en vigueur sera ajoutée. Les tarifs applicables sont ceux en vigueur au jour de la commande.
                </p>
                
                <p className="text-gray-700">
                  <strong>4.2 Modalités de paiement</strong>
                </p>
                <p className="text-gray-700">
                  Les modes de paiement acceptés sont :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Virement bancaire</li>
                  <li>Carte bancaire</li>
                  <li>Prélèvement automatique (sur accord)</li>
                </ul>
                
                <p className="text-gray-700">
                  <strong>4.3 Conditions de règlement</strong>
                </p>
                <p className="text-gray-700">
                  Sauf disposition contraire, les factures sont payables à 30 jours date de facture. Pour les prestations récurrentes, la facturation est mensuelle et payable d'avance.
                </p>
                
                <p className="text-gray-700">
                  <strong>4.4 Retard de paiement</strong>
                </p>
                <p className="text-gray-700">
                  En cas de retard de paiement, des pénalités de retard calculées sur la base de trois fois le taux d'intérêt légal seront automatiquement appliquées, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40€.
                </p>
              </div>
            </div>

            {/* Article 5 - Durée et résiliation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-violet-600" />
                Article 5 - Durée et résiliation
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  <strong>5.1 Durée</strong>
                </p>
                <p className="text-gray-700">
                  La durée des prestations est définie dans le devis ou le contrat. Pour les prestations récurrentes, le contrat est conclu pour une durée initiale minimale de 3 mois, renouvelable par tacite reconduction.
                </p>
                
                <p className="text-gray-700">
                  <strong>5.2 Résiliation</strong>
                </p>
                <p className="text-gray-700">
                  Chaque partie peut résilier le contrat en respectant un préavis de 30 jours, notifié par lettre recommandée avec accusé de réception. En cas de manquement grave de l'une des parties, la résiliation peut être immédiate.
                </p>
                
                <p className="text-gray-700">
                  <strong>5.3 Conséquences de la résiliation</strong>
                </p>
                <p className="text-gray-700">
                  En cas de résiliation, les prestations réalisées jusqu'à la date effective de résiliation restent dues. Le Prestataire remettra au Client l'ensemble des livrables finalisés.
                </p>
              </div>
            </div>

            {/* Article 6 - Rétractation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-violet-600" />
                Article 6 - Droit de rétractation
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  <strong>6.1 Pour les consommateurs</strong>
                </p>
                <p className="text-gray-700">
                  Conformément au Code de la consommation, le Client consommateur dispose d'un délai de 14 jours à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
                </p>
                
                <p className="text-gray-700">
                  <strong>6.2 Exceptions</strong>
                </p>
                <p className="text-gray-700">
                  Le droit de rétractation ne s'applique pas si l'exécution des prestations a commencé avec l'accord exprès du Client et reconnaissance de la perte de son droit de rétractation.
                </p>
                
                <p className="text-gray-700">
                  <strong>6.3 Modalités</strong>
                </p>
                <p className="text-gray-700">
                  Pour exercer son droit de rétractation, le Client doit notifier sa décision par courrier recommandé ou email à jason@digiflow-agency.fr avant l'expiration du délai.
                </p>
              </div>
            </div>

            {/* Article 7 - Responsabilité */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-violet-600" />
                Article 7 - Responsabilité et garanties
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  <strong>7.1 Obligations du Prestataire</strong>
                </p>
                <p className="text-gray-700">
                  Le Prestataire s'engage à réaliser les prestations avec professionnalisme et diligence, dans le respect des règles de l'art et de la réglementation en vigueur.
                </p>
                
                <p className="text-gray-700">
                  <strong>7.2 Limitation de responsabilité</strong>
                </p>
                <p className="text-gray-700">
                  La responsabilité du Prestataire ne saurait être engagée pour :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Les dommages indirects ou immatériels</li>
                  <li>Les pertes de données ou de chiffre d'affaires</li>
                  <li>Les conséquences de l'utilisation des livrables par le Client</li>
                  <li>Les modifications apportées par le Client aux livrables</li>
                  <li>Le non-respect par le Client de ses obligations</li>
                </ul>
                
                <p className="text-gray-700">
                  <strong>7.3 Plafond de responsabilité</strong>
                </p>
                <p className="text-gray-700">
                  En tout état de cause, la responsabilité du Prestataire est limitée au montant des sommes effectivement versées par le Client au titre des prestations concernées.
                </p>
              </div>
            </div>

            {/* Article 8 - Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-violet-600" />
                Article 8 - Propriété intellectuelle
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  <strong>8.1 Cession des droits</strong>
                </p>
                <p className="text-gray-700">
                  Les droits de propriété intellectuelle sur les livrables sont cédés au Client après paiement intégral des prestations, sauf dispositions contraires prévues au contrat.
                </p>
                
                <p className="text-gray-700">
                  <strong>8.2 Droits du Prestataire</strong>
                </p>
                <p className="text-gray-700">
                  Le Prestataire conserve le droit de mentionner les réalisations effectuées pour le Client dans ses références commerciales et sa communication, sauf accord contraire.
                </p>
                
                <p className="text-gray-700">
                  <strong>8.3 Éléments fournis par le Client</strong>
                </p>
                <p className="text-gray-700">
                  Le Client garantit détenir tous les droits sur les éléments qu'il fournit et garantit le Prestataire contre tout recours à ce titre.
                </p>
              </div>
            </div>

            {/* Article 9 - Confidentialité */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-violet-600" />
                Article 9 - Confidentialité
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Les parties s'engagent à maintenir confidentielles toutes les informations échangées dans le cadre de leur relation commerciale, pendant toute la durée du contrat et pendant 2 ans après son terme.
                </p>
                <p className="text-gray-700">
                  Cette obligation ne s'applique pas aux informations :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Déjà dans le domaine public</li>
                  <li>Connues de la partie réceptrice avant la communication</li>
                  <li>Divulguées avec l'accord écrit de l'autre partie</li>
                  <li>Devant être divulguées en vertu de la loi</li>
                </ul>
              </div>
            </div>

            {/* Article 10 - Force majeure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-violet-600" />
                Article 10 - Force majeure
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Aucune partie ne sera tenue responsable de la non-exécution ou du retard dans l'exécution de ses obligations si cette inexécution ou ce retard résulte d'un cas de force majeure, tel que défini par la jurisprudence française.
                </p>
                <p className="text-gray-700">
                  La partie affectée informera l'autre partie dans les meilleurs délais et les parties se rapprocheront pour définir les modalités de poursuite ou d'arrêt des prestations.
                </p>
              </div>
            </div>

            {/* Article 11 - Données personnelles */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-violet-600" />
                Article 11 - Protection des données personnelles
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  Le traitement des données personnelles est effectué conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                </p>
                <p className="text-gray-700">
                  Pour plus d'informations, consultez notre <a href="/privacy" className="text-violet-600 hover:text-violet-700 font-medium">Politique de Confidentialité</a>.
                </p>
              </div>
            </div>

            {/* Article 12 - Litiges */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Scale className="w-6 h-6 text-violet-600" />
                Article 12 - Loi applicable et juridiction
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
                <p className="text-gray-700">
                  <strong>12.1 Médiation</strong>
                </p>
                <p className="text-gray-700">
                  En cas de litige, les parties s'efforceront de trouver une solution amiable. Le Client consommateur peut recourir à une médiation conventionnelle ou à tout autre mode alternatif de règlement des différends.
                </p>
                
                <p className="text-gray-700">
                  <strong>12.2 Juridiction compétente</strong>
                </p>
                <p className="text-gray-700">
                  À défaut de résolution amiable, les litiges seront soumis au Tribunal de Commerce d'Aix-en-Provence pour les litiges entre professionnels, ou aux tribunaux compétents selon les règles de droit commun pour les litiges avec les consommateurs.
                </p>
                
                <p className="text-gray-700">
                  <strong>12.3 Droit applicable</strong>
                </p>
                <p className="text-gray-700">
                  Les présentes CGV sont régies par le droit français.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-violet-600" />
                Article 13 - Contact
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
                <p className="text-gray-700">Pour toute question concernant ces CGV, vous pouvez nous contacter :</p>
                <ul className="list-none space-y-2 mt-4">
                  <li><strong>Email :</strong> jason@digiflow-agency.fr</li>
                  <li><strong>Adresse :</strong> DIGIFLOW, 6 Allée des Banquiers, 13290 Aix-en-Provence</li>
                </ul>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                CGV version 1.0 - Dernière mise à jour : 1er janvier 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}