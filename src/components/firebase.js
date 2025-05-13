// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBva6qIEh2lCgvJDa--B8WYgt4DXxUJuYk',
  authDomain: 'our-day-invitation.firebaseapp.com',
  projectId: 'our-day-invitation',
  storageBucket: 'our-day-invitation.firebasestorage.app',
  messagingSenderId: '1065544166580',
  appId: '1:1065544166580:web:046611bab1d4a0d449fbe1',
  measurementId: 'G-WVP6SKX78V',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
