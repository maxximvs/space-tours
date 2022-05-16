import React, { useContext } from 'react';
import styles from './destinations.module.css';

import DestinationsContext from '../../context/DestinationsContext';

const Destinations = () => {
  const { destinations, clickHandler } = useContext(DestinationsContext);

  return (
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
  );
};

export default Destinations;
