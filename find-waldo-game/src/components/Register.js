// import React from 'react';
import { useForm } from 'react-hook-form';

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // console.log(errors);
  // console.log(watch('example')); // watch input value by passing the name of it
  let emailErrMsg = '';
  if (errors.Email) {
    console.log(errors.Email.type);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="regForm">
      <input type="text" placeholder="First name" {...register('First name', { required: true, maxLength: 80 })} />
      <input type="text" placeholder="Last name" {...register('Last name', { required: true, maxLength: 100 })} />
      <input
        type="text"
        placeholder="Email"
        {...register('Email', { required: true, minLength: 4, pattern: /^\S+@\S+$/i })}
      />
      {errors.Email && (
        <span>
          Incorrect email{errors.Email.type} {}
        </span>
      )}
      <input
        type="password"
        placeholder="Password"
        {...register('Password', { required: true, minLength: 6, maxLength: 20 })}
      />

      <input type="submit" />
    </form>
  );
}
