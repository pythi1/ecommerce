import React from 'react';
import "./hero.css";
import Hand from "../Assets/hero_hand1.png";
import hero_image from "../Assets/hero_image.jpg";
import ArrowIcon from '@mui/icons-material/DoubleArrowOutlined';


const Hero = () => {
    return (
        <div className='hero' >
            <div className='hero-left' >

                <h2>New Arrival</h2>

                <div>
                    <div className='hero-hand-icon' >
                        <p>New</p>
                        <img src={Hand} alt="hath hai bhai" />

                    </div>

                    <p>Collection</p>
                    <p>for everyone</p>

                </div>

                <div className='hero-latest-button' >
                    <div>Latest Collection</div>
                    <ArrowIcon />

                </div>

            </div>

            <div className='hero-right' >
                <img src={hero_image} alt="hero bahi" />



            </div>

        </div>
    )
}

export default Hero;