import React from 'react'
import './possibility.css'

// Assets
import possibilitiesImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <section id="possibilities" className="section__padding" data-aos="fade-up">
      <div className="wrapper">
        <div className="gpt3__possibilities">
          <div className="gpt3__possibilities-image">
            <img src={possibilitiesImage} alt="possibilities" />
          </div>
          <div className="gpt3__possibilities-content">
            <a href="#">Request Early Access to Get Started</a>
            <h3 className="gradient__text">The possibilities are beyond your imagination</h3>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <a href="#">Request Early Access to Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Possibility