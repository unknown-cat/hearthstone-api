import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, loginUser } from '../features/user/userSlice';
import { getUserFromLocalStorage } from '../utils/utils';

const initialState = {
  name: '',
  email: '',
  password: '',
  guest: true,
  favorites: [],
  history: [],
};

const useForm = (validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email: lsEmail, password: lsPassword } = getUserFromLocalStorage();
    const { name, email, password } = values;

    if (name && email && password) {
      dispatch(addUser(values));
    }

    if (!name && email === lsEmail && password === lsPassword) {
      dispatch(loginUser(values));
    }

    setErrors(validate(values));
  };

  return {
    values,
    handleChange,
    errors,
    handleSubmit,
  };
};

export default useForm;
