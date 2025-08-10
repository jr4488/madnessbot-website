import { useEffect } from 'react'

const StructuredData = ({ type = 'homepage' }) => {
  useEffect(() => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach(script => script.remove())

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MadnessBot",
      "description": "AI-powered automotive assistant for mechanics providing 24/7 expert advice, diagnostics, and repair estimates",
      "url": "https://madnessbot.com",
      "logo": "https://madnessbot.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-628-282-6142",
        "email": "snaponmadness@gmail.com",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://anansiportia.com"
      ]
    }

    // Software Application Schema
    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "MadnessBot",
      "description": "AI automotive assistant that helps mechanics diagnose problems, provide repair estimates, and manage toolbox inventory",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "price": "0",
          "priceCurrency": "USD",
          "description": "5 queries per day, basic AI assistance, image analysis, mobile responsive"
        },
        {
          "@type": "Offer",
          "name": "Pro Plan",
          "price": "6.95",
          "priceCurrency": "USD",
          "billingDuration": "P1M",
          "description": "Unlimited queries, conversation memory, toolbox inventory management, priority email support, advanced diagnostics"
        }
      ],
      "featureList": [
        "AI Mechanic Assistant",
        "Image Analysis",
        "AI Image Generation",
        "Web Search Integration",
        "Toolbox Inventory Management",
        "Mobile Responsive Design"
      ],
      "screenshot": "https://madnessbot.com/mobile-mockup.png"
    }

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Automotive Diagnostic Service",
      "description": "Professional automotive diagnostic and repair assistance powered by artificial intelligence",
      "provider": {
        "@type": "Organization",
        "name": "MadnessBot"
      },
      "serviceType": "Automotive Diagnostic Service",
      "audience": {
        "@type": "Audience",
        "audienceType": "Automotive Technicians and Mechanics"
      }
    }

    // FAQ Schema (for FAQ page)
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is MadnessBot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MadnessBot is an AI-powered automotive assistant designed specifically for mechanics and automotive technicians. It provides expert advice, diagnostic help, repair estimates, and toolbox management."
          }
        },
        {
          "@type": "Question",
          "name": "How does the image analysis work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply upload photos of vehicle issues, parts, or diagnostic screens. Our AI analyzes the images and provides detailed diagnosis and repair guidance based on what it sees."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in the free plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The free plan includes 5 queries per day, basic AI assistance, image analysis capabilities, and full mobile responsiveness. No credit card required."
          }
        }
      ]
    }

    // Add schemas based on page type
    const schemas = [organizationSchema, softwareSchema, serviceSchema]
    
    if (type === 'faq') {
      schemas.push(faqSchema)
    }

    // Insert structured data scripts
    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      script.id = `structured-data-${index}`
      document.head.appendChild(script)
    })

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach(script => script.remove())
    }
  }, [type])

  return null // This component doesn't render anything
}

export default StructuredData

