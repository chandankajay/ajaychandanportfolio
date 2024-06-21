// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gotchapro-791991.firebaseapp.com",
  projectId: "gotchapro-791991",
  storageBucket: "gotchapro-791991.appspot.com",
  messagingSenderId: "57769363800",
  appId: "1:57769363800:web:3c83969f353782ea903d2d",
  measurementId: "G-1FYF2GS13H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
