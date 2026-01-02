import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Petale - Soins de beauté naturels et cosmétiques bio',
  description = 'Découvrez Petale, votre destination pour des soins de beauté naturels et cosmétiques bio. Des produits premium 100% naturels pour sublimer votre beauté authentique. Livraison rapide en Côte d\'Ivoire.',
  keywords = 'cosmétiques bio, soins naturels, beauté naturelle, produits cosmétiques, Côte d\'Ivoire, soins visage, soins corps, produits bio, cosmétiques premium',
  image = '/og-image.jpg',
  url,
  type = 'website'
}) => {
  useEffect(() => {
    // Get current URL if not provided
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
    
    // Update title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'Petale')

    // Open Graph tags
    updateMetaTag('og:title', title, 'property')
    updateMetaTag('og:description', description, 'property')
    updateMetaTag('og:image', image, 'property')
    updateMetaTag('og:url', currentUrl, 'property')
    updateMetaTag('og:type', type, 'property')
    updateMetaTag('og:site_name', 'Petale', 'property')
    updateMetaTag('og:locale', 'fr_FR', 'property')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('theme-color', '#85841F')
    updateMetaTag('apple-mobile-web-app-title', 'Petale')
    updateMetaTag('application-name', 'Petale')

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl)
  }, [title, description, keywords, image, url, type])

  return null
}

