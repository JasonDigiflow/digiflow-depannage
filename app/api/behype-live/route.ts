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
    
    // Remplacer toutes les URLs relatives par des URLs absolues
    html = html.replace(/href="\//g, 'href="https://www.be-hype.com/')
    html = html.replace(/src="\//g, 'src="https://www.be-hype.com/')
    html = html.replace(/action="\//g, 'action="https://www.be-hype.com/')
    
    // Ajouter une base tag
    html = html.replace('<head>', '<head><base href="https://www.be-hype.com/" target="_blank">')
    
    // Supprimer les headers de sécurité qui pourraient bloquer
    html = html.replace(/<meta.*http-equiv="X-Frame-Options".*?>/gi, '')
    html = html.replace(/<meta.*content-security-policy.*?>/gi, '')
    
    // Ajouter un script pour ouvrir les liens dans une nouvelle fenêtre
    const script = `
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          // Ouvrir tous les liens dans une nouvelle fenêtre
          document.querySelectorAll('a').forEach(function(link) {
            link.target = '_blank';
            link.addEventListener('click', function(e) {
              e.preventDefault();
              window.open(this.href, '_blank');
            });
          });
          
          // Désactiver les formulaires
          document.querySelectorAll('form').forEach(function(form) {
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              window.open('https://www.be-hype.com', '_blank');
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
        // Autoriser l'affichage en iframe
        'X-Frame-Options': 'ALLOWALL',
        // Supprimer les restrictions CSP
        'Content-Security-Policy': "frame-ancestors *",
      },
    })
  } catch (error) {
    console.error('Be-Hype proxy error:', error)
    return new NextResponse('Erreur lors du chargement de Be-Hype', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      }
    })
  }
}