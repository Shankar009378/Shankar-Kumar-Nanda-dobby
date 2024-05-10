//important code
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4475b.firebaseapp.com",
  projectId: "mern-blog-4475b",
  storageBucket: "mern-blog-4475b.appspot.com",
  messagingSenderId: "1058625513045",
  appId: "1:1058625513045:web:a89608f7ab0880476096dc"
};

export const app = initializeApp(firebaseConfig);
