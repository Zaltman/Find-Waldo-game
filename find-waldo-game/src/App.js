import './App.css';
import { initializeApp } from 'firebase/app';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signOut } from 'firebase/auth';
import Homepage from './components/Homepage';
import GamePage from './components/GamePage';
import AuthPage from './components/AuthPage';
import Register from './components/Register';
import EmailLogin from './components/EmailLogin';
import Header from './components/Header';
import { useState } from 'react';
import Level1 from './components/Level1';

const firebaseConfig = {
  apiKey: 'AIzaSyBWMBTSFZZbqkQY7weHsVi50NvIXJNUbqw',
  authDomain: 'find-waldo-game.firebaseapp.com',
  databaseURL: 'https://find-waldo-game-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'find-waldo-game',
  storageBucket: 'find-waldo-game.appspot.com',
  messagingSenderId: '87978521927',
  appId: '1:87978521927:web:7eb462ff31582ea5fac862',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  const [userEmail, setUserEmail] = useState('');
  const provider = new GoogleAuthProvider();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      const uid = user.uid;
      if (user) {
        setUserEmail(user.email);
      } else setUserEmail('Guest');
      console.log('auth state change logged in');

      // ...
    } else {
      // User is signed out
      console.log('auth state change sign out');

      // ...
    }
  });

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
        setUserEmail('Guest');
      })
      .catch((error) => {
        // An error happened.
        console.log('Sign-out Error.');
        console.log(error);
      });
  }
  let handleImgClick = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    console.log(x, y);
  };

  return (
    <BrowserRouter>
      <Header userEmail={userEmail} handleSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="/loginemail" element={<EmailLogin />} />
        <Route path="/level1" element={<Level1 handleImgClick={handleImgClick} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
