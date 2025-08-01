import { z } from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address.")
    .nonempty("Email must be filled."),
  password: z.string().nonempty("Password must be filled."),
});

export const registerBuyerSchema = z.object({
  name: z.string().nonempty("Nama Depan harus diisi."),
  email: z
    .string()
    .email("Invalid email address.")
    .nonempty("Email must be filled."),
  pass: z.string().nonempty("Kata Sandi harus diisi."),
  pass2: z.string().nonempty("Konfirmasi Kata Sandi harus diisi."),
  referralCode: z.string().optional(),
});
