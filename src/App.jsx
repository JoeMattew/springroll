import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MapSection from './components/MapSection'
import BestChoice from './components/BestChoice'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <MapSection />
      <BestChoice />
      <Footer />
    </div>
  )
}

export default App