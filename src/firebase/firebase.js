import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMIMzzgVLxY2j9JtPuPc6k1WxwuBME8r4",
    authDomain: "coco-game-10766.firebaseapp.com",
    projectId: "coco-game-10766",
    storageBucket: "coco-game-10766.appspot.com",
    messagingSenderId: "500847235215",
    appId: "1:500847235215:web:b85b7efbb5613c9c4320fa",
    measurementId: "G-1SR1WYCJRM"
};

/*function firebaseInitialization() {
    initializeApp(firebaseConfig);
}*/


// Initialize Firebase
const firebaseInitialization = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const db = getFirestore(firebaseInitialization);

export const auth = getAuth(firebaseInitialization);
export default {db};


