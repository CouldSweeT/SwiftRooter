import Link from "next/link";

export function Menu() {
  return (
    <div className="flex gap-3">
        <Link href="/" className="Home">Home</Link>
        <Link href="/" className="Services">Services</Link>
        <Link href="/" className="About-us">About us</Link>
        <Link href="/" className="contact-us">Contact Us</Link>
    </div>
  );
}
