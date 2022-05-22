import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbEYV1KDNPLqdFKfYo0_lKmCrlkBYCrXs',
  authDomain: 'space-tours-11d7f.firebaseapp.com',
  projectId: 'space-tours-11d7f',
  storageBucket: 'space-tours-11d7f.appspot.com',
  messagingSenderId: '921823263632',
  appId: '1:921823263632:web:039003dba9359bebd81115'
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
