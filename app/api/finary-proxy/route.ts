import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Proxy direct vers Finary
    const response = await fetch('https://finary.com/fr', {
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
    html = html.replace(/href="\//g, 'href="https://finary.com/')
    html = html.replace(/src="\//g, 'src="https://finary.com/')
    html = html.replace(/action="\//g, 'action="https://finary.com/')
    
    // Ajouter une base tag pour s'assurer que toutes les ressources sont chargées correctement
    html = html.replace('<head>', `<head><base href="https://finary.com/" />`)
    
    // Injecter un message indiquant que c'est un aperçu
    const previewBanner = `
      <div style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
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
        Aperçu Live Finary
        <a href="https://finary.com/fr" target="_blank" style="
          margin-left: 8px;
          padding: 4px 12px;
          background: white;
          color: #6366f1;
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
    console.error('Finary proxy error:', error)
    
    // Fallback avec un message d'information
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>Finary Preview</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
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
            background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
            color: white;
          }
          .btn-secondary {
            background: #f3f4f6;
            color: #333;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>📊 Aperçu Finary</h1>
          <p>
            Finary est une plateforme de gestion de patrimoine innovante.
            Cliquez ci-dessous pour visiter le site officiel.
          </p>
          
          <div class="buttons">
            <a href="https://finary.com/fr" target="_blank" class="btn btn-primary">
              Visiter Finary
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