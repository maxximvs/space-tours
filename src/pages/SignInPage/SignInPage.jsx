import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './signinpage.module.css';
import '../../shared-styles/shared.css';

import { FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Navigation from '../../components/Navigation/Navigation';
import OAuth from '../../components/OAuth/OAuth';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate('/');
      }
    } catch (error) {
      toast.error('Incorrect User Credentials.');
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

              <div className={styles.signInBar}>
                <p className={styles.signInText}>Sign In</p>
                <button className={styles.signInButton}>
                  <FaArrowRight size={30} className={styles.arrowRightBtn} />
                </button>
              </div>
            </form>

            <OAuth />

            <Link to='/sign-up' className={styles.signUpLink}>
              Sign Up Instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
