import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../service/apiAuth";
import toast from "react-hot-toast";
import useAuth from "../../context/contextAuth";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const {
    mutate: login,
    isLoading: isLoadingLogin,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      if (data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        toast.success("Login success");
        setUser(data);
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

  return { login, isLoadingLogin, error };
};
