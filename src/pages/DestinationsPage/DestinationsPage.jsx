import React from 'react';
import '../../shared-styles/shared.css';
import styles from './destinationspage.module.css';

import Navigation from '../../components/Navigation/Navigation';

const DestinationsPage = () => {
  return (
    <>
      <div className='card-background'>
        <main className={styles.destinations}>
          <Navigation />
        </main>
      </div>
    </>
  );
};

export default DestinationsPage;
