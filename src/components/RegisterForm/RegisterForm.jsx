import React, { useContext, useState } from 'react';

import { UserContext } from '../../contexts/userContext';

import { Button, FormInput } from '..';

import { resetFormFields } from '../../utils/utils';

import s from './registerForm.module.css';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const { setUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password } = formFields;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...formFields, guest: true });
    resetFormFields(setFormFields, defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <section className={s.registerContainer}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          value={name}
          label='Name'
          type='text'
          name='name'
          required
        />
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
          title='Enter an password consisting of 6-12 hexadecimal digits'
          autoComplete='off'
          required
        />
        <Button type='submit'>Register</Button>
      </form>
    </section>
  );
};

export default RegisterForm;
