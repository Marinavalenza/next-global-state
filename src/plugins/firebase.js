// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFXgwbMnGjxiZPyO-5kwwSu8fuAzn0vzY",
  authDomain: "next-global-state-9927d.firebaseapp.com",
  projectId: "next-global-state-9927d",
  storageBucket: "next-global-state-9927d.appspot.com",
  messagingSenderId: "389904039408",
  appId: "1:389904039408:web:b1929ac990a85f49853135",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
