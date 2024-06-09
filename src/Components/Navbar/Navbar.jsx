import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll' // Import Link from react-scroll
import './Navbar.css'
import logo from '../../Asset/logo.png'
import menu_icon from '../../Asset/menu-icon.png'

const Navbar = () => {

  const [sticky,setSticky]=useState(false);

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY>50?setSticky(true):setSticky(false);
      });
  },[])

  const [mobileMenu,setmobileMenu]=useState(false);

  const toggleMenu=()=>{
    mobileMenu?setmobileMenu(false):setmobileMenu(true)
  }

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt='' className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programe</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}></img>
    </nav>    
  )
}

export default Navbar
