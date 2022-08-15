import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './components/RouteSwitch';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInAnonymously,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyBWMBTSFZZbqkQY7weHsVi50NvIXJNUbqw',
  authDomain: 'find-waldo-game.firebaseapp.com',
  projectId: 'find-waldo-game',
  storageBucket: 'find-waldo-game.appspot.com',
  messagingSenderId: '87978521927',
  appId: '1:87978521927:web:7eb462ff31582ea5fac862',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
// createUserWithEmailAndPassword(auth, 'testemail@gmail.com', 'testpw')
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// signInWithEmailAndPassword(auth, 'testemail@gmail.com', 'testpw')
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// signInAnonymously(auth)
//   .then(() => {
//     // Signed in..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//   });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     console.log('user signed in');
//     const uid = user.uid;
//     // ...
//   } else {
//     console.log('user signed out');

//     // User is signed out
//     // ...
//   }
// });
