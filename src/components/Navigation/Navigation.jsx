import React from 'react';
import './navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <div className='brand-logo'>
        <a href='/'>Brand Logo</a>
      </div>
      <ul>
        <li>
          <a href='/'>Destinations</a>
        </li>
        <li>
          <a href='/'>Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
