import React from 'react';
import "./offers.css"
import Exclusive from "../Assets/exclusive.jpg"

const Offers = () => {
  return (
    <div className='offers' >

        <div className='offers-left' >
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER</p>
            <button>Check Now</button>

        </div>

        <div className='offers-right' >
            <img src={Exclusive} alt='exclusive' />

        </div>

    </div>
  )
}

export default Offers;