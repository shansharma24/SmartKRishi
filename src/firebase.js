// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDyOqhjKFy38qz65PaAwwx1Tx3P1fOgHAM",
  authDomain: "smartkrishi5256.firebaseapp.com",
  databaseURL: "https://smartkrishi5256-default-rtdb.firebaseio.com",
  projectId: "smartkrishi5256",
  storageBucket: "smartkrishi5256.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
