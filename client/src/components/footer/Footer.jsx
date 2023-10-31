import React from 'react';
import "./footer.css";
import instagram_logo from "../Assets/instagram-logo.jpg";
import whatsapp_logo from "../Assets/whatsapp-logo.jpg";
import pinterest_logo from "../Assets/pinterest-logo.png";
import logo from "../Assets/logo.jpg";

const Footer = () => {
  return (
    <div className='footer' >
        <div className='footer-logo' >
            <img src={logo}  alt='footer-logo'  />
            <p>SHOOPER</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
            
        </ul>

        <div className='footer-social-icon' >
            <div className='footer-icons-container' >
                <img src={instagram_logo} alt='insta' />

            </div>

            <div className='footer-icons-container' >
                <img src={whatsapp_logo} alt='whatsapp' />

            </div>

            <div className='footer-icons-container' >
                <img src={pinterest_logo} alt='pinterest' />

            </div>

        </div>

        <div className='footer-copyright' >
            <hr />
            <p>copyright @2023 - All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer;