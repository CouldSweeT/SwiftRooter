export type NavigationLink = {
  label: string;
  href: string;
};

export const mainNavigationLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/", label: "Services" },
  { href: "/", label: "About us" },
  { href: "/", label: "Contact Us" },
];

export const footerExploreLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Location", href: "#locations" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

export const footerCompanyLinks: NavigationLink[] = [
  { label: "About Us", href: "/" },
  { label: "Contact Us", href: "/" },
  { label: "Privacy Policy", href: "/" },
];
