import React from 'react';
import styles from './journey.module.css';

import { FaTrash } from 'react-icons/fa';

const Journey = ({ journey, onDelete }) => {
  return (
    <div className={styles.journeyItem}>
      <h1>{journey.destination}</h1>
      <h4>{journey.name}</h4>
      <p>Date: {journey.date}</p>
      <p>Number of Passengers: {journey.numberOfPassengers}</p>
      <p>Type of Rocket: {journey.typeOfRocket}</p>
      <p>Estimated Costs: ${journey.estimatedCosts}</p>

      {/* <FaTrash className={styles.deleteIcon} /> */}
      {onDelete && (
        <FaTrash
          className={styles.deleteIcon}
          onClick={() => onDelete(journey.id)}
        />
      )}
    </div>
  );
};

export default Journey;
