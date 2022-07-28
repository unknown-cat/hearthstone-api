import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '../../features/user/userSlice';

import { Button, FormInput } from '..';

import { resetFormFields } from '../../utils/utils';

import s from './loginForm.module.css';

const defaultFormFields = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formFields));
    resetFormFields(setFormFields, defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    if (!user.guest) navigate('/');
  }, [user.guest, navigate]);

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

        <Button type='submit'>Login</Button>
      </form>
    </section>
  );
};

export default LoginForm;
