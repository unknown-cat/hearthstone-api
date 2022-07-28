import { loginUser, logoutUser, addUser } from './features/user/userSlice';

export const authMiddleware = (store) => (next) => (action) => {
  const userData = store.getState().user.user;

  if (loginUser.match(action) && userData.name) {
    localStorage.setItem('user', JSON.stringify({ ...userData, guest: false }));
  }

  if (logoutUser.match(action)) {
    localStorage.setItem('user', JSON.stringify({ ...userData, guest: true }));
  }

  if (addUser.match(action)) {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  return next(action);
};
