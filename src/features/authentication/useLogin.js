import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../service/apiAuth";
import toast from "react-hot-toast";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isLoading: isLoadingLogin,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["accesstoken"], data.token);
      localStorage.setItem("accessToken", data.accessToken);
      toast.success("Login success");
      navigate("/", { replace: true });
    },
    onError: () => {
      console.error("Error in login:", error);
      toast.error("Login failed: " + error.message);
    },
  });

  return { login, isLoadingLogin, error };
};
