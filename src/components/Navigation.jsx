import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'AI Assistant', href: '#ai-feature' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">3S</span>
              </div>
              <span className={`font-display text-xl font-bold ${isScrolled ? 'text-navy' : 'text-white'}`}>
                3S Tech Inc.
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative font-semibold transition-colors group ${
                  isScrolled ? 'text-gray-700 hover:text-navy' : 'text-white hover:text-cyan'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-glow"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-navy' : 'text-white'} size={28} />
            ) : (
              <Menu className={isScrolled ? 'text-navy' : 'text-white'} size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 bg-white rounded-lg shadow-xl mt-2"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-cool-gray transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mx-4 mt-2 px-6 py-2.5 bg-gradient-accent text-white text-center font-semibold rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation

