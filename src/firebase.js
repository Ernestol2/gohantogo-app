// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeq8Sm8vnG7cWATDa0-M6YqLGOPrncXw0",
  authDomain: "ecommerce-gohantogo.firebaseapp.com",
  projectId: "ecommerce-gohantogo",
  storageBucket: "ecommerce-gohantogo.appspot.com",
  messagingSenderId: "770432615715",
  appId: "1:770432615715:web:8398fd37209c91b599f896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}