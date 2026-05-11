
import { About } from "@/components/About";
import { Locations } from "@/components/Locations";
import { PlumbingExperts } from "@/components/PlumbingExperts";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Container } from "@/components/ui/Container";

export default function AboutUsPage() {
  return (
    <main>

      <ScrollReveal>
        <Container className="py-12 md:py-16">
          <About />
        </Container>
      </ScrollReveal>

      <ScrollReveal>
        <Container className="py-12 md:py-16">
          <PlumbingExperts />
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
