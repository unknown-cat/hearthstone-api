import React from 'react';

import { Outlet, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '../../features/user/userSlice';

import HsLogo from '../../assets/hsLogo.png';

import s from './header.module.css';

const Header = () => {
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleClick = () => dispatch(logoutUser());

  const RenderGuest = () => (
    <>
      <Link to='/login' className={s.login}>
        {user.name ? <span className={s.glow}>Login</span> : 'Login'}
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
          {!user.guest && user.name && <RenderUser />}
          {user.guest && <RenderGuest />}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
