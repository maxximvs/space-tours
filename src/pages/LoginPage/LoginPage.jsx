import React from 'react';
import '../../shared-styles/shared.css';
import styles from './loginpage.module.css';

import Navigation from '../../components/Navigation/Navigation';

const LoginPage = () => {
  return (
    <>
      <div className='card-background'>
        <main className={styles.login}>
          <Navigation />
        </main>
      </div>
    </>
  );
};

export default LoginPage;
