import React from 'react'
import './article.css'

const Article = ({ imageUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="gpt__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <a href="#">Read full article</a>
      </div>
    </div>
  )
}

export default Article