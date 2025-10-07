import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-purple to-navy relative overflow-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan rounded-full opacity-30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: [null, Math.random() * window.innerWidth],
                y: [null, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
          >
            Start Your <span className="text-gradient bg-gradient-to-r from-cyan to-purple">Migration Journey</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Complete the form below to request your free Cognos to Power BI migration assessment
          </motion.p>
        </div>
      </section>

      {/* Main Content with Contact Form */}
      <CTASection />
      
      <Footer />
    </div>
  )
}

export default GetStarted
