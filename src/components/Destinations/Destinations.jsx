import React, { useContext } from 'react';
import styles from './destinations.module.css';

import DestinationsContext from '../../context/destinations/DestinationsContext';

const Destinations = () => {
  const { destinations, clickHandler } = useContext(DestinationsContext);

  return (
    <div className={styles.destinations}>
      <div className={styles.emptyDiv1}></div>
      <div className={styles.emptyDiv2}></div>
      <div className={styles.emptyDiv3}></div>
      {destinations.map((destination) => (
        <div key={destination.id} className={styles.destinationsContainer}>
          <img
            src={destination.img}
            onClick={() => clickHandler(destination.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Destinations;
