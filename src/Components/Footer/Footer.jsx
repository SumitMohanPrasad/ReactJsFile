import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
     <div className="footer-container">
       <hr/>
      <div className="footer">
      <div className="social-links">
        <a href="https://github.com/SumitMohanPrasad" target="_blank"><img src={Github} alt="github" /></a>
        <a href="#"><img src={Instagram} alt="instagram" /></a>
        <a href="https://www.linkedin.com/in/sumitmohanprasad" target="_blank"> <img src={Linkedin} alt="linkedin" /></a>
    </div>
    <div className="logo-f">
    <img src={logo} alt="" />   
    </div>
     </div>
    </div>
    
  )
}

export default Footer
