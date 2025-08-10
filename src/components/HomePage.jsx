import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  MessageSquare, 
  Camera, 
  Image, 
  Search, 
  Shield, 
  Smartphone,
  Check,
  Star,
  Wrench,
  Zap,
  Clock,
  DollarSign
} from 'lucide-react'
import heroBackground from '../assets/hero_background_garage.png'
import mobileMockup from '../assets/mobile_chat_mockup_provided.png'
import SEOHead from './SEOHead'
import StructuredData from './StructuredData'

const PAGES_BASE = 'https://jr4488.github.io/madnessbot-website'

const HomePage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "AI Mechanic Assistant",
      description: "Seasoned Master Mechanic 'Madness' with specialized automotive knowledge"
    },
    {
      icon: Camera,
      title: "Image Analysis",
      description: "Upload vehicle photos for detailed diagnosis and repair guidance"
    },
    {
      icon: Image,
      title: "AI Image Generation",
      description: "Create visualizations of tools, parts, and repair procedures"
    },
    {
      icon: Search,
      title: "Web Search Integration",
      description: "Real-time access to TSBs, recalls, and technical specifications"
    },
    {
      icon: Shield,
      title: "Toolbox Inventory",
      description: "Knows the tools you have and the tools you will need to preform a repair."
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Works on all devices including tablets and phones"
    }
  ]

  const testimonials = [
    {
      name: "Mike Rodriguez",
      role: "Master Technician",
      content: "MadnessBot has revolutionized how I diagnose complex issues. It's like having a veteran mechanic available 24/7.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Shop Owner",
      content: "The cost estimation feature alone has saved us hours of research. Our efficiency has improved dramatically.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Mobile Mechanic",
      content: "Perfect for field work. The image analysis helps me identify problems instantly and order the right parts.",
      rating: 5
    }
  ]

  return (
    <>
      <SEOHead 
        title="MadnessBot - AI Automotive Assistant for Mechanics | 24/7 Auto Repair Help"
        description="Get expert automotive advice, diagnose problems, and repair estimates with MadnessBot - your AI master mechanic. Upload photos for instant diagnosis. Free tier available with 5 daily queries."
        keywords="AI automotive assistant, auto repair chatbot, mechanic AI tool, vehicle diagnostic AI, automotive troubleshooting, car repair assistant, mobile mechanic app, auto repair estimates"
        canonical={`${PAGES_BASE}/`}
        ogImage={`${PAGES_BASE}/madness_character_modern.png`}
      />
      <StructuredData type="homepage" />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section 
          className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          aria-label="Hero section introducing MadnessBot AI automotive assistant"
        >
          <div className="absolute inset-0 z-0" aria-hidden="true"></div>
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <header>
                    <h1 className="text-4xl lg:text-5xl font-extrabold">
                      MadnessBot
                    </h1>
                    <p className="text-xl text-slate-300 mt-4">
                      AI Master Mechanic for diagnostics, estimates, and pro workflows
                    </p>
                  </header>
                  
                  <nav className="flex flex-col sm:flex-row gap-4" aria-label="Primary call-to-action buttons">
                    <a href="https://anansiportia.com" target="_blank" rel="noopener noreferrer" aria-label="Start free trial of MadnessBot">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                        Start Free Trial
                        <Wrench className="w-5 h-5 ml-2" aria-hidden="true" />
                      </Button>
                    </a>
                    <a href="https://www.youtube.com/shorts/uoU_1KORocQ" target="_blank" rel="noopener noreferrer" aria-label="Watch MadnessBot demonstration video">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                        Video
                      </Button>
                    </a>
                  </nav>

                  <div className="flex items-center space-x-6 text-sm text-slate-400" role="list" aria-label="Free tier benefits">
                    <div className="flex items-center" role="listitem">
                      <Check className="w-4 h-4 text-green-400 mr-2" aria-hidden="true" />
                      5 free queries daily
                    </div>
                    <div className="flex items-center" role="listitem">
                      <Check className="w-4 h-4 text-green-400 mr-2" aria-hidden="true" />
                      No credit card required
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative z-10">
                    <img 
                      src={`${import.meta.env.BASE_URL}madness_character_modern.png`}
                      alt="Madness - Professional AI Master Mechanic character in automotive garage setting, representing expert automotive knowledge and assistance" 
                      className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                      loading="eager"
                      width="400"
                      height="600"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-2xl blur-3xl" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Powerful Features for Modern Mechanics
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Everything you need to diagnose, repair, and manage your automotive work with AI assistance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile-First Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={mobileMockup} 
                  alt="MadnessBot mobile app interface showing automotive AI assistant chat conversation with diagnostic capabilities and repair guidance on smartphone screen" 
                  className="w-full max-w-sm mx-auto"
                  loading="lazy"
                  width="300"
                  height="600"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <Badge className="bg-orange-600 text-white">
                  <Smartphone className="w-4 h-4 mr-1" />
                  Mobile-First Design
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Built for Mechanics on the Go
                </h2>
                <p className="text-xl text-slate-300">
                  Most of our users access MadnessBot on their phones while working. 
                  Our interface is optimized for quick, efficient interactions in any environment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Touch-optimized chat interface</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Camera integration for instant diagnosis</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Fast responses tuned for shop workflow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-600">
                Start free, upgrade when you need more power
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Tier */}
              <Card className="border-2 border-slate-200 shadow-lg">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-slate-900">Free</CardTitle>
                  <div className="text-4xl font-bold text-slate-900 mt-4">
                    $0<span className="text-lg font-normal text-slate-600">/month</span>
                  </div>
                  <CardDescription className="text-slate-600 mt-2">
                    Perfect for occasional use
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>5 queries per day</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic AI assistance</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Image analysis</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Mobile responsive</span>
                  </div>
                  <a href="https://anansiportia.com" target="_blank" rel="noopener noreferrer" className="block pt-4">
                    <Button className="w-full bg-slate-600 hover:bg-slate-700">
                      Get Started Free
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Pro Tier */}
              <Card className="border-2 border-blue-500 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-slate-900">Pro</CardTitle>
                  <div className="text-4xl font-bold text-slate-900 mt-4">
                    $6.95<span className="text-lg font-normal text-slate-600">/month</span>
                  </div>
                  <CardDescription className="text-slate-600 mt-2">
                    For professional mechanics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-semibold">Unlimited queries</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Conversation memory</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Toolbox inventory management</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority email support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced diagnostics</span>
                  </div>
                  <a href="https://anansiportia.com" target="_blank" rel="noopener noreferrer" className="block pt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Pro Trial
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Trusted by Mechanics Worldwide
              </h2>
              <p className="text-xl text-slate-600">
                See what professionals are saying about MadnessBot
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of mechanics who trust MadnessBot for their daily automotive challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://anansiportia.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-3">
                  Start Free Today
                  <Clock className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage

