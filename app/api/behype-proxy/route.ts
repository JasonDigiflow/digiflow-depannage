import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Proxy direct vers Be-Hype
    const response = await fetch('https://www.be-hype.com', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
      },
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    let html = await response.text()
    
    // Remplacer les URLs relatives par des URLs absolues
    html = html.replace(/href="\//g, 'href="https://www.be-hype.com/')
    html = html.replace(/src="\//g, 'src="https://www.be-hype.com/')
    html = html.replace(/action="\//g, 'action="https://www.be-hype.com/')
    
    // Ajouter une base tag pour s'assurer que toutes les ressources sont chargées correctement
    html = html.replace('<head>', `<head><base href="https://www.be-hype.com/" />`)
    
    // Injecter un message indiquant que c'est un aperçu
    const previewBanner = `
      <div style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 999999;
        display: flex;
        align-items: center;
        gap: 8px;
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        Aperçu Live Be-Hype
        <a href="https://www.be-hype.com" target="_blank" style="
          margin-left: 8px;
          padding: 4px 12px;
          background: white;
          color: #667eea;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
        ">
          Visiter →
        </a>
      </div>
    `
    html = html.replace('</body>', `${previewBanner}</body>`)
    
    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        // Supprimer les restrictions d'iframe côté proxy
        'X-Frame-Options': 'ALLOWALL',
      },
    })
  } catch (error) {
    console.error('Be-Hype proxy error:', error)
    
    // Fallback avec un message d'information
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>Be-Hype Preview</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 500px;
            text-align: center;
          }
          h1 {
            color: #333;
            margin-bottom: 20px;
            font-size: 28px;
          }
          p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 30px;
          }
          .buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
          }
          .btn {
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.2s;
            display: inline-block;
          }
          .btn:hover {
            transform: translateY(-2px);
          }
          .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .btn-secondary {
            background: #f3f4f6;
            color: #333;
          }
          .info {
            margin-top: 30px;
            padding: 20px;
            background: #f9fafb;
            border-radius: 12px;
          }
          .info h3 {
            color: #667eea;
            margin-bottom: 10px;
            font-size: 16px;
          }
          .info code {
            display: block;
            background: #e5e7eb;
            padding: 12px;
            border-radius: 6px;
            margin-top: 10px;
            font-size: 13px;
            color: #374151;
            word-break: break-all;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🔒 Configuration requise</h1>
          <p>
            Pour afficher Be-Hype en live sur DIGIFLOW, vous devez configurer 
            les headers de sécurité sur votre serveur Be-Hype.
          </p>
          
          <div class="info">
            <h3>Instructions pour le propriétaire</h3>
            <p style="font-size: 14px; margin-bottom: 10px;">
              Ajoutez ce header sur votre serveur Be-Hype :
            </p>
            <code>Content-Security-Policy: frame-ancestors 'self' https://www.digiflow-agency.fr http://localhost:3000</code>
          </div>
          
          <div class="buttons">
            <a href="https://www.be-hype.com" target="_blank" class="btn btn-primary">
              Visiter Be-Hype
            </a>
            <a href="/docs/BEHYPE-IFRAME-SETUP.md" class="btn btn-secondary">
              Guide complet
            </a>
          </div>
        </div>
      </body>
      </html>`,
      {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
        }
      }
    )
  }
}