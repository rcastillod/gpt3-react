import React from 'react'

// Main style
import './App.css'

// Components
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { CTA, Brand } from './components'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App