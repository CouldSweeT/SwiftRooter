import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

type ButtonProps = LinkProps & {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export function Button({ icon, children, href, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 ${className ?? ""}`}
    >
      {icon}
      {children}
    </Link>
  );
}
