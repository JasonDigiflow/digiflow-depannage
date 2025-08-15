# Configuration Be-Hype pour autoriser l'iframe DIGIFLOW

Puisque vous êtes propriétaire de Be-Hype, voici comment configurer votre serveur pour permettre l'affichage en iframe depuis DIGIFLOW.

## Option 1: Configuration Nginx

Si Be-Hype utilise Nginx, ajoutez ces headers dans votre configuration :

```nginx
location / {
    # Supprimer X-Frame-Options restrictif
    proxy_hide_header X-Frame-Options;
    
    # Autoriser DIGIFLOW et localhost pour le développement
    add_header X-Frame-Options "ALLOW-FROM https://www.digiflow-agency.fr";
    
    # Ou utiliser Content-Security-Policy (plus moderne)
    add_header Content-Security-Policy "frame-ancestors 'self' https://www.digiflow-agency.fr http://localhost:3000 http://localhost:3001";
}
```

## Option 2: Configuration Apache

Si Be-Hype utilise Apache, modifiez votre .htaccess :

```apache
# Supprimer X-Frame-Options existant
Header always unset X-Frame-Options

# Autoriser les domaines spécifiques
Header always set Content-Security-Policy "frame-ancestors 'self' https://www.digiflow-agency.fr http://localhost:3000 http://localhost:3001"
```

## Option 3: Configuration Next.js (si Be-Hype utilise Next.js)

Dans `next.config.js` :

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://www.digiflow-agency.fr http://localhost:3000 http://localhost:3001"
          },
        ],
      },
    ]
  },
}
```

## Option 4: Configuration Express.js

Si Be-Hype utilise Express :

```javascript
app.use((req, res, next) => {
  // Autoriser l'iframe depuis DIGIFLOW
  const allowedOrigins = [
    'https://www.digiflow-agency.fr',
    'http://localhost:3000',
    'http://localhost:3001'
  ];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('X-Frame-Options', `ALLOW-FROM ${origin}`);
    res.setHeader('Content-Security-Policy', `frame-ancestors 'self' ${allowedOrigins.join(' ')}`);
  }
  
  next();
});
```

## Option 5: Cloudflare (si vous utilisez Cloudflare)

1. Allez dans votre dashboard Cloudflare
2. Sélectionnez be-hype.com
3. Allez dans Security > Headers
4. Créez une Transform Rule :
   - **When**: `Hostname equals be-hype.com`
   - **Then**: 
     - Remove header: `X-Frame-Options`
     - Set static header: `Content-Security-Policy` = `frame-ancestors 'self' https://www.digiflow-agency.fr http://localhost:3000`

## Vérification

Après avoir appliqué les changements :

1. Testez avec curl :
```bash
curl -I https://www.be-hype.com
```

2. Vérifiez que les headers sont corrects
3. Relancez le site DIGIFLOW en local pour tester

## Solution temporaire côté DIGIFLOW

En attendant la configuration serveur, je vais optimiser l'affichage avec un système de proxy amélioré.