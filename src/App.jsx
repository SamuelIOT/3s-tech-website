import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ProblemSolution from './components/ProblemSolution'
import MigrationJourney from './components/MigrationJourney'
import AIFeature from './components/AIFeature'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <MigrationJourney />
      <AIFeature />
      <CaseStudies />
      <About />
      <CTASection />
      <Footer />
      <AIChatbot />
    </div>
  )
}

export default App

