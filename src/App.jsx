import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MapSection from './components/MapSection'
import BestChoice from './components/BestChoice'
import Footer from './components/Footer'
import Order from './components/Order'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <MapSection />
      <BestChoice />
      <Order />
      <Footer />
    </div>
  )
}

export default App