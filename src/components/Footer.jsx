import React from 'react'
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react'

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
                <a href="#about" className="text-gray-400 hover:text-cyan transition-colors">
                  About
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
                <a href="mailto:3stech.inc@gmail.com" className="text-gray-400 hover:text-cyan transition-colors">
                  3stech.inc@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="text-cyan mr-2 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  Ottawa, Ontario<br />
                  K2C 1R4, Canada
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm mb-1">
                © {new Date().getFullYear()} 3S Tech Inc. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                IBM and Cognos are trademarks of IBM Corporation. Microsoft and Power BI are trademarks of Microsoft Corporation.
              </p>
            </div>
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

