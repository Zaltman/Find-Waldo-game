import { GoogleAuthProvider } from 'firebase/auth';
import Header from './Header';

const provider = new GoogleAuthProvider();

export default function AuthPage() {
  return (
    <div className="App">
      <Header />
      <h1>Authentication</h1>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <h2>Id esse neque maxime itaque.</h2>
      <h2>Animi dolores maiores culpa laudantium!</h2>
    </div>
  );
}
