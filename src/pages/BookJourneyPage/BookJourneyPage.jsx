import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './bookjourneypage.module.css';
import '../../shared-styles/shared.css';

import planetInfoBg from '../../assets/images/planet-info.png';

import Navigation from '../../components/Navigation/Navigation';

import DestinationsContext from '../../context/destinations/DestinationsContext';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase.config';

import { toast } from 'react-toastify';

const BookJourneyPage = () => {
  const { destinationId } = useParams();
  const { destinations } = useContext(DestinationsContext);

  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    numberOfPassengers: '',
    date: '',
    typeOfRocket: 'slow'
  });

  const { name, destination, numberOfPassengers, date, typeOfRocket } =
    formData;

  const [endPrice, setEndPrice] = useState('');

  // loading state

  const auth = getAuth();
  const navigate = useNavigate();

  let selectedDestination = destinations.find(
    (dest) => dest.id.toString() === destinationId
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData({
          ...formData,
          userRef: user.uid,
          name: auth.currentUser.displayName,
          destination: selectedDestination.planetName
        });
      } else {
        navigate('/sign-in');
      }
    });
  }, []);

  const calculateResult = (numberOfPassengers, typeOfRocket) => {
    let rocketPrice;
    let finalPrice;

    switch (typeOfRocket) {
      case 'slow':
        rocketPrice = 5000;
        finalPrice = parseInt(numberOfPassengers * 3000 + rocketPrice);
        return finalPrice;
      case 'medium':
        rocketPrice = 6500;
        finalPrice = parseInt(numberOfPassengers * 3000 + rocketPrice);
        return finalPrice;
      case 'fast':
        rocketPrice = 8000;
        finalPrice = parseInt(numberOfPassengers * 3000 + rocketPrice);
        return finalPrice;
      default:
        rocketPrice = 5000;
        finalPrice = parseInt(numberOfPassengers * 3000 + rocketPrice);
        return finalPrice;
    }
  };

  useEffect(() => {
    setEndPrice(() => calculateResult(numberOfPassengers, typeOfRocket));
  }, [numberOfPassengers, typeOfRocket]);

  const earliestBookingAvailable = () => {
    const date = new Date();
    const earliestDate = new Date(date.setMonth(date.getMonth() + 1));
    const formattedEarliestDate = earliestDate.toISOString().split('T')[0];
    return formattedEarliestDate;
  };

  // if loading then return spinner

  const onSubmit = async (e) => {
    e.preventDefault();

    const formDataCopy = {
      ...formData,
      timestamp: serverTimestamp(),
      estimatedCosts: endPrice
    };

    await addDoc(collection(db, 'journeys'), formDataCopy);
    // set loading to false
    toast.success('Journey saved.');
    navigate('/profile');
    // console.log(docRef);
  };

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div>
      <div className='card-background'>
        <div className={styles.main}>
          <Navigation />
          <div className={styles.page}>
            <div className={styles.pageHeader}>Add your journey details.</div>
            <div className={styles.pageBody}>
              <img src={planetInfoBg} alt='' />
              <div className={styles.journeyInfo}>
                <div className={styles.journeyInfoUserInfoHalf}>
                  <div className={styles.userNameAndDestDiv}>
                    <h2>{name}</h2>
                    <h3>Destination: {destination}</h3>
                  </div>
                  <div className={styles.userInfoInputs}>
                    <form onSubmit={onSubmit}>
                      <label
                        htmlFor='numberOfPassengers'
                        className={styles.numberOfPassengersLabel}
                      >
                        Number of Passengers
                      </label>
                      <input
                        type='number'
                        id='numberOfPassengers'
                        className={styles.numberOfPassengersInputField}
                        value={numberOfPassengers}
                        onChange={onMutate}
                        min='1'
                        max='6'
                        required
                      />

                      <label
                        htmlFor='date'
                        className={styles.dateOfFlightLabel}
                      >
                        Date of Flight
                      </label>
                      <input
                        type='date'
                        id='date'
                        className={styles.dateOfFlightInputField}
                        value={date}
                        onChange={onMutate}
                        min={earliestBookingAvailable()}
                        required
                      />

                      <label
                        htmlFor='typeOfRocket'
                        className={styles.typeOfRocketLabel}
                      >
                        Type of Rocket
                      </label>
                      <select
                        name='typeOfRocket'
                        id='typeOfRocket'
                        className={styles.typeOfRocketInputField}
                        value={typeOfRocket}
                        onChange={onMutate}
                        required
                      >
                        <option value='slow'>Slow</option>
                        <option value='medium'>Medium</option>
                        <option value='fast'>Fast</option>
                      </select>

                      <label
                        style={{ textAlign: 'center' }}
                        htmlFor='priceInputField'
                      >
                        {numberOfPassengers === ''
                          ? 'Base Reservation Fee in USD'
                          : 'Estimated Costs in USD'}
                      </label>
                      <input
                        type='number'
                        className={styles.priceInputField}
                        value={endPrice}
                        placeholder='Estimated Price'
                        readOnly
                      />

                      <button className={styles.bookJourneyBtn} type='submit'>
                        Book Journey
                      </button>
                    </form>
                  </div>
                </div>
                <div className={styles.journeyInfoPlanetInfoHalf}>
                  <h1>{selectedDestination.planetName.toUpperCase()}</h1>
                  <p>First Discovered: {selectedDestination.firstDiscovered}</p>
                  <p>Discovered By: {selectedDestination.discoveredBy}</p>
                  <p className={styles.planetDescriptionText}>
                    {selectedDestination.planetDescription}
                  </p>

                  <div className={styles.journeyInfoPlanetDiv}>
                    <img src={selectedDestination.sqrImg} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookJourneyPage;
