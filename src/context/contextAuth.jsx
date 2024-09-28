import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState(() => {
    const products = localStorage.getItem("productsCart");
    try {
      return products ? JSON.parse(products) : [];
    } catch (error) {
      console.error("Error parsing productsCart from localStorage:", error);
      return [];
    }
  });

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
  const [quantity, setQuantity] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [category, setCategory] = useState("");
  const [liked, setLiked] = useState([]);
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      return null;
    }
    try {
      const data = JSON.parse(user);
      return data;
    } catch (error) {
      console.error("Invalid user format: ", error.message);
      return null;
    }
  });
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

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
    limit,
    setLimit,
    quantity,
    setQuantity,
    productsCart,
    setProductsCart,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
export default useAuth;
