import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../shared-styles/shared.css';
import styles from './profilepage.module.css';

import planetInfoBg from '../../assets/images/planet-info.png';

import { FaUserEdit, FaUserCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Navigation from '../../components/Navigation/Navigation';

import { getAuth, updateProfile } from 'firebase/auth';
import { db } from '../../firebase.config';
import { updateDoc, doc } from 'firebase/firestore';

const ProfilePage = () => {
  const auth = getAuth();
  const [changeUserData, setChangeUserData] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // update display name in firebase
        await updateProfile(auth.currentUser, { displayName: name });
      }

      // update in firestore
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, { name: name });
    } catch (error) {
      toast.error('Could not update profile details.');
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <>
      <div className='card-background'>
        <div className={styles.main}>
          <Navigation />
          <div className={styles.page}>
            <div className={styles.pageHeader}>Your Journeys begin.</div>
            <div className={styles.pageBody}>
              <div className={styles.userDataHalf}>
                <div className={styles.userDataDiv}>
                  <img src={planetInfoBg} alt='' />
                  <p className={styles.userDataLabel}>Personal Details</p>
                  {changeUserData ? (
                    <FaUserCheck
                      size={20}
                      className={styles.editBtn}
                      onClick={() => {
                        changeUserData && onSubmit();
                        setChangeUserData((prevState) => !prevState);
                      }}
                    />
                  ) : (
                    <FaUserEdit
                      size={20}
                      className={styles.editBtn}
                      onClick={() => {
                        changeUserData && onSubmit();
                        setChangeUserData((prevState) => !prevState);
                      }}
                    />
                  )}
                  <div className={styles.userDataText}>
                    <form>
                      <input
                        type='text'
                        id='name'
                        className={
                          !changeUserData
                            ? `${styles.userDataTextName}`
                            : `${styles.userDataTextNameActive}`
                        }
                        disabled={!changeUserData}
                        value={name}
                        onChange={onChange}
                      />
                      <input
                        type='text'
                        id='email'
                        className={
                          !changeUserData
                            ? `${styles.userDataTextEmail}`
                            : `${styles.userDataTextEmailActive}`
                        }
                        disabled={true}
                        value={email}
                        onChange={onChange}
                      />
                    </form>
                    {/* <p>{name}</p>
                    <p>{email}</p> */}
                  </div>
                </div>
                <button
                  type='button'
                  className={styles.logoutBtn}
                  onClick={onLogout}
                >
                  Logout
                </button>
              </div>
              <div className={styles.bookedJourneysHalf}>Booked Journeys</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
