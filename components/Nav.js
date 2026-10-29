"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#work", label: "Case studies", match: "/work" },
  { href: "/about", label: "About me", match: "/about" },
  { href: "/resume", label: "Resume", match: "/resume" },
];

export default function Nav() {
  const pathname = usePathname() || "/";
  return (
    <nav aria-label="Primary">
      <Link href="/" className="me">Phil Van Ingen</Link>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} aria-current={pathname.startsWith(l.match) ? "page" : undefined}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
