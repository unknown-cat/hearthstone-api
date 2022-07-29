import React from 'react';

import s from './formInput.module.css';

const FormInput = ({ error, label, ...otherProps }) => {
  return (
    <div className={s.container}>
      {label && <label>{label}</label>}
      <input className={s.input} {...otherProps} />
      {error && <strong className={s.errorMessage}>{error}</strong>}
    </div>
  );
};

export default FormInput;
