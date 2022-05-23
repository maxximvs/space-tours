import React, { useContext } from 'react';
import styles from './destinationinfo.module.css';

import planetInfoBg from '../../assets/images/planet-info.png';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

import DestinationsContext from '../../context/destinations/DestinationsContext';

const DestinationInfo = () => {
  const {
    destinations,
    isDestinationInfoShown,
    toggleDestinationInfo,
    destinationId
  } = useContext(DestinationsContext);

  return (
    <div
      className={`${styles.destinationInfo} ${
        isDestinationInfoShown ? '' : styles.hidden
      }`}
    >
      <div className={styles.imgContainer}>
        <img src={planetInfoBg} alt='' />
        <FaTimes className={styles.closeBtn} onClick={toggleDestinationInfo} />
        <FaArrowRight className={styles.arrowRightBtn} />
        <button className={styles.journeyBtn}>Book a journey</button>
        <div className={styles.destinationInfoText}>
          {destinations
            .filter((destination) => destination.id === destinationId)
            .map((destination) => (
              <ul key={destination.id} className={styles.ul}>
                <li>Planet: {destination.planetName}</li>
                <li>First discovered: {destination.firstDiscovered}</li>
                <li>Discovered by: {destination.discoveredBy}</li>
                <li>{destination.planetDescription}</li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo;
