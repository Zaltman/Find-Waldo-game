// import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const [rerender, setRerender] = useState(0);
  const watchPw1 = watch('Password');
  const watchPw2 = watch('Password2');
  const onSubmit = (e) => {
    console.log(watchPw1);
    console.log(watchPw2);
    if (watchPw1 !== watchPw2) {
      setError('Password2', { type: 'focus' }, { shouldFocus: true });
    }
    console.log(errors.Password2);
    setRerender(rerender + 1);
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
    }
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
  }
  let password2ErrMsg = '';
  if (errors.Password2) {
    password2ErrMsg = errors.Password2.type;
    if (errors.Password2.type === 'minLength') {
      password2ErrMsg = '6+ letters required';
    }
    if (errors.Password2.type === 'required') {
      password2ErrMsg = 'Required';
    }
    if (errors.Password2.type === 'focus') {
      password2ErrMsg = 'Passwords does not match';
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="regForm">
      <label htmlFor="fName">First name</label>
      <input
        type="text"
        placeholder="First name"
        id="fName"
        {...register('First name', { required: true, maxLength: 80 })}
      />
      <label htmlFor="lName">Last name</label>

      <input
        type="text"
        id="lName"
        placeholder="Last name"
        {...register('Last name', { required: true, maxLength: 100 })}
      />
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
      <label htmlFor="passwordInput2">Repeat password</label>
      <input
        id="passwordInput2"
        type="password"
        placeholder="Password"
        {...register('Password2', { required: true, minLength: 6, maxLength: 20 })}
      />
      {errors.Password2 && <span>{password2ErrMsg}</span>}

      <input type="submit" />
    </form>
  );
}
