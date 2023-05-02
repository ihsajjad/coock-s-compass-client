// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcMXiJZP0DdP_EYtSYedZqItJ3scdswPs",
  authDomain: "cook-s-compass.firebaseapp.com",
  projectId: "cook-s-compass",
  storageBucket: "cook-s-compass.appspot.com",
  messagingSenderId: "856007768541",
  appId: "1:856007768541:web:7c408278c70be8201bde34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;