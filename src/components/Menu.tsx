import Link from "next/link";

import { mainNavigationLinks } from "@/lib/data/navigation";

export function Menu() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center gap-6 text-sm font-semibold text-zinc-700"
    >
      {mainNavigationLinks.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="transition-colors hover:text-zinc-950"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
