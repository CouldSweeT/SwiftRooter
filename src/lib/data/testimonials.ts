export type Testimonial = {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "mike-r",
    name: "Mike R",
    date: "March 5, 2024",
    rating: 4,
    text: "SwiftRooter responded quickly and fixed my burst pipe in no time! Highly recommend their service!",
    avatar: "/user-1.jpg",
  },
  {
    id: "lisa-t",
    name: "Lisa T",
    date: "February 20, 2024",
    rating: 5,
    text: "Excellent drain cleaning service! The plumber was professional, and now everything works perfectly.",
    avatar: "/user-4.jpg",
  },
  {
    id: "robert-g",
    name: "Robert G",
    date: "January 28, 2024",
    rating: 4,
    text: "Very professional and affordable. They fixed my water heater, and now I have hot water again!",
    avatar: "/user-3.jpg",
  },
];
