import React from 'react';
import '../../shared-styles/shared.css';
import styles from './destinationspage.module.css';

import Navigation from '../../components/Navigation/Navigation';
import DestinationInfo from '../../components/DestinationInfo/DestinationInfo';
import Destinations from '../../components/Destinations/Destinations';

const DestinationsPage = () => {
  return (
    <div className='card-background'>
      <div className={styles.main}>
        <Navigation />
        <div className={styles.pageHeader}>Select your destination.</div>
        <Destinations />
        <DestinationInfo />
      </div>
    </div>
  );
};

export default DestinationsPage;
