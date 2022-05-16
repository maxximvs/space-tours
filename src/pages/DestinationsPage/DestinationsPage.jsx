import React from 'react';
import '../../shared-styles/shared.css';
import styles from './destinationspage.module.css';

import Navigation from '../../components/Navigation/Navigation';
import DestinationInfo from '../../components/DestinationInfo/DestinationInfo';
import Destinations from '../../components/Destinations/Destinations';

import { DestinationsProvider } from '../../context/DestinationsContext';

const DestinationsPage = () => {
  return (
    <DestinationsProvider>
      <div className='card-background'>
        <div className={styles.main}>
          <Navigation />
          <Destinations />
          <DestinationInfo />
        </div>
      </div>
    </DestinationsProvider>
  );
};

export default DestinationsPage;
