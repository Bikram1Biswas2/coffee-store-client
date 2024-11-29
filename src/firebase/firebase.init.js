// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe4Scu0nmZF4x4guB-vUXjpAAtWehpiBc",
  authDomain: "coffee-store-c6335.firebaseapp.com",
  projectId: "coffee-store-c6335",
  storageBucket: "coffee-store-c6335.firebasestorage.app",
  messagingSenderId: "832770660602",
  appId: "1:832770660602:web:5e1bd84273c5ba0a825143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);