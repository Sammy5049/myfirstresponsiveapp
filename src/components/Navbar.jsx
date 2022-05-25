import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick (false)




  return (
    <div className='header'>
      <nav className='navbar'>
       <a href='/' className='logo'>
        <h1>Focus Graphics</h1>
       </a>

       <div className="hamburger" onClick={handleClick}>
 
        {click ? ( <FaTimes size={30} style={{color:'#ffffff'}} />) 
        : ( <FaBars size={30} style={{color:'#ffffff'}} />)}
       
       </div>

       <ul className={click ? 'nav-menu active' : 'nav-menu' }>
           <li className='nav-item'>
              <a href="/" onClick={closeMenu}>Home</a>
           </li>
            <li className='nav-item'>
              <a href="#About" onClick={closeMenu}>About</a>
           </li>
            <li className='nav-item'>
              <a href="#Testimonial" onClick={closeMenu}>Testimonial</a>
           </li>
            <li className='nav-item'>
              <a href="#Demo" onClick={closeMenu}>Demo</a>
           </li>

       </ul>

      </nav>


    </div>
  )
}

export default Navbar