import React, { useContext } from 'react';
import styles from './destinationinfo.module.css';

import { Link } from 'react-router-dom';

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
        <Link
          to={`/book-journey/${destinationId}`}
          className={styles.journeyBtn}
        >
          <FaArrowRight className={styles.arrowRightBtn} />
          Book a journey
        </Link>
        <div className={styles.destinationInfoText}>
          {destinations
            .filter((destination) => destination.id === destinationId)
            .map((destination) => (
              <div key={destination.id} className={styles.ul}>
                <h1>{destination.planetName}</h1>
                <p>First discovered: {destination.firstDiscovered}</p>
                <p>Discovered by: {destination.discoveredBy}</p>
                <p className={styles.planetDescriptionText}>
                  {destination.planetDescription}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo;
