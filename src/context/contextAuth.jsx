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
  const denomination = "$";
  const [sort, setSort] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [category, setCategory] = useState("");
  const [liked, setLiked] = useState([]);
  const [user, setUser] = useState();
  useEffect(() => {
    localStorage.setItem("tokenUser", JSON.stringify(token));
  }, [token]);

  const value = {
    token,
    setToken,
    denomination,
    sort,
    setSort,
    sortPrice,
    setSortPrice,
    category,
    setCategory,
    liked,
    setLiked,
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
export default useAuth;
