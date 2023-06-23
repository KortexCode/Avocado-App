import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" legacyBehavior prefetch={false}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior prefetch={false}>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
