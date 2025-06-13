import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqdAN-g60kledJ8_bRZmvVRiKGNwMEwR4',
  authDomain: 'aha-site.firebaseapp.com',
  projectId: 'aha-site',
  storageBucket: 'aha-site.appspot.com',
  messagingSenderId: '381330935757',
  appId: '1:381330935757:web:666811fa1c627dc7ee7e84',
  measurementId: 'G-Q5LH4E4S1V',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);