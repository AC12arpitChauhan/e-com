import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated with the latest trends and promotions</p>
      <div className='newsletter-form'>
        <input type="email" placeholder='Enter your email address'/>
        <button>Subscribe</button>
      </div>
      <p className='newsletter-privacy'>
        By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
      </p>
    </div>
  )
}

export default NewsLetter
