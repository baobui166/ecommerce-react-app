import { useMutation } from "@tanstack/react-query";
import { searchProduct } from "../../service/apiProduct";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export const useSearch = () => {
  const { query } = useParams();

  const { data, mutate, isLoading, error } = useMutation({
    mutationFn: () => searchProduct(query),
    onError: (error) => {
      // Kiểm tra và hiển thị thông báo lỗi rõ ràng
      const errorMessage =
        error?.response?.data?.message || error.message || "Unknown error";
      toast.error("Search failed: " + errorMessage);
    },
  });

  return { data, mutate, isLoading, error };
};
