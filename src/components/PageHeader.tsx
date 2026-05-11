import type { ElementType } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  icon: ElementType;
  description?: string;
};

export function PageHeader({
  eyebrow,
  title,
  icon: Icon,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {eyebrow}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-4 max-w-xl text-base leading-6 text-zinc-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
