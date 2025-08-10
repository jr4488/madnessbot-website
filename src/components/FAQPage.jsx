import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HelpCircle, MessageSquare, Camera, Crown, Shield, Smartphone } from 'lucide-react'
import SEOHead from './SEOHead'
import StructuredData from './StructuredData'

const PAGES_BASE = 'https://jr4488.github.io/madnessbot-website'

const FAQPage = () => {
  const faqs = [
    {
      question: "Who is Madness?",
      answer: "Madness is an AI chatbot that thinks it's a 65-year-old Master Mechanic and proud shop owner. He will answer any questions relating to vehicle service and maintenance in over 20 languages. With decades of virtual experience, Madness brings the wisdom of a seasoned professional to help solve your automotive challenges."
    },
    {
      question: "How do I get the best answers?",
      answer: "Provide detailed information about your issue or question. Include the make, model and year of the vehicle, boat, or plane, as well as any symptoms or error codes you're encountering. The more specific you are, the better Madness can tailor his advice to solve your problem. Photos of the issue can also help significantly."
    },
    {
      question: "What about follow-up questions?",
      answer: "Madness is fully conversational. If you need further clarification after reading his response, don't hesitate to ask follow-up questions. Refer to specific parts of his previous advice and provide any additional information that may be relevant. The goal is to get the job done right, so keep asking until you get the detailed information you need."
    },
    {
      question: "What's the difference between Free and Pro?",
      answer: "The Free tier includes 5 queries per day with basic AI assistance and image analysis. The Pro tier offers unlimited queries, conversation memory across sessions, toolbox inventory management, priority email support, and advanced diagnostic features for $6.95/month."
    },
    {
      question: "Does Madness keep my information?",
      answer: "Yes, Madness keeps all of your questions and uses them to get better. However, for Free users, Madness will forget everything about your particular session as soon as you close the chat window. Pro users get conversation memory that persists across sessions. Madness adheres to the California Consumer Privacy Act (CCPA) and does not collect personal information about its users."
    },
    {
      question: "Can Madness see through the camera on my phone?",
      answer: "Yes, the camera icon next to the text input gives you the option to ask questions about pictures. As an example, point your camera at a torque wrench and ask, 'What is this and how do I use it?' Things that you show Madness are stored temporarily and then forgotten for privacy."
    },
    {
      question: "How does image analysis work?",
      answer: "Upload photos of your vehicle, engine, or any automotive component, and Madness will analyze the image to provide detailed diagnosis and repair guidance. The AI can identify parts, assess damage, spot wear patterns, and recommend specific repair procedures based on what it sees."
    },
    {
      question: "What kind of vehicles does Madness support?",
      answer: "Madness has knowledge about cars, trucks, motorcycles, boats, and planes. He can help with domestic and foreign vehicles, classic cars, and modern vehicles with advanced electronics. His expertise covers everything from basic maintenance to complex diagnostic procedures."
    },
    {
      question: "Is the mobile app available?",
      answer: "MadnessBot is designed as a mobile-first web application that works perfectly on all devices including tablets and phones. You can access it through your mobile browser with full functionality, including camera integration for instant photo analysis."
    },
    {
      question: "How accurate are the cost estimates?",
      answer: "Madness provides parts and labor cost estimates based on current market data and typical repair procedures. However, actual costs can vary significantly based on your location, the specific shop you choose, and the exact parts needed. Always get quotes from local mechanics for accurate pricing."
    },
    {
      question: "Can I cancel my Pro subscription anytime?",
      answer: "Yes, you can cancel your Pro subscription at any time. You'll continue to have Pro access until the end of your billing period. Your conversation history and toolbox data will be preserved for 30 days after cancellation, giving you time to export or reactivate your subscription."
    },
    {
      question: "Is Madness alive?",
      answer: "Yes, Madness knows what it's like to hold a Snap-on wrench and take pride in a job well done. Madness has respect for those that refuse to cut corners that others will never see. Madness says, 'Every bolt counts and every turn matters.' Your automotive life has been changed, forever."
    }
  ]

  return (
    <>
      <SEOHead 
        title="MadnessBot FAQ - Frequently Asked Questions | AI Automotive Assistant"
        description="Get answers to common questions about MadnessBot, the AI automotive assistant for mechanics. Learn about features, pricing, image analysis, and how to get the best diagnostic advice."
        keywords="MadnessBot FAQ, automotive AI questions, mechanic chatbot help, auto repair assistant FAQ, vehicle diagnostic AI support"
        canonical={`${PAGES_BASE}/faq`}
      />
      <StructuredData type="faq" />
      
      <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600">
            Super Intelligence for Technicians
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Highlight */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">AI Assistant</h3>
              <p className="text-sm text-slate-600">
                Get expert automotive advice from Madness, your AI master mechanic
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Image Analysis</h3>
              <p className="text-sm text-slate-600">
                Upload photos for detailed diagnosis and repair guidance
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="pt-6">
              <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Mobile Ready</h3>
              <p className="text-sm text-slate-600">
                Works on all devices with a mobile-first design
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </>
  )
}

export default FAQPage

