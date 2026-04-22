import Image from "next/image";

const trustImages = [
  {
    src: "/services/water-heaters.jpg",
    alt: "SwiftRooter plumber servicing a water heater",
    className: "aspect-[0.85/1] sm:row-span-2 sm:h-full sm:aspect-auto",
  },
  {
    src: "/services/hydro-jetting.jpg",
    alt: "SwiftRooter plumber using hydro jetting equipment",
    className: "aspect-[1.55/1]",
  },
  {
    src: "/services/leak-detection.jpg",
    alt: "SwiftRooter plumber repairing a leaking fixture",
    className: "aspect-[1.55/1]",
  },
];

export function TrustedCare() {
  return (
    <section
      id="about"
      className="overflow-hidden rounded-lg bg-primary px-2 py-4 text-white sm:rounded-[32px] sm:px-10 md:px-14 md:py-14"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 5px)",
      }}
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          <div className="grid gap-3 sm:grid-cols-[88px_1fr] sm:items-start sm:gap-6 lg:gap-7">
            <TrustBadge />

            <div>
              <h2 className="max-w-[11ch] text-lg font-semibold leading-tight tracking-tight sm:max-w-xl sm:text-3xl md:text-4xl lg:max-w-sm lg:text-5xl">
                Trusted plumbing services with care.
              </h2>
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-[8px] font-semibold leading-[1.35] text-white/90 sm:mt-7 sm:text-base sm:leading-6 lg:max-w-xl">
            Our commitment to building trust and treating customers like family
            is what sets us apart. When you choose us, you&apos;re not just the
            plumber.
          </p>

          <p className="mt-3 max-w-3xl text-[8px] font-medium leading-[1.35] text-white/85 sm:mt-6 sm:text-sm sm:leading-6 md:text-base lg:max-w-xl">
            We believe in delivering more than just expert plumbing services. We
            strive to provide a personalized experience for every customer. From
            the moment you contact us, our friendly team is dedicated to
            understanding your specific needs.
          </p>
        </div>

        <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-5">
          {trustImages.map((image) => (
            <div
              key={image.src}
              className={[
                "relative overflow-hidden rounded-sm border-[3px] border-secondary bg-white/10 shadow-sm sm:rounded-lg sm:border-[5px]",
                image.className,
              ].join(" ")}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBadge() {
  return (
    <div className="relative h-12 w-12 shrink-0 sm:h-24 sm:w-24">
      <div className="absolute inset-3 rounded-full bg-[#F4D472] shadow-inner" />
      <div className="absolute left-0 right-0 top-[18px] bg-secondary py-0.5 text-center text-[7px] font-bold uppercase tracking-wide text-white shadow-sm sm:top-9 sm:py-1 sm:text-sm">
        Trust
      </div>
      <div className="absolute inset-0 rounded-full border-[5px] border-dashed border-[#F4D472]/80 sm:border-[10px]" />
      <p className="absolute left-0 right-0 top-3 text-center text-[5px] font-bold uppercase tracking-[0.2em] text-zinc-800 sm:top-6 sm:text-[10px]">
        Trust
      </p>
      <p className="absolute bottom-3 left-0 right-0 text-center text-[5px] font-bold uppercase tracking-[0.2em] text-zinc-800 sm:bottom-6 sm:text-[10px]">
        Trust
      </p>
    </div>
  );
}
