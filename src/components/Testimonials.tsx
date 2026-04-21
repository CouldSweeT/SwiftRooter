import Image from "next/image";

import { testimonials } from "@/lib/data/testimonials";

const maxRating = 5;

export function Testimonials() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700">
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
            <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.8l1-6.1-4.4-4.3 6.1-.9L12 3Z" />
          </svg>
          Our Testimonials
        </p>

        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          What They Say About Our Service
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-7 text-[#E6EEFD]">
          Trusted by homeowners and businesses, we take pride in delivering
          top-quality plumbing services with exceptional customer satisfaction.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-zinc-100">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-zinc-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-zinc-500">{testimonial.date}</p>
              </div>
            </div>

            <div
              className="mt-5 flex gap-1"
              aria-label={`${testimonial.rating} out of ${maxRating} stars`}
            >
              {Array.from({ length: maxRating }).map((_, index) => {
                const isActive = index < testimonial.rating;

                return (
                  <svg
                    key={index}
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className={[
                      "h-5 w-5",
                      isActive
                        ? "fill-[#F8B84E] text-[#F8B84E]"
                        : "fill-zinc-200 text-zinc-200",
                    ].join(" ")}
                  >
                    <path d="m12 2.5 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3-5.7-3-5.7 3 1.1-6.3-4.6-4.5 6.4-.9L12 2.5Z" />
                  </svg>
                );
              })}
            </div>

            <p className="mt-5 text-base leading-6 text-zinc-600">
              {testimonial.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
