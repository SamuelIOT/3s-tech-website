import React from 'react'
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">3S</span>
              </div>
              <span className="font-display text-xl font-bold">3S Tech Inc.</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for seamless Cognos to Power BI migrations. 
              Intelligence, migrated & amplified.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan/20 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan/20 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#ai-feature" className="text-gray-400 hover:text-cyan transition-colors">
                  AI Assistant
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-cyan transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-cyan mr-2 flex-shrink-0 mt-1" size={18} />
                <a href="mailto:info@3stech.com" className="text-gray-400 hover:text-cyan transition-colors">
                  info@3stech.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="text-cyan mr-2 flex-shrink-0 mt-1" size={18} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-cyan transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="text-cyan mr-2 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  123 Business Ave<br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} 3S Tech Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

