import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="link">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
      </ul>
    </nav>
  );
}
