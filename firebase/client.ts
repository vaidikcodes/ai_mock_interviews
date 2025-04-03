
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB29cQ90L1X2bKHjD3i1ZDX-th7oZPxwyk",
    authDomain: "prepwise-3efe8.firebaseapp.com",
    projectId: "prepwise-3efe8",
    storageBucket: "prepwise-3efe8.firebasestorage.app",
    messagingSenderId: "91749324200",
    appId: "1:91749324200:web:fd311dad5311521aa8b99d",
    measurementId: "G-0LEPN1M0LN"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);