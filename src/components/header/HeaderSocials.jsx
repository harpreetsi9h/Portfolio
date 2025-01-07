import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/harpreet-singh-285418b6/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/harpreetsi9h/" target='_blank'><FaGithub/></a>
        <a href="https://x.com/its_hsingh" target='_blank'><BsTwitterX/></a>
    </div>
  )
}

export default HeaderSocials