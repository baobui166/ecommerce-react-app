import { useQuery } from "@tanstack/react-query";
import { getAllCartByUser } from "../../service/apiCart";
import useAuth from "../../context/contextAuth";

export const useCart = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["cart", user.id],
    queryFn: () => getAllCartByUser(user.id),
    enabled: !!user.id,
  });

  return { data, isLoading, error };
};
