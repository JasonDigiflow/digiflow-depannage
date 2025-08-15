import { NextRequest, NextResponse } from 'next/server'

// IMPORTANT: Cette solution est pour DEMONSTRATION uniquement
// Ne pas utiliser en production sans autorisation explicite des propriétaires des sites

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    // Informer l'utilisateur des limitations
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>${url}</title>
        <style>
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            overflow: hidden;
          }
          .container {
            width: 100vw;
            height: 100vh;
            position: relative;
          }
          .notice {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            padding: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          }
          .notice h2 {
            margin: 0 0 20px 0;
            font-size: 24px;
          }
          .notice p {
            margin: 10px 0;
            opacity: 0.9;
          }
          .notice button {
            margin-top: 20px;
            padding: 12px 30px;
            background: white;
            color: #667eea;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s;
          }
          .notice button:hover {
            transform: scale(1.05);
          }
          .screenshot {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img 
            src="https://image.thum.io/get/width/1920/crop/1080/noanimate/${url}" 
            alt="Aperçu de ${url}"
            class="screenshot"
            onerror="this.style.display='none'; document.querySelector('.notice').style.display='block';"
          />
          <div class="notice" style="display: none;">
            <h2>🔒 Site Sécurisé</h2>
            <p>Ce site utilise des protections de sécurité qui empêchent l'affichage direct.</p>
            <p>Nous affichons une capture d'écran actualisée.</p>
            <button onclick="window.open('${url}', '_blank')">
              Visiter le vrai site →
            </button>
          </div>
        </div>
      </body>
      </html>`,
      {
        headers: {
          'Content-Type': 'text/html',
        }
      }
    )
  } catch (error) {
    console.error('Proxy frame error:', error)
    return NextResponse.json({ error: 'Failed to load site' }, { status: 500 })
  }
}