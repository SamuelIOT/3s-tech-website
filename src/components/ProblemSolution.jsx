import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const ProblemSolution = () => {
  const problems = [
    'Complex dependencies and data lineage',
    'Legacy reporting structures',
    'Risk of data loss during migration',
    'Extended downtime and disruption',
  ]

  const solutions = [
    'Automated dependency mapping with AI',
    'Modern, optimized Power BI architecture',
    'Zero data loss guarantee',
    'Phased migration with minimal disruption',
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy mb-4">
            Why Migrate from Cognos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Legacy BI systems hold you back. Modern data demands modern solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-coral/10 to-coral/5 rounded-2xl p-8 border border-coral/20"
          >
            <div className="flex items-center mb-6">
              <AlertCircle className="text-coral mr-3" size={32} />
              <h3 className="text-2xl font-bold text-navy">The Challenge</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="inline-block w-2 h-2 bg-coral rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan/10 to-cyan/5 rounded-2xl p-8 border border-cyan/20"
          >
            <div className="flex items-center mb-6">
              <CheckCircle2 className="text-cyan mr-3" size={32} />
              <h3 className="text-2xl font-bold text-navy">Our Solution</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="text-cyan mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution

