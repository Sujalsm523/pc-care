import type { Metadata } from "next";
import { Container, SectionHeading, Badge } from "@/components/ui";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Sample educational article previews from the PCOS Care concept.",
};

export default function Resources() {
  return (
    <Container className="py-16">
      <SectionHeading eyebrow="Resources" title="Reading, without the noise.">
        Preview articles for demonstration only. Full articles are not published
        yet.
      </SectionHeading>
      <div className="mt-12 divide-y divide-[#1F2421]/10 border-y border-[#1F2421]/10">
        {articles.map((a) => (
          <article
            key={a.title}
            className="grid gap-2 py-6 md:grid-cols-[140px_2fr_1fr] md:items-baseline"
          >
            <Badge>{a.tag}</Badge>
            <div>
              <h2 className="serif text-2xl">{a.title}</h2>
              <p className="mt-1 text-sm text-[#1F2421]/70">{a.summary}</p>
            </div>
            <p className="text-xs text-[#1F2421]/50 md:text-right">
              {a.read} read · Preview
            </p>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-xs text-[#1F2421]/60">
        Disclaimer: this content is general wellness information and sample
        copy. It does not diagnose, treat or replace professional medical
        advice. Speak with a qualified healthcare professional about your
        health.
      </p>
    </Container>
  );
}
