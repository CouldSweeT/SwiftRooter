type ContactMethodProps = {
  label: string;
  Message: string;
  icon: React.ElementType;
  href: string;
  isExternal?: boolean;
};

export function ContactMethod({
  label,
  Message,
  icon: Icon,
  href,
  isExternal,
}: ContactMethodProps) {
  return (
    <div className="flex h-full items-center justify-between gap-4 rounded-xl border border-zinc-200 px-2 py-2">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-800">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>

        <p className="truncate text-sm font-medium text-zinc-900">
          {label}
        </p>
      </div>

      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="shrink-0 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-300 hover:bg-white hover:text-zinc-950"
      >
        {Message}
      </a>
    </div>
  );
}
