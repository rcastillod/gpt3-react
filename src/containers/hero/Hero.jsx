import React from 'react'
import './hero.css'

// Assets
import aiImage from '../../assets/ai.png';
import people from '../../assets/people.png';

const Hero = () => {
  return (
    <div id="home" class="hero gradient__bg">
      <div className="wrapper">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div className="hero__content-title">
              <h1 className="gradient__text gradient__text--animation">Let’s Build Something amazing with GPT-3 OpenAI</h1>
            </div>
            <div className="hero__content-description">
              <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            </div>
            <div className="hero__content-form">
              <form action="" method="post">
                <input type="email" name="email" placeholder="Your Email Address" />
                <button type="submit">Get Started</button>
              </form>
            </div>
            <div className="hero__content-people">
              <img src={people} alt="People" /> 
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
          <div className="hero__content-image">
            <img src={aiImage} alt="AI Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero