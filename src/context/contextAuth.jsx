import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const token = JSON.parse(localStorage.getItem("tokenUser"));

    if (!token) {
      return console.error("Don't have token");
    }

    return token;
  });

  useEffect(() => {
    localStorage.setItem("tokenUser", JSON.stringify(token));
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
export default useAuth;
