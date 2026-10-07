"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./ui";

const links = [
  ["Why PCOS Care", "/how-it-works"],
  ["Tracking", "/demo"],
  ["Fitness", "/fitness"],
  ["Trainers", "/trainers"],
  ["How it works", "/how-it-works"],
  ["Resources", "/resources"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#1F2421]/10 bg-[#F5F1EA]/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="serif text-xl">
          PCOS Care
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm lg:flex"
        >
          {links.map(([l, h]) => (
            <Link key={l} href={h} className="hover:text-[#B5573B]">
              {l}
            </Link>
          ))}
        </nav>
        <Link
          href="/demo"
          className="hidden rounded-full bg-[#1F2421] px-4 py-2 text-sm text-[#F5F1EA] hover:bg-[#B5573B] lg:block"
        >
          Explore the app
        </Link>
        <button
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>
      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-[#1F2421]/10 px-5 py-4 lg:hidden"
        >
          {[...links, ["Explore the app", "/demo"]].map(([l, h]) => (
            <Link
              key={l}
              href={h}
              onClick={() => setOpen(false)}
              className="block py-3 text-lg serif"
            >
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
