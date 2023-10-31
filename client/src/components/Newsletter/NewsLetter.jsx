import React from 'react'
import "./newsletter.css";

const NewsLetter = () => {
  return (
    <div className='newsletter' >
      <h1>Get Exlusive offer on your E-mail</h1>
      <p>Subscribe to our newsletter and stay updated.</p>

      <div>
        <input type='email' placeholder='Enter your e-mail.' />
        <button>Subscribe</button>
      </div>


    </div>
  )
}

export default NewsLetter;