import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const tokenString = localStorage.getItem("tokenUser");

    // Kiểm tra xem token có tồn tại hay không
    if (!tokenString) {
      console.error("Don't have token");
      return null;
    }

    try {
      const token = JSON.parse(tokenString);
      return token;
    } catch (error) {
      console.error("Invalid token format: ", error.message);
      return null;
    }
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
