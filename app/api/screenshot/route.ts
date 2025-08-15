import { NextRequest, NextResponse } from 'next/server'

// Service de capture d'écran via API
const SCREENSHOT_APIS = [
  {
    name: 'screenshotapi',
    getUrl: (url: string) => 
      `https://shot.screenshotapi.net/screenshot?token=YOUR_TOKEN&url=${encodeURIComponent(url)}&width=1920&height=1080&output=json&file_type=png&wait_for_event=load`
  },
  {
    name: 'microlink',
    getUrl: (url: string) => 
      `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
  },
  {
    name: 'thum.io',
    getUrl: (url: string) => 
      `https://image.thum.io/get/width/1920/crop/1080/noanimate/${url}`
  },
  {
    name: 'pagepeeker',
    getUrl: (url: string) =>
      `https://api.pagepeeker.com/v2/thumbs.php?size=x&url=${url}`
  }
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')
  const service = searchParams.get('service') || 'thum.io'

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    // Utiliser le service de screenshot gratuit thum.io par défaut
    if (service === 'thum.io') {
      // Retourner directement l'URL de l'image
      const imageUrl = `https://image.thum.io/get/width/1920/crop/1080/noanimate/${url}`
      return NextResponse.json({ 
        success: true,
        screenshot: imageUrl,
        service: 'thum.io' 
      })
    }

    // Microlink API (gratuit avec limites)
    if (service === 'microlink') {
      const response = await fetch(
        `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`,
        {
          headers: {
            'Accept': 'application/json',
          }
        }
      )
      
      if (response.ok) {
        const data = await response.json()
        return NextResponse.json({
          success: true,
          screenshot: data.data?.screenshot?.url || data.screenshot?.url,
          service: 'microlink'
        })
      }
    }

    // Fallback: retourner une URL de screenshot statique
    return NextResponse.json({
      success: true,
      screenshot: `https://image.thum.io/get/width/1920/crop/1080/noanimate/${url}`,
      service: 'thum.io'
    })

  } catch (error) {
    console.error('Screenshot API error:', error)
    // En cas d'erreur, utiliser thum.io comme fallback
    return NextResponse.json({
      success: true,
      screenshot: `https://image.thum.io/get/width/1920/crop/1080/noanimate/${url}`,
      service: 'thum.io-fallback'
    })
  }
}

// Proxy pour charger des sites externes
export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Fetch le contenu du site
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text()
    
    // Retourner le HTML
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
        'X-Frame-Options': 'SAMEORIGIN',
      }
    })
  } catch (error) {
    console.error('Proxy error:', error)
    return NextResponse.json({ error: 'Failed to fetch website' }, { status: 500 })
  }
}