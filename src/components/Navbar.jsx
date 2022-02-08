import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return <nav className='nav'>
  <div className='nav-case'>
    
  <Link className='home-link' to="/"> <p>/marjica_codes</p></Link>
  <div className='other-links'>
   <Link className='about-link' to ="/about"><p>/about</p></Link>
   <Link className='portfolio-link'to= "/portfolio"><p>/portfolio</p></Link>
   <Link className='contact-link' to = "/contact"><p>/contact</p></Link>
   </div>
   
  </div>
  </nav>
}
