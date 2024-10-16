// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-cc8ab.firebaseapp.com",
  projectId: "ai-course-generator-cc8ab",
  storageBucket: "ai-course-generator-cc8ab.appspot.com",
  messagingSenderId: "684633992208",
  appId: "1:684633992208:web:5c01730e7ae04ad182ee95",
  measurementId: "G-E0K46HK0F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);