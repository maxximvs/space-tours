import React, { useState } from 'react';
import '../../shared-styles/shared.css';
import styles from './destinationspage.module.css';

import Navigation from '../../components/Navigation/Navigation';
// import planet1 from '../../assets/images/planet-1.png';
// import planet2 from '../../assets/images/planet-2.png';
// import planet3 from '../../assets/images/planet-3.png';
import planetInfo from '../../assets/images/planet-info.png';

import destinations from '../../data/destinations';

const DestinationsPage = () => {
  const [showDestinationInfo, setShowDestinationInfo] = useState(false);
  const [destinationInfo, setDestinationInfo] = useState({
    planetName: '',
    firstDiscovered: '',
    discoveredBy: '',
    planetDescription: ''
  });

  const clickHandler = (id) => {
    setShowDestinationInfo((prevState) => !prevState);
    console.log(showDestinationInfo);

    // @todo - close planet info if the same planet is clicked on, change planet info if a different planet is clicked on
    // @todo - display the correct planet info based on the id thats passed in
  };

  return (
    <>
      <div className='card-background'>
        <div className={styles.main}>
          <Navigation />
          <div className={styles.destinations}>
            {destinations.map((destination) => (
              <img
                key={destination.id}
                src={destination.img}
                onClick={() => clickHandler(destination.id)}
              />
            ))}
          </div>
          <div className={styles.destinationInfo}>
            <img
              src={planetInfo}
              alt=''
              className={showDestinationInfo ? '' : styles.hidden}
            />
            <div className={styles.destinationInfoText}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationsPage;
