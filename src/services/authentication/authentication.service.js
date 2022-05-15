import * as firebase from 'firebase';
// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAvpw4vbzSH98vOYNwyA5yfj5nGyEvJPIw',
  authDomain: 'mealstogo-51e67.firebaseapp.com',
  projectId: 'mealstogo-51e67',
  storageBucket: 'mealstogo-51e67.appspot.com',
  messagingSenderId: '668610135743',
  appId: '1:668610135743:web:6e2cc5d1b79e1bf4f5a80a',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
