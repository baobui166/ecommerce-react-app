import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "../../service/apiProduct";
import { useParams } from "react-router-dom";

export const useProductDetail = () => {
  const { id } = useParams();
  const productId = Number(id);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductDetail(productId),
    retry: false,
    refetchOnWindowFocus: true, // Refetch lại khi người dùng quay lại cửa sổ,
  });

  return { product, isLoading, error };
};
