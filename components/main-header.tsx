"use client";

import Link from "next/link";
import React from "react";

function MainHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
