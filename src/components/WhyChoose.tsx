"use client";

import { useEffect, useRef, useState } from "react";

import { reasons, type ReasonIcon } from "@/lib/data/reasons";

const reasonIcons: Record<ReasonIcon, React.ReactNode> = {
  clock: <path d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  shield: (
    <path d="m9 12 2 2 4-5M12 3l7 4v5c0 4.5-2.8 7.5-7 9-4.2-1.5-7-4.5-7-9V7l7-4Z" />
  ),
  pricing: (
    <path d="M7 7h10v10H7zM9.5 12h5M12 9.5v5M5 9V5h4M19 15v4h-4" />
  ),
  diamond: <path d="m8 12 3 3 5-6M7 3h10l3 5-8 13L4 8l3-5Z" />,
  leaf: <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Zm0 0c0-4 3-7 7-7" />,
  tools: (
    <path d="m14.5 6.5 3 3M5 19l4.5-1 8-8a2.1 2.1 0 0 0-3-3l-8 8L5 19Zm3-10-3-3m0 0 2-2 3 3m-5-1 4 4" />
  ),
};

export function WhyChoose() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid w-full gap-8 rounded-[32px] bg-white px-6 py-8 md:grid-cols-[1fr_1.1fr] md:px-10 md:py-12 lg:gap-16"
    >
      <div className="md:sticky md:top-24 md:self-start">
        <div
          className={[
            "transition-all duration-700 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          ].join(" ")}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-600">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Why Choose
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            Why Choose SwiftRooter?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 md:text-lg">
            Reliable, fast, and professional plumbing solutions with 24/7
            availability, upfront pricing, and expert service for homes and
            businesses.
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {reasons.map((reason) => (
          <article
            key={reason.title}
            className={[
              "flex gap-4 rounded-3xl border border-zinc-100 bg-zinc-50/70 p-5 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-md",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0",
            ].join(" ")}
            style={{
              transitionDelay: isVisible
                ? `${120 + reasons.indexOf(reason) * 80}ms`
                : "0ms",
            }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-primary ring-1 ring-blue-100">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                {reasonIcons[reason.icon]}
              </svg>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-950">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {reason.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
