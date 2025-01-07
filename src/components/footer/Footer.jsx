import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Harpreet Singh - Full Stack Developer</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
          <a href="https://www.facebook.com/harpreetsi9h/" target='_blank'><FaFacebookF/></a>
          <a href="https://www.linkedin.com/in/harpreet-singh-285418b6/" target='_blank'><BsLinkedin/></a>
          <a href="https://github.com/harpreetsi9h/" target='_blank'><FaGithub/></a>
          <a href="https://x.com/its_hsingh" target='_blank'><BsTwitterX/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Harpreet Singh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer