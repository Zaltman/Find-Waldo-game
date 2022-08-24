import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';
export default function Header(props) {
  const auth = getAuth();
  let handleSignOut = props.handleSignOut;
  let userEmail = props.userEmail;
  let userElement;
  if (userEmail == 'Guest') {
    userElement = (
      <div className="flex h20px">
        <div className="userInfo">{userEmail}</div>
        <Link to={'/loginemail'}>Log in</Link>
      </div>
    );
  } else {
    userElement = (
      <div className="flex h20px">
        <div className="userInfo">{userEmail}</div>
        <button onClick={handleSignOut}>Log out</button>
      </div>
    );
  }

  return (
    <div className="App-header">
      <div className="navCont">
        <Link to={'/'}>Home</Link>
        <Link to={'/gamepage'}>Game</Link>
      </div>
      {userElement}
    </div>
  );
}
