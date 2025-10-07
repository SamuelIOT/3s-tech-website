import React from 'react'
import { motion } from 'framer-motion'
import { Database, Zap, BarChart3 } from 'lucide-react'

const DataFlowVisualization = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Cognos (Left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute left-0 top-1/2 -translate-y-1/2"
      >
        <div className="bg-coral/20 border-2 border-coral rounded-2xl p-6 backdrop-blur-sm">
          <Database className="text-coral" size={48} />
          <div className="mt-3 text-coral font-bold">Cognos</div>
        </div>
      </motion.div>

      {/* 3S Tech (Center) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="relative z-10"
      >
        <div className="bg-gradient-accent rounded-2xl p-8 shadow-glow">
          <Zap className="text-white mx-auto" size={56} />
          <div className="mt-3 text-white font-bold text-lg">3S Tech</div>
          <div className="text-cyan text-sm">AI-Powered</div>
        </div>
        
        {/* Pulsing Rings */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 border-4 border-purple rounded-2xl"
        />
      </motion.div>

      {/* Power BI (Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2"
      >
        <div className="bg-cyan/20 border-2 border-cyan rounded-2xl p-6 backdrop-blur-sm">
          <BarChart3 className="text-cyan" size={48} />
          <div className="mt-3 text-cyan font-bold">Power BI</div>
        </div>
      </motion.div>

      {/* Animated Flow Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <motion.path
          d="M 150 192 Q 240 192, 330 192"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.path
          d="M 370 192 Q 460 192, 550 192"
          stroke="url(#gradient2)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0" />
            <stop offset="50%" stopColor="#6E3AFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#6E3AFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6E3AFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D9FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Data Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan rounded-full"
          initial={{ x: 150, y: 192 }}
          animate={{ x: 550, y: 192 + (Math.random() - 0.5) * 40 }}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />
      ))}
    </div>
  )
}

export default DataFlowVisualization

