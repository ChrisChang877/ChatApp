import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6aFBpfUuHWXWTCDZviRBuXegIyEl0EgQ",
  authDomain: "chat-4baea.firebaseapp.com",
  projectId: "chat-4baea",
  storageBucket: "chat-4baea.appspot.com",
  messagingSenderId: "10958988091",
  appId: "1:10958988091:web:760c8cc1bc1fb666a6cd1e",
  measurementId: "G-BG4CYJP0KT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
