import React from 'react'
import { motion } from 'framer-motion'

const TrustBar = () => {
  const stats = [
    { value: '50+', label: 'Enterprise Clients' },
    { value: '10K+', label: 'Reports Transformed' },
    { value: '99.9%', label: 'Data Accuracy' },
    { value: '24/7', label: 'Support Available' },
  ]

  return (
    <section className="bg-cool-gray py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Trusted by Leading Organizations
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient bg-gradient-to-r from-navy to-cyan bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar

