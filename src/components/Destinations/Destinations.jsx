import React from 'react';
import styles from './destinations.module.css';

const Destinations = ({ destinations, clickHandler }) => {
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
