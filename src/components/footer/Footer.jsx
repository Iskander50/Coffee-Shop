import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>

<div className='register'>
<h2> Never miss latest Updates!</h2>

<textarea name="" id="" cols="20" rows="5" placeholder='Write Your Comments'></textarea>
<input type="email" placeholder='email' />
<button className='btn'>Submit</button>

</div>
<div className='final'>
<p>Site Was Made By Handsome Man 2023</p>

      <div className='social-media'>
   <a href='https://www.instagram.com/'><FaInstagram /></a>
   <a href='https://web.telegram.org/k/'><FaTelegramPlane /></a>
   <a href='https://www.facebook.com/'><FaFacebook /></a>
      </div>
      </div>


    </div>
  )
}

export default Footer