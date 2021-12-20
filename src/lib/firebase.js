import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "instagram-4de2d.firebaseapp.com",
  projectId: "instagram-4de2d",
  storageBucket: "instagram-4de2d.appspot.com",
  messagingSenderId: "1004004729000",
  appId: "1:1004004729000:web:c14ad0f2f9f0c08363229d",
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue, firebaseConfig };
