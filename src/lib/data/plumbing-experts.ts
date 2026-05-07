export type PlumbingExpert = {
  id: string;
  name: string;
  image: string;
  jobsCompleted: string;
  rating: number;
  description: string;
};

export const plumbingExperts: PlumbingExpert[] = [
  {
    id: "james-carter",
    name: "James Carter",
    image: "/experts/james-carter.png",
    jobsCompleted: "1500+ Job Completed",
    rating: 5.0,
    description:
      "James specializes in quick emergency fixes and complex installations with precision and efficiency.",
  },
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    image: "/experts/sarah-mitchell.png",
    jobsCompleted: "800+ Job Completed",
    rating: 4.9,
    description:
      "Sarah is known for her expertise in leak detection and providing reliable bathroom plumbing solutions.",
  },
  {
    id: "robert-thompson",
    name: "Robert Thompson",
    image: "/experts/robert-thompson.png",
    jobsCompleted: "1000+ Job Completed",
    rating: 4.7,
    description:
      "Robert ensures commercial properties run smoothly with expert plumbing and backflow solutions.",
  },
];
