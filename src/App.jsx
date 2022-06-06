import React from 'react'
import Features from './components/Features'
import Home from './components/Home'
import HomeImages from './components/HomeImages'
import Pricing from './components/Pricing'
import Services from './components/Services'

const App = () => {
  return (
    <div>
      <Home />
      <HomeImages />
      <Features />
      <Services />
      <Pricing />
    </div>
  )
}

export default App