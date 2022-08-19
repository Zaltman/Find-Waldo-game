import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';
export default function Header(props) {
  const auth = getAuth();
  // console.log(props);
  let handleSignOut = props.handleSignOut;
  let userEmail = props.userEmail;
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User

  //     const uid = user.uid;
  //     console.log(user.email);
  //     userEmail = user.email;
  //     console.log('auth state change logged in');

  //     // console.log({ userEmail });
  //     // ...
  //   } else {
  //     // User is signed out
  //     console.log('auth state change sign out');

  //     // ...
  //   }
  // });
  let userElement;
  if (userEmail == 'Guest') {
    userElement = (
      <div className="flex h20px">
        <div className="userInfo">{userEmail}</div>
        <button>Log in</button>
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
