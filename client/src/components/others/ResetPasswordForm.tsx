import useAuth from "@/hooks/Guest/useAuth";
import type { email } from "node_modules/zod/dist/types/v4/core/regexes";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../ui/LoadingSpinner";
import { resetPass } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
export type FormFields = z.infer<typeof resetPass>;
type ResetPasswordProps = {
  onSuccess: () => void;
  onCancel: () => void;
};
const ResetPasswordForm = ({ onSuccess, onCancel }: ResetPasswordProps) => {
  const { changePassword, changePasswordLoading } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(resetPass),
  });

  const handleResetPass = async (data) => {};

  return (
    <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-lg">
      <div className="flex justify-start mb-4">
        <button
          type="button"
          className="w-10 h-10 bg-white rounded-full hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
          onClick={oncancel}
        >
          <img
            className="w-6 h-[15px]"
            alt="Back icon"
            src="/images/back-icon.svg" // Make sure this path is correct
          />
        </button>
      </div>
      <form onSubmit={handleSubmit(handleResetPass)}>
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
              {...register("newPass")}
              placeholder="Enter new password"
              className="w-full [font-family:'Inter-Regular',Helvetica] text-black text-base tracking-[-0.18px] bg-transparent border-none outline-none placeholder:text-[#c7c7c7] placeholder:italic"
              required
            />
            <p
              className={`${
                errors.newPass ? "text-red-600" : "text-transparent"
              }`}
            >
              {errors.newPass?.message || "a"}
            </p>
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
              {...register("pass2")}
              placeholder="Confirm new password"
              className="w-full [font-family:'Inter-Regular',Helvetica] text-black text-base tracking-[-0.18px] bg-transparent border-none outline-none placeholder:text-[#c7c7c7] placeholder:italic"
              required
            />
            <p
              className={`${
                errors.pass2 ? "text-red-600" : "text-transparent"
              }`}
            >
              {errors.pass2?.message || "a"}
            </p>
          </div>
        </div>

        {/* Buttons - Consistent with other forms */}
        <div className="flex flex-col items-center gap-4 w-full">
          <button
            type="submit"
            className="flex w-[343px] justify-center py-4 bg-[#8257a9] rounded-2xl hover:bg-[#6d4a8f] transition-colors duration-200"
          >
            <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-white text-base tracking-[-0.18px]">
              {changePasswordLoading ? <LoadingSpinner /> : "Change Password"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
