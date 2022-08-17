import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Homepage from './Homepage';
import GamePage from './GamePage';
import AuthPage from './AuthPage';
import Register from './Register';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/authpage" element={<AuthPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
