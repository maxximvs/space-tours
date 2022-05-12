import React from 'react';
import styles from './destinationinfo.module.css';

import planetInfo from '../../assets/images/planet-info.png';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const DestinationInfo = ({
  destinations,
  isDestinationInfoShown,
  toggleDestinationInfo,
  destinationId
}) => {
  return (
    <div
      className={`${styles.destinationInfo} ${
        isDestinationInfoShown ? '' : styles.hidden
      }`}
    >
      <div className={styles.imgContainer}>
        <img src={planetInfo} alt='' />
        <FaTimes className={styles.closeBtn} onClick={toggleDestinationInfo} />
        <FaArrowRight className={styles.arrowRightBtn} />
        <div className={styles.destinationInfoText}>
          {destinations
            .filter((destination) => destination.id === destinationId)
            .map((destination) => (
              <ul key={destination.id} className={styles.ul}>
                <li>Planet: {destination.planetName}</li>
                <li>First discovered: {destination.firstDiscovered}</li>
                <li>Discovered by: {destination.discoveredBy}</li>
                <li>Description: {destination.planetDescription}</li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo;
