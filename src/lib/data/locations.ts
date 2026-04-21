export type Location = {
  id: string;
  title: string;
  address: string;
  image: string;
};

export const locations: Location[] = [
  {
    id: "headquarters",
    title: "SwiftRooter Headquarters",
    address: "123 Main Street, Los Angeles, CA 90001",
    image: "/location-headquarters.png",
  },
  {
    id: "office",
    title: "SwiftRooter Office",
    address: "456 Ocean Drive, San Diego, CA 92101",
    image: "/location-office.png",
  },
];
