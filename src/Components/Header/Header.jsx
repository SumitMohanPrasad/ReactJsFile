import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
    <img src={Logo} alt="logo" className="logo" />
    <ul className="header-menu">
      <a href="#Home" ><li>Home</li></a>
      <a href="#charges" ><li>Plans</li></a>
      <a href="#review" ><li>Testimonials</li></a>
    </ul>
    </div>
  )
}

export default Header
