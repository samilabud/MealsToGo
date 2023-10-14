import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: 'AIzaSyAvpw4vbzSH98vOYNwyA5yfj5nGyEvJPIw',
  authDomain: 'mealstogo-51e67.firebaseapp.com',
  projectId: 'mealstogo-51e67',
  storageBucket: 'mealstogo-51e67.appspot.com',
  messagingSenderId: '668610135743',
  appId: '1:668610135743:web:6e2cc5d1b79e1bf4f5a80a',
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const loginRequest = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export default app;