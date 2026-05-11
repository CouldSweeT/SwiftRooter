import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main>
      <Container className="py-24 md:py-32">
        <section className="mx-auto flex min-h-[520px] max-w-3xl flex-col items-center justify-center text-center">
          <p className="text-lg font-medium text-zinc-700">
            Oops! Page Not Found
          </p>
          <h1 className="mt-6 text-8xl font-semibold tracking-tight text-zinc-950 sm:text-9xl md:text-[180px] md:leading-none">
            404
          </h1>
          <p className="mt-8 max-w-xl text-base font-medium leading-6 text-zinc-500">
            The page you are trying to access might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Go to Home
          </Link>
        </section>
      </Container>
    </main>
  );
}
