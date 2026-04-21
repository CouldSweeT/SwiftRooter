import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Locations } from "@/components/Locations";
import { Membership } from "@/components/Membership";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Service } from "@/components/Service";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";
import { TrustedCare } from "@/components/TrustedCare";
import { WhyChoose } from "@/components/WhyChoose";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const members = [
  "/user-1.jpg",
  "/user-2.jpg",
  "/user-3.jpg",
  "/user-4.jpg",
];

export default function Home() {
  return (
    <div className="bg-white font-sans dark:bg-black padding-2">
      <Header />
      <div className="relative min-h-[720px] w-full overflow-hidden bg-zinc-100 md:min-h-[760px]">
        <Image
          src="/hero.avif"
          fill
          alt="Hero"
          priority
          className="pointer-events-none scale-110 object-cover object-[center_60%] saturate-110 contrast-105"
        />
        <div className="absolute inset-x-0 top-0 h-[58%] bg-gradient-to-b from-white/85 via-white/35 to-transparent" />

        <Container className="relative z-10 flex min-h-[720px] flex-col items-center pb-8 pt-24 text-center md:min-h-[760px] md:pb-10 md:pt-28">
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
            <ContactForm />
          </div>
        </Container>
      </div>

      <ScrollReveal>
        <Container className="py-12 md:py-16">
          <Service />
        </Container>
      </ScrollReveal>

      <ScrollReveal>
        <Container className="pb-12 md:pb-16">
          <WhyChoose />
        </Container>
      </ScrollReveal>

      <ScrollReveal>
        <Container className="pb-12 md:pb-16">
          <Steps />
        </Container>
      </ScrollReveal>

      <ScrollReveal>
        <Container className="pb-12 md:pb-16">
          <TrustedCare />
        </Container>
      </ScrollReveal>

      <ScrollReveal>
        <Container className="pb-12 md:pb-16">
          <Testimonials />
        </Container>
      </ScrollReveal>

      <ScrollReveal>
        <Container className="pb-12 md:pb-16">
          <FAQ />
        </Container>
      </ScrollReveal>

      <ScrollReveal>
        <Container>
          <Locations />
        </Container>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
