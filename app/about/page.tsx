import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "The thinking behind PCOS Care: one place instead of many fragmented tools.",
};

export default function About() {
  return (
    <Container className="max-w-3xl py-16">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#5E7366]">
        About
      </p>
      <h1 className="serif text-5xl leading-[1.05] md:text-6xl">
        One place, instead of five.
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#1F2421]/80">
        <p>
          PCOS care shouldn’t feel fragmented between spreadsheets, period
          trackers, fitness apps and separate conversations.
        </p>
        <p>
          PCOS Care aims to bring these experiences into one place: tracking,
          understanding patterns, moving with confidence, and eventually
          connecting with professionals.
        </p>
        <p>
          This website is a product concept and showcase. It has no accounts,
          collects no health data, and all content you see is sample content.
        </p>
      </div>
      <h2 className="serif mt-14 text-3xl">What guides the design</h2>
      <ul className="mt-4 divide-y divide-[#1F2421]/10 border-y border-[#1F2421]/10">
        {[
          ["Calm over clutter", "Information should help, not overwhelm."],
          ["Context over numbers", "Patterns matter more than any single day."],
          [
            "Support, not diagnosis",
            "PCOS Care is not a substitute for medical advice.",
          ],
        ].map(([t, d]) => (
          <li key={t} className="grid gap-1 py-4 md:grid-cols-[1fr_2fr]">
            <span className="serif text-xl">{t}</span>
            <span className="text-sm text-[#1F2421]/70">{d}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
