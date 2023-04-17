import { createContext, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './authSlice';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { email, password } = useSelector(state => state.auth);

  const handleLogin = (email, password) => {
    dispatch(login({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AuthContext.Provider value={{ email, password, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};