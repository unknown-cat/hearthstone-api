export const resetFormFields = (setData, defaultData) => {
  setData(defaultData);
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');

  try {
    const user = result ? JSON.parse(result) : { guest: true };
    return user;
  } catch (err) {
    console.error(err.message);
    return { guest: true };
  }
};
