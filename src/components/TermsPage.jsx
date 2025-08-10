import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText } from 'lucide-react'

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-600">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>
                By accessing and using MadnessBot ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms of Service ("Terms") govern your use of our AI automotive assistant service operated by MadnessBot ("us", "we", or "our").
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>MadnessBot provides an AI-powered automotive assistance service that includes:</p>
              <ul>
                <li>AI chatbot consultation for automotive problems</li>
                <li>Image analysis for vehicle diagnostics</li>
                <li>Parts and labor cost estimation</li>
                <li>Toolbox inventory management (Pro users)</li>
                <li>Technical service bulletin and recall information</li>
              </ul>
              <p>
                The Service is provided "as is" and is intended for informational purposes only. It should not replace professional mechanical advice or services.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h4>Account Creation</h4>
              <ul>
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the security of your account credentials</li>
                <li>You must be at least 13 years old to create an account</li>
                <li>One person may not maintain more than one account</li>
              </ul>

              <h4>Account Responsibilities</h4>
              <ul>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Subscription and Billing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h4>Free Tier</h4>
              <ul>
                <li>Limited to 5 queries per day</li>
                <li>Basic AI assistance and image analysis</li>
                <li>No conversation memory between sessions</li>
              </ul>

              <h4>Pro Subscription</h4>
              <ul>
                <li>$29 per month, billed monthly</li>
                <li>Unlimited queries and premium features</li>
                <li>Automatic renewal unless cancelled</li>
                <li>30-day money-back guarantee for first-time subscribers</li>
              </ul>

              <h4>Billing Terms</h4>
              <ul>
                <li>Payments are processed securely through Stripe</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Refunds are provided according to our refund policy</li>
                <li>Price changes will be communicated 30 days in advance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Acceptable Use</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h4>You agree NOT to use the Service to:</h4>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Upload malicious code or attempt to hack the system</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Share inappropriate, offensive, or illegal content</li>
                <li>Attempt to reverse engineer or copy our AI technology</li>
                <li>Use the service for commercial purposes without permission</li>
                <li>Create fake accounts or impersonate others</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h4>Our Content</h4>
              <ul>
                <li>The Service and its original content, features, and functionality are owned by MadnessBot</li>
                <li>Our trademarks, logos, and brand features are protected by intellectual property laws</li>
                <li>You may not use our intellectual property without written permission</li>
              </ul>

              <h4>Your Content</h4>
              <ul>
                <li>You retain ownership of content you submit to the Service</li>
                <li>You grant us a license to use your content to provide and improve the Service</li>
                <li>You represent that you have the right to submit any content you provide</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Disclaimers and Limitations</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h4>Service Disclaimers</h4>
              <ul>
                <li>MadnessBot is an AI assistant and should not replace professional mechanical advice</li>
                <li>We do not guarantee the accuracy of diagnoses or cost estimates</li>
                <li>Always consult with qualified mechanics for important repairs</li>
                <li>We are not responsible for any damage resulting from following our advice</li>
              </ul>

              <h4>Limitation of Liability</h4>
              <p>
                To the maximum extent permitted by law, MadnessBot shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h4>Termination by You</h4>
              <ul>
                <li>You may cancel your account at any time through your account settings</li>
                <li>Subscription cancellations take effect at the end of the current billing period</li>
                <li>You can request data export before account deletion</li>
              </ul>

              <h4>Termination by Us</h4>
              <ul>
                <li>We may suspend or terminate accounts that violate these Terms</li>
                <li>We may discontinue the Service with 30 days' notice</li>
                <li>We will provide refunds for unused subscription time in case of service discontinuation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use the Service. By using the Service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>
                These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <ul>
                <li>Email: legal@madnessbot.com</li>
                <li>Phone: +1 316 259 2508</li>
                <li>Address: MadnessBot Legal Team</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TermsPage

