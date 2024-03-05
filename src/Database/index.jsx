import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDHvkIuvGa3ce7SvtsYoqdakR4_9npoHQA",
  authDomain: "watertank-2-0.firebaseapp.com",
  databaseURL: "https://watertank-2-0-default-rtdb.firebaseio.com",
  projectId: "watertank-2-0",
  storageBucket: "watertank-2-0.appspot.com",
  messagingSenderId: "963407504974",
  appId: "1:963407504974:web:0f73f12ce97bf41995851f",
  measurementId: "G-S1H0WPJ4DH",
};

// Initialize firebase app.
const app = initializeApp(firebaseConfig);
// Initialize firebase database and get the reference of firebase database object.
const database = getDatabase(app);

 
export default database;
