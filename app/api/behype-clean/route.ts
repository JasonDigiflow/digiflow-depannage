import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Récupérer le contenu HTML de Be-Hype
    const response = await fetch('https://www.be-hype.com', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    let html = await response.text()

    // Supprimer tous les scripts de tracking et analytics
    html = html.replace(/<script[^>]*hotjar[^>]*>[\s\S]*?<\/script>/gi, '')
    html = html.replace(/<script[^>]*googletagmanager[^>]*>[\s\S]*?<\/script>/gi, '')
    html = html.replace(/<script[^>]*google-analytics[^>]*>[\s\S]*?<\/script>/gi, '')
    html = html.replace(/<script[^>]*facebook[^>]*>[\s\S]*?<\/script>/gi, '')
    html = html.replace(/<script[^>]*gtag[^>]*>[\s\S]*?<\/script>/gi, '')

    // Supprimer les iframes de tracking
    html = html.replace(/<iframe[^>]*facebook[^>]*>[\s\S]*?<\/iframe>/gi, '')
    html = html.replace(/<iframe[^>]*google[^>]*>[\s\S]*?<\/iframe>/gi, '')

    // Supprimer les noscript tags de tracking
    html = html.replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '')

    // Remplacer toutes les URLs relatives par des URLs absolues
    html = html.replace(/href="\//g, 'href="https://www.be-hype.com/')
    html = html.replace(/src="\//g, 'src="https://www.be-hype.com/')
    html = html.replace(/action="\//g, 'action="https://www.be-hype.com/')

    // Ajouter une base tag
    html = html.replace('<head>', `<head>
      <base href="https://www.be-hype.com/" target="_blank">
      <meta name="referrer" content="no-referrer">
    `)

    // Supprimer les headers de sécurité qui pourraient bloquer
    html = html.replace(/<meta.*http-equiv="X-Frame-Options".*?>/gi, '')
    html = html.replace(/<meta.*content-security-policy.*?>/gi, '')
    html = html.replace(/<meta.*permissions-policy.*?>/gi, '')

    // Script minimal pour ouvrir les liens
    const script = `
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          // Ouvrir tous les liens dans une nouvelle fenêtre
          document.querySelectorAll('a').forEach(function(link) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
          });

          // Désactiver les formulaires
          document.querySelectorAll('form').forEach(function(form) {
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              window.open('https://www.be-hype.com', '_blank', 'noopener,noreferrer');
            });
          });
        });
      </script>
    `

    html = html.replace('</body>', `${script}</body>`)

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' https://www.be-hype.com; script-src 'unsafe-inline' 'self'; style-src 'unsafe-inline' 'self' https://www.be-hype.com; img-src * data:; frame-ancestors 'self';",
        'Permissions-Policy': 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
        'Referrer-Policy': 'no-referrer',
      },
    })
  } catch (error) {
    console.error('Be-Hype proxy error:', error)

    // Retourner une page d'erreur propre
    const errorHTML = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aperçu non disponible</title>
        <style>
          body {
            margin: 0;
            padding: 20px;
            font-family: system-ui, -apple-system, sans-serif;
            background: #0A0B12;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
          }
          .container {
            max-width: 400px;
          }
          h2 {
            color: #7B61FF;
            margin-bottom: 10px;
          }
          p {
            color: rgba(255,255,255,0.7);
            line-height: 1.6;
            margin-bottom: 20px;
          }
          a {
            display: inline-block;
            padding: 10px 20px;
            background: linear-gradient(135deg, #7B61FF, #FF8A00);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            transition: transform 0.2s;
          }
          a:hover {
            transform: scale(1.05);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Aperçu temporairement indisponible</h2>
          <p>Le site Be-Hype ne peut pas être affiché dans cette fenêtre pour des raisons techniques.</p>
          <a href="https://www.be-hype.com" target="_blank" rel="noopener noreferrer">
            Visiter le site Be-Hype →
          </a>
        </div>
      </body>
      </html>
    `

    return new NextResponse(errorHTML, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      }
    })
  }
}