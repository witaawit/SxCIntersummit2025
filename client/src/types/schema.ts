import { z } from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address.")
    .nonempty("Email must be filled."),
  password: z.string().nonempty("Password must be filled."),
});

export const registerschema = z
  .object({
    name: z.string().nonempty("First name is required."),
    email: z
      .string()
      .email("Invalid email address.")
      .nonempty("Email is required."),
    pass: z
      .string()
      .nonempty("Password is required.")
      .min(8, "Password must be at least 8 characters long.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/\d/, "Password must contain at least one number.")
      .regex(
        /[!@#$%^&*]/,
        "Password must contain at least one special character (!@#$%^&*)."
      ),
    pass2: z.string().nonempty("Password confirmation is required."),
    referralCode: z.string().optional(),
  })
  .refine((data) => data.pass === data.pass2, {
    message: "Passwords do not match.",
    path: ["pass2"],
  });
export const resetPass = z
  .object({
    newPass: z
      .string()
      .nonempty("New Password is required.")
      .min(8, "New Password must be at least 8 characters long.")
      .regex(
        /[A-Z]/,
        "New Password must contain at least one uppercase letter."
      )
      .regex(
        /[a-z]/,
        "New Password must contain at least one lowercase letter."
      )
      .regex(/\d/, "New Password must contain at least one number.")
      .regex(
        /[!@#$%^&*]/,
        "New Password must contain at least one special character (!@#$%^&*)."
      ),
    pass2: z.string().nonempty("Password confirmation is required."),
  })
  .refine((data) => data.newPass === data.pass2, {
    message: "Passwords do not match.",
    path: ["pass2"],
  });
