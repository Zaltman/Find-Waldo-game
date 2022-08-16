import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export default function AuthPage() {
  return (
    <div className="App">
      <h1>Authentication</h1>
    </div>
  );
}
