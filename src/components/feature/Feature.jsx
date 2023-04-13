import React from 'react'
import './feature.css'

const Feature = ({layout, title, text}) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h4>{title}</h4>
      </div>
      <div className="gpt3__features-container__feature-text">
        {text}
      </div>
    </div>
  )
}

export default Feature