import React from 'react';
import './navigation.module.css';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className='brand-logo'>
        <Link to='/'>Brand Logo</Link>
      </div>
      <ul>
        <li>
          <Link to='/destinations'>Destinations</Link>
        </li>
        <li>
          <Link to='/login'>Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
