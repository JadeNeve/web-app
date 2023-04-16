import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  const login = (email, password) => {
    setEmail(email);
    setPassword(password);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  const logout = () => {
    setEmail(null);
    setPassword(null);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  if (email && password) {
    return (
      <AuthContext.Provider value={{ email, password, logout }}>
        {children}
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={{ email, password, login }}>
        {children}
      </AuthContext.Provider>
    );
  }
};

export const useAuth = () => {
  return useContext(AuthContext);
};