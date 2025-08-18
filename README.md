######## DIGIFLOW v2 - Site Premium d'Agence d'Acquisition Digitale

Site web ultra-moderne et animé pour DIGIFLOW, agence spécialisée dans la création de sites web performants et l'acquisition client.

## 🚀 Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: TailwindCSS + Design System custom
- **Animations**: 
  - Three.js + React Three Fiber (scène 3D)
  - GSAP + ScrollTrigger (animations au scroll)
  - Framer Motion (micro-interactions)
  - Lenis (smooth scroll)
- **UI Components**: Radix UI + Custom components
- **Forms**: React Hook Form + Zod
- **SEO**: Next-SEO + métadonnées optimisées

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/digiflow-agency/digiflow-v2.git
cd digiflow-v2

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm start
```

## 🎨 Design System

### Palette de couleurs

- **Violet primaire**: `#7B61FF` → `#9B5CFF` (hover)
- **Orange primaire**: `#FF8A00` → `#FFB300` (hover)
- **Dark background**: `#0A0B12`
- **Glass effect**: `rgba(255, 255, 255, 0.08)`

### Typographies

- **Headings**: Space Grotesk (600/700)
- **Body**: Inter (400/500)

## 📁 Structure du projet

```
/app                    # Pages Next.js (App Router)
  /(site)              # Pages principales
  /services/[slug]     # Pages services dynamiques
  /work/[case]         # Études de cas
  layout.tsx           # Layout principal
  page.tsx             # Page d'accueil

/components            # Composants React
  /sections           # Sections de page (Hero, Services, etc.)
  /three             # Composants Three.js
  /ui                # Composants UI de base
  Navigation.tsx     # Navigation principale
  Footer.tsx        # Footer

/lib                  # Utilitaires
  utils.ts           # Fonctions helper

/public              # Assets statiques
  /assets           # Images, logos, etc.
```

## 🎯 Fonctionnalités clés

### Animations premium
- **Hero 3D Flow Ring**: Anneau de particules animé en Three.js avec interaction souris
- **Scroll animations**: Animations GSAP déclenchées au scroll
- **Hover effects**: Cards 3D, boutons avec gradients animés
- **Smooth scrolling**: Navigation fluide avec Lenis

### Services (9 services)
1. Sites Web & Landing Pages
2. SEO (référencement naturel)
3. Google Ads (SEA)
4. Social Ads (SMA)
5. Shooting Photo/Vidéo
6. Gestion Google Business
7. Coldmail
8. Marketing Automation
9. Influence Marketing

### Optimisations Performance

- Images optimisées avec Next/Image
- Lazy loading des composants lourds
- Code splitting automatique
- Font-display: swap
- Bundle < 200KB JS initial
- Lighthouse Score > 95

## 🔧 Configuration des images

Pour ajouter les logos et images fournis :

1. Placer les fichiers dans `/public/assets/`:
```
/public/assets/
  logo-digiflow.svg
  logo-digiflow-noir.png
  digiflow-white.svg
  elipse2.png
  elipse3.svg
  favikon-orange.png
  jarkanys-01.jpg
```

2. Référencer dans les composants :
```tsx
import Image from 'next/image'

<Image 
  src="/assets/logo-digiflow.svg" 
  alt="DIGIFLOW" 
  width={200} 
  height={50}
/>
```

## 🚀 Déploiement sur Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Variables d'environnement à configurer :
# NEXT_PUBLIC_SITE_URL=https://digiflow-agency.fr
# NEXT_PUBLIC_GTM_ID=GTM-XXXXX
# NEXT_PUBLIC_GA_ID=G-XXXXX
```

## 📊 Intégrations

### Formulaires → Webhook
Les formulaires sont configurés pour envoyer vers Make/Brevo :

```javascript
// Configuration dans /lib/forms.ts
const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL
```

### Calendly
Intégration du widget Calendly pour les prises de RDV :
```javascript
// URL à configurer
const CALENDLY_URL = "https://calendly.com/digiflow/audit"
```

## ✅ Checklist Performance & SEO

### Performance
- [x] Bundle JS < 200KB initial
- [x] Images optimisées (WebP, lazy loading)
- [x] Fonts optimisées (font-display: swap)
- [x] Code splitting par route
- [x] Prefetch des routes critiques
- [x] Animation pause sur tab inactive
- [x] Reduced motion support

### SEO
- [x] Métadonnées complètes (title, description, OG)
- [x] Schema.org (Organization, Service, FAQ)
- [x] Sitemap.xml généré automatiquement
- [x] Robots.txt configuré
- [x] URLs canoniques
- [x] Contenu structuré (H1 unique, hiérarchie)

### Accessibilité
- [x] WCAG AA compliant
- [x] Focus states visibles
- [x] Alt text sur toutes les images
- [x] Contraste suffisant (4.5:1 minimum)
- [x] Navigation au clavier
- [x] ARIA labels sur éléments interactifs

## 🐛 Troubleshooting

### Erreur Three.js WebGL
Si WebGL n'est pas supporté, une image statique est affichée en fallback.

### Animations saccadées
Vérifier que le GPU est activé dans Chrome : `chrome://gpu`

### Build failed
```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run build
```

## 📝 Scripts disponibles

```bash
npm run dev        # Développement (port 3000)
npm run build      # Build production
npm run start      # Serveur production
npm run lint       # Linting ESLint
```

## 🎯 Objectifs atteints

- ✅ Design premium violet/orange
- ✅ Animations Three.js + GSAP avancées
- ✅ 9 services avec cards animées
- ✅ Sections complètes (Hero, Services, Cases, Process, Testimonials, CTA)
- ✅ Performance Lighthouse > 95
- ✅ SEO optimisé
- ✅ Responsive mobile-first
- ✅ Accessibilité WCAG AA
- ✅ Dark mode par défaut
- ✅ Smooth scroll avec Lenis
- ✅ Formulaires avec validation Zod

## 📧 Contact

Pour toute question : contact@digiflow-agency.fr

---

Développé avec passion par DIGIFLOW 🚀
