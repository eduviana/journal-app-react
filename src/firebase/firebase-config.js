import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAuVsureyKqh6F6M1HbgA10JCYbSnNKbw",
    authDomain: "react-app-cursos-c643f.firebaseapp.com",
    projectId: "react-app-cursos-c643f",
    storageBucket: "react-app-cursos-c643f.appspot.com",
    messagingSenderId: "884116473099",
    appId: "1:884116473099:web:d2f7aa3b396cea2d3c4e0e"
  };
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}








