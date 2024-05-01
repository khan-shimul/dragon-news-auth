// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUozMdHmi7PMZAyN4axoCvTdYx5vokoHI",
  authDomain: "dragon-news-auth-c3ff2.firebaseapp.com",
  projectId: "dragon-news-auth-c3ff2",
  storageBucket: "dragon-news-auth-c3ff2.appspot.com",
  messagingSenderId: "826304555100",
  appId: "1:826304555100:web:b7db2b17a0b0c0bdb1de99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);