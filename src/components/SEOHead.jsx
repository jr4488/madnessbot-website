import { useEffect } from 'react'

const SEOHead = ({ 
  title = "MadnessBot - AI Automotive Assistant for Mechanics | 24/7 Auto Repair Help",
  description = "Get expert automotive advice, diagnose problems, and repair estimates with MadnessBot - your AI master mechanic. Upload photos for instant diagnosis. Free tier available with 5 daily queries.",
  keywords = "AI automotive assistant, auto repair chatbot, mechanic AI tool, vehicle diagnostic AI, automotive troubleshooting, car repair assistant, mobile mechanic app, auto repair estimates",
  canonical = "https://madnessbot.com/",
  ogImage = "https://madnessbot.com/og-image.jpg"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', description)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', canonical)
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]')
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage)
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title)
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description)
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]')
    if (twitterUrl) {
      twitterUrl.setAttribute('content', canonical)
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]')
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage)
    }
  }, [title, description, keywords, canonical, ogImage])

  return null // This component doesn't render anything
}

export default SEOHead

