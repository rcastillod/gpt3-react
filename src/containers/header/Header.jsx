import React from 'react'
import './header.css'

import { Navbar } from '../../components'

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
      </div>
    </header>
  )
}

export default Header