import React from 'react';

import s from './formInput.module.css'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className={s.form}>
      {label && <label>{label}</label>}
      <input className={s.input} {...otherProps} />
    </div>
  );
};

export default FormInput;
