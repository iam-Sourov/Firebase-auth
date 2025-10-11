// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnQrOsOY1KLaFDEUro6aTEqPQeW8_PO7k",
    authDomain: "simple-firebase-app-182ab.firebaseapp.com",
    projectId: "simple-firebase-app-182ab",
    storageBucket: "simple-firebase-app-182ab.firebasestorage.app",
    messagingSenderId: "451104838565",
    appId: "1:451104838565:web:c097706566ff79b43a8e4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);