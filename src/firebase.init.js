// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbFPXSMnBBmNzWntnM4ot4b-J92DenMIE",
  authDomain: "espn-sports-8c6b9.firebaseapp.com",
  projectId: "espn-sports-8c6b9",
  storageBucket: "espn-sports-8c6b9.appspot.com",
  messagingSenderId: "948471595651",
  appId: "1:948471595651:web:eeee54ce90a4efcdcb11b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;