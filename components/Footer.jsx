import React from 'react';
import { AiFillInstagram, AiFillLike, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Sunny Helmets All rights reserverd</p>
      <p className="icons">
        <a href='https://youtu.be/dQw4w9WgXcQ'>
        <AiFillInstagram />
        <AiOutlineTwitter/>
        </a>
          
      </p>
    </div>
  )
}

export default Footer