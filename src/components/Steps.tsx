import { bookingSteps, type StepIcon } from "@/lib/data/steps";

const stepIcons: Record<StepIcon, React.ReactNode> = {
  service: (
    <>
      <path d="M8.5 15.5A6.5 6.5 0 1 1 18 9.8" />
      <path d="M14 14h5v5h-5z" />
      <path d="m15.5 16.5 1 1 3-3" />
    </>
  ),
  schedule: (
    <>
      <path d="M7 4v3M17 4v3M5 9h14" />
      <path d="M6 6h12a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2Z" />
      <path d="m14 17 4-4M15 18h4v-4" />
    </>
  ),
  complete: (
    <>
      <path d="m12 3 2.2 2.1 3-.5.8 2.9 2.7 1.4-1.4 2.7.8 2.9-3 .5-1.4 2.7-2.7-1.4-2.7 1.4L9 15l-3-.5.8-2.9-1.4-2.7 2.7-1.4.8-2.9 3 .5L12 3Z" />
      <path d="m9.5 12 1.8 1.8 3.7-4" />
    </>
  ),
};

export function Steps() {
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
            <path d="m12 3 8 4-8 4-8-4 8-4Z" />
            <path d="m4 12 8 4 8-4" />
            <path d="m4 17 8 4 8-4" />
          </svg>
          Steps
        </p>

        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          Book your service in 3 easy steps
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#E6EEFD]">
          Easy Steps to Get Started section simplifies the process of booking
          and receiving plumbing services.
        </p>
      </div>

      <div className="mt-16 grid gap-10 text-center md:grid-cols-3 md:gap-8 lg:mt-20">
        {bookingSteps.map((step, index) => (
          <article key={step.id} className="flex flex-col items-center">
            <div className="relative mb-7 flex h-28 w-28 items-center justify-center md:h-32 md:w-32">
              <div className="absolute inset-0 rounded-[38%_62%_54%_46%/46%_35%_65%_54%] bg-blue-50" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-blue-100 md:h-20 md:w-20">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  {stepIcons[step.icon]}
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-medium tracking-tight text-zinc-950">
              {index + 1}. {step.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
