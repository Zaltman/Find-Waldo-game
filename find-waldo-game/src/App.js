import './App.css';
import { initializeApp } from 'firebase/app';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Homepage from './components/Homepage';
import GamePage from './components/GamePage';
import AuthPage from './components/AuthPage';
import Register from './components/Register';
import EmailLogin from './components/EmailLogin';

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="/loginemail" element={<EmailLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
