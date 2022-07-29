import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Button, FormInput } from '..';

import { validate } from '../../utils/utils';

import useForm from '../../hooks/useForm';

import s from './loginForm.module.css';

const LoginForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  const { email, password } = values;
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();

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
          error={errors.email}
        />

        <FormInput
          onChange={handleChange}
          value={password}
          label='Password'
          type='password'
          name='password'
          autoComplete='off'
          error={errors.password}
        />

        <Button type='submit'>Login</Button>
      </form>
    </section>
  );
};

export default LoginForm;
