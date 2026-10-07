import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading, ImagePlaceholder } from "@/components/ui";
import { trainers } from "@/data/trainers";

export const metadata: Metadata = {
  title: "Trainers",
  description: "Demo trainer profiles — support from people, not just screens.",
};

export default function Trainers() {
  return (
    <Container className="py-16">
      <SectionHeading
        eyebrow="Trainers"
        title="Support from people, not just screens."
      >
        Users will eventually connect with personal trainers. These profiles are
        fictional demo data.
      </SectionHeading>
      <div className="mt-12 divide-y divide-[#1F2421]/10 border-y border-[#1F2421]/10">
        {trainers.map((t) => (
          <Link
            key={t.slug}
            href={`/trainers/${t.slug}`}
            className="grid grid-cols-[88px_1fr] items-center gap-5 py-5 hover:bg-white/50 md:grid-cols-[120px_2fr_1fr_auto]"
          >
            <ImagePlaceholder
              label="Photo"
              className="aspect-square rounded-lg"
            />
            <div>
              <p className="serif text-2xl">{t.name}</p>
              <p className="text-sm text-[#1F2421]/60">{t.focus}</p>
            </div>
            <p className="col-span-2 text-sm md:col-span-1">
              {t.years} years · {t.languages.join(" • ")}
            </p>
            <p className="hidden serif text-xl md:block">★ {t.rating}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
