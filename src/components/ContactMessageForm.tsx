"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactMessageFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().min(1, "Please enter your email").email("Invalid email"),
  message: z.string().min(10, "Please enter a longer message"),
});

type ContactMessageFormValues = z.infer<typeof contactMessageFormSchema>;

export function ContactMessageForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactMessageFormValues>({
    resolver: zodResolver(contactMessageFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactMessageFormValues) => {
    console.log("New contact message:", values);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
        <h3 className="text-lg font-semibold text-zinc-950">
          Thanks for reaching out.
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          We received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-zinc-950">Send Us a Message</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Use our convenient contact form to reach out with questions, feedback,
        or collaboration inquiries.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
        <Field error={errors.name?.message}>
          <input
            type="text"
            placeholder="Name"
            autoComplete="name"
            className={inputClassName(errors.name?.message)}
            {...register("name")}
          />
        </Field>

        <Field error={errors.email?.message}>
          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            className={inputClassName(errors.email?.message)}
            {...register("email")}
          />
        </Field>

        <Field error={errors.message?.message}>
          <textarea
            placeholder="Message"
            rows={4}
            className={inputClassName(errors.message?.message)}
            {...register("message")}
          />
        </Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

type FieldProps = {
  error?: string;
  children: React.ReactNode;
};

function Field({ error, children }: FieldProps) {
  return (
    <div>
      {children}
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}

function inputClassName(hasError?: string) {
  return [
    "w-full rounded-xl border bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none transition",
    "placeholder:text-zinc-400",
    "focus:border-zinc-400 focus:bg-white",
    hasError ? "border-red-500" : "border-zinc-200",
  ].join(" ");
}
