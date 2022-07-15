import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import HsLogo from '../../assets/hsLogo.png';

import './header.css';

const Header = () => {
  return (
    <>
      <header className='section header'>
        <nav className='header-navigation'>
          <Link to='/' className='navigation__logo'>
            <img src={HsLogo} alt='haerthstone site logo' />
          </Link>
          <Link to='/login' className='navigation__login'>
            Login
          </Link>
          <Link to='/register' className='navigation__register'>
            Register
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
