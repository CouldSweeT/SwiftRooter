import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Locations } from "@/components/Locations";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Service } from "@/components/Service";
import { Steps } from "@/components/Steps";
import { Testimonials } from "@/components/Testimonials";
import { TrustedCare } from "@/components/TrustedCare";
import { WhyChoose } from "@/components/WhyChoose";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main>
      <Hero />

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
    </main>
  );
}
