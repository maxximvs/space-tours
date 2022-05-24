import React, { useState } from 'react';
import styles from './forgotpasswordpage.module.css';
import '../../shared-styles/shared.css';

import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';

import Navigation from '../../components/Navigation/Navigation';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import { toast } from 'react-toastify';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent.');
    } catch (error) {
      toast.error('Could not send reset email.');
    }
  };

  return (
    <div className='card-background'>
      <div className={styles.main}>
        <Navigation />
        <div className={styles.page}>
          <div className={styles.pageHeader}>Forgot Password.</div>
          <div className={styles.pageBody}>
            <form onSubmit={onSubmit}>
              <input
                className={styles.emailInput}
                type='email'
                placeholder='Email'
                id='email'
                value={email}
                onChange={onChange}
              />
              <div className={styles.signInBar}>
                <p className={styles.signInText}>Send Reset Link</p>
                <button className={styles.signInButton}>
                  <FaArrowRight size={30} className={styles.arrowRightBtn} />
                </button>
              </div>
            </form>
            <Link to='/sign-in' className={styles.signInLink}>
              Sign In Instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
