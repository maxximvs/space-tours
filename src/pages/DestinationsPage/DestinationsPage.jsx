import React, { useState } from 'react';
import '../../shared-styles/shared.css';
import styles from './destinationspage.module.css';

import destinationsData from '../../data/destinationsData';

import Navigation from '../../components/Navigation/Navigation';
import planetInfo from '../../assets/images/planet-info.png';

import { FaTimes, FaArrowRight } from 'react-icons/fa';
// import planet1 from '../../assets/images/planet-1.png';
// import planet2 from '../../assets/images/planet-2.png';
// import planet3 from '../../assets/images/planet-3.png';

const DestinationsPage = () => {
  const [destinations, setDestinations] = useState(destinationsData);
  const [showDestinationInfo, setShowDestinationInfo] = useState(false);

  const clickHandler = (id) => {
    setShowDestinationInfo(true);
    // @todo - close planet info if the same planet is clicked on, change planet info if a different planet is clicked on
    // @todo - display the correct planet info based on the id thats passed in
  };

  const hideDestinationInfo = () => {
    setShowDestinationInfo((prevState) => !prevState);
  };

  return (
    <>
      <div className='card-background'>
        <div className={styles.main}>
          <Navigation />
          <div className={styles.destinations}>
            {destinations.map((destination) => (
              <div key={destination.id}>
                <img
                  src={destination.img}
                  onClick={() => clickHandler(destination.id)}
                />
              </div>
            ))}
          </div>
          <div
            className={`${styles.destinationInfo} ${
              showDestinationInfo ? '' : styles.hidden
            }`}
          >
            <div className={styles.imgContainer}>
              <img src={planetInfo} alt='' />
            </div>
            <FaTimes
              className={styles.closeBtn}
              onClick={hideDestinationInfo}
            />
            <FaArrowRight className={styles.arrowRightBtn} />
            <div className={styles.destinationInfoText}>
              <p>Planet: </p>
              <p>First Discovered: </p>
              <p>Discovered By: </p>
              <p>Planet Info: </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationsPage;
