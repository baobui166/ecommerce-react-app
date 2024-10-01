import { useQuery } from "@tanstack/react-query";
import { getAllProvider } from "../../service/apiProvider";

export const useProvider = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["provider"],
    queryFn: getAllProvider,
  });

  return { data, isLoading, error };
};
