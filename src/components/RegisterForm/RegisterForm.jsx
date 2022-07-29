import { Button, FormInput } from '..';

import { validate } from '../../utils/utils';

import useForm from '../../hooks/useForm';

import s from './registerForm.module.css';

const RegisterForm = () => {
  const { handleSubmit, handleChange, values, errors } = useForm(validate);
  const { name, email, password } = values;

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
          error={errors.name}
        />
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
        <Button type='submit'>Register</Button>
      </form>
    </section>
  );
};

export default RegisterForm;
