// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fir-extensions-3a5f8.firebaseapp.com",
  projectId: "fir-extensions-3a5f8",
  storageBucket: "fir-extensions-3a5f8.firebasestorage.app",
  messagingSenderId: "571320782378",
  appId: "1:571320782378:web:c5992e436cc01e09c5fd53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);