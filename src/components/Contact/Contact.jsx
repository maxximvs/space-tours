import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactList}>
        <div className={styles.office}>
          <h3>Office</h3>
          <p>919 3rd Ave New York City</p>
          <p>NY, 10022</p>
        </div>
        <div className={styles.getInTouch}>
          <h3>Get in touch</h3>
          <p>space.tours@email.com</p>
          <p>(202) 383-8036</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
