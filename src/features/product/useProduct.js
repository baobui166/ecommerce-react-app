import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../service/apiProduct";

export const useProduct = () => {
  const {
    data: products,
    isLoading: isLoadingProduct,
    error,
  } = useQuery({
    queryKey: ["products"], // Tên query key
    queryFn: getAllProducts,
  });

  return { products, isLoadingProduct, error };
};
