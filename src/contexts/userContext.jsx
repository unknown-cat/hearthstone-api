import { createContext, useState, useEffect } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!user.guest && !isLoggedIn) setIsLoggedIn(true);
  }, [user, isLoggedIn]);

  const value = {
    user,
    setUser,
    setIsLoggedIn,
    isLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
