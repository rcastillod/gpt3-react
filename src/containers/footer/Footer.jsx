import React from 'react'
import './footer.css'

// Assets
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="gpt3__footer section__padding">
      <div className="wrapper">
        <div className='section__padding'>
          
          <div className="gpt3__footer-heading">
            <h2 className='gradient__text'>Do you want to step in to the future before others</h2>
          </div>
          
          <div className="gpt3__footer-button">
            <a href="#">Request Early Access</a>
          </div>
          
          <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
              <img src={logo} alt="GPT3" />
              <div className="gpt3__footer-links_copyright">
                <p>Crechterwoord K12 182 DK <br></br> Alknjkcb, All Rights Reserved</p>
              </div>
            </div>
            <div className="gpt3__footer-links_list">
              <h5>Links</h5>
              <nav className="gpt3__footer-links_list-nav">
                <a href="#">Overons</a>
                <a href="#">Social Media</a>
                <a href="#">Counters</a>
                <a href="#">Contact</a>
              </nav>
            </div>
            <div className="gpt3__footer-links_list">
              <h5>Company</h5>
              <nav className="gpt3__footer-links_list-nav">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact</a>
              </nav>
            </div>
            <div className="gpt3__footer-links_list">
              <h5>Get in Touch</h5>
              <nav className="gpt3__footer-links_list-nav">
                <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
                <a href="#">085-132567</a>
                <a href="#">info@payme.net</a>
              </nav>
            </div>
          </div>

          <div className="gpt3__footer-copyright">
            <p>© 2021 GPT-3. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer