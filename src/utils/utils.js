export const resetFormFields = (setData, defaultData) => {
  setData(defaultData);
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');
  const user = result ? JSON.parse(result) : { guest: true };
  return user;
};
