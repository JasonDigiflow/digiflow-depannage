import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    // Services de proxy disponibles
    const proxyServices = [
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
      `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
      `https://cors-anywhere.herokuapp.com/${url}`,
      `https://thingproxy.freeboard.io/fetch/${url}`,
      `https://proxy.cors.sh/${url}`,
      `https://cors-proxy.htmldriven.com/?url=${encodeURIComponent(url)}`,
    ]

    // Essayer le premier service de proxy
    const proxyUrl = proxyServices[0]
    const response = await fetch(proxyUrl, {
      headers: {
        'Accept': 'text/html,application/xhtml+xml',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })

    if (response.ok) {
      const data = await response.json()
      
      // AllOrigins retourne le contenu dans data.contents
      if (data.contents) {
        return new NextResponse(data.contents, {
          headers: {
            'Content-Type': 'text/html',
            'X-Frame-Options': 'SAMEORIGIN',
          }
        })
      }
      
      // Retourner directement le HTML
      const html = await response.text()
      return new NextResponse(html, {
        headers: {
          'Content-Type': 'text/html',
          'X-Frame-Options': 'SAMEORIGIN',
        }
      })
    }

    throw new Error('Proxy failed')
  } catch (error) {
    console.error('Proxy error:', error)
    
    // Fallback: retourner une redirection vers le site
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>Redirection...</title>
        <meta http-equiv="refresh" content="0; url=${url}">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .container {
            text-align: center;
          }
          .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="spinner"></div>
          <h2>Chargement du site...</h2>
          <p>Redirection vers ${url}</p>
        </div>
      </body>
      </html>`,
      {
        headers: {
          'Content-Type': 'text/html',
        }
      }
    )
  }
}