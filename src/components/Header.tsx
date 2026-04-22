import Link from "next/link";
import { Container } from "./ui/Container";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { TemplateIcon } from "./ui/icons/TemplateIcon";
import { Logo } from "./ui/icons/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <Container>
        <div className="flex h-16 items-center justify-between rounded-xl bg-white px-6 shadow-[0_12px_35px_rgba(15,23,42,0.12)] ring-1 ring-zinc-200/60">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="SwiftRooter home"
          >
            <Logo className="h-8 w-auto" />
          </Link>

          <Menu />

          <Button
            icon={<TemplateIcon color="white" />}
            href="#contact"
            className="h-10 rounded-lg bg-primary px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
          >
            Get Template
          </Button>
        </div>
      </Container>
    </header>
  );
}
