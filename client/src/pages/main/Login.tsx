import { loginSchema } from "@/types/schema";
import React, { useState } from "react";
import { Link, type CreateRequestHandlerFunction } from "react-router-dom";
import type { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveLeft } from "lucide-react";

export type FormFields = z.infer<typeof loginSchema>;

const Login = () => {
  // Login state
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  // Reset password state
  const [resetStep, setResetStep] = useState<
    null | "request" | "verify" | "new_password"
  >(null); // null | 'request' | 'verify' | 'new_password'
  const [resetEmail, setResetEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // React Hook Form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<FormFields> = async (data) => {
    console.log("Login attempt with:", data);
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
  };

  const handleTabSwitch = (tab: "login" | "signup" | "register") => {
    setActiveTab(tab);
    setResetStep(null); // Reset password flow when switching tabs
  };

  // Password reset handlers
  const handleForgotPassword = () => {
    setResetStep("request");
  };

  const handleResetRequest = (e) => {
    e.preventDefault();
    console.log("Reset requested for:", resetEmail);
    // In a real app, you would send the email and then:
    setResetStep("verify");
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    console.log("Verifying code:", resetCode);
    // Verify the code with your backend
    setResetStep("new_password");
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log(
      "Password reset for:",
      resetEmail,
      "New password:",
      newPassword
    );
    // Submit to your backend
    setResetStep(null); // Return to login
  };

  const handleCancelReset = () => {
    setResetStep(null);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center w-full    sm:p-0">
      {/* Main Container */}
      <div className="relative w-full flex justify-around  items-center  min-h-[800px] sm:min-h-screen bg-white overflow-hidden rounded-lg sm:rounded-none">
        {/* Background Image */}
        <img
          className="absolute w-full h-full object-cover"
          alt="Background"
          src="/images/pexels-tanishka-357202-973226-1.png"
        />

        {/* Back Button */}
        <div className="cursor-pointer absolute top-15 left-15 z-10">
          <MoveLeft size={40} />
        </div>

        {/* Gray Overlay (Left Half) */}
        <div className="absolute w-full md:w-1/2 left-0 h-full bg-[#d9d9d9]" />

        {/* Gradient Overlay */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[#c4ef7b] via-[#79ccea] to-[#8257a9] opacity-[0.77]" />

        {/* Decorative Group Image */}
        <img
          className="hidden md:block absolute bottom-[75%] right-0 w-[100px] lg:w-[177px] h-auto lg:h-[259px] mix-blend-overlay"
          alt="Decoration"
          src="/images/group-1000002333.png"
        />

        {/* Center Line */}
        <img
          className="absolute top-[50px] sm:top-[63px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1247px] h-[2px] sm:h-[3px]"
          alt="Divider"
          src="/images/line-1.svg"
        />

        {/* Logo */}
        <div>
          <img
            className=" md:translate-x-0 w-[300px] sm:w-[400px] "
            alt="Logo"
            src="/images/logo-intersummit-3.png"
          />
        </div>

        {/* "Speak Ideas, Spark" and "MovhandleLoginlog inement" Text */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <div className="text-2xl md:text-3xl font-bold">
            <span className="text-white">Speak </span>
            <span className="bg-gradient-to-r from-[#C4EF7B] to-[#79CCEA] bg-clip-text text-transparent">
              Ideas
            </span>
            <span className="text-white">, Spark</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold mt-1">
            <span className="bg-gradient-to-r from-[#C4EF7B] to-[#79CCEA] bg-clip-text text-transparent">
              Movement
            </span>
          </div>
        </div>

        {/* Login/Reset Form */}
        {/* <div className="absolute top-1/2  transform -translate-y-1/2 -translate-x-1/2  md:right-[30px] lg:right-[70px] w-full max-w-[95vw] sm:max-w-[400px] lg:max-w-[456px]"> */}
        <div className="w-full max-w-[95vw] sm:max-w-[400px] lg:max-w-[456px] mr-10">
          {!resetStep ? (
            // LOGIN FORM
            <div className="relative bg-transparent bg-opacity-20 backdrop-blur-sm rounded-xl p-6 sm:p-8 ">
              <form onSubmit={handleSubmit(handleLogin)}>
                {/* Tabs */}
                <nav
                  className="flex justify-center mb-6 sm:mb-8"
                  role="tablist"
                >
                  <button
                    type="button"
                    onClick={() => handleTabSwitch("login")}
                    className={`text-[24px] sm:text-[29.4px] font-bold leading-[41.2px] mr-4 ${
                      activeTab === "login"
                        ? "cursor-pointer bg-clip-text text-transparent bg-gradient-to-b from-[#562780] to-[#8257a9] underline decoration-[#8257a9] decoration-1 underline-offset-10"
                        : "text-[#727086]"
                    }`}
                  >
                    Login
                  </button>
                  <Link
                    to="/signup"
                    className="text-[#737186] text-1xl sm:text-[29.4px] font-bold hover:opacity-80 transition-opacity"
                  >
                    Register
                  </Link>
                </nav>

                {/* Email Field */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-white text-sm sm:text-[14.1px] font-bold mb-1">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email address"
                    className="w-full h-[46px] px-4 text-black text-xs sm:text-sm bg-[#f2f2f2] rounded-[10px] border border-[#aeaeae] placeholder-[#00000073] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <p
                    className={`${
                      errors.email ? "text-red-600" : "text-transparent"
                    }`}
                  >
                    {errors.email?.message || "a"}
                  </p>
                </div>

                {/* Password Field */}
                <div className="mb-4 sm:mb-6">
                  <label className="block text-white text-sm sm:text-[14.1px] font-bold mb-1">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="Enter your password"
                      className="w-full h-[46px] px-4 pr-10 text-black text-xs sm:text-sm bg-[#f2f2f2] rounded-[10px] border border-[#aeaeae] placeholder-[#00000073] focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 focus:outline-none"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      <img src="/images/vector.svg" alt="eye-icon" />
                    </button>
                  </div>
                  <p
                    className={`${
                      errors.password ? "text-red-600" : "text-transparent"
                    }`}
                  >
                    {errors.password?.message ? errors.password?.message : "a"}
                  </p>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="mt-1 text-xs text-white cursor-pointer font-bold hover:underline float-right"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-12 mt-4 bg-gradient-to-b from-[#562780] to-[#8257a9] text-white font-bold text-xs sm:text-sm rounded-[10px] hover:opacity-90 cursor-pointer"
                >
                  Log In
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-4 text-white text-xs">
                    or
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Google Login */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="w-full h-12 bg-white rounded-[7px] border border-[#bababa] hover:bg-gray-100 flex items-center justify-center gap-2"
                >
                  <img
                    src="/images/google-logo.png"
                    alt="Google logo"
                    className="w-4 h-4"
                  />
                  <span className="text-black text-xs font-bold">
                    Sign in with Google
                  </span>
                </button>

                {/* Register Link */}
                <p className="mt-6 text-center text-xs text-white">
<<<<<<< HEAD:frontend/src/pages/Login.jsx
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-800 underline hover:text-blue-600"
                    onClick={() => handleTabSwitch("register")}
                  >
                    Register Now!
                  </button>
=======
                  Belum punya akun?{" "}
                  <Link to="/signup">
                    <button
                      type="button"
                      className="text-blue-800 underline hover:text-blue-600 cursor-pointer"
                      onClick={() => handleTabSwitch("register")}
                    >
                      Register Now!
                    </button>
                  </Link>
>>>>>>> About-Mike:client/src/pages/main/Login.tsx
                </p>
              </form>
            </div>
          ) : resetStep === "request" ? (
            // REQUEST RESET FORM
            /* FORGOT PASSWORD FORM WITH WHITE BACKGROUND */
            <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex justify-start mb-4">
                <button
                  type="button"
                  className="w-10 h-10 bg-white rounded-full hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center cursor-pointer"
                  onClick={handleCancelReset}
                >
                  <img
                    className="w-6 h-[15px]"
                    alt="Back icon"
                    src="/images/back-icon.svg" // Make sure this path is correct
                  />
                </button>
              </div>
              <form
                onSubmit={handleResetRequest}
                className="flex flex-col items-center"
              >
                {/* Header Section - Now Centered */}
                <div className="mb-6 text-center">
                  <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#8257a9] text-[32px] tracking-[-0.35px]">
                    Forgot Password?
                  </h1>
                  <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[-0.18px]">
                    Recover your password if you have forgot the password!
                  </p>
                </div>

                {/* Email Input - Centered */}
                <div className="flex flex-col items-center mb-6 w-full">
                  <div className="w-[343px] text-left">
                    {" "}
                    {/* Container khusus untuk label */}
                    <label
                      htmlFor="email-input"
                      className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[-0.18px] mb-1"
                    >
                      Email
                    </label>
                  </div>
                  <div className="flex w-[343px] items-center gap-[15px] px-5 py-4 rounded-2xl border-[1.5px] border-solid border-[#8257a9] focus-within:ring-2 focus-within:ring-[#8257a9]">
                    <img
                      className="w-[19.2px] h-[19.18px]"
                      alt="Email icon"
                      src="/images/email-icon.svg"
                    />
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Ex: abc@example.com"
                      className="w-full [font-family:'Inter-Italic',Helvetica] italic text-black text-base tracking-[-0.18px] bg-transparent border-none outline-none placeholder:text-[#c7c7c7]"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button - Centered */}
                <div className="flex justify-center w-full">
                  <button
                    type="submit"
                    className="flex w-[343px] justify-center py-4 bg-[#8257a9] rounded-2xl hover:bg-[#6d4a8f] transition-colors duration-200"
                  >
                    <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-white text-base tracking-[-0.18px]">
                      Submit
                    </span>
                  </button>
                </div>
              </form>
            </div>
          ) : resetStep === "verify" ? (
            // VERIFY CODE FORM
            <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex justify-start mb-4">
                <button
                  type="button"
                  className="w-10 h-10 bg-white rounded-full hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                  onClick={handleCancelReset}
                >
                  <img
                    className="w-6 h-[15px]"
                    alt="Back icon"
                    src="/images/back-icon.svg" // Make sure this path is correct
                  />
                </button>
              </div>
              <form onSubmit={handleVerifyCode}>
                {/* Header Section - Centered */}
                <div className="mb-6 text-center">
                  <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#8257a9] text-[32px] tracking-[-0.35px]">
                    Enter Verification Code
                  </h1>
                  <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[-0.18px]">
                    We sent a verification code to your email
                    <span className="font-bold"></span>
                  </p>
                </div>

                {/* Verification Code Input - Consistent with Email Form */}
                <div className="flex flex-col items-center mb-6 w-full">
                  <div className="w-[343px] text-left">
                    <label
                      htmlFor="code-input"
                      className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[-0.18px] mb-1"
                    >
                      Verification Code <span className="text-red-600">*</span>
                    </label>
                  </div>
                  <div className="flex w-[343px] items-center gap-[15px] px-5 py-4 rounded-2xl border-[1.5px] border-solid border-[#8257a9] focus-within:ring-2 focus-within:ring-[#8257a9]">
                    <input
                      id="code-input"
                      type="text"
                      value={resetCode}
                      onChange={(e) => setResetCode(e.target.value)}
                      placeholder="Enter 6-digit code"
                      className="w-full [font-family:'Inter-Regular',Helvetica] text-black text-base tracking-[-0.18px] bg-transparent border-none outline-none placeholder:text-[#c7c7c7] placeholder:italic"
                      required
                    />
                  </div>
                </div>

                {/* Buttons - Consistent with Email Form */}
                <div className="flex flex-col items-center gap-4 w-full">
                  <button
                    type="submit"
                    className="flex w-[343px] justify-center py-4 bg-[#8257a9] rounded-2xl hover:bg-[#6d4a8f] transition-colors duration-200"
                  >
                    <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-white text-base tracking-[-0.18px]">
                      Verify Code
                    </span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // NEW PASSWORD FORM
            <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex justify-start mb-4">
                <button
                  type="button"
                  className="w-10 h-10 bg-white rounded-full hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                  onClick={handleCancelReset}
                >
                  <img
                    className="w-6 h-[15px]"
                    alt="Back icon"
                    src="/images/back-icon.svg" // Make sure this path is correct
                  />
                </button>
              </div>
              <form onSubmit={handlePasswordReset}>
                {/* Header Section - Consistent with other forms */}
                <div className="mb-6 text-center">
                  <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#8257a9] text-[32px] tracking-[-0.35px]">
                    Create New Password
                  </h1>
                </div>

                {/* Password Input - Consistent with Email Form */}
                <div className="flex flex-col items-center mb-6 w-full">
                  <div className="w-[343px] text-left">
                    <label
                      htmlFor="new-password"
                      className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[-0.18px] mb-1"
                    >
                      New Password <span className="text-red-600">*</span>
                    </label>
                  </div>
                  <div className="flex w-[343px] items-center gap-[15px] px-5 py-4 rounded-2xl border-[1.5px] border-solid border-[#8257a9] focus-within:ring-2 focus-within:ring-[#8257a9]">
                    <img
                      className="w-[19.2px] h-[19.18px]"
                      alt="Password icon"
                      src="/images/lock-icon.svg"
                    />
                    <input
                      id="new-password"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full [font-family:'Inter-Regular',Helvetica] text-black text-base tracking-[-0.18px] bg-transparent border-none outline-none placeholder:text-[#c7c7c7] placeholder:italic"
                      required
                    />
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="flex flex-col items-center mb-6 w-full">
                  <div className="w-[343px] text-left">
                    <label
                      htmlFor="confirm-password"
                      className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[-0.18px] mb-1"
                    >
                      Confirm Password <span className="text-red-600">*</span>
                    </label>
                  </div>
                  <div className="flex w-[343px] items-center gap-[15px] px-5 py-4 rounded-2xl border-[1.5px] border-solid border-[#8257a9] focus-within:ring-2 focus-within:ring-[#8257a9]">
                    <img
                      className="w-[19.2px] h-[19.18px]"
                      alt="Password icon"
                      src="/images/lock-icon.svg"
                    />
                    <input
                      id="confirm-password"
                      type="password"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder="Confirm new password"
                      className="w-full [font-family:'Inter-Regular',Helvetica] text-black text-base tracking-[-0.18px] bg-transparent border-none outline-none placeholder:text-[#c7c7c7] placeholder:italic"
                      required
                    />
                  </div>
                </div>

                {/* Buttons - Consistent with other forms */}
                <div className="flex flex-col items-center gap-4 w-full">
                  <button
                    type="submit"
                    className="flex w-[343px] justify-center py-4 bg-[#8257a9] rounded-2xl hover:bg-[#6d4a8f] transition-colors duration-200"
                  >
                    <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-white text-base tracking-[-0.18px]">
                      Reset Password
                    </span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
