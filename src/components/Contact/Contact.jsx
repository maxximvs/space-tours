import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactList}>
        <div className={styles.office}>
          <h3>Office</h3>
          <p>some data</p>
          <p>some data</p>
        </div>
        <div className={styles.getInTouch}>
          <h3>Get in touch</h3>
          <p>some data</p>
          <p>some data</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
