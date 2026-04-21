import Link from "next/link";
import { Container } from "./ui/Container";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { TemplateIcon } from "./ui/icons/TemplateIcon";
import { Logo } from "./ui/icons/Logo";

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <Container className="flex  h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-8" />
        </Link>
        <Menu></Menu>

        <Button
          icon={<TemplateIcon color="white" />}
          href="#"
          className="bg-primary text-white rounded-[20px] px-4 py-2"
        >
          Get Template
        </Button>
      </Container>
    </header>
  );
}
