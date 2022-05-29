import React from 'react';
import styles from './notfoundpage.module.css';
import '../../shared-styles/shared.css';

import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';

import Navigation from '../../components/Navigation/Navigation';

const NotFoundPage = () => {
  return (
    <div className='card-background'>
      <div className={styles.main}>
        <Navigation />
        <div className={styles.notFound}>
          <h1>Oops. This page doesn't seem to exist.</h1>
          <Link to='/' className={styles.backToWelcomePageBar}>
            Back to Welcome Page
            <FaArrowRight size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
