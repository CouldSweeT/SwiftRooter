import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Container } from "@/components/ui/Container";

type PrivacySection = {
  title: string;
  paragraphs: string[];
  items?: {
    label?: string;
    text: string;
  }[];
  footer?: string;
};

export const metadata: Metadata = {
  title: "Privacy Policy | SwiftRooter",
  description:
    "Learn how SwiftRooter collects, uses, and protects personal information.",
};

const privacySections: PrivacySection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      'Welcome to SwiftRooter Plumbing ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have concerning it. By using our website and services, you agree to the collection and use of information in accordance with this policy.',
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We collect different types of information to provide and improve our services. This may include:",
    ],
    items: [
      {
        label: "Personal Information",
        text: "Name, email address, phone number, zip code, appointment details, and any message you provide when contacting us or requesting service.",
      },
      {
        label: "Usage Data",
        text: "Information on how you interact with our website, such as IP address, browser type, operating system, pages viewed, and time spent on pages.",
      },
      {
        label: "Cookies & Tracking Data",
        text: "We may use cookies to track activity on our website and store certain information to improve user experience.",
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: [
      "We may use your information for the following purposes:",
    ],
    items: [
      { text: "To provide and maintain our services" },
      { text: "To respond to inquiries and schedule appointments" },
      { text: "To improve and personalize your experience on our website" },
      { text: "To communicate with you about updates, promotions, or services" },
      { text: "To comply with legal obligations" },
    ],
  },
  {
    title: "4. Sharing of Information",
    paragraphs: [
      "We do not sell your personal information. We may share your information only in limited circumstances, including:",
    ],
    items: [
      { text: "When required by law, such as responding to a legal request or regulatory obligation" },
      {
        text: "With trusted third-party service providers who assist in delivering our services, such as hosting, analytics, scheduling, or customer communication tools",
      },
    ],
  },
  {
    title: "5. Your Data Protection Rights",
    paragraphs: [
      "Depending on your location, you may have the following rights regarding your personal data:",
    ],
    items: [
      {
        label: "The right to access",
        text: "You can request copies of your personal data.",
      },
      {
        label: "The right to rectification",
        text: "You can request corrections to inaccurate or incomplete data.",
      },
      {
        label: "The right to erasure",
        text: "You can request deletion of your personal data under certain conditions.",
      },
      {
        label: "The right to restrict processing",
        text: "You can request that we limit the processing of your data under certain conditions.",
      },
      {
        label: "The right to data portability",
        text: "You can request that we transfer your data to another organization or directly to you.",
      },
    ],
    footer:
      "If you wish to exercise any of these rights, please contact us at hello@swiftrooter.com.",
  },
  {
    title: "6. Security of Your Data",
    paragraphs: [
      "We value your trust in providing us your personal information. SwiftRooter Plumbing takes reasonable steps to protect your data from unauthorized access or disclosure. However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure.",
    ],
  },
  {
    title: "7. Links to Other Websites",
    paragraphs: [
      "Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of external sites. We encourage you to review the privacy policies of those websites.",
    ],
  },
  {
    title: "8. Changes to This Privacy Policy",
    paragraphs: [
      'We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date."',
    ],
  },
  {
    title: "9. Contact Us",
    paragraphs: [
      "If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at hello@swiftrooter.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <ScrollReveal>
        <Container className="py-12 md:py-16">
          <PageHeader
            eyebrow="Privacy Policy"
            title="Privacy Policy"
            icon={ShieldCheck}
            description="This policy explains how we collect, use, and protect your information when you use our website and services."
          />

          <div className="mx-auto max-w-5xl space-y-12">
            {privacySections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base font-medium leading-7 text-zinc-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items ? (
                    <ul className="list-disc space-y-1 pl-5 text-base font-medium leading-7 text-zinc-600">
                      {section.items.map((item) => (
                        <li key={`${item.label ?? ""}${item.text}`}>
                          {item.label ? (
                            <strong className="font-semibold text-zinc-700">
                              {item.label}:{" "}
                            </strong>
                          ) : null}
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.footer ? (
                    <p className="text-base font-medium leading-7 text-zinc-600">
                      {section.footer}
                    </p>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </ScrollReveal>
    </main>
  );
}
