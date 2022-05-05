import React from 'react';
import styles from './welcome.module.css';
import astronaut from '../../assets/images/astronaut2.png';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.astronautPicture}>
        <img src={astronaut} alt='astronaut' />
      </div>
      <div className={styles.mainInfo}>
        <div>
          <h1>Space Tours</h1>
        </div>
        <div>
          <p>
            Space tours is a leading space travel company. It deals with the
            transportation of passengers to the planets of the solar system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
