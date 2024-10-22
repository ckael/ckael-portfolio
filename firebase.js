// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAklFe8SrbV7K5OogvJi1LsLaxEBpJn85M",
  authDomain: "portfolio-app-fc385.firebaseapp.com",
  projectId: "portfolio-app-fc385",
  storageBucket: "portfolio-app-fc385.appspot.com",
  messagingSenderId: "179417715620",
  appId: "1:179417715620:web:3c6a371d5ae02b39e06731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();