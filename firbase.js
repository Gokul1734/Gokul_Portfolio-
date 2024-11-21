// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsMSejcVXWugZaeZJT_kgmvQvcs-PXOBg",
  authDomain: "core-falcon-416215.firebaseapp.com",
  databaseURL: "https://core-falcon-416215-default-rtdb.firebaseio.com",
  projectId: "core-falcon-416215",
  storageBucket: "core-falcon-416215.firebasestorage.app",
  messagingSenderId: "267589982903",
  appId: "1:267589982903:web:b6669ef9ae77080db08b32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
