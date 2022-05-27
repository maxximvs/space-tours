import React from 'react';
import styles from './bookedjourneys.module.css';

import Journey from '../Journey/Journey';

const BookedJourneys = ({ journeys, onDelete }) => {
  return (
    <main className={styles.main}>
      {journeys.map((journey) => (
        <Journey
          key={journey.id}
          journey={journey.data}
          id={journey.id}
          onDelete={() => onDelete(journey.id)}
        />
      ))}
    </main>
  );
};

export default BookedJourneys;
