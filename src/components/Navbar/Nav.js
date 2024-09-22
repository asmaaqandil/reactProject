import React, { useState } from 'react'
import './Nav.css'
import logo from '../../assets/img5.jpg'
import program20 from '../../assets/program20.png'

const Nav = () => {

  const [mobileMenu, setMobileMenu ] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className='container'>
     <img src={logo} alt='' className='logo' />
     <ul className={mobileMenu?'' :'hide-mobile-menu'}>
      <li><a href='#hero'> Home</a></li>
      <li><a href='#programs'> programs</a></li>
      <li><a href='#about'>about</a></li>
      <li><a href='#reviews'> reviews</a> </li>
      <li><a href='#contact'> contact</a>  </li>
      <li> <button className='btn'>contact</button></li>
     </ul>
     <img src={program20} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Nav
