import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Calendar, Users, FileText } from 'lucide-react'

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    reportCount: '',
    timeline: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData?.error || 'Unable to submit form. Please try again.')
      }

      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 10000)
    } catch (error) {
      console.error('Lead submission error:', error)
      const fallbackMessage = 'Something went wrong. Please try again or contact us at info@3stech.com.'
      let message = fallbackMessage

      if (error?.message?.includes('ENOTFOUND')) {
        message = 'Unable to reach the mail server (ENOTFOUND). Please check your internet connection or SMTP host settings.'
      } else if (error?.message?.includes('ETIMEDOUT')) {
        message = 'Connection to the mail server timed out. Please verify SMTP host, port, and firewall settings.'
      } else if (error?.message?.includes('EAUTH')) {
        message = 'SMTP authentication failed. Please verify your SMTP username and password.'
      } else if (error?.message?.includes('ECONNREFUSED')) {
        message = 'Mail server refused the connection. Please confirm SSL/TLS settings and port.'
      } else if (error?.message) {
        message = error.message
      }

      setErrorMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-navy via-purple to-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Start Your Migration Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get a complimentary migration assessment with a detailed roadmap, timeline, and budget estimate tailored to your Cognos environment.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <FileText className="text-cyan mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-bold mb-1">AI-Powered Analysis</h3>
                  <p className="text-gray-400">Automated inventory of reports, dependencies, and security models</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="text-cyan mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-bold mb-1">Custom Roadmap & Timeline</h3>
                  <p className="text-gray-400">Detailed migration plan with milestones and budget estimate</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="text-cyan mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white font-bold mb-1">Expert Consultation</h3>
                  <p className="text-gray-400">60-minute session with our senior BI migration architects</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
                >
                  <CheckCircle2 className="text-green-600" size={40} />
                </motion.div>
                <h3 className="text-2xl font-bold text-navy mb-4">Assessment Request Received!</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Thank you, {formData.name.split(' ')[0]}! Our migration specialists will review your information and contact you within 24 hours to schedule your complimentary assessment.
                </p>
                <div className="bg-cool-gray rounded-lg p-4 text-left">
                  <h4 className="font-bold text-navy mb-2">What happens next:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-cyan mr-2">1.</span>
                      <span>We'll email you a confirmation and calendar invite</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2">2.</span>
                      <span>Our team will review your Cognos environment details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2">3.</span>
                      <span>Schedule a 60-min consultation with our architects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan mr-2">4.</span>
                      <span>Receive your custom migration roadmap and estimate</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-navy mb-4">Request Your Free Assessment</h3>
                
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan focus:outline-none transition-colors"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Environment Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-semibold text-navy mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select industry</option>
                      <option value="financial">Financial Services</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="public">Public Sector</option>
                      <option value="technology">Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="reportCount" className="block text-sm font-semibold text-navy mb-2">
                      Approximate Report Count *
                    </label>
                    <select
                      id="reportCount"
                      name="reportCount"
                      required
                      value={formData.reportCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1-50 reports</option>
                      <option value="51-100">51-100 reports</option>
                      <option value="101-300">101-300 reports</option>
                      <option value="301-500">301-500 reports</option>
                      <option value="500+">500+ reports</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-navy mb-2">
                    Desired Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (within 1-2 months)</option>
                    <option value="quarter">This quarter (3 months)</option>
                    <option value="halfyear">Within 6 months</option>
                    <option value="nextyear">Next year</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about FM models, data sources, specific challenges, or any questions..."
                  />
                </div>

                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-gradient-accent text-white font-bold rounded-lg transition-transform shadow-glow flex items-center justify-center group ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Free Migration Assessment'}
                    <Send className={`ml-2 transition-transform ${
                      isSubmitting ? 'opacity-0' : 'group-hover:translate-x-1'
                    }`} size={20} />
                  </button>

                  <div className="mt-4 flex items-center border-t pt-4 border-gray-200">
                    <div className="bg-cyan/10 p-2 rounded-full mr-3">
                      <CheckCircle2 className="text-cyan" size={16} />
                    </div>
                    <p className="text-xs text-gray-600">
                      By submitting, you agree to our privacy policy. We'll contact you within 24 hours.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

