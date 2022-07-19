import React from 'react';

import { Button, FormInput } from '..';

import s from './registerForm.module.css';

const RegisterForm = () => {
  return (
    <section className={s.registerContainer}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form>
        <FormInput label='Name' type='text' name='displayName' required />

        <FormInput label='Email' type='email' name='email' required />

        <FormInput
          label='Password'
          type='password'
          name='password'
          title='Enter an password consisting of 6-12 hexadecimal digits'
          pattern='[0-9a-fA-F]{4,8}'
          minLength='6'
          maxLength='12'
          required
          autoComplete='off'
        />

        <FormInput
          label='Confirm Password'
          type='password'
          name='cofirmPassword'
          required
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </section>
  );
};

export default RegisterForm;
