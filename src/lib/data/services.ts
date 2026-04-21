export type ServiceCategory = "residential" | "commercial";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  category: ServiceCategory;
};

export const serviceCategories: {
  id: ServiceCategory;
  label: string;
}[] = [
  {
    id: "residential",
    label: "Residential",
  },
  {
    id: "commercial",
    label: "Commercial",
  },
];

export const services: ServiceItem[] = [
  {
    id: "emergency-plumbing",
    title: "24/7 Emergency Plumbing",
    description:
      "Quick response for leaks, burst pipes, and urgent plumbing issues.",
    image: "/services/emergency-plumbing.jpg",
    href: "/services/emergency-plumbing",
    category: "residential",
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning",
    description: "Removing clogs and ensuring smooth water flow.",
    image: "/services/drain-cleaning.jpg",
    href: "/services/drain-cleaning",
    category: "residential",
  },
  {
    id: "water-heaters",
    title: "Water Heaters",
    description:
      "Installation, repair, and maintenance of all water heater types.",
    image: "/services/water-heaters.jpg",
    href: "/services/water-heaters",
    category: "residential",
  },
  {
    id: "bathroom-kitchen",
    title: "Bathroom & Kitchen",
    description:
      "Repairs and installations for faucets, sinks, toilets, and showers.",
    image: "/services/bathroom-kitchen.jpg",
    href: "/services/bathroom-kitchen",
    category: "residential",
  },
  {
    id: "leak-detection",
    title: "Leak Detection",
    description: "Identifying and fixing hidden water leaks to prevent damage.",
    image: "/services/leak-detection.jpg",
    href: "/services/leak-detection",
    category: "residential",
  },
  {
    id: "sewer-septic",
    title: "Sewer & Septic",
    description: "Cleaning, repair, and maintenance of sewer and septic systems.",
    image: "/services/sewer-septic.jpg",
    href: "/services/sewer-septic",
    category: "residential",
  },
  {
    id: "pipe-repair",
    title: "Pipe Repair",
    description: "Fast repair for cracked, leaking, or corroded plumbing pipes.",
    image: "/services/pipe-repair.jpg",
    href: "/services/pipe-repair",
    category: "residential",
  },
  {
    id: "pipe-fixtures",
    title: "Pipe & Fixtures",
    description:
      "Repairing fixture leaks, worn valves, and damaged pipe connections throughout the home.",
    image: "/services/pipe-fixtures.jpg",
    href: "/services/pipe-fixtures",
    category: "residential",
  },
  {
    id: "gas-lines",
    title: "Gas Lines",
    description:
      "Safe gas line installation, repair, and inspection for appliances and heating systems.",
    image: "/services/gas-lines.jpg",
    href: "/services/gas-lines",
    category: "residential",
  },
  {
    id: "hydro-jetting",
    title: "Hydro Jetting",
    description: "High-pressure drain cleaning for stubborn buildup and blockages.",
    image: "/services/hydro-jetting.jpg",
    href: "/services/hydro-jetting",
    category: "residential",
  },
  {
    id: "commercial-drain-cleaning",
    title: "Commercial Drain Cleaning",
    description:
      "Scheduled and emergency drain cleaning for offices, restaurants, and retail spaces.",
    image: "/services/drain-sewer.jpg",
    href: "/services/commercial-drain-cleaning",
    category: "commercial",
  },
  {
    id: "commercial-water-heaters",
    title: "Commercial Water Heaters",
    description:
      "Installation and maintenance for high-capacity commercial water heating systems.",
    image: "/services/high-capacity-water-heaters.jpg",
    href: "/services/commercial-water-heaters",
    category: "commercial",
  },
  {
    id: "grease-traps",
    title: "Grease Traps",
    description:
      "Cleaning and servicing grease traps to keep commercial kitchens compliant.",
    image: "/services/grease-traps.jpg",
    href: "/services/grease-traps",
    category: "commercial",
  },
  {
    id: "backflow-testing",
    title: "Backflow Testing",
    description:
      "Testing, repair, and installation of backflow prevention devices for commercial properties.",
    image: "/services/backflow-testing.jpg",
    href: "/services/backflow-testing",
    category: "commercial",
  },
  {
    id: "maintenance-plans",
    title: "Maintenance Plans",
    description:
      "Preventive maintenance plans for commercial plumbing systems to reduce downtime and repair costs.",
    image: "/services/maintenance-plans.jpg",
    href: "/services/maintenance-plans",
    category: "commercial",
  },
  {
    id: "repiping",
    title: "Commercial Repiping",
    description:
      "Replacing aging or damaged piping systems with minimal disruption to operations.",
    image: "/services/repiping.jpg",
    href: "/services/repiping",
    category: "commercial",
  },
];
