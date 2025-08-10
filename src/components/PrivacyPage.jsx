import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield } from 'lucide-react'

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>
                MadnessBot ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI automotive assistant service.
              </p>
              <p>
                We adhere to the California Consumer Privacy Act (CCPA) and do not collect personal information about our users beyond what is necessary to provide our services.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h4>Account Information</h4>
              <ul>
                <li>Email address (for account creation and communication)</li>
                <li>Name (for personalization)</li>
                <li>Password (encrypted and stored securely)</li>
                <li>Subscription status and billing information</li>
              </ul>

              <h4>Usage Information</h4>
              <ul>
                <li>Chat conversations with our AI assistant</li>
                <li>Images uploaded for analysis (temporarily stored)</li>
                <li>Usage statistics and feature interactions</li>
                <li>Device information and browser type</li>
              </ul>

              <h4>Toolbox Data (Pro Users)</h4>
              <ul>
                <li>Tool inventory information</li>
                <li>Maintenance records and notes</li>
                <li>Custom categories and organization preferences</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <ul>
                <li>Provide and improve our AI automotive assistance services</li>
                <li>Maintain and enhance conversation quality and accuracy</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important service updates and notifications</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Analyze usage patterns to improve our services</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Data Retention and Storage</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <h4>Conversation Data</h4>
              <ul>
                <li>Free users: Conversations are deleted when the chat session ends</li>
                <li>Pro users: Conversations are stored for the duration of your subscription plus 30 days</li>
              </ul>

              <h4>Images</h4>
              <ul>
                <li>Uploaded images are temporarily stored for analysis</li>
                <li>Images are automatically deleted after a few hours</li>
                <li>We do not permanently store or use images for training</li>
              </ul>

              <h4>Account Data</h4>
              <ul>
                <li>Account information is retained while your account is active</li>
                <li>After account deletion, data is permanently removed within 30 days</li>
                <li>Billing records may be retained longer for legal compliance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our platform (payment processing, hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Safety:</strong> To protect the rights, property, or safety of MadnessBot, our users, or others</li>
                <li><strong>Business Transfer:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>Under the CCPA and other privacy laws, you have the right to:</p>
              <ul>
                <li>Access the personal information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of the sale of personal information (we don't sell data)</li>
                <li>Receive a copy of your data in a portable format</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>
              <p>To exercise these rights, contact us at privacy@madnessbot.com or through your account settings.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>We implement appropriate technical and organizational measures to protect your information:</p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure payment processing through Stripe</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Maintain your login session</li>
                <li>Remember your preferences</li>
                <li>Analyze website usage and performance</li>
                <li>Provide personalized experiences</li>
              </ul>
              <p>You can control cookies through your browser settings, but some features may not work properly if cookies are disabled.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. For significant changes, we may also send you an email notification.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul>
                <li>Email: privacy@madnessbot.com</li>
                <li>Phone: +1 316 259 2508</li>
                <li>Address: MadnessBot Privacy Team</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage

