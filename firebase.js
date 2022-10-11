// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'twitter-clone-4be0c.firebaseapp.com',
  projectId: 'twitter-clone-4be0c',
  storageBucket: 'twitter-clone-4be0c.appspot.com',
  messagingSenderId: '242697578457',
  appId: '1:242697578457:web:5a05cdcda6b038457f1bc8',
  measurementId: 'G-RDWCK6VGL9',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
