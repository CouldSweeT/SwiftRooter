import Image from "next/image";
import type { PlumbingExpert } from "@/lib/data/plumbing-experts";

type PlumbingExpertCardProps = {
  expert: PlumbingExpert;
};

export function PlumbingExpertCard({ expert }: PlumbingExpertCardProps) {
  return (
    <article className="min-w-0 overflow-hidden rounded-2xl md:flex md:items-start md:gap-6 lg:block">
      <Image
        src={expert.image}
        alt={expert.name}
        width={1122}
        height={1402}
        className="aspect-[4/5] w-full rounded-2xl object-cover md:w-56 md:shrink-0 lg:w-full"
      />
      <div className="pt-5">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
          {expert.name}
        </h3>
        <div className="mt-5 flex items-center justify-between gap-4 border-b border-zinc-200 pb-6">
          <p className="self-start rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-600">
            {expert.jobsCompleted}
          </p>
          <p className="flex items-center gap-1.5 text-sm font-medium text-zinc-950">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-[#F8B84E] text-[#F8B84E]"
            >
              <path d="m12 2.5 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3-5.7-3-5.7 3 1.1-6.3-4.6-4.5 6.4-.9L12 2.5Z" />
            </svg>
            ({expert.rating.toFixed(1)})
          </p>
        </div>
        <p className="mt-5 text-sm leading-6 text-zinc-500">
          {expert.description}
        </p>
      </div>
    </article>
  );
}
