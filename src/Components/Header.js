import React from 'react';
import img from '../Stylesheets/logo.png';

const Header = () => (
  <header className='header-logo'>
    <img className='header-logo-img' alt='logo Rick and Morty' src={img}></img>
  </header>
);

export default Header;
