import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Header() {
  const auth = getAuth();
  let userEmail = 'before change';
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      const uid = user.uid;
      console.log(user.email);
      userEmail = user.email;
      console.log('auth state change logged in');

      console.log({ userEmail });
      // ...
    } else {
      // User is signed out
      console.log('auth state change sign out');

      // ...
    }
  });

  return (
    <div className="App-header">
      <div className="navCont">
        <button>Home</button>
        <button>About</button>
        <button>Gallery {userEmail}</button>
      </div>
      <div>Test</div>
      <div className="userInfo">{userEmail}</div>
    </div>
  );
}
