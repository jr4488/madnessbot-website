import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Mail, Phone, Clock, MapPin, Send, Check } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Mock form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSuccess(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600">
            Get in touch with our team for support or questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle>Drop us a line!</CardTitle>
                <CardDescription>
                  Send us a message and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {success && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <Check className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-slate-500 mt-4">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Better yet, contact us directly!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call or text:</h3>
                    <a
                      href="tel:+16282826142"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      +1 (628) 282-6142
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email:</h3>
                    <a
                      href="mailto:snaponmadness@gmail.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      snaponmadness@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Hours - Pacific Standard Time</h3>
                    <div className="text-slate-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Information */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Support Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Response Times</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Pro users: Within 4 hours during business hours</li>
                    <li>• Free users: Within 24 hours</li>
                    <li>• Emergency issues: Within 1 hour (Pro only)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">What to Include</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Your account email address</li>
                    <li>• Detailed description of the issue</li>
                    <li>• Screenshots if applicable</li>
                    <li>• Steps to reproduce the problem</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a
                    href="/faq"
                    className="block text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Frequently Asked Questions
                  </a>
                  <a
                    href="/chat"
                    className="block text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Try MadnessBot
                  </a>
                  <a
                    href="/subscription"
                    className="block text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Upgrade to Pro
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

