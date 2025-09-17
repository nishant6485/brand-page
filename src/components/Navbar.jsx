import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="container navbar">
      <div className="logo">
        <img src="public/images/brand_logo.png" alt="Brand Logo" />
      </div>


      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#">MENU</a></li>
        <li><a href="#">CONTACT</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">LOCATION</a></li>
      </ul>

      <button className="login-btn">LogIn</button>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  )
}

export default Navbar
