// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfl4NpZVZVoxZybdMPqX70fUSCIzzjhbM",
    authDomain: "thirsty-films.firebaseapp.com",
    projectId: "thirsty-films",
    storageBucket: "thirsty-films.appspot.com",
    messagingSenderId: "1093603145964",
    appId: "1:1093603145964:web:975e3f4e1a585f5ee9cdc9",
    measurementId: "G-PKCT1J3GR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);