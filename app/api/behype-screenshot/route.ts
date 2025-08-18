import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Utiliser plusieurs services de screenshot pour Be-Hype
    const url = 'https://www.be-hype.com'
    
    // Option 1: ScreenshotAPI.net (gratuit avec limites)
    const screenshotUrl = `https://shot.screenshotapi.net/screenshot?url=${encodeURIComponent(url)}&width=1920&height=1080&output=json&file_type=png&wait_for_event=load`
    
    try {
      const response = await fetch(screenshotUrl)
      const data = await response.json()
      
      if (data.screenshot) {
        // Rediriger vers l'URL du screenshot
        return NextResponse.redirect(data.screenshot)
      }
    } catch (error) {
      console.log('ScreenshotAPI failed, trying alternative...')
    }
    
    // Option 2: Thum.io (plus simple, gratuit)
    const thumUrl = `https://image.thum.io/get/width/1920/crop/1080/noanimate/${url}`
    
    // Rediriger vers thum.io
    return NextResponse.redirect(thumUrl)
    
  } catch (error) {
    console.error('Screenshot error:', error)
    
    // Fallback: retourner une image placeholder
    return new NextResponse(
      JSON.stringify({ 
        error: 'Unable to capture screenshot',
        fallback: `https://via.placeholder.com/1920x1080/000000/ff6b35?text=BE-HYPE+Preview`
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}