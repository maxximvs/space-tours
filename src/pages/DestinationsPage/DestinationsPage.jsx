import React from 'react';
import '../../shared-styles/shared.css';
import styles from './destinationspage.module.css';

import Navigation from '../../components/Navigation/Navigation';

const DestinationsPage = () => {
  return (
    <>
      <div className='card-background'>
        <div className={styles.main}>
          <Navigation />
          <div className={styles.destinations}></div>
        </div>
      </div>
    </>
  );
};

export default DestinationsPage;
