import React from 'react';

import { Button, FormInput } from '..';

import s from './loginForm.module.css';

const LoginForm = () => {
  return (
    <section className={s.loginContainer}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput label='Email' type='email' name='email' required />

        <FormInput
          label='Password'
          type='password'
          name='password'
          title='Enter a password consisting of 6-20 hexadecimal digits'
          pattern='[0-9a-fA-F]{4,8}'
          minLength='6'
          maxLength='20'
          required
          autoComplete='off'
        />

        <Button type='submit'>Sign In</Button>
      </form>
    </section>
  );
};

export default LoginForm;
