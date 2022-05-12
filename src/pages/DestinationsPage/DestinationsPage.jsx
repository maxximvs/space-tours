import React, { useState } from 'react';
import '../../shared-styles/shared.css';
import styles from './destinationspage.module.css';

import destinationsData from '../../data/destinationsData';

import Navigation from '../../components/Navigation/Navigation';
import DestinationInfo from '../../components/DestinationInfo/DestinationInfo';
import Destinations from '../../components/Destinations/Destinations';

const DestinationsPage = () => {
  const [destinations, setDestinations] = useState(destinationsData);
  const [isDestinationInfoShown, setIsDestinationInfoShown] = useState(false);
  const [destinationId, setDestinationId] = useState('');

  const toggleDestinationInfo = () => {
    setIsDestinationInfoShown((prevState) => !prevState);
  };

  const clickHandler = (id) => {
    toggleDestinationInfo();
    setDestinationId(id);

    // @todo - close planet info if the same planet is clicked on, change planet info if a different planet is clicked on
  };

  return (
    <>
      <div className='card-background'>
        <div className={styles.main}>
          <Navigation />
          <Destinations
            destinations={destinations}
            clickHandler={clickHandler}
          />
          <DestinationInfo
            destinations={destinations}
            isDestinationInfoShown={isDestinationInfoShown}
            toggleDestinationInfo={toggleDestinationInfo}
            destinationId={destinationId}
          />
        </div>
      </div>
    </>
  );
};

export default DestinationsPage;
