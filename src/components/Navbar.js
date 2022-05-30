import React from 'react'
import logo from '../img/logo.webp';

function Navbar() {
  return (
    <nav>
    <div className="logo">
  <img src={logo} width="100%" height="100%" />
  </div>
  <div className="links">
  <a>OUR COMPANY</a>
  <a>LOCATIONS</a>
  <a>CONTACT</a>
  </div>
  </nav>
    )
}

export default Navbar