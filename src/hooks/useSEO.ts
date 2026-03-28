import { useEffect } from 'react'

interface SEOProps {
  title: string        // < 60 chars, doit contenir le mot-clé + ville
  description: string  // < 155 chars, orientée urgence + appel
  canonical?: string   // URL canonique absolue
  jsonLd?: object      // Schema.org JSON-LD
}

export function useSEO({ title, description, canonical, jsonLd }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title

    // Meta description
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description

    // Canonical
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) {
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    } else if (link) {
      link.remove()
    }

    // JSON-LD
    let script = document.querySelector<HTMLScriptElement>('#json-ld')
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.id = 'json-ld'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.remove()
    }
  }, [title, description, canonical, jsonLd])
}
