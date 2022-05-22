import React from 'react';
import '../../shared-styles/shared.css';
import styles from './profilepage.module.css';

import Navigation from '../../components/Navigation/Navigation';

const LoginPage = () => {
  return (
    <>
      <div className='card-background'>
        <div className={styles.main}>
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
