import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../service/apiAuth";
import toast from "react-hot-toast";

export const useLogin = () => {
  const navigate = useNavigate();

  const {
    mutate: login,
    isLoading: isLoadingLogin,
    data,
    error,
  } = useMutation({
    mutationFn: (username, password) => loginApi(username, password),
    onSuccess: (data) => {
      if (data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        toast.success("Login success");
        navigate("/", { replace: true });
      } else {
        toast.error("Login failed: Invalid response");
      }
    },
    onError: (error) => {
      // Kiểm tra và hiển thị thông báo lỗi rõ ràng
      const errorMessage =
        error?.response?.data?.message || error.message || "Unknown error";
      toast.error("Login failed: " + errorMessage);
    },
  });

  return { login, isLoadingLogin, data, error };
};
