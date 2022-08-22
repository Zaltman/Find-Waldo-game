import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import Header from './Header';
import { Link } from 'react-router-dom';
export default function EmailLogin() {
  const auth = getAuth();
  let userEmail = '';

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User

  //     const uid = user.uid;
  //     console.log(user.email);
  //     userEmail = user.email;
  //     console.log('auth state change logged in');

  //     console.log({ userEmail });
  //     // ...
  //   } else {
  //     // User is signed out
  //     console.log('auth state change sign out');

  //     // ...
  //   }
  // });
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const watchEmail = watch('Email');
  const watchPw = watch('Password');

  let onSubmit = (e) => {
    // e.preventDefault();
    signInWithEmailAndPassword(auth, watchEmail, watchPw)
      .then((userCredential) => {
        // Signed in
        console.log('ain');
        const user = userCredential.user;
        console.log(user);
        window.location.href = '/';

        // ...
      })
      .catch((error) => {
        console.log('nain');
        const errorCode = error.code;
        const errorMessage = error.message;
        setError('Password', { type: errorCode }, { shouldFocus: true });
        console.log(errors.Password);
        passwordErrMsg = errorCode;
      });
  };
  let emailErrMsg = '';
  if (errors.Email) {
    emailErrMsg = errors.Email.type;
    if (errors.Email.type === 'minLength') {
      emailErrMsg = 'Too short';
    }
    if (errors.Email.type === 'required') {
      emailErrMsg = 'Required';
    }
    if (errors.Email.type === 'pattern') {
      emailErrMsg = 'Incorrect format';
    } else if (emailErrMsg == '') emailErrMsg = errors.Email.type;
  }
  let passwordErrMsg = '';
  if (errors.Password) {
    passwordErrMsg = errors.Password.type;
    if (errors.Password.type === 'minLength') {
      passwordErrMsg = '6+ letters required';
    }
    if (errors.Password.type === 'required') {
      passwordErrMsg = 'Required';
    }
    if (errors.Password.type === 'auth/wrong-password') {
      passwordErrMsg = 'Incorrect password';
    }

    if (errors.Password.type === 'auth/user-not-found') {
      passwordErrMsg = 'No user with this email';
    } else if (passwordErrMsg == '') passwordErrMsg = errors.Password.type;
  }

  return (
    <div>
      {/* <Header /> */}
      <form onSubmit={handleSubmit(onSubmit)} id="regForm">
        <label htmlFor="emailInput">Email</label>
        <input
          type="text"
          id="emailInput"
          placeholder="Email"
          {...register('Email', { required: true, minLength: 4, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email && <span>{emailErrMsg}</span>}

        <label htmlFor="passwordInput">Password</label>
        <input
          id="passwordInput"
          type="password"
          placeholder="Password"
          {...register('Password', { required: true, minLength: 6, maxLength: 20 })}
        />
        {errors.Password && <span>{passwordErrMsg}</span>}
        <input type="submit" />
        <Link to={'/register'}>No account? Register</Link>
      </form>
    </div>
  );
}
