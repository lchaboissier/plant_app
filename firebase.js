// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD73gr3dXMd8IwBavF1j7Z9HRawuZHRcTM",
    authDomain: "plant-app-auth-86f1a.firebaseapp.com",
    projectId: "plant-app-auth-86f1a",
    storageBucket: "plant-app-auth-86f1a.appspot.com",
    messagingSenderId: "1094676812652",
    appId: "1:1094676812652:web:c46b215465358250545949",
    measurementId: "G-97GDZMMPC2"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
