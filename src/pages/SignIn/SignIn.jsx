// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedInState } from 'redux/auth/auth.selectors';
import { signUpUser } from 'redux/operations';

export const SignIn = () => {
  // const loggedIn = useSelector(selectIsLoggedInState);
  const dispatch = useDispatch();

  const onsubmitRegistration = e => {
    e.preventDefault();

    // console.log(loggedIn);

    const form = e.currentTarget;
    // console.log(e.target.name.value);
    // console.log(form.elements.name.value);
    // console.log(form.elements.email.value);
    // console.log(form.elements.password.value);

    dispatch(
      signUpUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();

    // console.log(loggedIn);
  };
  return (
    <>
      <h2>Registration form:</h2>
      <form onSubmit={onsubmitRegistration}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          password
          <input type="password" name="password" />
        </label>

        <br />
        <button type="submit">Registration</button>
      </form>
    </>
  );
};
