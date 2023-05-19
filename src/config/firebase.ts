// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV2dmrzZk2IcVt9e0KOPXNmIjIKlWHYo8",
  authDomain: "televaptmed.firebaseapp.com",
  projectId: "televaptmed",
  storageBucket: "televaptmed.appspot.com",
  messagingSenderId: "909777233232",
  appId: "1:909777233232:web:244e9b7ed04ca8ae18b855",
  measurementId: "G-ZN5RLV25QW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

