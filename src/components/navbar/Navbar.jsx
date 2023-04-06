import React, { useState } from 'react'
// Icons
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// Style
import './navbar.css'
// Assets
import logo from '../../assets/logo.svg'

// Menu component
const Menu = () => (
  <>
    <a href="#home">Home</a>
    <a href="#whatgpt3">What is GPT3?</a>
    <a href="#possibility">Open AI</a>
    <a href="#features">Case Studies</a>
    <a href="#blog">Library</a>
  </>
)

const Navbar = () => {

  // Menu toggle
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <a href="#home"><img src={logo} alt="Logo" /></a>
        </div>
        <nav className='gpt3__navbar-links_container'>
          <Menu />
        </nav>
        <div className="gpt3__navbar-sign">
          <a href="#">Sign In</a>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu_toggle">
          <button onClick={() => { setToggleMenu(!toggleMenu) }}>
            {
              toggleMenu 
              ?
              <RiCloseLine 
                color="#fff" 
                size={27} 
              />
              :
              <RiMenu3Line 
                color="#fff" 
                size={27} 
              />
            }
          </button>
        </div>
        {
          toggleMenu && (
            <div className="gpt3__navbar-mobile_container slide-bottom">
              <nav className="gpt3__navbar-mobile_links-container">
                <Menu />
              </nav>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar