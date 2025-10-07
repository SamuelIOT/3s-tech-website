import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Building2, Quote } from 'lucide-react'

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const caseStudies = [
    {
      industry: 'Finance',
      logo: 'FinCorp',
      stat1: { value: '750+', label: 'Reports Migrated' },
      stat2: { value: '45%', label: 'Cost Reduction' },
      stat3: { value: '3 months', label: 'Delivery Time' },
      quote: 'The AI-assisted migration approach saved us countless hours and eliminated the guesswork. Our Power BI environment is now faster, more maintainable, and our users love the modern interface.',
      author: 'Director of Analytics',
      color: 'cyan',
    },
    {
      industry: 'Healthcare',
      logo: 'MedSystem',
      stat1: { value: '500+', label: 'Reports Converted' },
      stat2: { value: '60%', label: 'Performance Gain' },
      stat3: { value: '2 months', label: 'Go-Live Time' },
      quote: 'Data accuracy was our top concern. 3S Tech\'s rigorous testing and validation gave us confidence. We achieved 100% data parity with zero downtime during cutover.',
      author: 'Chief Data Officer',
      color: 'purple',
    },
    {
      industry: 'Retail',
      logo: 'RetailMax',
      stat1: { value: '1200+', label: 'Dashboards Built' },
      stat2: { value: '35%', label: 'Faster Insights' },
      stat3: { value: '4 months', label: 'Full Migration' },
      quote: 'The phased approach allowed us to migrate without disrupting our business operations. The training and support made adoption seamless across our 50+ locations.',
      author: 'VP of Business Intelligence',
      color: 'cyan',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentStudy = caseStudies[currentIndex]

  return (
    <section id="case-studies" className="py-24 bg-cool-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real migrations, measurable results across industries
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Left Column - Stats */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      currentStudy.color === 'cyan' ? 'bg-cyan/10' : 'bg-purple/10'
                    }`}>
                      <Building2 className={currentStudy.color === 'cyan' ? 'text-cyan' : 'text-purple'} size={24} />
                    </div>
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                        currentStudy.color === 'cyan' ? 'bg-cyan/10 text-cyan' : 'bg-purple/10 text-purple'
                      }`}>
                        {currentStudy.industry}
                      </div>
                      <h3 className="text-2xl font-bold text-navy">{currentStudy.logo}</h3>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div className="border-l-4 border-cyan pl-6">
                      <div className="text-4xl font-bold text-navy">{currentStudy.stat1.value}</div>
                      <div className="text-gray-600">{currentStudy.stat1.label}</div>
                    </div>
                    <div className="border-l-4 border-purple pl-6">
                      <div className="text-4xl font-bold text-navy">{currentStudy.stat2.value}</div>
                      <div className="text-gray-600">{currentStudy.stat2.label}</div>
                    </div>
                    <div className="border-l-4 border-cyan pl-6">
                      <div className="text-4xl font-bold text-navy">{currentStudy.stat3.value}</div>
                      <div className="text-gray-600">{currentStudy.stat3.label}</div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Testimonial */}
                <div className="flex flex-col justify-center">
                  <Quote className="text-purple/20 mb-4" size={48} />
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "{currentStudy.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full mr-4" />
                    <div>
                      <div className="font-bold text-navy">{currentStudy.author}</div>
                      <div className="text-sm text-gray-600">{currentStudy.logo}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
            >
              <ChevronLeft className="text-navy group-hover:text-cyan transition-colors" size={24} />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-cyan w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
            >
              <ChevronRight className="text-navy group-hover:text-cyan transition-colors" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

