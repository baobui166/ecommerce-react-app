import { useQuery } from "@tanstack/react-query";
import { getAllCartByUser } from "../../service/apiCart";
import useAuth from "../../context/contextAuth";

export const useCart = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getAllCartByUser(user.id),
  });

  return { data, isLoading, error };
};
