import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import s from './errorFallback.module.css';

const ErrorFallback = ({ error = '', resetErrorBoundary }) => {
  return (
    <section className={s.error} role='alert'>
      <p className={s.text}>Something went wrong:</p>
      <pre className={s.message}>Can't display single card</pre>
      <Link to='/'>
        <Button onClick={resetErrorBoundary}>Go Back</Button>
      </Link>
    </section>
  );
};

export default ErrorFallback;
