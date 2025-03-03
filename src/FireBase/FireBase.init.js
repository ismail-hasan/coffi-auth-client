// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8knYlmuSLQXahwnoqW3-S8ZYkyXituxM",
    authDomain: "coffihouse-c4d1b.firebaseapp.com",
    projectId: "coffihouse-c4d1b",
    storageBucket: "coffihouse-c4d1b.firebasestorage.app",
    messagingSenderId: "959513938837",
    appId: "1:959513938837:web:82e90747c6bc5d8127049c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;