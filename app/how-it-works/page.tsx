import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "How it works",
  description: "Track, understand, build.",
};

export default function How() {
  const steps = [
    ["01", "Track", "Cycle, symptoms and everyday wellbeing."],
    ["02", "Understand", "See your patterns and progress."],
    [
      "03",
      "Build",
      "Use movement, routines and eventually professional support.",
    ],
  ];
  return (
    <Container className="py-16">
      <h1 className="serif text-5xl md:text-7xl">How it works</h1>
      <div className="mt-12 divide-y divide-[#1F2421]/15 border-y border-[#1F2421]/15">
        {steps.map(([n, t, d]) => (
          <div
            key={n}
            className="grid gap-2 py-8 md:grid-cols-[120px_1fr_2fr] md:items-baseline"
          >
            <span className="serif text-4xl text-[#B5573B]">{n}</span>
            <h2 className="serif text-3xl">{t}</h2>
            <p className="text-[#1F2421]/70">{d}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
