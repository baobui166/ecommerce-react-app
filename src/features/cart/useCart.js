import { useQuery } from "@tanstack/react-query";
import { getAllCartByUser } from "../../service/apiCart";
import useAuth from "../../context/contextAuth";

export const useCart = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery({
    queryKey: ["cart", Number(user.id)],
    queryFn: () => getAllCartByUser(Number(user.id)),
    enabled: !!Number(user.id),
  });

  return { data, isLoading, error };
};
