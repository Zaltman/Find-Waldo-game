import { GoogleAuthProvider } from 'firebase/auth';
import Header from './Header';

const provider = new GoogleAuthProvider();

export default function AuthPage() {
  return (
    <div className="App">
      <h1>Authentication</h1>
    </div>
  );
}
