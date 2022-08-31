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
import Swal from 'sweetalert2';
import ChooseCharacterModal from './components/ChooseCharacterModal';

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
  const [userEmail, setUserEmail] = useState('Guest');
  const [isModalOpen, setIsModalOpen] = useState(false);
  onAuthStateChanged(auth, (user) => {
    //popup on successful login
    const ToastAuthSuccess = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      ToastAuthSuccess.fire({
        icon: 'success',
        title: 'Signed in successfully',
      });

      setUserEmail(user.email);
      // console.log('auth state change logged in');
      // console.log(user.email);
      // ...
    } else {
      // User is signed out
      // console.log('auth state change sign out');
      // ...
    }
  });

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // console.log('Sign-out successful.');
        setUserEmail('Guest');
      })
      .catch((error) => {
        // An error happened.
        console.log('Sign-out Error.');
        console.log(error);
      });
  }
  let handleImgClick = (e) => {
    function sendCoords(x, y) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      const body = {
        test: 'event',
        level: 'level1',
        cordsY: y,
        cordsX: x,
      };

      const options = {
        method: 'POST',
        headers,
        mode: 'cors',
        body: JSON.stringify(body),
      };
      fetch('https://eoigvwbd7a4ked9.m.pipedream.net', options)
        .then((response) => response.json())
        .then((data) => {
          let isCordsCorrect = data.isCordsCorrect;
          console.log(isCordsCorrect);
          if (isCordsCorrect == true) alert('You found Waldo');
          else if (isCordsCorrect == false) alert('Its not Waldo');
        });
    }
    setIsModalOpen(true);
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    console.log(x, y);
    if (x && y) {
      // sendCoords(x, y);
    }
  };

  return (
    <BrowserRouter>
      <Header userEmail={userEmail} handleSignOut={handleSignOut} />
      <ChooseCharacterModal isModalOpen={isModalOpen} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="/loginemail" element={<EmailLogin userEmail={userEmail} />} />
        <Route path="/level1" element={<Level1 handleImgClick={handleImgClick} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
