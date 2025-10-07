import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp, Globe, Shield, Zap, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '500+', label: 'Reports Migrated', icon: TrendingUp },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Success Rate', icon: Award },
    { number: '24/7', label: 'Support', icon: Shield },
  ]

  const values = [
    {
      icon: Target,
      title: 'Precision & Excellence',
      description: 'We deliver migrations with 100% data accuracy and meticulous attention to detail.',
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We work closely with you every step of the way.',
    },
    {
      icon: Zap,
      title: 'Innovation & Speed',
      description: 'Leveraging AI and automation to deliver faster results without compromising quality.',
    },
    {
      icon: Heart,
      title: 'Integrity & Trust',
      description: 'We build lasting relationships through transparency, honesty, and reliable service.',
    },
  ]

  const team = [
    {
      role: 'BI Migration Experts',
      description: 'Certified professionals with 10+ years of experience in Cognos and Power BI.',
    },
    {
      role: 'AI/ML Engineers',
      description: 'Cutting-edge specialists who develop intelligent automation for migration processes.',
    },
    {
      role: 'Project Managers',
      description: 'Dedicated coordinators ensuring your project stays on track and within budget.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-cool-gray via-white to-cool-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1a237e 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
            About <span className="text-gradient">3S Tech Inc.</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are the leading specialists in Cognos to Power BI migration, combining deep technical expertise with innovative AI-powered solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-cyan mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-navy mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Globe className="w-10 h-10 text-cyan mr-4" />
              <h3 className="text-3xl font-bold text-navy">Our Story</h3>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Founded by industry veterans with decades of combined experience in Business Intelligence, 
                3S Tech Inc. was born out of a simple observation: organizations were struggling with complex, 
                time-consuming, and risky Cognos to Power BI migrations.
              </p>
              <p>
                We saw companies spending months on manual migration processes, often resulting in data 
                inconsistencies, broken reports, and frustrated stakeholders. We knew there had to be a better way.
              </p>
              <p>
                That's when we developed our proprietary AI-powered migration framework—a revolutionary approach 
                that combines automated analysis, intelligent mapping, and rigorous validation to deliver migrations 
                that are <strong>30% faster</strong> and <strong>100% accurate</strong>.
              </p>
              <p>
                Today, we're proud to be the trusted partner for organizations across healthcare, finance, 
                manufacturing, and retail sectors, helping them modernize their BI infrastructure with confidence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-navy text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-start">
                  <div className="bg-cyan/10 rounded-lg p-3 mr-4">
                    <value.icon className="w-8 h-8 text-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-navy text-center mb-12">Expert Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-navy to-purple rounded-xl p-8 text-white hover:scale-105 transition-transform"
              >
                <Users className="w-12 h-12 mb-4 text-cyan" />
                <h4 className="text-xl font-bold mb-3">{member.role}</h4>
                <p className="text-gray-300 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-navy via-purple to-navy rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Why Organizations Choose 3S Tech</h3>
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div className="flex items-start">
              <div className="bg-cyan rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <strong>Proven Methodology:</strong> Our 5-phase migration framework has successfully delivered 500+ migrations.
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cyan rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <strong>AI-Powered Automation:</strong> Reduce manual effort by 70% with our intelligent migration tools.
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cyan rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <strong>100% Data Accuracy:</strong> Our rigorous validation process ensures zero data loss.
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cyan rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <strong>End-to-End Support:</strong> From planning to training, we're with you every step.
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cyan rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <strong>Industry Expertise:</strong> Specialized knowledge across healthcare, finance, retail, and more.
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-cyan rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <strong>Competitive Pricing:</strong> Transparent, fixed-price packages with no hidden costs.
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-navy mb-4">Ready to Transform Your BI Infrastructure?</h3>
          <p className="text-gray-600 mb-8 text-lg">
            Let's discuss how we can help your organization migrate to Power BI with confidence.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-accent text-white font-bold rounded-lg hover:scale-105 transition-transform shadow-glow text-lg"
          >
            Schedule a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About

