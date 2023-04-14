import React from 'react'
import './blog.css'
import { Article } from '../../components'

// Assets
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <section id="blog" className="section__padding">
      <div className="wrapper">
        <div className="gpt3__blog section__padding">
          <div className="gpt3__blog-heading">
            <h2 className='gradient__text'>
              A lot is happening, <br></br> We are blogging about it.</h2>
          </div>
          <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_left">
              <Article imageUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
            <div className="gpt3__blog-container_right">
              <Article imageUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
              <Article imageUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
              <Article imageUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
              <Article imageUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog