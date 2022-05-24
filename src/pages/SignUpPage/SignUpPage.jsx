import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './signuppage.module.css';
import '../../shared-styles/shared.css';

import { FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Navigation from '../../components/Navigation/Navigation';
import OAuth from '../../components/OAuth/OAuth';

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { db } from '../../firebase.config';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy);

      navigate('/');
    } catch (error) {
      toast.error('Something went wrong with registration.');
    }
  };

  return (
    <div className='card-background'>
      <div className={styles.main}>
        <Navigation />
        <div className={styles.page}>
          <div className={styles.pageHeader}>Welcome back.</div>
          <div className={styles.pageBody}>
            <form onSubmit={onSubmit}>
              <div className={styles.nameInputDiv}>
                <input
                  type='text'
                  className={styles.nameInput}
                  placeholder='Name'
                  id='name'
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className={styles.emailInputDiv}>
                <input
                  type='email'
                  className={styles.emailInput}
                  placeholder='Email'
                  id='email'
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className={styles.passwordInputDiv}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={styles.passwordInput}
                  placeholder='Password'
                  id='password'
                  value={password}
                  onChange={onChange}
                />
                {showPassword ? (
                  <FaEyeSlash
                    size={20}
                    className={styles.showPasswordIcon}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <FaEye
                    size={20}
                    className={styles.showPasswordIcon}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>

              <Link to='/forgot-password' className={styles.forgotPasswordLink}>
                Forgot Password
              </Link>

              <div className={styles.signUpBar}>
                <p className={styles.signUpText}>Sign Up</p>
                <button className={styles.signUpButton}>
                  <FaArrowRight size={30} className={styles.arrowRightBtn} />
                </button>
              </div>
            </form>

            <OAuth />

            <Link to='/sign-in' className={styles.signInLink}>
              Sign In Instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
