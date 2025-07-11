// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAp9LcbJgxkcF4m_k--RCMpfQyQ86lPnjI",
    authDomain: "proyecto-cursos-1e236.firebaseapp.com",
    projectId: "proyecto-cursos-1e236",
    storageBucket: "proyecto-cursos-1e236.appspot.com",
    messagingSenderId: "263761974281",
    appId: "1:263761974281:web:679f52e14d6a81418a14d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
