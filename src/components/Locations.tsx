import { locations } from "@/lib/data/locations";
import { LocationCard } from "@/components/LocationCard";

export function Locations() {
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
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <path d="M12 10h.01" />
          </svg>
          Our Location
        </p>

        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          Where Does SwiftRooter Operate?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-7 text-zinc-600 md:text-lg">
          We proudly serve multiple locations, ensuring prompt and reliable
          plumbing services near you.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-7">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </section>
  );
}
