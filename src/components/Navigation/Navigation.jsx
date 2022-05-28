import React from 'react';
import styles from './navigation.module.css';

import { FaSpaceShuttle } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to='/' className={styles.brandLogo}>
          <h3>Space Tours</h3>
          <FaSpaceShuttle size={40} className={styles.brandLogoShuttle} />
        </NavLink>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            to='/destinations'
            className={(navData) =>
              navData.isActive ? styles.active : styles.navLink
            }
          >
            Destinations
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to='/profile'
            className={(navData) =>
              navData.isActive ? styles.active : styles.navLink
            }
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
