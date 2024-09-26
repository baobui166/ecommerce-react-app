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
  const [user, setUser] = useState({
    id: 1,
    username: "emilys",
    email: "emily.johnson@x.dummyjson.com",
    firstName: "Emily",
    lastName: "Johnson",
    gender: "female",
    image: "https://dummyjson.com/icon/emilys/128",
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT accessToken (for backward compatibility) in response and cookies
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // refreshToken in response and cookies
  });
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    localStorage.setItem("tokenUser", JSON.stringify(token));
    localStorage.setItem("productsCart", JSON.stringify(productsCart));
  }, [token, productsCart]);

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
