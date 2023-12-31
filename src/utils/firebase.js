// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChhE9KRQtJNHdvreThHUfVO56Pgc3kSMY",
  authDomain: "netflix-16a52.firebaseapp.com",
  projectId: "netflix-16a52",
  storageBucket: "netflix-16a52.appspot.com",
  messagingSenderId: "758187846148",
  appId: "1:758187846148:web:f0a0667b3072ffc7b32351",
  measurementId: "G-YP6YEX7H01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();