import React from "react";
import { Link } from "react-router-dom"
import styles from './navbar.module.css' 
// use react-router Link or NavLink

const Navbar = () => {
  return (
    <div data-cy="navbar" className={styles.navbar}>
      <Link to="#" data-cy="navbar-home-link">Logo</Link>
      <div>
      <span data-cy="navbar-cart-items-count">count:0</span>
      <button data-cy="navbar-login-logout-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
