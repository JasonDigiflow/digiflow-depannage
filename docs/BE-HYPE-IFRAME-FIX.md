# Configuration Be-Hype pour autoriser l'affichage en iframe

## Le problème
Be-Hype bloque actuellement l'affichage dans les iframes avec le header:
```
X-Frame-Options: DENY
```

## Solution côté serveur Be-Hype

### Option 1: Nginx
Si vous utilisez Nginx, ajoutez dans votre configuration:
```nginx
# Autoriser l'iframe depuis DIGIFLOW
add_header X-Frame-Options "SAMEORIGIN";
add_header Content-Security-Policy "frame-ancestors 'self' https://digiflow-agency.fr https://www.digiflow-agency.fr http://localhost:3000";
```

### Option 2: Apache (.htaccess)
```apache
Header set X-Frame-Options "SAMEORIGIN"
Header set Content-Security-Policy "frame-ancestors 'self' https://digiflow-agency.fr https://www.digiflow-agency.fr http://localhost:3000"
```

### Option 3: Node.js/Express
```javascript
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self' https://digiflow-agency.fr https://www.digiflow-agency.fr http://localhost:3000");
  next();
});
```

### Option 4: Next.js (next.config.js)
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://digiflow-agency.fr https://www.digiflow-agency.fr http://localhost:3000",
          },
        ],
      },
    ]
  },
}
```

## Test
Après avoir appliqué ces changements, redémarrez votre serveur Be-Hype et l'iframe devrait fonctionner.