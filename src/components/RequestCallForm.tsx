"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  requestCallFormSchema,
  type RequestCallFormValues,
} from "@/lib/schemas/request-call-form.schema";

export function RequestCallForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RequestCallFormValues>({
    resolver: zodResolver(requestCallFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      zipCode: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: RequestCallFormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Could not send the request");
    }

    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative w-full">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-2xl bg-white/95 p-4 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-200/70 backdrop-blur-sm md:p-5">
          {isSubmitted ? (
            <div className="py-6 text-center">
              <h3 className="text-lg font-semibold text-zinc-900">
                Vielen Dank! Ihre Anfrage wurde gesendet.
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Wir melden uns in Kuerze bei Ihnen.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col gap-3"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.2fr_1.2fr_1.2fr_0.9fr_1.35fr] md:items-start">
                <Field label="Name" error={errors.name?.message} htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    autoComplete="name"
                    className={inputClassName(errors.name?.message)}
                    {...register("name")}
                  />
                </Field>

                <Field
                  label="Email"
                  error={errors.email?.message}
                  htmlFor="email"
                >
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@framer.com"
                    autoComplete="email"
                    className={inputClassName(errors.email?.message)}
                    {...register("email")}
                  />
                </Field>

                <Field
                  label="Phone Number"
                  error={errors.phone?.message}
                  htmlFor="phone"
                >
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(111) 111-1111"
                    autoComplete="tel"
                    className={inputClassName(errors.phone?.message)}
                    {...register("phone")}
                  />
                </Field>

                <Field
                  label="Zip Code"
                  error={errors.zipCode?.message}
                  htmlFor="zipCode"
                >
                  <input
                    id="zipCode"
                    type="text"
                    placeholder="Zip Code"
                    autoComplete="postal-code"
                    className={inputClassName(errors.zipCode?.message)}
                    {...register("zipCode")}
                  />
                </Field>

                <div className="flex flex-col justify-end pt-[22px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 rounded-xl bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Request A Call"}
                  </button>
                </div>
              </div>

              <p className="text-left text-xs leading-5 text-zinc-500">
                By submitting your contact details, you agree to receive
                automated SMS/MMS messages from SwiftRooter Plumbing. Message &
                data rates may apply.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-medium text-zinc-700"
      >
        {label}
      </label>
      {children}
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}

function inputClassName(hasError?: string) {
  return [
    "h-11 w-full rounded-xl border bg-zinc-50 px-3 text-sm text-zinc-900 outline-none transition",
    "placeholder:text-zinc-400",
    "focus:border-zinc-400 focus:bg-white",
    hasError ? "border-red-500" : "border-zinc-200",
  ].join(" ");
}
