import { Link } from 'react-router-dom'
import { Wrench, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold madnessbot-logo">
                MadnessBot
              </span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Your AI Master Mechanic available 24/7. Get expert automotive advice, 
              diagnose problems, and manage your toolbox with AI-powered precision.
            </p>
            <p className="text-slate-400 text-sm italic">
              "Every bolt counts and every turn matters."
            </p>
            <p className="text-slate-400 text-sm">
              Fueled by grease, grit, and gear wisdom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-slate-300 hover:text-white transition-colors">
                  Chat with Madness
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-slate-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <a 
                  href="tel:+16282826142" 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  +1 (628) 282-6142
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <a 
                  href="mailto:snaponmadness@gmail.com" 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  snaponmadness@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                <span className="text-slate-300">
                  Pacific Standard Time<br />
                  Mon-Fri: 9AM-6PM<br />
                  Sat: 10AM-4PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 MadnessBot. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

