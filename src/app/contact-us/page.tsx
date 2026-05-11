import { UserRound } from "lucide-react";
import { ContactMessageForm } from "@/components/ContactMessageForm";
import { ContactMethods } from "@/components/ContactMethods";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { FAQ } from "@/components/FAQ";

export default function ContactUsPage() {
  return (
    <main>
      <ScrollReveal>
        <Container className="py-12 md:py-16">
          <PageHeader
            eyebrow="Contact us"
            title="Contact us"
            icon={UserRound}
          />

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-stretch">
            <ContactMethods />

            <ContactMessageForm />
          </div>
        </Container>
      </ScrollReveal>

      <ScrollReveal>
        <Container className="py-12 md:py-16">
          <FAQ />
        </Container>
      </ScrollReveal>
    </main>
  );
}
