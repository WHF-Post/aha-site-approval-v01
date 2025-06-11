// /lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqdAN-g60kledJ8_bRZmvVRiKGNwMEwR4",
  authDomain: "aha-site.firebaseapp.com",
  projectId: "aha-site",
  storageBucket: "aha-site.firebasestorage.app",
  messagingSenderId: "381330935757",
  appId: "1:381330935757:web:666811fa1c627dc7ee7e84",
  measurementId: "G-Q5LH4E4S1V"
};
console.log("🔥 Firebase Config:", firebaseConfig);

// Check if apiKey is missing
if (!firebaseConfig.apiKey) {
  throw new Error('Missing Firebase config');
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firestore = getFirestore(app);

export { auth, firestore };