import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { CTA, Brand, Navbar } from './components'

const App = () => {
  return (
    <div className="App">
      <div className='greadient__bg'>
        <Navbar />
        <Header />
      </div>
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