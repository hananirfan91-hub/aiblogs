// src/integrations/firebase/client.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_xQAoWrqYhUJMCj-U-p2xL8hEdu5DHBs",
  authDomain: "aiblog-d909c.firebaseapp.com",
  projectId: "aiblog-d909c",
  storageBucket: "aiblog-d909c.appspot.com",
  messagingSenderId: "705596458223",
  appId: "1:705596458223:web:6b17c93565733d3a0e471a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);

// Firebase Auth
export const auth = getAuth(app);
