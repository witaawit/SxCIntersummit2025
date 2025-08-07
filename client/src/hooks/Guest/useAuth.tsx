import { API } from "@/services/API";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";

const useAuth = () => {
  const { setUser, clearUser } = useUserStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isLoading: isAuthLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await API.get("/auth/me");
      console.log(res.data);
      setUser(res.data.user); // Store in Zustand
      return res.data;
    },
    retry: false,
    enabled: false,
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: {
      email: string;
      password: string;
      remember: boolean;
    }) => {
      const res = await API.post("/auth/login", {
        email: credentials.email,
        password: credentials.password,
        remember: credentials.remember,
      });
      return res.data;
    },
    onSuccess: async (data) => {
      toast.success("Login successful");
      sessionStorage.setItem("token", data.token);
      await refetch(); // fetch and set the user

      setTimeout(() => {
        navigate("/");
      }, 1000);
    },

    onError: (e) => {
      if (axios.isAxiosError(e) && e.response) {
        const errorMessage = e.response.data.message || "Login Gagal";
        toast.error(errorMessage);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (formData: {
      name: string;
      email: string;
      password: string;
      referalCode?: string;
      remember: boolean;
    }) => {
      console.log(formData);

      const res = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      return res.data;
    },
    onSuccess: async ({ data }) => {
      toast.success("Registration successful");
    },

    onError: (e) => {
      if (axios.isAxiosError(e) && e.response) {
        const errorMessage = e.response.data.message || "Register Failed";
        toast.error(errorMessage);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    },
  });

  const logout = () => {
    // await API.post("/auths/logout");
    sessionStorage.removeItem("token");
    clearUser();
    queryClient.removeQueries({ queryKey: ["me"] });
    toast.success("Logout successful");

    navigate("/login");
  };

  const requestResetPassword = useMutation({
    mutationFn: async (email: string) => {
      const res = await API.post("/auth/forgotPassword", { email });

      return res;
    },
    onSuccess: () => {
      toast.success("OTP sent to your email");
    },
    onError: (e) => {
      if (axios.isAxiosError(e) && e.response) {
        const errorMessage = e.response.data.message || "Failed to verify OTP";
        toast.error(errorMessage);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    },
  });

  const requestNewOTP = useMutation({
    mutationFn: async (email: string) => {
      const res = await API.post("/auth/sendnewOTP", { email });
      return res;
    },
    onSuccess: () => {
      toast.success("OTP sent to your email");
    },
    onError: (e) => {
      if (axios.isAxiosError(e) && e.response) {
        const errorMessage =
          e.response.data.message || "Failed to send new OTP";
        toast.error(errorMessage);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    },
  });

  const verifyOTP = useMutation({
    mutationFn: async (formDetails: { email: string; otp: string }) => {
      const res = await API.post("/auth/verifyOtp", formDetails);
      return res;
    },
    onSuccess: () => {
      toast.success("OTP verified successfully");
    },
    onError: (e, variables) => {
      if (axios.isAxiosError(e) && e.response) {
        const errorMessage = e.response.data.message || "Failed to verify OTP";
        toast.error(errorMessage);
        setTimeout(() => {
          requestNewOTP.mutate(variables.email);
        }, 1000);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    },
  });

  const passwordMutation = useMutation({
    mutationFn: async (data: { oldPassword: string; newPassword: string }) => {
      const res = await API.post("/auth/resetPassword", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Password changed successfully");
    },
    onError: (e) => {
      if (axios.isAxiosError(e) && e.response) {
        const errorMessage =
          e.response.data.message || "Failed to change password";
        toast.error(errorMessage);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    },
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    // if remember me is enabled, use localStorage
    // if (token && loginTime) {
    //   const elapsedTime = Date.now() - parseInt(loginTime, 10);
    //   const oneDay = 24 * 60 * 60 * 1000;

    //   if (elapsedTime > oneDay) {
    //     logout();
    //   } else {
    //     const decoded = decodeToken(token);
    //     if (decoded) {
    //       setRole(decoded.role, decoded.id, isRemember);
    //       if (
    //         location.pathname.includes("/register") ||
    //         location.pathname.includes("/login")
    //       ) {
    //         toast.success("Login successful!");
    //         setTimeout(() => {
    //           navigate("/");
    //         }, 1000);
    //       }
    //     }
    //   }
    // }

    if (token) {
      refetch();
      if (
        location.pathname.includes("/register") ||
        location.pathname.includes("/login")
      ) {
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    }
  }, []);

  return {
    login: loginMutation.mutateAsync,
    loginLoading: loginMutation.isPending,
    registerAccount: registerMutation.mutateAsync,
    registerLoading: registerMutation.isPending,
    requestResetPassword: requestResetPassword.mutateAsync,
    requestResetPasswordLoading: requestResetPassword.isPending,
    requestNewOTP: requestNewOTP.mutateAsync,
    requestNewOTPLoading: requestNewOTP.isPending,
    verifyOTP: verifyOTP.mutateAsync,
    verifyOTPLoading: verifyOTP.isPending,
    changePassword: passwordMutation.mutateAsync,
    changePasswordLoading: passwordMutation.isPending,
    logout,
    isAuthLoading,
    isAuthError: isError,
  };
};

export default useAuth;
