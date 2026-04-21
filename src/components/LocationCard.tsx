import Image from "next/image";

import type { Location } from "@/lib/data/locations";

type LocationCardProps = {
  location: Location;
};

export function LocationCard({ location }: LocationCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="relative aspect-[1.8/1] bg-zinc-100">
        <Image
          src={location.image}
          alt={location.title}
          fill
          quality={95}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6 md:p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
          {location.title}
        </h3>
        <p className="mt-4 flex items-center gap-3 text-base font-medium text-zinc-700 md:text-lg">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 shrink-0 text-zinc-600"
          >
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <path d="M12 10h.01" />
          </svg>
          {location.address}
        </p>
      </div>
    </article>
  );
}
