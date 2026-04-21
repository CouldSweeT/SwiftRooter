export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    id: "services",
    question: "What plumbing services do you offer?",
    answer:
      "We provide residential and commercial plumbing services, including emergency repairs, drain cleaning, water heater installation, leak detection, and more.",
  },
  {
    id: "emergency",
    question: "Do you offer 24/7 emergency plumbing services?",
    answer:
      "Yes! Our team is available 24/7 to handle plumbing emergencies such as burst pipes, sewer backups, and major leaks.",
  },
  {
    id: "schedule",
    question: "How can I schedule a service appointment?",
    answer:
      "You can book an appointment online through our website or call our customer service hotline to choose a convenient time.",
  },
  {
    id: "cost",
    question: "How much do your services cost?",
    answer:
      "Our pricing is transparent and depends on the type of service needed. We provide upfront quotes with no hidden fees.",
  },
  {
    id: "warranty",
    question: "Do you offer warranties on your plumbing work?",
    answer:
      "Yes, we stand by our work and offer warranties on parts and labor to ensure customer satisfaction and long-lasting solutions.",
  },
];
