import React from 'react';
import styles from './navigation.module.css';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.brandLogo}>
        <NavLink to='/'>Brand Logo</NavLink>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            to='/destinations'
            className={(navData) => (navData.isActive ? styles.active : null)}
          >
            Destinations
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to='/profile'
            className={(navData) => (navData.isActive ? styles.active : null)}
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
