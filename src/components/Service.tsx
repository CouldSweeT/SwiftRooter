"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  serviceCategories,
  services,
  type ServiceCategory,
} from "@/lib/data/services";

export function Service() {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory>("residential");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredServices = services.filter(
    (service) => service.category === activeCategory,
  );

  const handleCategoryChange = (category: ServiceCategory) => {
    if (category === activeCategory || isTransitioning) {
      return;
    }

    setIsTransitioning(true);

    window.setTimeout(() => {
      setActiveCategory(category);
      window.requestAnimationFrame(() => setIsTransitioning(false));
    }, 180);
  };

  return (
    <section className="w-full rounded-[32px] bg-white py-8 md:py-12">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
            Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            Our Services
          </h2>
        </div>

        <div className="inline-flex w-fit rounded-2xl border border-zinc-200 bg-white p-1">
          {serviceCategories.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                className={[
                  "rounded-xl px-5 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-zinc-950 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-950",
                ].join(" ")}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={[
          "grid gap-8 transition-all duration-300 ease-out md:grid-cols-2 xl:grid-cols-3",
          isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100",
        ].join(" ")}
      >
        {filteredServices.map((service, index) => (
          <Link
            key={service.id}
            href={service.href}
            className="flex h-full flex-col rounded-[28px] bg-zinc-50 p-4 shadow-sm ring-1 ring-zinc-100 transition-all duration-300 hover:-translate-y-[10px] hover:bg-white"
            style={{
              transitionDelay: isTransitioning ? "0ms" : `${index * 45}ms`,
            }}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-zinc-950">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-[30ch] text-base leading-6 text-zinc-600">
                  {service.description}
                </p>
              </div>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-50 text-lg text-zinc-950 ring-1 ring-zinc-200">
                ↗
              </span>
            </div>

            <div className="relative mt-auto aspect-[1.35/1] overflow-hidden rounded-3xl bg-zinc-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
