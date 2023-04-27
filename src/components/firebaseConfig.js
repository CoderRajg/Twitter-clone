// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfs2YWpxgN20qKUcqxZBqPQ-z47dlra30",
  authDomain: "twitter-clone-e723c.firebaseapp.com",
  projectId: "twitter-clone-e723c",
  storageBucket: "twitter-clone-e723c.appspot.com",
  messagingSenderId: "709083020147",
  appId: "1:709083020147:web:6e08506e8879686d91a306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
