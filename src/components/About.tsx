import Image from "next/image";

export function About() {
  return (
    <section className="flex flex-col w-full gap-16 py-16 bg-white md:flex-row md:py-0">
      <div className="flex-1">
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
            <path d="m12 3 8 4-8 4-8-4 8-4Z" />
            <path d="m4 12 8 4 8-4" />
            <path d="m4 17 8 4 8-4" />
          </svg>
          About us
        </p>

        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          About SwiftRooter Plumbing
        </h2>
        <p className="mt-5 mb-6 max-w-xl text-base leading-7 text-zinc-500">
          SwiftRooter Plumbing is a trusted name in the industry, offering
          top-quality residential and commercial plumbing services. With years
          of experience, we take pride in delivering efficient, reliable, and
          customer-focused solutions. Whether it&apos;s a small repair or a
          major installation, our team is committed to ensuring your plumbing
          system functions flawlessly.
        </p>
        <Image
          src="/swift-rooter-pipe-repair.png"
          alt="SwiftRooter plumber repairing a leaking pipe"
          width={2048}
          height={1024}
          className="w-full rounded-2xl object-cover"
        />
      </div>
      <div className="flex-1 overflow-hidden rounded-2xl">
        <Image
          src="/swift-rooter-about.png"
          alt="SwiftRooter Plumbing technician standing beside a service van"
          width={1456}
          height={1024}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
