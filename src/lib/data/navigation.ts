export type NavigationLink = {
  label: string;
  href: string;
};

export const mainNavigationLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About us" },
  { href: "/contact-us", label: "Contact Us" },
];

export const footerExploreLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Location", href: "#locations" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

export const footerCompanyLinks: NavigationLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
