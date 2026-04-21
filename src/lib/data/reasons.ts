export type ReasonIcon =
  | "clock"
  | "shield"
  | "pricing"
  | "diamond"
  | "leaf"
  | "tools";

export type Reason = {
  title: string;
  description: string;
  icon: ReasonIcon;
};

export const reasons: Reason[] = [
  {
    title: "Fast Response Time",
    description:
      "We understand that plumbing emergencies cannot wait. Our team is available 24/7 to deliver quick, reliable help when you need it most.",
    icon: "clock",
  },
  {
    title: "Certified & Experienced Plumbers",
    description:
      "Our licensed technicians bring proven experience and modern tools to every repair, installation, and inspection.",
    icon: "shield",
  },
  {
    title: "Upfront Pricing",
    description:
      "No hidden costs or surprise fees. We explain the work and provide clear pricing before any job begins.",
    icon: "pricing",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Your satisfaction is our priority. We stand behind our workmanship and keep every job clean, complete, and professional.",
    icon: "diamond",
  },
  {
    title: "Eco-Friendly Solutions",
    description:
      "We offer sustainable plumbing options that help conserve water, reduce energy use, and support healthier homes.",
    icon: "leaf",
  },
  {
    title: "Fully Equipped & Prepared",
    description:
      "Our plumbers arrive with the latest tools and parts, ready to diagnose issues quickly and complete repairs efficiently.",
    icon: "tools",
  },
];
