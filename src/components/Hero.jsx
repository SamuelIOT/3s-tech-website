import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import DataFlowVisualization from './DataFlowVisualization'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy to-cyan pt-20">
      {/* Animated Background Particles */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-purple/20 px-4 py-2 rounded-full mb-6 border border-purple/30"
            >
              <Sparkles className="text-cyan" size={20} />
              <span className="text-cyan font-semibold">AI-Powered Migration</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              Migrate from Cognos to{' '}
              <span className="text-gradient bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                Power BI
              </span>{' '}
              with Confidence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              End-to-end BI migration powered by AI-assisted precision. We analyze every dependency, automate lineage mapping, and deliver a zero data loss guarantee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-accent text-white font-bold rounded-lg hover:scale-105 transition-all shadow-glow"
              >
                Get Migration Assessment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan text-cyan font-bold rounded-lg hover:bg-cyan hover:text-navy transition-all"
              >
                View Our Process
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-cyan/30"
            >
              <div>
                <div className="text-3xl font-bold text-cyan">AI</div>
                <div className="text-sm text-gray-400">Powered Process</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan">100%</div>
                <div className="text-sm text-gray-400">Data Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DataFlowVisualization />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default Hero

