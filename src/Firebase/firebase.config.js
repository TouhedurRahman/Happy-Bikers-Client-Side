// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_STEayIeZA7k1Nrfv7fVwVUrMQobAH0g",
    authDomain: "happy-bikers.firebaseapp.com",
    projectId: "happy-bikers",
    storageBucket: "happy-bikers.appspot.com",
    messagingSenderId: "735027598341",
    appId: "1:735027598341:web:f3c4bf8217c0f21d15b86c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;