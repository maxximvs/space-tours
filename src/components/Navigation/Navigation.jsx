import React from 'react';
import styles from './navigation.module.css';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className='brand-logo'>
        <NavLink to='/'>Brand Logo</NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            to='/destinations'
            className={(navData) => (navData.isActive ? styles.active : null)}
          >
            Destinations
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/login'
            className={(navData) => (navData.isActive ? styles.active : null)}
          >
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
