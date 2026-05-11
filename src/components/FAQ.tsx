"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { faqs, type FAQItem as FAQItemType } from "@/lib/data/faqs";

export function FAQ() {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? "");

  return (
    <section id="faq" className="grid w-full gap-8 bg-white py-12 md:grid-cols-[0.95fr_1fr] md:items-end md:gap-10 md:py-16">
      <div className="flex h-full max-w-[560px] flex-col">
        <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M9 9a3 3 0 1 1 4.4 2.7c-.9.5-1.4 1.2-1.4 2.3" />
            <path d="M12 18h.01" />
            <path d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z" />
          </svg>
          Questions & Answers
        </p>

        <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 max-h-[620px] overflow-hidden rounded-2xl bg-zinc-100 md:mt-10">
          <Image
            src="/faq-plumber.png"
            alt="SwiftRooter plumber holding plumbing tools"
            width={1024}
            height={1536}
            quality={95}
            className="h-auto w-full saturate-110 contrast-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 46vw, 560px"
          />
        </div>
      </div>

      <div className="flex h-full flex-col gap-4">
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={faq.id === openId}
              onToggle={() => setOpenId(faq.id === openId ? "" : faq.id)}
            />
          ))}
        </div>

        <HelpCard className="mt-auto" />
      </div>
    </section>
  );
}

type FAQItemProps = {
  faq: FAQItemType;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  const answerId = `${faq.id}-answer`;

  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold text-zinc-800 md:px-6 md:py-5 md:text-xl"
      >
        <span>{faq.question}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={[
            "h-5 w-5 shrink-0 text-zinc-900 transition-transform duration-300 ease-out",
            isOpen ? "rotate-45" : "rotate-0",
          ].join(" ")}
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>

      <div
        id={answerId}
        className={[
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <p className="border-t border-zinc-200 px-5 py-4 text-sm leading-6 text-zinc-600 md:px-6 md:text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

function HelpCard({ className }: { className?: string }) {
  return (
    <div
      className={[
        "mt-4 rounded-2xl bg-zinc-950 px-6 py-10 text-center text-white md:px-10 md:py-12",
        className ?? "",
      ].join(" ")}
    >
      <h3 className="text-3xl font-semibold tracking-tight">Need More Help?</h3>
      <p className="mx-auto mt-5 max-w-md text-base font-medium leading-6 text-white/85">
        Contact us for support, inquiries, or partnerships. We&apos;re happy to
        assist!
      </p>
      <Link
        href="/contact-us"
        className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition hover:bg-blue-500"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
        </svg>
        Contact Us
      </Link>
    </div>
  );
}
