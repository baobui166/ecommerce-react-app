import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../../service/apiProduct";

export const useCategories = () => {
  const {
    data: categories,
    isLoading: isLoadingCategories,
    error,
  } = useQuery({
    queryKey: ["categories"], // Tên query key
    queryFn: getAllCategory,
  });

  return { categories, isLoadingCategories, error };
};
