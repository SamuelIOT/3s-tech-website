import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ClipboardList, Palette, Code, CheckSquare, Wrench } from 'lucide-react'

const MigrationJourney = () => {
  const [expandedPhase, setExpandedPhase] = useState(null)

  const phases = [
    {
      id: 1,
      title: 'ANALYSIS',
      icon: Search,
      color: 'cyan',
      description: 'Cognos platform deep-dive',
      details: [
        'Complete inventory of existing Cognos reports and dashboards',
        'Data source identification and cataloging',
        'Security model and user permissions analysis',
        'Performance bottleneck assessment',
        'Custom code and extension review',
      ],
    },
    {
      id: 2,
      title: 'PLANNING',
      icon: ClipboardList,
      color: 'purple',
      description: 'Scope & milestones',
      details: [
        'Detailed migration roadmap creation',
        'Resource allocation and timeline planning',
        'Risk assessment and mitigation strategies',
        'Budget optimization and cost analysis',
        'Stakeholder alignment sessions',
      ],
    },
    {
      id: 3,
      title: 'DESIGN',
      icon: Palette,
      color: 'cyan',
      description: 'Power BI layouts',
      details: [
        'Modern UI/UX design for Power BI reports',
        'Information architecture optimization',
        'Branding and theme customization',
        'Mobile-responsive layout design',
        'Accessibility compliance review',
      ],
    },
    {
      id: 4,
      title: 'DEVELOPMENT',
      icon: Code,
      color: 'purple',
      description: 'Report building',
      details: [
        'Power BI environment setup and configuration',
        'Standard and paginated report development',
        'DAX optimization and calculated measures',
        'Data model restructuring',
        'Integration with existing data pipelines',
      ],
    },
    {
      id: 5,
      title: 'TESTING',
      icon: CheckSquare,
      color: 'cyan',
      description: 'UAT & validation',
      details: [
        'Comprehensive data validation testing',
        'User acceptance testing (UAT) coordination',
        'Performance and load testing',
        'Cross-browser and device compatibility',
        'Iterative feedback implementation',
      ],
    },
    {
      id: 6,
      title: 'MAINTENANCE',
      icon: Wrench,
      color: 'purple',
      description: 'Ongoing support',
      details: [
        '24/7 technical support and monitoring',
        'Continuous performance optimization',
        'Regular security updates and patches',
        'User training and documentation',
        'Feature enhancement roadmap',
      ],
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-cool-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy mb-4">
            The Migration Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic, AI-assisted approach to transforming your BI infrastructure
          </p>
        </motion.div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-purple to-cyan opacity-30" />
          
          <div className="grid grid-cols-6 gap-4">
            {phases.map((phase, index) => {
              const Icon = phase.icon
              const isExpanded = expandedPhase === phase.id
              
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    onClick={() => setExpandedPhase(isExpanded ? null : phase.id)}
                    className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 ${
                      isExpanded
                        ? phase.color === 'cyan'
                          ? 'border-cyan shadow-glow-cyan'
                          : 'border-purple shadow-glow'
                        : 'border-transparent'
                    }`}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      phase.color === 'cyan' ? 'bg-cyan/10' : 'bg-purple/10'
                    }`}>
                      <Icon
                        className={phase.color === 'cyan' ? 'text-cyan' : 'text-purple'}
                        size={32}
                      />
                    </div>
                    
                    <h3 className="text-lg font-bold text-navy mb-2 text-center">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {phase.description}
                    </p>

                    <div className="text-center">
                      <span className={`text-xs font-semibold ${
                        phase.color === 'cyan' ? 'text-cyan' : 'text-purple'
                      }`}>
                        {isExpanded ? 'Click to collapse' : 'Click to expand'}
                      </span>
                    </div>
                  </motion.div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-80 mt-4 bg-white rounded-xl p-6 shadow-2xl border-2 border-cyan z-20"
                    >
                      <h4 className="font-bold text-navy mb-4">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 ${
                              phase.color === 'cyan' ? 'bg-cyan' : 'bg-purple'
                            }`} />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile/Tablet Accordion View */}
        <div className="lg:hidden space-y-4">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            const isExpanded = expandedPhase === phase.id
            
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  onClick={() => setExpandedPhase(isExpanded ? null : phase.id)}
                  className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer border-2 transition-all ${
                    isExpanded
                      ? phase.color === 'cyan'
                        ? 'border-cyan'
                        : 'border-purple'
                      : 'border-transparent'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      phase.color === 'cyan' ? 'bg-cyan/10' : 'bg-purple/10'
                    }`}>
                      <Icon
                        className={phase.color === 'cyan' ? 'text-cyan' : 'text-purple'}
                        size={24}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy">{phase.title}</h3>
                      <p className="text-sm text-gray-600">{phase.description}</p>
                    </div>
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <h4 className="font-bold text-navy mb-3">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 ${
                              phase.color === 'cyan' ? 'bg-cyan' : 'bg-purple'
                            }`} />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MigrationJourney

