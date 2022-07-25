import React, { useContext } from 'react';

import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/userContext';

import HsLogo from '../../assets/hsLogo.png';

import s from './header.module.css';

const Header = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleClick = () => {
    setUser((prevState) => {
      return {
        ...prevState,
        guest: true,
      };
    });
    setIsLoggedIn(false);
  };

  const RenderGuest = () => (
    <>
      <Link to='/login' className={s.login}>
        {user && !isLoggedIn ? <span className={s.glow}>Login</span> : 'Login'}
      </Link>
      <Link to='/register'>Register</Link>
    </>
  );

  const RenderUser = () => (
    <>
      <h2 to='/login' className={s.login}>
        Hello <span className={s.name}>{user?.name}</span>!
      </h2>
      <Link to='/' className={s.login} onClick={handleClick}>
        logout
      </Link>
    </>
  );

  return (
    <>
      <header className={s.section}>
        <nav className={s.navigation}>
          <Link to='/' className={s.logo}>
            <img src={HsLogo} alt='haerthstone site logo' />
          </Link>
          {isLoggedIn && user && <RenderUser />}
          {!isLoggedIn && <RenderGuest />}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
