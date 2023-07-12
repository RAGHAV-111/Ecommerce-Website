import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import loginContext from '../store/login-context';
import cartContext from '../store/cart-Context';

const Header = () => {
  const loginCtx = useContext(loginContext);
  const cartCtx = useContext(cartContext);

  const logoutHandler = () => {
    loginCtx.logout();
    cartCtx.logoutCartHandler();
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <ul className={classes.navItems}>
            <li className={classes.navItem}>
              <NavLink activeClassName={classes.active} to='/home'>
                HOME
              </NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink activeClassName={classes.active} to='/product'>
                PRODUCT
              </NavLink>
            </li>

            <li className={classes.navItem}>
              <NavLink activeClassName={classes.active} to='/contact'>
                CONTACT
              </NavLink>
            </li>
            <li className={classes.navItem}>
              <NavLink activeClassName={classes.active} to='/about'>
                ABOUT
              </NavLink>
            </li>
            {!loginCtx.isloggedIn && (
              <li className={`${classes.navItem} ${classes.login}`}>
                <NavLink activeClassName={classes.active} to='/login'>
                  LOGIN
                </NavLink>
              </li>
            )}
            {loginCtx.isloggedIn && (
              <li className={`${classes.navItem} ${classes.logout}`} onClick={logoutHandler}>
                <NavLink activeClassName={classes.active} to='/login'>
                  LOGOUT
                </NavLink>
              </li>
            )}
            <li className={classes.navItem}>
              <HeaderCartButton />
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
