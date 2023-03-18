// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBi65O2t5buzr-BEGhMnUCJVLvO5c7pOpk",
    authDomain: "ema-john-simple-1c112.firebaseapp.com",
    projectId: "ema-john-simple-1c112",
    storageBucket: "ema-john-simple-1c112.appspot.com",
    messagingSenderId: "109195028530",
    appId: "1:109195028530:web:64e0307813073f6be9742b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;