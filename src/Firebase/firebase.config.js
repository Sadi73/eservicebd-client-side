// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.meta.env.VITE_apiKey,
    authDomain: process.meta.env.VITE_authDomain,
    projectId: process.meta.env.VITE_projectId,
    storageBucket: process.meta.env.VITE_storageBucket,
    messagingSenderId: process.meta.env.VITE_messagingSenderId,
    appId: process.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;