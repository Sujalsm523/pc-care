"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Container,
  Button,
  Badge,
  Modal,
  ImagePlaceholder,
} from "@/components/ui";
import type { Trainer } from "@/data/trainers";

export default function TrainerProfile({ t }: { t: Trainer }) {
  const [open, setOpen] = useState(false);
  return (
    <Container className="grid gap-10 py-16 md:grid-cols-[1fr_1.4fr]">
      <ImagePlaceholder label="Portrait" className="aspect-[4/5] rounded-xl" />
      <div>
        <Badge>Demo profile</Badge>
        <h1 className="serif mt-3 text-5xl">{t.name}</h1>
        <p className="text-[#1F2421]/60">
          {t.focus} · {t.years} years · ★ {t.rating}
        </p>
        <p className="mt-6 leading-relaxed">{t.bio}</p>
        <h2 className="serif mt-8 text-2xl">Example approach</h2>
        <ul className="mt-2 list-disc pl-5 text-sm">
          {t.approach.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <h2 className="serif mt-8 text-2xl">Certifications</h2>
        <ul className="mt-2 list-disc pl-5 text-sm">
          {t.certifications.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <h2 className="serif mt-8 text-2xl">Availability (example)</h2>
        <p className="mt-2 text-sm">{t.availability.join(" · ")}</p>
        <p className="mt-2 text-sm">Languages: {t.languages.join(" • ")}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={() => setOpen(true)}>
            Book a session — Coming soon
          </Button>
          <Link
            href="/trainers/chat"
            className="rounded-full border border-[#1F2421]/25 px-5 py-3 text-sm"
          >
            See demo chat
          </Link>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Coming soon">
        Trainer sessions are coming soon.
      </Modal>
    </Container>
  );
}
