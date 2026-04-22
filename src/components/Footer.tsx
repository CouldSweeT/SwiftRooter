import Link from "next/link";

import {
  footerCompanyLinks,
  footerExploreLinks,
  type NavigationLink,
} from "@/lib/data/navigation";

const socialLinks = [
  { label: "X", href: "#", icon: "x" },
  { label: "Facebook", href: "#", icon: "f" },
  { label: "Instagram", href: "#", icon: "◎" },
  { label: "LinkedIn", href: "#", icon: "in" },
];

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-7xl bg-white px-6 py-10 sm:px-10 md:px-14 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex text-xl font-bold">
              <span className="text-secondary">Swift</span>
              <span className="text-primary">Rooter</span>
            </Link>
            <p className="mt-5 max-w-xs text-base leading-6 text-zinc-600">
              Fast, reliable & professional 24/7 plumbing & rooter services.
            </p>
          </div>

          <FooterLinks title="Explore" links={footerExploreLinks} />
          <FooterLinks title="Company" links={footerCompanyLinks} />

          <div>
            <h2 className="text-lg font-semibold text-zinc-950">Get in Touch</h2>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-xs font-semibold text-white transition hover:bg-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Get in Touch!
            </h2>
            <p className="mt-5 text-base text-zinc-600">
              Have questions or need assistance? We&apos;re here to help!
            </p>

            <form className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">
                Your email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your Email Address"
                className="h-12 min-w-0 flex-1 rounded-md border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-zinc-400 focus:bg-white"
              />
              <button
                type="submit"
                className="h-12 rounded-md bg-primary px-6 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <ContactBlock
              title="Address"
              value="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            />
            <ContactBlock
              title="Address"
              value="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <ContactBlock title="Phone" value="+1 [303] 873-2983" />
            <ContactBlock title="Email" value="hallo.test@gmail.com" />
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-5 text-center text-sm text-zinc-600">
          Build by <span className="font-semibold text-zinc-800">Framer Geeks</span>,
          a part of Saeculum Solutions.
        </div>
      </div>
    </footer>
  );
}

type FooterLinksProps = {
  title: string;
  links: NavigationLink[];
};

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-zinc-950">{title}</h2>
      <nav className="mt-5 grid gap-4" aria-label={title}>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-base font-medium text-zinc-600 transition hover:text-zinc-950"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function ContactBlock({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-zinc-950">{title}</h3>
      <p className="mt-3 max-w-xs text-base leading-6 text-zinc-600">{value}</p>
    </div>
  );
}
