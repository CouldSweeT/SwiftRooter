import Image from "next/image";

import { Membership } from "@/components/Membership";
import { RequestCallForm } from "@/components/RequestCallForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Container } from "@/components/ui/Container";

const members = [
  "/user-1.jpg",
  "/user-2.jpg",
  "/user-3.jpg",
  "/user-4.jpg",
];

export function Hero() {
  return (
    <section className="relative min-h-[720px] w-full overflow-hidden bg-zinc-100 md:min-h-[960px]">
      <Image
        src="/hero.avif"
        fill
        alt="Hero"
        priority
        className="pointer-events-none object-cover object-[center_60%] "
      />
      <div className="absolute inset-x-0 top-0 h-[58%] bg-gradient-to-b from-white/85 via-white/35 to-transparent" />

      <Container className="relative z-10 flex min-h-[620px] flex-col items-center pb-8 pt-12 text-center md:min-h-[660px] md:pb-10 md:pt-16">
        <ScrollReveal className="mx-auto max-w-5xl" delay={120}>
          <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">
            <span className="text-secondary">SwiftRooter</span> - Fast &
            Reliable Plumbing Services
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-6 text-zinc-700 md:mt-5 md:text-xl md:leading-7">
            Your trusted partner for fast, reliable, and professional plumbing
            and rooter services. Whether it&apos;s a clogged drain, emergency
            plumbing, or a full pipe replacement, SwiftRooter has you covered
            24/7.
          </p>
        </ScrollReveal>

        <div className="mt-6 md:mt-8">
          <Membership images={members} />
        </div>

        <div className="mt-auto w-full">
          <RequestCallForm />
        </div>
      </Container>
    </section>
  );
}
