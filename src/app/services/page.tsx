import { Locations } from "@/components/Locations";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Service } from "@/components/Service";
import { Steps } from "@/components/Steps";
import { Container } from "@/components/ui/Container";

export default function AboutUsPage() {
  return (
    <main>
      <ScrollReveal>
        <Container className="py-12 md:py-16">
          <Service />
        </Container>
      </ScrollReveal>

      <ScrollReveal>
        <Container className="py-12 md:py-16">
          <Steps />
        </Container>
      </ScrollReveal>

      <ScrollReveal>
        <Container className="py-12 md:py-16">
          <Locations />
        </Container>
      </ScrollReveal>
    </main>
  );
}
