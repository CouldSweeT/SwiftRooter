import { plumbingExperts } from "@/lib/data/plumbing-experts";
import { PlumbingExpertCard } from "./PlumbingExpertCard";

export function PlumbingExperts() {
  return (
    <section className="flex flex-col w-full py-16 bg-white md:py-0">
      <p className="mb-4 inline-flex self-start items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700">
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
          <path d="m12 3 8 4-8 4-8-4 8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 17 8 4 8-4" />
        </svg>
        About us
      </p>
      <div className="flex flex-col justify-between gap-4 mb-8 md:gap-16 md:flex-row">
        <div className="flex-1">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            Meet Some of Our Plumbing Experts
          </h2>
        </div>
        <div className="flex-1 align-center">
          <p className="mt-5 mb-6 max-w-xl text-base leading-7 text-zinc-500">
            Our certified plumbers bring years of expertise and dedication to
            delivering top-quality service for all plumbing needs.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        {plumbingExperts.map((expert) => (
          <PlumbingExpertCard key={expert.id} expert={expert} />
        ))}
      </div>
    </section>
  );
}
