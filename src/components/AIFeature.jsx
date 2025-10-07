import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Sparkles, Target, Shield } from 'lucide-react'

const AIFeature = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'Automated Analysis',
      description: 'AI scans your entire Cognos environment, identifying dependencies, data flows, and optimization opportunities in minutes.',
    },
    {
      icon: Sparkles,
      title: 'Smart Recommendations',
      description: 'Intelligent suggestions for Power BI architecture, DAX optimizations, and best practices tailored to your data.',
    },
    {
      icon: Target,
      title: 'Quality Assurance',
      description: 'Automated testing and validation ensure 100% data accuracy and functional parity with your legacy reports.',
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Predictive analytics identify potential migration risks before they become problems, ensuring smooth delivery.',
    },
  ]

  return (
    <section id="ai-feature" className="relative py-24 overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple via-navy to-purple" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random() * 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Pulsing AI Icon */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-flex items-center justify-center w-20 h-20 bg-cyan/20 rounded-full mb-6 backdrop-blur-sm border-2 border-cyan/50"
          >
            <Brain className="text-cyan" size={40} />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            AI-Powered Precision at Every Step
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness cutting-edge artificial intelligence to transform your migration from a risky manual process into a predictable, optimized journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-cyan/50 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple font-bold rounded-lg hover:scale-105 transition-transform shadow-xl"
          >
            Experience AI-Assisted Migration
            <Sparkles className="ml-2" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default AIFeature

