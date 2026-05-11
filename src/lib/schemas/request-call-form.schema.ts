import { z } from "zod";

export const requestCallFormSchema = z.object({
  name: z
    .string()
    .min(2, "Bitte geben Sie Ihren Namen ein")
    .max(100, "Der Name ist zu lang"),

  email: z
    .string()
    .min(1, "Bitte geben Sie Ihre E-Mail-Adresse ein")
    .email("Ungueltige E-Mail-Adresse"),

  phone: z
    .string()
    .min(5, "Bitte geben Sie Ihre Telefonnummer ein")
    .regex(/^(\+49|0)[1-9][0-9\s\-()]{3,}$/, "Ungueltige Telefonnummer"),

  zipCode: z.string().regex(/^\d{5}$/, "Postleitzahl muss 5-stellig sein"),
});

export type RequestCallFormValues = z.infer<typeof requestCallFormSchema>;
