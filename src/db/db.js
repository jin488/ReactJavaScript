import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTAgzFOtx925_uzpT0jjSGeSy2cxGXXEs",
    authDomain: "computex-e3775.firebaseapp.com",
    projectId: "computex-e3775",
    storageBucket: "computex-e3775.appspot.com",
    messagingSenderId: "527473061475",
    appId: "1:527473061475:web:e60ecde4f530596bc6d256"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db