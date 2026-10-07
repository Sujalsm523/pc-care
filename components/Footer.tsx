import Link from "next/link";
import { Container } from "./ui";

export default function Footer() {
  const cols: Record<string, [string, string][]> = {
    Product: [
      ["Tracking", "/demo"],
      ["Fitness", "/fitness"],
      ["Trainers", "/trainers"],
      ["Nutrition", "/nutrition"],
    ],
    Company: [
      ["About", "/about"],
      ["Resources", "/resources"],
      ["Privacy", "/privacy"],
      ["Terms", "/privacy"],
      ["Contact", "/about"],
    ],
  };
  return (
    <footer className="mt-24 border-t border-[#1F2421]/10 py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <p className="serif text-2xl">PCOS Care</p>
          {Object.entries(cols).map(([h, ls]) => (
            <nav key={h} aria-label={h}>
              <p className="mb-3 text-xs uppercase tracking-widest text-[#1F2421]/50">
                {h}
              </p>
              {ls.map(([l, href]) => (
                <Link
                  key={l}
                  href={href}
                  className="block py-1 text-sm hover:text-[#B5573B]"
                >
                  {l}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-xs text-[#1F2421]/60">
          PCOS Care is a wellness and health-tracking concept. It does not
          diagnose, treat or replace professional medical advice.
        </p>
      </Container>
    </footer>
  );
}
