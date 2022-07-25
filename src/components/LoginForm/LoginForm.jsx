import React, { useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../contexts/userContext';

import { Button, FormInput } from '..';

import { resetFormFields } from '../../utils/utils';

import s from './loginForm.module.css';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const { user, setUser, setIsLoggedIn, isLoggedIn } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.email === formFields.email &&
      user.password === formFields.password
    ) {
      setUser((prevState) => {
        return {
          ...prevState,
          guest: false,
        };
      });
      setIsLoggedIn(true);
    }

    resetFormFields(setFormFields, defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  }, [isLoggedIn, navigate]);

  return (
    <section className={s.loginContainer}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          value={email}
          label='Email'
          type='email'
          name='email'
          required
        />

        <FormInput
          onChange={handleChange}
          value={password}
          label='Password'
          type='password'
          name='password'
          title='Enter a password consisting of 6-20 hexadecimal digits'
          required
          autoComplete='off'
        />

        <Button type='submit'>{isLoggedIn ? 'Success' : 'Login'}</Button>
      </form>
    </section>
  );
};

export default LoginForm;
