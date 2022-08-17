import { GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

const provider = new GoogleAuthProvider();

export default function AuthPage() {
  return (
    <div className="App">
      <Link to={'/register'}>Register</Link>
      <h1>Authentication</h1>
    </div>
  );
}
