import React from 'react';
import logo from '../assets/nav-logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {

  const handleClick = () => {
    alert('Soon!!')
  }

  const openMenuInNewtab = () => {
    window.open(require('../assets/footers/menu.webp'), '_blank');
  }

  return (
    <nav className="navBar">
      <img src={logo} alt="logo" className="logo" />
      <ul className="menu">
        <li>
          <Link className='Link' to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className='Link' to="/booking">Reservations</Link>
        </li>
        <li>
          <Link className='Link' to='#' onClick={openMenuInNewtab}>Menu</Link>
        </li>
        <li> 
          <Link className='Link' to='#' onClick={handleClick}>Order Online</Link>
        </li>
        <li>
          <Link className='Link' to='#' onClick={handleClick}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}