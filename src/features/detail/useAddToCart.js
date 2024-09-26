import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../../service/apiCart";
import toast from "react-hot-toast";

export const useAddToCart = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      toast.success("New item successfully added");
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
};
