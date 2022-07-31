import React from 'react';

import s from './button.module.css';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className={s.button} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
